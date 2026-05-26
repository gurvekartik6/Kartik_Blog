/**
 * posts-data.js
 * ─────────────────────────────────────────────────────────────
 * Central database for ALL blog posts.
 * No backend / database required — just add objects to POSTS_DB.
 *
 * HOW TO ADD A NEW POST:
 *   1. Copy the template at the bottom of this file.
 *   2. Fill in every field.
 *   3. Save — it instantly appears on blog.html and is readable on post.html.
 *
 * SLUG RULES:
 *   - Lowercase, hyphens only, no spaces: "my-new-post"
 *   - Must be unique across all posts.
 *
 * CONTENT:
 *   - Write full HTML inside the content string.
 *   - Use <h2 id="section-id"> for TOC anchors.
 *   - Use <pre><code> blocks — Copy Code button is auto-added.
 *   - Use <blockquote> for pull quotes.
 * ─────────────────────────────────────────────────────────────
 */

const POSTS_DB = [
  // ── POST 1 (May 21, 2026) ──────────────────────────────────
  {
    slug: "my-love-and-passion-about-coding-since-2018",
    title:
      "My Love and Passion About Coding Since 2018 When I Made RPG Maker Games",
    excerpt:
      "My love and passion about coding since 2018 when I made RPG maker games",
    emoji: "",
    tags: ["Personal", "Coding", "Passion"],
    author: "Kartik Yadav Gurve",
    date: "May 21, 2026",
    readTime: 5,
    featured: true,
    content: `
<h2 id="intro">My Love and Passion About Coding Since 2018</h2>
<p>I made RPG maker games in 2018 and that started my coding journey.</p>
    `,
  },

  // ── POST 2 (May 22, 2026) ──────────────────────────────────
  {
    slug: "the-idea-about-the-blogging-website",
    title: "The Idea About the Blogging Website",
    excerpt: "The idea about the blogging website and why I built it this way",
    emoji: "",
    tags: ["Blogging", "Web Development"],
    author: "Kartik Yadav Gurve",
    date: "May 22, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">The Idea About the Blogging Website</h2>
<p>The idea about the blogging website came from wanting to share my journey.</p>
    `,
  },

  // ── POST 3 (May 23, 2026) ──────────────────────────────────
  {
    slug: "how-i-work-as-instructor-at-sai-ambrosia",
    title: "How I Work as an Instructor at Sai Ambrosia After 10th",
    excerpt: "After 10th how I work as instructor at Sai Ambrosia Education",
    emoji: "",
    tags: ["Teaching", "Power BI"],
    author: "Kartik Yadav Gurve",
    date: "May 23, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">How I Work as an Instructor at Sai Ambrosia After 10th</h2>
<p>After 10th I started teaching Power BI at Sai Ambrosia Education.</p>
    `,
  },

  // ── POST 4 (May 24, 2026) ──────────────────────────────────
  {
    slug: "tech-skills-i-have-learned",
    title: "The Tech Skills I Have Learned",
    excerpt: "The tech skills I have learned over the years",
    emoji: "",
    tags: ["Skills", "Learning"],
    author: "Kartik Yadav Gurve",
    date: "May 24, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">The Tech Skills I Have Learned</h2>
<p>The tech skills I have learned include Android, Kotlin, Firebase, ML, Power BI, Docker and more.</p>
    `,
  },

  // ── POST 5 (May 25, 2026 - YESTERDAY) ───────────────────────
  {
    slug: "connect-java-to-postgresql",
    title: "How to Connect Java Application to PostgreSQL",
    excerpt: "Step-by-step guide to connect Java with PostgreSQL database",
    emoji: "",
    tags: ["Java", "PostgreSQL", "Database", "JDBC"],
    author: "Kartik Yadav Gurve",
    date: "May 25, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">How to Connect Java Application to PostgreSQL</h2>
<p>Connect Java with PostgreSQL using JDBC driver.</p>

<h3>1. Download JDBC Driver</h3>
<p>Download <code>postgresql-42.7.3.jar</code> from <a href="https://jdbc.postgresql.org/download/">jdbc.postgresql.org</a></p>

<h3>2. Project Structure</h3>
<pre><code>MyApp/
├── lib/
│   └── postgresql-42.7.3.jar
└── Main.java</code></pre>

<h3>3. Java Code</h3>
<pre><code>import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/mydb";
        String user = "postgres";
        String password = "yourpass";

        try {
            Class.forName("org.postgresql.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected!");

            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }

            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}</code></pre>

<h3>4. Compile &amp; Run</h3>
<p><strong>Windows:</strong></p>
<pre><code>javac -cp "lib/postgresql-42.7.3.jar;." Main.java
java -cp "lib/postgresql-42.7.3.jar;." Main</code></pre>
<p><strong>Mac/Linux:</strong></p>
<pre><code>javac -cp "lib/postgresql-42.7.3.jar:." Main.java
java -cp "lib/postgresql-42.7.3.jar:." Main</code></pre>

<h3>5. Insert Data</h3>
<pre><code>PreparedStatement pstmt = conn.prepareStatement("INSERT INTO users (name) VALUES (?)");
pstmt.setString(1, "John");
pstmt.executeUpdate();</code></pre>

<h3>6. Common Issues</h3>
<ul>
  <li>PostgreSQL not running → start with <code>sudo systemctl start postgresql</code></li>
  <li>Wrong password → check pg_hba.conf</li>
  <li>Port 5432 blocked → change in postgresql.conf</li>
</ul>
    `,
  },

  // ── POST 6 (May 26, 2026 - TODAY) ──────────────────────────
  {
    slug: "hibernate-orm-simple-guide",
    title: "Hibernate ORM: What It Is and Why You Need It",
    excerpt: "Simple explanation of Hibernate — the Java ORM that saves you from writing SQL queries manually.",
    emoji: "💤",
    tags: ["Java", "Hibernate", "Database"],
    author: "Kartik Yadav Gurve",
    date: "May 26, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2 id="what-is-hibernate">What is Hibernate?</h2>
<p>Hibernate is a framework that lets you work with databases using Java objects instead of writing SQL queries. It automatically converts your Java code into database commands.</p>

<h2 id="why-use">Why Use Hibernate?</h2>
<ul>
  <li><strong>No SQL needed</strong> — Just work with Java objects</li>
  <li><strong>Switch databases easily</strong> — Same code works for PostgreSQL, MySQL, Oracle</li>
  <li><strong>Automatic table creation</strong> — Hibernate creates tables from your Java classes</li>
  <li><strong>Built-in caching</strong> — Faster performance</li>
</ul>

<h2 id="how-it-works">How It Works (Simple Example)</h2>
<p>Instead of writing <code>INSERT INTO users VALUES (...)</code>, you just do:</p>
<pre><code>User user = new User();
user.setName("Kartik");
session.save(user);  // Hibernate handles the SQL</code></pre>

<h2 id="configuration">Getting Configuration</h2>
<p>You need just 3 things to configure Hibernate:</p>
<ol>
  <li><strong>Database URL</strong> — where your database lives</li>
  <li><strong>Username & Password</strong> — to access it</li>
  <li><strong>Dialect</strong> — tells Hibernate which database you're using (PostgreSQL, MySQL, etc.)</li>
</ol>
<p>Put these in <code>hibernate.cfg.xml</code> or <code>application.properties</code> file, and you're ready to go!</p>

<h2 id="summary">Summary</h2>
<p>Hibernate = Less SQL, more Java. Perfect for saving time and keeping your code clean.</p>
    `,
  }
  // ── POST 6 (May 26, 2026 - TODAY) ──────────────────────────
  
];

// ─── Helper functions used by blog.html and post.html ────────

/**
 * Get all posts sorted by date (newest first).
 */
function getAllPosts() {
  return [...POSTS_DB].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single post by slug.
 */
function getPostBySlug(slug) {
  return POSTS_DB.find((p) => p.slug === slug) || null;
}

/**
 * Get posts filtered by tag.
 */
function getPostsByTag(tag) {
  return POSTS_DB.filter((p) => p.tags.includes(tag));
}

/**
 * Get related posts (same tags, different slug).
 */
function getRelatedPosts(slug, limit = 3) {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return POSTS_DB.filter(
    (p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)),
  ).slice(0, limit);
}

/**
 * Get all unique tags across all posts.
 */
function getAllTags() {
  const tagSet = new Set();
  POSTS_DB.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}

/**
 * Search posts by query (title + excerpt + tags).
 */
function searchPosts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return getAllPosts();
  return POSTS_DB.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  );
}

/* ── ADD NEW POST TEMPLATE ────────────────────────────────────
   Copy this block, fill it in, and push to the POSTS_DB array.

  {
    slug:       "your-post-slug",
    title:      "Your Post Title",
    excerpt:    "Your excerpt here.",
    emoji:      "🚀",
    tags:       ["Tag1", "Tag2"],
    author:     "Kartik Yadav Gurve",
    date:       "May 27, 2026",
    readTime:   5,
    featured:   false,
    content: `
      <h2 id="section-1">Section Title</h2>
      <p>Your content here...</p>
    `
  },

──────────────────────────────────────────────────────────── */