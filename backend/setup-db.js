const { Pool } = require('pg');

const DATABASE_URL = 'postgresql://neondb_owner:npg_OwhJeSG4By9K@ep-red-waterfall-ajmwbuez-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require';

const pool = new Pool({ connectionString: DATABASE_URL });

const queries = [
  `CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_slug VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  
  `CREATE TABLE IF NOT EXISTS post_stats (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  
  `CREATE TABLE IF NOT EXISTS post_likes (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45),
    liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(slug, ip_address)
  )`,
  
  `CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  
  `CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`
];

async function setup() {
  try {
    for (const query of queries) {
      await pool.query(query);
      console.log('✓ Table created/verified');
    }
    console.log('\n✅ All tables created successfully!');
    
    // Create admin user
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await pool.query(
      'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING',
      ['admin', hashedPassword]
    );
    console.log('✅ Admin user created (username: admin, password: admin123)');
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

setup();