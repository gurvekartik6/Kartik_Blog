/**
 * server.js — Complete Blog API with PostgreSQL
 */

require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── PostgreSQL Connection ──────────────────────────────────────
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.connect((err) => {
  if (err) {
    console.error('❌ PostgreSQL error:', err.message);
  } else {
    console.log('✅ PostgreSQL connected');
    initDatabase();
  }
});

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '..')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests' },
});
app.use('/api/', limiter);

function getClientIp(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
}

function sanitize(str) {
  return String(str || '').replace(/<[^>]*>/g, '').trim();
}

function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// ─── Database Initialization ──────────────────────────────────────
async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        post_slug VARCHAR(255) NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        body TEXT NOT NULL,
        approved BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS post_stats (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        views INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS post_likes (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) NOT NULL,
        ip_address VARCHAR(45),
        liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(slug, ip_address)
      )
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        read BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create default admin
    const adminCheck = await pool.query('SELECT * FROM admin_users WHERE username = $1', ['admin']);
    if (adminCheck.rows.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await pool.query('INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)', ['admin', hashedPassword]);
      console.log('✅ Default admin created');
    }
    
    console.log('✅ All tables ready');
  } catch (err) {
    console.error('DB init error:', err);
  }
}

// ─── HEALTH CHECK ────────────────────────────────────────────────
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected', uptime: process.uptime() });
  } catch (err) {
    res.json({ status: 'error', db: 'disconnected', uptime: process.uptime() });
  }
});

// ─── CONTACT API ─────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  console.log('Contact endpoint hit:', req.body);
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const result = await pool.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [sanitize(name), sanitize(email).toLowerCase(), sanitize(subject || ''), sanitize(message)]
    );
    
    console.log('Contact saved with ID:', result.rows[0].id);
    res.json({ ok: true, message: 'Message sent!' });
  } catch (e) {
    console.error('Contact error:', e);
    res.status(500).json({ error: e.message });
  }
});

// ─── COMMENTS API ────────────────────────────────────────────────
app.get('/api/comments/:slug', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, body, created_at FROM comments WHERE post_slug = $1 AND approved = true ORDER BY created_at DESC',
      [req.params.slug]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/comments', async (req, res) => {
  try {
    const { postSlug, name, email, body } = req.body;
    if (!postSlug || !name || !email || !body) {
      return res.status(400).json({ error: 'All fields required' });
    }

    await pool.query(
      'INSERT INTO comments (post_slug, name, email, body, approved) VALUES ($1, $2, $3, $4, false)',
      [sanitize(postSlug), sanitize(name), sanitize(email), sanitize(body)]
    );
    
    res.json({ ok: true, message: 'Comment submitted for approval' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── LIKES & VIEWS API ───────────────────────────────────────────
app.get('/api/posts/:slug/stats', async (req, res) => {
  try {
    const { slug } = req.params;
    let result = await pool.query('SELECT * FROM post_stats WHERE slug = $1', [slug]);
    
    if (result.rows.length === 0) {
      result = await pool.query('INSERT INTO post_stats (slug, views, likes) VALUES ($1, 1, 0) RETURNING *', [slug]);
    } else {
      result = await pool.query('UPDATE post_stats SET views = views + 1 WHERE slug = $1 RETURNING *', [slug]);
    }
    
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/posts/:slug/like', async (req, res) => {
  try {
    const { slug } = req.params;
    const clientIp = getClientIp(req);
    
    const existing = await pool.query('SELECT * FROM post_likes WHERE slug = $1 AND ip_address = $2', [slug, clientIp]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Already liked' });
    }
    
    await pool.query('INSERT INTO post_likes (slug, ip_address) VALUES ($1, $2)', [slug, clientIp]);
    const result = await pool.query('UPDATE post_stats SET likes = likes + 1 WHERE slug = $1 RETURNING likes', [slug]);
    
    res.json({ liked: true, likes: result.rows[0].likes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/posts/:slug/like-status', async (req, res) => {
  try {
    const clientIp = getClientIp(req);
    const result = await pool.query('SELECT * FROM post_likes WHERE slug = $1 AND ip_address = $2', [req.params.slug, clientIp]);
    res.json({ liked: result.rows.length > 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── ADMIN API ───────────────────────────────────────────────────
app.get('/api/contacts', requireAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.patch('/api/contacts/:id/read', requireAuth, async (req, res) => {
  try {
    await pool.query('UPDATE contacts SET read = true WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/contacts/:id', requireAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/admin/comments', requireAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM comments ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.patch('/api/admin/comments/:id/approve', requireAuth, async (req, res) => {
  try {
    await pool.query('UPDATE comments SET approved = true WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/comments/:id', requireAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM comments WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/admin/stats', requireAuth, async (req, res) => {
  try {
    const pendingComments = await pool.query("SELECT COUNT(*) FROM comments WHERE approved = false");
    const totalComments = await pool.query("SELECT COUNT(*) FROM comments");
    const totalContacts = await pool.query("SELECT COUNT(*) FROM contacts");
    const unreadContacts = await pool.query("SELECT COUNT(*) FROM contacts WHERE read = false");
    
    res.json({
      pendingComments: parseInt(pendingComments.rows[0].count),
      totalComments: parseInt(totalComments.rows[0].count),
      totalContacts: parseInt(totalContacts.rows[0].count),
      unreadContacts: parseInt(unreadContacts.rows[0].count)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── ADMIN AUTH ───────────────────────────────────────────────────
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM admin_users WHERE username = $1', [username]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isValid = await bcrypt.compare(password, result.rows[0].password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    req.session.userId = result.rows[0].id;
    req.session.username = result.rows[0].username;
    res.json({ ok: true, username: result.rows[0].username });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy();
  res.json({ ok: true });
});

app.get('/api/admin/check-auth', (req, res) => {
  if (req.session.userId) {
    res.json({ authenticated: true, username: req.session.username });
  } else {
    res.json({ authenticated: false });
  }
});

// ─── SERVE ADMIN PAGE ────────────────────────────────────────────
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

// ─── 404 HANDLER ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── START SERVER (for local development) ─────────────────────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Admin dashboard: http://localhost:${PORT}/admin`);
  });
}

// ─── EXPORT FOR VERCEL ────────────────────────────────────────────
module.exports = app;