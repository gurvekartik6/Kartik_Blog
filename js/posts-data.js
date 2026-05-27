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
    excerpt:
      "Simple explanation of Hibernate — the Java ORM that saves you from writing SQL queries manually.",
    emoji: "",
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
  },
  // ── POST 7 (May 26, 2026 - TODAY) ──────────────────────────
  // ── POST 7 (May 27, 2026 - TOMORROW) ──────────────────────────
  {
    slug: "hibernate-orm-mapping-relationships-annotations",
    title: "Hibernate ORM: Mapping Relationships & Annotations (Theory)",
    excerpt:
      "A simple, code-free guide to understanding @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany in Hibernate.",
    emoji: "🔗",
    tags: ["Java", "Hibernate", "Database", "Theory"],
    author: "Kartik Yadav Gurve",
    date: "May 27, 2026",
    readTime: 5,
    featured: true,
    content: `
<h2 id="intro">Understanding Hibernate Relationships</h2>
<p>When you work with databases, tables are connected. In Hibernate, we use simple annotations to tell Java how these connections work, without writing complex SQL foreign keys.</p>

<h2 id="one-to-one">1. @OneToOne</h2>
<p><strong>Theory:</strong> One record in Table A is linked to exactly one record in Table B.</p>
<p><strong>Real-world example:</strong> One <strong>User</strong> has exactly one <strong>Profile</strong> (like a passport or Aadhaar card).</p>
<p><strong>Annotation used:</strong> <code>@OneToOne</code> on the Java object representing the related entity.</p>

<h2 id="one-to-many">2. @OneToMany</h2>
<p><strong>Theory:</strong> One record in Table A can be linked to multiple records in Table B.</p>
<p><strong>Real-world example:</strong> One <strong>Category</strong> (like "Java") can have many <strong>Blog Posts</strong>.</p>
<p><strong>Annotation used:</strong> <code>@OneToMany</code>. This is usually placed on a <strong>List or Set</strong> inside the parent class.</p>

<h2 id="many-to-one">3. @ManyToOne</h2>
<p><strong>Theory:</strong> This is the reverse side of <code>@OneToMany</code>. Many records in Table B belong to one record in Table A.</p>
<p><strong>Real-world example:</strong> Many <strong>Blog Posts</strong> belong to one <strong>Category</strong>.</p>
<p><strong>Annotation used:</strong> <code>@ManyToOne</code>. This is usually placed on the child object inside the many-side class.</p>

<h2 id="many-to-many">4. @ManyToMany</h2>
<p><strong>Theory:</strong> Many records in Table A can be linked to many records in Table B, and vice versa.</p>
<p><strong>Real-world example:</strong> A <strong>Student</strong> can enroll in many <strong>Courses</strong>, and a <strong>Course</strong> can have many <strong>Students</strong>.</p>
<p><strong>Annotation used:</strong> <code>@ManyToMany</code>. Hibernate automatically creates a third "join table" in the database to handle this connection.</p>

<h2 id="mapped-by">The 'mappedBy' Attribute</h2>
<p><strong>Theory:</strong> In a relationship, one side is the "owner" and the other is the "mirror". <code>mappedBy</code> tells Hibernate: <em>"Look at the other class's field to find the link."</em></p>
<p><strong>Simple Rule:</strong> Use <code>mappedBy</code> on the <code>@OneToMany</code> side (the inverse side) to avoid creating an extra table.</p>

<h2 id="fetch-types">Fetch Types: Lazy vs Eager</h2>
<p><strong>Lazy (FetchType.LAZY):</strong> Hibernate only loads the related data when you actually <strong>ask for it</strong> in your code. Good for performance.</p>
<p><strong>Eager (FetchType.EAGER):</strong> Hibernate loads the related data <strong>immediately</strong> with the main object. Easy but can be slow.</p>

<h2 id="summary">Quick Summary</h2>
<ul>
  <li><strong>@OneToOne</strong> → One-to-one (User ↔ Profile)</li>
  <li><strong>@OneToMany</strong> → One parent to many children (Category → Posts)</li>
  <li><strong>@ManyToOne</strong> → Many children to one parent (Posts → Category)</li>
  <li><strong>@ManyToMany</strong> → Many-to-many (Students ↔ Courses)</li>
  <li><strong>mappedBy</strong> → Avoids duplicate columns</li>
  <li><strong>LAZY/EAGER</strong> → Controls when data is loaded</li>
</ul>
<p>No code, just concepts! Hibernate maps your Java thinking directly to database tables.</p>
    `,
  },
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
