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
    title: "Coding Since 2018",
    excerpt: "RPG Maker, GBA games, and never finishing anything.",
    emoji: "",
    tags: ["Personal", "Coding"],
    author: "Kartik Yadav Gurve",
    date: "May 21, 2026",
    readTime: 1,
    featured: true,
    content: `
<p>2018. I was making dumb games in RPG Maker. Playing Poken GBA roms. Breaking things. Fixing nothing.</p>

<p>Never finished a single game.</p>

<p>But that was the start.</p>

<p>Now I code for real. Still breaking things. Still loving it.</p>

<p>— Kartik</p>
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
  {
    slug: "hibernate-orm-mapping-relationships-annotations",
    title: "Hibernate ORM: Mapping Relationships & Annotations (Theory)",
    excerpt:
      "A simple, code-free guide to understanding @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany in Hibernate.",
    emoji: "",
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
  // ── POST 8 (May 28, 2026 - TODAY) ──────────────────────────
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
  // ── POST 9 (May 29, 2026 - TODAY) ──────────────────────────
  {
    slug: "cant-hurt-me-book-takeaways-david-goggins",
    title: "I Finished Can't Hurt Me. My Brain Feels Heavier (In a Good Way).",
    excerpt:
      "David Goggins won't hug you. He'll call you soft. And honestly? That's exactly what I needed. Here's what changed after finishing his book.",
    emoji: "",
    tags: ["Books", "Mindset", "Motivation", "Self-Improvement", "Lessons"],
    author: "Kartik Yadav Gurve",
    date: "May 29, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">No Summary. Just Feelings.</h2>
<p>I just closed <em>Can't Hurt Me</em> by David Goggins. This is not a book summary. You can Google that. This is what happened inside my head while reading it — and after.</p>

<h2 id="cookie-jar">1. The Cookie Jar isn't dumb. It's savage.</h2>
<p>Goggins talks about a "Cookie Jar" — a mental collection of your past hard moments. When life gets hard, you reach in and say: <em>"I survived worse."</em> I tried it during a tough moment this week. It worked. Annoyingly well.</p>

<h2 id="accountability-mirror">2. The Accountability Mirror lied to me first.</h2>
<p>I wrote down my real problems. Not the cute versions. The ugly ones. The mirror didn't clap. It stared back. That was the point.</p>

<h2 id="calloused-mind">3. A calloused mind > a comfortable one.</h2>
<p>Goggins says: <strong>"You stop growing when you stop being uncomfortable."</strong> I used to avoid hard conversations, hard runs, hard truths. Now? I lean in. It still sucks. But I do it anyway.</p>

<h2 id="governing-logs">4. The "Governing Log" concept is underrated.</h2>
<p>In Navy SEAL training, you carry a log as a team. The slowest person sets the pace. Goggins says: <em>"Be the log that makes others work harder."</em> I stopped lowering my standards to fit in.</p>

<h2 id="soul-punch">The soul punch I didn't see coming</h2>
<p>There's a moment in the book where Goggins says: <em>"Most of us are living at 40% of our capability."</em></p>
<p>That broke me a little. Not because it's harsh. Because it's true. I've been coasting. Accepting "good enough." Giving myself excuses wrapped in fancy words like "self-care" and "burnout prevention."</p>
<p>Goggins doesn't deny burnout. He just says: <em>"So what? Keep going."</em></p>

<h2 id="hard-truth">The hard truth I didn't expect</h2>
<p>This book is not inspiring in a cozy way. It's like drinking black coffee at 4 AM in a cold room. It doesn't feel good. But it wakes you the f* up.</p>
<p>Goggins won't be your friend. He'll call you average. And if you have ego like me — that hurts. But that hurt is the starting line.</p>

<h2 id="one-thing">One thing I'll never forget</h2>
<p>Goggins was overweight, scared, and broken. He didn't wake up one day feeling ready. He just started. One bad run. One painful cold shower. One uncomfortable conversation at a time.</p>
<p>He didn't become <em>"the hardest man alive"</em> overnight. He became it by doing what nobody was watching. At 3 AM. On Sundays. When it was raining. When he was tired.</p>
<p>That's the part they don't put on posters.</p>

<h2 id="verdict">Final verdict</h2>
<p>Would I recommend <em>Can't Hurt Me</em>?<br/>
✅ Yes — but only if you're ready to stop lying to yourself.<br/>
❌ No — if you want a gentle, cozy self-help book. This is not that.</p>

<h2 id="next">What's next for me?</h2>
<p>I'm not posting a "10 lessons" thread. I'm just going to live one uncomfortable thing every day. That's the real review.</p>
<p>Stay hard. (Yeah, I said it.)</p>
  `,
  },
  // ── POST 10 (May 30, 2026) ──────────────────────────
  {
    slug: "hibernate-session-factory-session-lifecycle-deep-dive",
    title: "Hibernate Deep Dive: SessionFactory, Session, and Their Lifecycle",
    excerpt:
      "Understanding Hibernate's heart: how SessionFactory is born, how Sessions live and die, and why you should never confuse the two.",
    emoji: "",
    tags: ["Java", "Hibernate", "Database", "Deep Dive", "Performance"],
    author: "Kartik Yadav Gurve",
    date: "May 30, 2026",
    readTime: 6,
    featured: true,
    content: `
<h2 id="the-brain-and-the-hands">The Brain and The Hands</h2>
<p>Think of Hibernate as a restaurant kitchen. <strong>SessionFactory</strong> is the head chef (plans everything, makes rules, expensive to create). <strong>Session</strong> is the line cook (does the actual work, handles one order, then rests).</p>
<p>You have ONE kitchen per restaurant. You have MANY cooks per shift. Same with Hibernate.</p>

<h2 id="sessionfactory">SessionFactory: The Heavyweight King</h2>
<p><strong>What it is:</strong> A factory that creates Session objects. But more importantly — it caches your database schema, your mappings, and your configuration.</p>
<p><strong>How many:</strong> ONE per database. Create it once when your app starts. Destroy it when your app shuts down.</p>
<p><strong>Real-world example:</strong> The blueprint of a car factory. You don't rebuild the blueprint for every car. You build it once, then stamp out cars.</p>
<p><strong>What it holds inside:</strong></p>
<ul>
  <li>Database connection details (URL, username, password)</li>
  <li>Entity mappings (which Java class maps to which table)</li>
  <li>Second-level cache (shared across all sessions)</li>
  <li>Dialect details (PostgreSQL speaks differently than MySQL)</li>
</ul>

<h2 id="session">Session: The Short-Lived Worker</h2>
<p><strong>What it is:</strong> A single unit of work. It represents one conversation between your app and the database.</p>
<p><strong>How many:</strong> Many. Open one per request or per transaction. Close it immediately after work is done.</p>
<p><strong>Real-world example:</strong> A cashier handling one customer's order. They open the conversation, take the order, get the food, close the conversation. Next customer = new cashier session.</p>
<p><strong>What it holds inside:</strong></p>
<ul>
  <li>First-level cache (persistence context — like a notepad for the current work)</li>
  <li>Database connection (acquired from SessionFactory's pool)</li>
  <li>Transaction boundaries (begin, commit, rollback)</li>
</ul>

<h2 id="lifecycle">The Lifecycle: Born → Alive → Dead</h2>

<h3>SessionFactory Lifecycle:</h3>
<pre><code>App starts → Build Configuration → Build SessionFactory → 
SessionFactory stays alive → App shuts down → Close SessionFactory</code></pre>
<p><strong>⚠️ Warning:</strong> Building SessionFactory is EXPENSIVE. It parses mappings, validates schema, and builds internal caches. Never rebuild it per request.</p>

<h3>Session Lifecycle:</h3>
<pre><code>Open Session → Begin Transaction → Do Work (persist/merge/find/remove) → 
Commit/Rollback → Close Session</code></pre>
<p><strong>⚠️ Warning:</strong> An open Session holds a database connection. Leak Sessions = leak connections = app dies.</p>

<h2 id="common-mistakes">The 3 Deadly Sins (And How to Avoid Them)</h2>

<p><strong>Sin #1: Creating SessionFactory per request</strong><br/>
❌ Bad: App creates SessionFactory, does work, closes SessionFactory.<br/>
✅ Good: Create ONE SessionFactory at app startup. Reuse it forever.</p>

<p><strong>Sin #2: Forgetting to close Session</strong><br/>
❌ Bad: Session remains open. Connection never returns to pool.<br/>
✅ Good: Use try-with-resources or close() in finally block.</p>

<p><strong>Sin #3: Doing too much in one Session</strong><br/>
❌ Bad: One Session that loads 10,000 records, updates them, and stays open for 5 minutes.<br/>
✅ Good: Short, focused sessions. Commit often. Close quickly.</p>

<h2 id="best-practices">Best Practices (From Someone Who Broke Things)</h2>

<ul>
  <li><strong>SessionFactory once, Session per operation</strong> — Think of SessionFactory as your app's spine. Session as your breath. Many breaths, one spine.</li>
  <li><strong>Keep sessions short</strong> — Open, work, close. Under 1 second ideally. Under 5 seconds always.</li>
  <li><strong>Never do lazy loading outside a session</strong> — Hibernate's famous LazyInitializationException happens when you close Session then try to access a collection. Load what you need BEFORE closing.</li>
  <li><strong>Use a single Session per HTTP request pattern</strong> — In web apps, open Session when request comes in, close it when response goes out. But keep the work inside transactions small.</li>
</ul>

<h2 id="visual-memory">The Visual Your Brain Will Remember</h2>

<pre><code>┌─────────────────────────────────────┐
│         SESSIONFACTORY              │
│  (Created ONCE at app startup)      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │Session 1│ │Session 2│ │Session 3││
│  │(short)  │ │(short)  │ │(short)  ││
│  └─────────┘ └─────────┘ └─────────┘│
│         (Many sessions)             │
└─────────────────────────────────────┘</code></pre>

<p>SessionFactory = the container.<br/>
Session = the worker inside that container.<br/>
One factory. Many sessions. Short lives. Happy database.</p>

<h2 id="summary">Summary in Simple Terms</h2>

<table style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
    <th style="border: 1px solid #ddd; padding: 8px;">SessionFactory</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Session</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">How many?</td>
    <td style="border: 1px solid #ddd; padding: 8px;">One per database</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Many per app</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Lifetime</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Whole app lifetime</td>
    <td style="border: 1px solid #ddd; padding: 8px;">One unit of work</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Creation cost</td>
    <td style="border: 1px solid #ddd; padding: 8px;">EXPENSIVE (do once)</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Cheap (do many times)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Caches</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Second-level (app-wide)</td>
    <td style="border: 1px solid #ddd; padding: 8px;">First-level (per transaction)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Thread-safe?</td>
    <td style="border: 1px solid #ddd; padding: 8px;">✅ Yes (share anywhere)</td>
    <td style="border: 1px solid #ddd; padding: 8px;">❌ No (one thread at a time)</td>
  </tr>
</table>

<h2 id="final-word">The One Thing to Remember</h2>
<p><strong>SessionFactory = born once, dies when app dies.</strong><br/>
<strong>Session = born per request, dies immediately after.</strong></p>
<p>Mix this up? Your app leaks memory, connections, and eventually dies. Get it right? Hibernate runs smooth like butter.</p>

<h2 id="next-steps">What's Next After This Deep Dive?</h2>
<p>Now you know the container vs the worker. Next step: understanding Hibernate caching (first-level vs second-level) — why your repeated queries sometimes hit the database and sometimes don't. That's a post for another day.</p>
    `,
  },
  // ── POST 11 (May 31, 2026) ──────────────────────────────────
  {
    slug: "hibernate-session-problems-transactions-lazy-loading",
    title:
      "Hibernate Session Problems: Transactions, Lazy Loading, and Session Management",
    excerpt:
      "You know what SessionFactory and Session are. Now learn the 3 biggest problems developers face and how to fix them.",
    emoji: "",
    tags: ["Java", "Hibernate", "Session", "Transactions", "Lazy Loading"],
    author: "Kartik Yadav Gurve",
    date: "May 31, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="recap">Quick Recap from POST 10</h2>
<p><strong>SessionFactory</strong> = born once, dies when app dies.<br/>
<strong>Session</strong> = born per request, dies immediately after.</p>
<p>Now let's talk about what actually BREAKS when you use Sessions wrong.</p>

<h2 id="problem-1">Problem #1: The Forgotten Transaction</h2>
<p><strong>What happens:</strong> You call <code>persist()</code> or <code>merge()</code> but forget to begin/commit transaction. Nothing saves to database.</p>

<pre><code>// ❌ WRONG
Session session = factory.openSession();
session.persist(user);  // Nothing happens!
session.close();

// ✅ CORRECT
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.persist(user);
tx.commit();  // NOW it saves
session.close();</code></pre>

<p><strong>Simple rule:</strong> No transaction = no database change. Always wrap writes in a transaction.</p>

<h2 id="problem-2">Problem #2: LazyInitializationException (The Famous One)</h2>
<p><strong>What happens:</strong> You load a User (without loading their orders). Close Session. Then try to access <code>user.getOrders()</code>. BOOM. Exception.</p>

<pre><code>// ❌ WRONG
Session session = factory.openSession();
User user = session.find(User.class, 1L);
session.close();  // Session closed
user.getOrders().size();  // EXCEPTION! Session is gone

// ✅ FIX #1: Load what you need BEFORE closing
Session session = factory.openSession();
User user = session.find(User.class, 1L);
user.getOrders().size();  // Force load while session is open
session.close();

// ✅ FIX #2: Use JOIN FETCH in query
Query query = session.createQuery(
  "FROM User u JOIN FETCH u.orders WHERE u.id = :id"
);
User user = query.uniqueResult();
session.close();
user.getOrders().size();  // Works! Data already loaded</code></pre>

<p><strong>Simple rule:</strong> If you need child data, load it BEFORE closing the Session.</p>

<h2 id="problem-3">Problem #3: The Open Session in View Pattern (Good or Bad?)</h2>
<p><strong>What it is:</strong> Open Session when HTTP request starts. Close when response ends. Keeps Session alive for your entire webpage.</p>

<p><strong>Why people use it:</strong> Avoids LazyInitializationException. You can access any data in your HTML templates.</p>

<p><strong>Why it's dangerous:</strong> One slow query = database connection held for entire request. One error = connection leaks. 1000 users = 1000 open connections = database dies.</p>

<p><strong>My advice:</strong> Don't use it. Load exactly what you need before closing Session. Be intentional.</p>

<h2 id="best-practices">The 3 Rules I Live By</h2>

<ul>
  <li><strong>Rule 1:</strong> Session per operation. Open → Work → Commit → Close. Under 1 second.</li>
  <li><strong>Rule 2:</strong> Transactions for writes. Always. No exceptions.</li>
  <li><strong>Rule 3:</strong> Load what you need. Use JOIN FETCH. Don't rely on lazy loading outside Session.</li>
</ul>

<h2 id="session-template">The Safe Session Template</h2>

<pre><code>public User getUserById(Long id) {
    try (Session session = factory.openSession()) {
        // JOIN FETCH if you need child data
        Query query = session.createQuery(
            "FROM User u JOIN FETCH u.orders WHERE u.id = :id"
        );
        query.setParameter("id", id);
        return (User) query.uniqueResult();
    } // Session auto-closes here
}</code></pre>

<p>This template: Opens Session, does work, closes Session. No leaks. No exceptions. Clean.</p>

<h2 id="summary">Summary</h2>

<table style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px;">Problem</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Fix</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Data not saving</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Use beginTransaction() + commit()</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">LazyInitializationException</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Load data before closing Session (JOIN FETCH)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Connection leaks</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Close Session immediately after work</td>
  </tr>
</table>

<p>SessionFactory = your app's backbone. Session = your work unit. Treat Session right, and Hibernate will love you. ❤️</p>
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
