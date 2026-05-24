/**
 * seed.js — Seed initial blog posts into MongoDB
 * Run: node seed.js
 */

require('dotenv').config();
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String, slug: String, excerpt: String,
  content: String, coverEmoji: String, tags: [String],
  author: String, readTime: Number, views: Number,
  published: Boolean, publishedAt: Date,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

const posts = [
  {
    title: "Building a Real-Time Maternal Health App: Our HackSpectra Story",
    slug: "hackspectra-maternal-health-app",
    excerpt: "At HackSpectra in MGM Nanded, our team LazyCoder's tackled maternal health monitoring — combining Kotlin, Firebase, and on-device ML to build something truly impactful in 36 hours.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "🤱",
    tags: ["Android", "Kotlin", "Hackathon", "ML"],
    author: "Kartik Yadav Gurve",
    readTime: 12,
    views: 0,
    published: true,
    publishedAt: new Date('2025-05-18'),
  },
  {
    title: "Docker + MongoDB: My Production Setup for MERN Apps",
    slug: "docker-mongodb-mern-production",
    excerpt: "A step-by-step walkthrough of containerizing a MERN application with Docker Compose and MongoDB Atlas on the free tier.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "🐳",
    tags: ["MERN", "Docker", "MongoDB", "DevOps"],
    author: "Kartik Yadav Gurve",
    readTime: 8,
    views: 0,
    published: true,
    publishedAt: new Date('2025-05-12'),
  },
  {
    title: "Krishk Mitra AI — Building Agritech in 24 Hours (Ecothon)",
    slug: "ecothon-krishk-mitra-ai",
    excerpt: "How we built an AI agricultural assistant with crop advisory, weather data, and soil analysis at SIPNA COET's Ecothon.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "🌾",
    tags: ["ML", "Hackathon", "AI", "Agriculture"],
    author: "Kartik Yadav Gurve",
    readTime: 10,
    views: 0,
    published: true,
    publishedAt: new Date('2025-04-28'),
  },
  {
    title: "JanConsent — Civic Tech at Hack for Impact (MIT CSN)",
    slug: "hack-for-impact-janconsent",
    excerpt: "Building a transparent consent and grievance platform for citizens. Our most socially impactful project yet.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "🗳️",
    tags: ["Civic Tech", "Hackathon", "Android", "Social Impact"],
    author: "Kartik Yadav Gurve",
    readTime: 9,
    views: 0,
    published: true,
    publishedAt: new Date('2025-05-02'),
  },
  {
    title: "Power BI Dashboards That Actually Tell a Story",
    slug: "power-bi-storytelling-dashboards",
    excerpt: "Data visualization best practices I learned while teaching at Sai Ambrosia Education — making dashboards that drive decisions.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "📊",
    tags: ["Power BI", "Data Visualization", "Teaching"],
    author: "Kartik Yadav Gurve",
    readTime: 6,
    views: 0,
    published: true,
    publishedAt: new Date('2025-04-10'),
  },
  {
    title: "Wastewater Management System — Our First Hackathon (HackegenX)",
    slug: "hackegenx-wastewater-management",
    excerpt: "Building an IoT-based water quality monitoring system as a team for the very first time. The nerves, the breakthroughs, the all-nighter.",
    content: "<p>Full article content here...</p>",
    coverEmoji: "💧",
    tags: ["IoT", "Hackathon", "Environmental Tech"],
    author: "Kartik Yadav Gurve",
    readTime: 7,
    views: 0,
    published: true,
    publishedAt: new Date('2025-03-05'),
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');

    await Post.deleteMany({});
    console.log('Cleared existing posts...');

    await Post.insertMany(posts);
    console.log(`✅  Seeded ${posts.length} posts successfully!`);

    process.exit(0);
  } catch (err) {
    console.error('❌  Seed error:', err);
    process.exit(1);
  }
}

seed();
