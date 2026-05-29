/**
 * seed.js — Seed initial blog posts into MongoDB
 * Run: node seed.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    excerpt: String,
    content: String,
    coverEmoji: String,
    tags: [String],
    author: String,
    readTime: Number,
    views: Number,
    published: Boolean,
    publishedAt: Date,
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);

const posts = [
  {
    slug: "hibernate-orm-crud-methods-merge-persist-remove",
    title: "Hibernate ORM: The Big 4 Methods (Save, Find, Update, Delete)",
    excerpt:
      "A simple, code-free guide to understanding persist, merge, find, and remove – the 4 superhero methods of Hibernate.",
    emoji: "",
    tags: ["Java", "Hibernate", "Database", "Theory", "CRUD"],
    author: "Kartik Yadav Gurve",
    date: "May 28, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">Your App’s Conversation with the Database</h2>
<p>Imagine Hibernate is a smart assistant. You don't write SQL. You just tell Hibernate: <em>"Save this"</em>, <em>"Find that"</em>, <em>"Update this"</em>, or <em>"Delete that"</em>. Hibernate uses 4 main methods to talk to your database.</p>

<h2 id="persist">1. persist() – “Save a New Record”</h2>
<p><strong>What it does:</strong> Inserts a brand new row into your database table.</p>
<p><strong>Real-world example:</strong> You sign up for a new Instagram account. Hibernate does: <code>INSERT INTO users ...</code></p>
<p><strong>Simple rule:</strong> Use <code>persist()</code> when you are 100% sure the record does NOT exist yet.</p>

<h2 id="find">2. find() – “Find an Existing Record”</h2>
<p><strong>What it does:</strong> Fetches/reads one record from the database using its ID (primary key).</p>
<p><strong>Real-world example:</strong> You open your profile page. Hibernate does: <code>SELECT * FROM users WHERE id = ?</code></p>
<p><strong>Simple rule:</strong> Use <code>find()</code> when you know the ID and want the data immediately.</p>

<h2 id="merge">3. merge() – “Update an Existing Record”</h2>
<p><strong>What it does:</strong> If the record exists → updates it. If not → inserts it (but normally used for updates).</p>
<p><strong>Real-world example:</strong> You change your profile bio. Hibernate does: <code>UPDATE users SET bio = ? WHERE id = ?</code></p>
<p><strong>Simple rule:</strong> Use <code>merge()</code> when you fetched a record, changed some fields, and want to save those changes back.</p>

<h2 id="remove">4. remove() – “Delete a Record”</h2>
<p><strong>What it does:</strong> Permanently deletes a record from the database.</p>
<p><strong>Real-world example:</strong> You delete your old comment on a YouTube video. Hibernate does: <code>DELETE FROM comments WHERE id = ?</code></p>
<p><strong>Simple rule:</strong> Use <code>remove()</code> only after you have fetched the record using <code>find()</code>.</p>

<h2 id="extra">Bonus: getReference()</h2>
<p><strong>What it does:</strong> Like a "placeholder". It doesn't fetch data immediately, but gives you a fake object to set relationships.</p>
<p><strong>Real-world example:</strong> You want to set a comment's author (ID=5) without loading the entire author details from the database. Saves time & memory.</p>

<h2 id="cheatsheet">Quick Cheat Sheet</h2>
<ul>
  <li>➕ <strong>persist()</strong> → Insert new record (CREATE)</li>
  <li>🔍 <strong>find()</strong> → Read existing record (READ)</li>
  <li>✏️ <strong>merge()</strong> → Update existing record (UPDATE)</li>
  <li>🗑️ <strong>remove()</strong> → Delete existing record (DELETE)</li>
  <li>🎭 <strong>getReference()</strong> → Fake object for linking (Performance helper)</li>
</ul>

<h2 id="remember">Remember This (No Code!)</h2>
<p>You don't write INSERT, UPDATE, DELETE, or SELECT anymore. Just think:</p>
<ul>
  <li><strong>New?</strong> → <code>persist()</code></li>
  <li><strong>Need?</strong> → <code>find()</code></li>
  <li><strong>Changed?</strong> → <code>merge()</code></li>
  <li><strong>Delete?</strong> → <code>remove()</code></li>
</ul>
<p>That's the magic of Hibernate. Your Java objects talk. Hibernate translates to SQL behind the scenes.</p>
  `,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    await Post.deleteMany({});
    console.log("Cleared existing posts...");

    await Post.insertMany(posts);
    console.log(`✅  Seeded ${posts.length} posts successfully!`);

    process.exit(0);
  } catch (err) {
    console.error("❌  Seed error:", err);
    process.exit(1);
  }
}

seed();
