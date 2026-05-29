/**
 * server.js — Blog Backend API
 * Kartik Yadav Gurve Personal Blog
 *
 * Stack: Node.js · Express · MongoDB (Mongoose) · CORS
 * Free Tier: MongoDB Atlas M0 (512 MB) + Vercel/Railway/Render hosting
 *
 * Start: node server.js
 * Dev:   nodemon server.js
 */

require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));
app.use(express.json({ limit: '10kb' }));

// Rate limiting — protect free-tier endpoints
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 min
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// ─── MongoDB Connection ──────────────────────────────────────
// Removed deprecated options (useNewUrlParser and useUnifiedTopology)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅  MongoDB connected'))
  .catch(err => { console.error('❌  MongoDB error:', err); process.exit(1); });

// ─── Schemas & Models ────────────────────────────────────────

/* Posts */
const postSchema = new mongoose.Schema({
  title:       { type: String, required: true, trim: true },
  slug:        { type: String, required: true, unique: true, lowercase: true, trim: true },
  excerpt:     { type: String, required: true, maxlength: 300 },
  content:     { type: String, required: true },          // HTML or Markdown
  coverEmoji:  { type: String, default: '📝' },
  tags:        [{ type: String, trim: true }],
  author:      { type: String, default: 'Kartik Yadav Gurve' },
  readTime:    { type: Number, default: 5 },              // minutes
  views:       { type: Number, default: 0 },
  published:   { type: Boolean, default: true },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Remove duplicate index - keep only the explicit index definition
// The 'unique: true' in slug already creates an index, so we don't need postSchema.index({ slug: 1 })
postSchema.index({ publishedAt: -1 });
postSchema.index({ tags: 1 });

const Post = mongoose.model('Post', postSchema);

/* Comments */
const commentSchema = new mongoose.Schema({
  postSlug:  { type: String, required: true, index: true },
  name:      { type: String, required: true, trim: true, maxlength: 80 },
  email:     { type: String, required: true, lowercase: true },
  body:      { type: String, required: true, maxlength: 1000 },
  approved:  { type: Boolean, default: true },    // set false for moderation
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

/* Contact Messages */
const contactSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  email:     { type: String, required: true, lowercase: true },
  subject:   { type: String, trim: true },
  message:   { type: String, required: true, maxlength: 2000 },
  topic:     { type: String, default: '' },
  read:      { type: Boolean, default: false },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

/* Newsletter Subscribers (MongoDB fallback — primary is Mailchimp) */
const subscriberSchema = new mongoose.Schema({
  email:       { type: String, required: true, unique: true, lowercase: true },
  subscribedAt:{ type: Date, default: Date.now },
  active:      { type: Boolean, default: true },
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

/* Page Views (simple analytics) */
const viewSchema = new mongoose.Schema({
  path:      { type: String, required: true },
  referrer:  { type: String, default: '' },
  ua:        { type: String, default: '' },
  viewedAt:  { type: Date, default: Date.now, expires: 60 * 60 * 24 * 90 }, // 90-day TTL
});
const View = mongoose.model('View', viewSchema);

// ─── Helper ──────────────────────────────────────────────────
function sanitize(str) {
  return String(str || '').replace(/<[^>]*>/g, '').trim();
}

// ─── Routes: Posts ───────────────────────────────────────────

// GET /api/posts  — list (no content, for card grid)
app.get('/api/posts', async (req, res) => {
  try {
    const { tag, limit = 20, page = 1 } = req.query;
    const filter = { published: true };
    if (tag) filter.tags = tag;

    const posts = await Post
      .find(filter)
      .sort({ publishedAt: -1 })
      .skip((+page - 1) * +limit)
      .limit(+limit)
      .select('-content');

    const total = await Post.countDocuments(filter);
    res.json({ posts, total, page: +page, pages: Math.ceil(total / +limit) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/posts/:slug  — full post + increment views
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug, published: true },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/posts/:slug/related  — same tags, exclude self
app.get('/api/posts/:slug/related', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.json([]);
    const related = await Post
      .find({ published: true, tags: { $in: post.tags }, _id: { $ne: post._id } })
      .limit(3)
      .select('-content');
    res.json(related);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/posts  — create (admin only via API_SECRET header)
app.post('/api/posts', requireSecret, async (req, res) => {
  try {
    const post = new Post({
      title:      sanitize(req.body.title),
      slug:       sanitize(req.body.slug),
      excerpt:    sanitize(req.body.excerpt),
      content:    req.body.content,             // allow HTML
      coverEmoji: sanitize(req.body.coverEmoji) || '📝',
      tags:       (req.body.tags || []).map(sanitize),
      readTime:   +req.body.readTime || 5,
      published:  req.body.published !== false,
    });
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// PATCH /api/posts/:slug  — update (admin)
app.patch('/api/posts/:slug', requireSecret, async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// DELETE /api/posts/:slug (admin)
app.delete('/api/posts/:slug', requireSecret, async (req, res) => {
  try {
    await Post.findOneAndDelete({ slug: req.params.slug });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── Routes: Comments ────────────────────────────────────────

// GET /api/comments/:slug
app.get('/api/comments/:slug', async (req, res) => {
  try {
    const comments = await Comment
      .find({ postSlug: req.params.slug, approved: true })
      .sort({ createdAt: -1 })
      .select('-email');            // don't expose emails publicly
    res.json(comments);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/comments
app.post('/api/comments', async (req, res) => {
  try {
    const { postSlug, name, email, body } = req.body;
    if (!postSlug || !name || !email || !body)
      return res.status(400).json({ error: 'All fields required.' });

    const comment = new Comment({
      postSlug: sanitize(postSlug),
      name:     sanitize(name).slice(0, 80),
      email:    sanitize(email).toLowerCase(),
      body:     sanitize(body).slice(0, 1000),
    });
    await comment.save();
    res.status(201).json({ ok: true, message: 'Comment submitted!' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// ─── Routes: Contact ─────────────────────────────────────────

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, topic } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: 'Name, email and message are required.' });

    const contact = new Contact({
      name:    sanitize(name),
      email:   sanitize(email).toLowerCase(),
      subject: sanitize(subject),
      message: sanitize(message).slice(0, 2000),
      topic:   sanitize(topic),
    });
    await contact.save();
    res.status(201).json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// GET /api/contacts (admin — view all messages)
app.get('/api/contacts', requireSecret, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── Routes: Subscribers (MongoDB fallback) ──────────────────

// POST /api/subscribe  — used if Mailchimp not configured
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ error: 'Valid email required.' });

    await Subscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      { active: true },
      { upsert: true }
    );
    res.json({ ok: true, message: "You're subscribed!" });
  } catch (e) {
    if (e.code === 11000) {
      return res.json({ ok: true, message: 'Already subscribed!' });
    }
    res.status(500).json({ error: e.message });
  }
});

// ─── Routes: Analytics ───────────────────────────────────────

// POST /api/view  — lightweight page-view ping
app.post('/api/view', async (req, res) => {
  try {
    await View.create({
      path:    sanitize(req.body.path || '/'),
      referrer:sanitize(req.body.referrer || ''),
      ua:      String(req.headers['user-agent'] || '').slice(0, 200),
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });  // silent fail for analytics
  }
});

// GET /api/stats  — simple blog stats (public)
app.get('/api/stats', async (req, res) => {
  try {
    const [posts, comments, subscribers] = await Promise.all([
      Post.countDocuments({ published: true }),
      Comment.countDocuments({ approved: true }),
      Subscriber.countDocuments({ active: true }),
    ]);
    res.json({ posts, comments, subscribers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── Health Check ────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    uptime: process.uptime(),
  });
});

// ─── Admin Secret Middleware ─────────────────────────────────
function requireSecret(req, res, next) {
  const secret = req.headers['x-api-secret'];
  if (!secret || secret !== process.env.API_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// ─── 404 ─────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// ─── Start ───────────────────────────────────────────────────
app.listen(PORT, () =>
  console.log(`🚀  Blog API running → http://localhost:${PORT}`)
);