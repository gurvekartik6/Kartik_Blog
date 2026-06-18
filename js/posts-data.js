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
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Personal", "Coding"],
    author: "Kartik Yadav Gurve",
    date: "May 21, 2026",
    readTime: 1,
    featured: true,
    content: `
<p>2018. I was making dumb games in RPG Maker. Playing Pokemon GBA roms. Breaking things. Fixing nothing.</p>

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
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
    tags: ["Teaching", "Power BI"],
    author: "Kartik Yadav Gurve",
    date: "May 23, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">How I Work as an Instructor at Sai Ambrosia After 10th</h2>
<p>After 10th I started teaching  at Sai Ambrosia Education.</p>
    `,
  },

  // ── POST 4 (May 24, 2026) ──────────────────────────────────
  {
    slug: "tech-skills-i-have-learned",
    title: "The Tech Skills I Have Learned",
    excerpt: "The tech skills I have learned over the years",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
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

  // ── POST 5 (May 25, 2026) ───────────────────────
  {
    slug: "connect-java-to-postgresql",
    title: "How to Connect Java Application to PostgreSQL",
    excerpt: "Step-by-step guide to connect Java with PostgreSQL database",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
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

  // ── POST 6 (May 26, 2026) ──────────────────────────
  {
    slug: "hibernate-orm-simple-guide",
    title: "Hibernate ORM: What It Is and Why You Need It",
    excerpt:
      "Simple explanation of Hibernate — the Java ORM that saves you from writing SQL queries manually.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
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
  // ── POST 7 (May 27, 2026) ──────────────────────────
  {
    slug: "hibernate-orm-mapping-relationships-annotations",
    title: "Hibernate ORM: Mapping Relationships & Annotations (Theory)",
    excerpt:
      "A simple, code-free guide to understanding @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany in Hibernate.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
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
  // ── POST 8 (May 28, 2026) ──────────────────────────
  {
    slug: "hibernate-orm-crud-methods-merge-persist-remove",
    title: "Hibernate ORM: The Big 4 Methods (Save, Find, Update, Delete)",
    excerpt:
      "A simple, code-free guide to understanding persist, merge, find, and remove – the 4 superhero methods of Hibernate.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfa3a995?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Database", "Theory", "CRUD"],
    author: "Kartik Yadav Gurve",
    date: "May 28, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="intro">Your App's Conversation with the Database</h2>
<p>Imagine Hibernate is a smart assistant. You don't write SQL. You just tell Hibernate: <em>"Save this"</em>, <em>"Find that"</em>, <em>"Update this"</em>, or <em>"Delete that"</em>. Hibernate uses 4 main methods to talk to your database.</p>

<h2 id="persist">1. persist() – "Save a New Record"</h2>
<p><strong>What it does:</strong> Inserts a brand new row into your database table.</p>
<p><strong>Real-world example:</strong> You sign up for a new Instagram account. Hibernate does: <code>INSERT INTO users ...</code></p>
<p><strong>Simple rule:</strong> Use <code>persist()</code> when you are 100% sure the record does NOT exist yet.</p>

<h2 id="find">2. find() – "Find an Existing Record"</h2>
<p><strong>What it does:</strong> Fetches/reads one record from the database using its ID (primary key).</p>
<p><strong>Real-world example:</strong> You open your profile page. Hibernate does: <code>SELECT * FROM users WHERE id = ?</code></p>
<p><strong>Simple rule:</strong> Use <code>find()</code> when you know the ID and want the data immediately.</p>

<h2 id="merge">3. merge() – "Update an Existing Record"</h2>
<p><strong>What it does:</strong> If the record exists → updates it. If not → inserts it (but normally used for updates).</p>
<p><strong>Real-world example:</strong> You change your profile bio. Hibernate does: <code>UPDATE users SET bio = ? WHERE id = ?</code></p>
<p><strong>Simple rule:</strong> Use <code>merge()</code> when you fetched a record, changed some fields, and want to save those changes back.</p>

<h2 id="remove">4. remove() – "Delete a Record"</h2>
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
  // ── POST 9 (May 29, 2026) ──────────────────────────
  {
    slug: "cant-hurt-me-book-takeaways-david-goggins",
    title: "I Finished Can't Hurt Me. My Brain Feels Heavier (In a Good Way).",
    excerpt:
      "David Goggins won't hug you. He'll call you soft. And honestly? That's exactly what I needed. Here's what changed after finishing his book.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=400&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
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
  // ── POST 12 (June 1, 2026) ──────────────────────────────────
  {
    slug: "hibernate-n-plus-1-problem-and-first-level-cache",
    title:
      "2 Hibernate Concepts That Save Your Database: N+1 Problem & First-Level Cache",
    excerpt:
      "Why 10 users become 11 queries (and how to fix it). Plus: the cache you already have but didn't know about.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Performance", "Caching"],
    author: "Kartik Yadav Gurve",
    date: "June 1, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="concept-1">Concept 1: First-Level Cache (The Free One)</h2>

<p><strong>What it is:</strong> Every Hibernate Session has a built-in cache. You don't turn it on. It's just there. Always.</p>

<p><strong>What it does:</strong> Remembers every object you fetch during a session. Ask for the same object twice? Hibernate gives you the cached copy — no second database query.</p>

<h3>Example:</h3>
<pre><code>Session session = factory.openSession();

// First call → Goes to database
User user1 = session.find(User.class, 1L);

// Second call → No database hit! Returns cached copy
User user2 = session.find(User.class, 1L);

session.close();</code></pre>

<p><strong>Result:</strong> One SQL query. Not two. First-level cache saved you.</p>

<p><strong>How long does it live?</strong> Until the session dies. Close the session = cache clears.</p>

<p><strong>Simple rule:</strong> Same session, same ID = one query only.</p>

<hr />

<h2 id="concept-2">Concept 2: The N+1 Problem (The Silent Killer)</h2>

<p><strong>What it is:</strong> You load N parent objects. Hibernate makes N extra queries to load their children. Total = N+1 queries. Your database cries.</p>

<h3>The Problem — Visual Example:</h3>

<p>You have <strong>10 Users</strong>. Each User has <strong>Orders</strong>. You write:</p>

<pre><code>List&lt;User&gt; users = session.createQuery("FROM User").list();

for (User user : users) {
    System.out.println(user.getOrders().size()); // ← BOOM
}</code></pre>

<p><strong>What Hibernate does behind your back:</strong></p>

<pre><code>Query 1: SELECT * FROM users           (gets 10 users)
Query 2: SELECT * FROM orders WHERE user_id = 1
Query 3: SELECT * FROM orders WHERE user_id = 2
Query 4: SELECT * FROM orders WHERE user_id = 3
...
Query 11: SELECT * FROM orders WHERE user_id = 10

TOTAL = 11 QUERIES for 10 users! That's N+1</code></pre>

<h3>The Fix — JOIN FETCH (One Query to Rule Them All)</h3>

<pre><code>// ✅ FIXED: Load everything in ONE query
List&lt;User&gt; users = session.createQuery(
    "FROM User u JOIN FETCH u.orders"
).list();

// Now user.getOrders() is already loaded. No extra queries!</code></pre>

<p><strong>Result:</strong> One SQL query with a JOIN. Not 11 queries. Database says thank you.</p>

<p><strong>When does N+1 happen?</strong> Whenever you access a lazy-loaded collection after loading the parent — and forget to use JOIN FETCH.</p>

<p><strong>How to spot it?</strong> Enable Hibernate SQL logging:</p>
<pre><code># In application.properties
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true</code></pre>
<p>See 50 queries for 10 rows? That's N+1.</p>

<hr />

<h2 id="quick-comparison">Quick Comparison</h2>

<table style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px;">Concept</th>
    <th style="border: 1px solid #ddd; padding: 8px;">What It Does</th>
    <th style="border: 1px solid #ddd; padding: 8px;">You Need To...</th>
    </tr>
    <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">First-Level Cache</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Prevents duplicate queries in same session</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Nothing — it's automatic!</td>
    </tr>
    <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">N+1 Problem</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Causes 1+N queries instead of 1</td>
    <td style="border: 1px solid #ddd; padding: 8px;">Use JOIN FETCH or @EntityGraph</td>
    </tr>
</table>

<hr />

<h2 id="summary">Summary — What to Remember</h2>

<ul>
  <li>✅ <strong>First-level cache</strong> = free. Same session + same ID = no duplicate query.</li>
  <li>⚠️ <strong>N+1 problem</strong> = expensive. Looping through collections = hidden queries.</li>
  <li>🔧 <strong>Fix N+1</strong> = <code>JOIN FETCH</code> in your HQL query. One query, all data.</li>
</ul>

<pre><code>// Your new best friend
"FROM User u JOIN FETCH u.orders WHERE u.id = :id"</code></pre>

<hr />

<p><strong>More on Hibernate:</strong> Second-level cache (shared across sessions), batch fetching (@BatchSize), and the difference between Hibernate and JPA. But for now — fix N+1, love your first-level cache, and your app will fly 🚀</p>
    `,
  },
  // ── POST 13 (June 2, 2026) ──────────────────────────────────
  {
    slug: "hibernate-second-level-cache-batch-fetching-jpa-vs-hibernate",
    title:
      "3 More Hibernate Concepts: Second-Level Cache, Batch Fetching & JPA vs Hibernate",
    excerpt:
      "Cache across sessions, fetch collections in batches, and understand JPA vs Hibernate.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "JPA", "Caching", "Performance"],
    author: "Kartik Yadav Gurve",
    date: "June 2, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2>Concept 1: Second-Level Cache</h2>
<p><strong>First-Level Cache</strong> = per Session. Close Session = cache gone.</p>
<p><strong>Second-Level Cache</strong> = shared across Sessions.</p>
<p><strong>Example:</strong> User A loads Product #1 → database hit. User B loads same Product #1 → from cache, no database hit.</p>
<p><strong>Best for:</strong> Data that rarely changes (products, categories, users).</p>
<p><strong>Not for:</strong> Frequently changing data (orders, comments).</p>

<h2>Concept 2: Batch Fetching</h2>
<p><strong>Problem:</strong> JOIN FETCH loads ALL child records at once. If a user has 10,000 orders → memory crash.</p>
<p><strong>Solution:</strong> @BatchSize(size=20) — fetches 20 orders at a time.</p>
<p><strong>Result:</strong> 100 orders = 5 queries instead of 100. Saves memory, still fixes N+1.</p>
<p><strong>When to use:</strong> Large collections (1000+ items). Use JOIN FETCH for small collections.</p>

<h2>Concept 3: JPA vs Hibernate</h2>
<p><strong>JPA</strong> = A standard/blueprint (rules everyone agrees on).</p>
<p><strong>Hibernate</strong> = A tool that follows JPA rules (plus extra features).</p>
<p><strong>Analogy:</strong> JPA is USB-C standard. Hibernate is a USB-C cable.</p>
<p><strong>JPA code:</strong> EntityManager, @Entity, @Id — works with any JPA provider.</p>
<p><strong>Hibernate code:</strong> Session, session.get(), custom caching — only works with Hibernate.</p>
<p><strong>Best practice:</strong> Write JPA code, run on Hibernate. Portable + powerful.</p>

<h2>Summary</h2>
<ul>
<li>Second-Level Cache = share data across users → fewer database hits</li>
<li>Batch Fetching = load large collections in groups → saves memory</li>
<li>JPA = standard, Hibernate = implementation → use both</li>
</ul>

<p><strong>More on Hibernate:</strong> Optimistic vs Pessimistic Locking, Inheritance mapping strategies (Single Table, Joined, Table Per Class), and Embeddables (@Embedded, @ElementCollection). Coming next.</p>
    `,
  },
  // ── POST 14 (June 3, 2026) ──────────────────────────────────
  {
    slug: "git-basics-every-developer-should-know",
    title: "Git Basics: 5 Commands Every Developer Must Know",
    excerpt:
      "No more git panic. Just clone, commit, push, pull, and branch — explained simply.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
    tags: ["Git", "GitHub", "Version Control", "Beginner"],
    author: "Kartik Yadav Gurve",
    date: "June 3, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2>Command 1: git clone</h2>
<p><strong>What it does:</strong> Download a repository from GitHub to your computer.</p>
<pre><code>git clone https://github.com/username/repo-name.git</code></pre>

<h2>Command 2: git add + git commit</h2>
<p><strong>What it does:</strong> Save your changes locally.</p>
<pre><code>git add .                    # Stage all changes
git commit -m "Your message" # Save with description</code></pre>

<h2>Command 3: git push</h2>
<p><strong>What it does:</strong> Upload your commits to GitHub.</p>
<pre><code>git push origin main</code></pre>

<h2>Command 4: git pull</h2>
<p><strong>What it does:</strong> Download latest changes from GitHub.</p>
<pre><code>git pull origin main</code></pre>

<h2>Command 5: git branch</h2>
<p><strong>What it does:</strong> Create and switch between branches.</p>
<pre><code>git branch feature-xyz     # Create branch
git checkout feature-xyz   # Switch to branch
git checkout -b new-branch # Create + switch in one command</code></pre>

<h2>Quick Workflow</h2>
<pre><code>git add .
git commit -m "Updated code"
git pull origin main       # Get latest changes first
git push origin main       # Then push yours</code></pre>

<h2>Summary</h2>
<ul>
<li>clone = download repo</li>
<li>add + commit = save locally</li>
<li>push = upload to GitHub</li>
<li>pull = download updates</li>
<li>branch = work on features separately</li>
</ul>

<p><strong>More on Git:</strong> Merge conflicts, rebase vs merge, and undoing commits. Coming next.</p>
    `,
  },
  // ── POST 15 (June 4, 2026) ──────────────────────────────────
  {
    slug: "docker-basics-every-developer-needs",
    title: "Docker Basics: 5 Commands That Will Change How You Develop",
    excerpt:
      "Stop saying 'it works on my machine' — containerize your apps with these essential Docker commands.",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800&h=400&fit=crop",
    tags: ["Docker", "DevOps", "Containers"],
    author: "Kartik Yadav Gurve",
    date: "June 4, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2 id="what-is-docker">What is Docker?</h2>
<p>Docker packages your app + all its dependencies into a container. That container runs anywhere — your laptop, a server, the cloud. No more "works on my machine" problems.</p>

<h2 id="command-1">1. docker pull</h2>
<p><strong>Download an image from Docker Hub</strong></p>
<pre><code>docker pull node:18
docker pull postgres:15
docker pull nginx</code></pre>

<h2 id="command-2">2. docker run</h2>
<p><strong>Start a container from an image</strong></p>
<pre><code>docker run -d -p 3000:3000 node:18
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecret postgres:15</code></pre>
<p><code>-d</code> = run in background, <code>-p</code> = map ports, <code>-e</code> = set environment variables</p>

<h2 id="command-3">3. docker ps</h2>
<p><strong>See running containers</strong></p>
<pre><code>docker ps
docker ps -a  # See all containers (including stopped)</code></pre>

<h2 id="command-4">4. docker stop / start</h2>
<p><strong>Stop or start a container</strong></p>
<pre><code>docker stop container_name_or_id
docker start container_name_or_id</code></pre>

<h2 id="command-5">5. docker exec</h2>
<p><strong>Run commands inside a running container</strong></p>
<pre><code>docker exec -it container_name bash
docker exec container_name node app.js</code></pre>

<h2 id="dockerfile">Bonus: Create Your Own Image (Dockerfile)</h2>
<pre><code>FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
<p>Build it: <code>docker build -t my-app .</code></p>
<p>Run it: <code>docker run -p 3000:3000 my-app</code></p>

<h2 id="summary">Quick Reference</h2>
<ul>
<li><code>docker pull</code> → download image</li>
<li><code>docker run</code> → start container</li>
<li><code>docker ps</code> → list containers</li>
<li><code>docker stop</code> → stop container</li>
<li><code>docker exec</code> → run command inside</li>
<li><code>docker build</code> → create your own image</li>
</ul>
<p>Docker changes everything. Start with these 5 commands and you'll never fear containers again 🐳</p>
    `,
  },
  // ── POST 16 (June 5, 2026) ──────────────────────────────────
  {
    slug: "rest-api-vs-graphql-simple-comparison",
    title: "REST API vs GraphQL: Which One Should You Learn First?",
    excerpt:
      "Simple comparison with real examples — no complex theory, just practical advice.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["API", "GraphQL", "REST", "Backend"],
    author: "Kartik Yadav Gurve",
    date: "June 5, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2 id="the-problem">The Problem Both Solve</h2>
<p>You have data in a database. Your frontend (React, Android, iOS) needs that data. How do they talk? Through an API.</p>
<p>REST and GraphQL are two different ways to build that conversation.</p>

<h2 id="rest-explained">REST: One Endpoint = One Resource</h2>
<p><strong>Example:</strong> A blog app needs posts and users.</p>
<pre><code>GET /posts        → returns ALL posts
GET /posts/1      → returns post #1
GET /users/1      → returns user #1
GET /posts/1/comments → returns comments for post #1</code></pre>
<p><strong>Problem:</strong> If a page needs post + author + comments, you make 3 separate requests.</p>

<h2 id="graphql-explained">GraphQL: One Endpoint = Ask For Exactly What You Need</h2>
<p><strong>Example:</strong> Same blog app, one request:</p>
<pre><code>query {
  post(id: 1) {
    title
    content
    author { name }
    comments { body }
  }
}</code></pre>
<p><strong>Result:</strong> One request returns post + author + comments. No over-fetching, no under-fetching.</p>

<h2 id="comparison">Quick Comparison</h2>
<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Feature</th>
    <th style="border: 1px solid #ddd; padding: 10px;">REST</th>
    <th style="border: 1px solid #ddd; padding: 10px;">GraphQL</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Learning Curve</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Easy → start here</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Steeper</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Number of endpoints</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Many (one per resource)</td>
    <td style="border: 1px solid #ddd; padding: 10px;">One</td>
   </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Over-fetching</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Common</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Never (ask for exactly what you need)</td>
   </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Caching</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Easy (HTTP cache)</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Harder</td>
   </tr>
</table>

<h2 id="which-to-learn-first">Which Should You Learn First?</h2>

<p><strong>Learn REST first. Always.</strong></p>
<ul>
  <li>90% of APIs are still REST</li>
  <li>REST teaches you HTTP fundamentals (GET, POST, PUT, DELETE)</li>
  <li>GraphQL builds on REST concepts</li>
</ul>

<p><strong>Learn GraphQL when:</strong></p>
<ul>
  <li>Your app has many different clients (web, mobile, desktop)</li>
  <li>Your REST API has become a mess of custom endpoints</li>
  <li>You're tired of over-fetching data</li>
  <li>You're building a dashboard with complex data needs</li>
</ul>

<h2 id="real-world-example">Real Example from My Projects</h2>

<p><strong>Small project (Portfolio + Blog):</strong> REST API. Simple, works, no need for GraphQL complexity.</p>

<p><strong>Big project (Hackathon dashboard):</strong> GraphQL. Different pages needed different data shapes. One endpoint, everyone happy.</p>

<h2 id="tools">Tools to Learn</h2>

<p><strong>For REST:</strong></p>
<ul>
  <li>Express.js (Node), Spring Boot (Java), Django (Python)</li>
  <li>Postman or Insomnia for testing</li>
</ul>

<p><strong>For GraphQL:</strong></p>
<ul>
  <li>Apollo Server, GraphQL Yoga</li>
  <li>Apollo Client (frontend)</li>
  <li>GraphQL Playground (test queries)</li>
</ul>

<h2 id="summary">Summary</h2>
<p>REST = Simple, everywhere, learn it first.<br/>
GraphQL = Powerful, flexible, learn it second.</p>
<p>Both are valuable. Both have jobs. Know both = unstoppable.</p>
<p><strong>Start with REST today. Build a simple API. Then try GraphQL.</strong> 🚀</p>
    `,
  },
    // ── POST 17 (June 6, 2026) ──────────────────────────────────
  {
    slug: "top-5-vs-code-extensions-for-developers",
    title: "Top 5 VS Code Extensions That Make Coding 10x Easier",
    excerpt: "My favorite VS Code extensions — no bloat, just tools I use every single day.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    tags: ["VS Code", "Tools", "Productivity"],
    author: "Kartik Yadav Gurve",
    date: "June 6, 2026",
    readTime: 2,
    featured: true,
    content: `
<h2 id="why-extensions">Why These 5?</h2>
<p>I tested 50+ extensions. These 5 stayed installed. No bloat. Just productivity.</p>

<h2 id="1-prettier">1. Prettier — Format Everything</h2>
<p>Stop fighting over code formatting. Prettier does it automatically.</p>
<pre><code>// Before
const x=   "hello";
// After save
const x = "hello";</code></pre>
<p><strong>Setting:</strong> Enable "Format on Save"</p>

<h2 id="2-gitlens">2. GitLens — See Who Wrote What</h2>
<p>Hover over any line of code → See who wrote it and when.</p>
<p><strong>Best for:</strong> Understanding old code or finding who broke something.</p>

<h2 id="3-thunder-client">3. Thunder Client — Test APIs Without Postman</h2>
<p>Postman inside VS Code. Test GET, POST, PUT requests instantly.</p>
<p><strong>Why:</strong> No switching apps. Stay in your editor.</p>

<h2 id="4-live-server">4. Live Server — Instant HTML Reload</h2>
<p>Right-click HTML file → Open with Live Server. Save → Browser auto-refreshes.</p>
<p><strong>Best for:</strong> HTML/CSS/JavaScript prototyping.</p>

<h2 id="5-error-lens">5. Error Lens — See Errors Inline</h2>
<p>Errors appear right next to your code, not just in problems tab.</p>
<pre><code>console.log(x)  // ❌ 'x' is not defined (right here!)</code></pre>

<h2 id="bonus">Bonus: One Dark Pro Theme</h2>
<p>Not functional, but looks amazing. The most installed theme for a reason.</p>

<h2 id="how-to-install">How to Install All 5</h2>
<p>Press <code>Ctrl+Shift+X</code> (Windows) or <code>Cmd+Shift+X</code> (Mac). Search each name. Click Install.</p>
<p><strong>Total time:</strong> 2 minutes. <strong>Productivity boost:</strong> Huge.</p>

<h2 id="my-rule">My Rule</h2>
<p>If I don't use an extension weekly, I uninstall it. These 5 survived. Try them today.</p>
    `,
  },
    // ── POST 18 (June 7, 2026) ──────────────────────────────────
  {
    slug: "spring-vs-spring-boot-what-is-difference",
    title: "Spring vs Spring Boot: What's the Difference?",
    excerpt: "Spring is the framework. Spring Boot is the shortcut. Learn the difference in 2 minutes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring", "Spring Boot", "Java", "Framework"],
    author: "Kartik Yadav Gurve",
    date: "June 7, 2026",
    readTime: 2,
    featured: true,
    content: `
<h2 id="the-confusion">The Confusion</h2>
<p>Spring? Spring Boot? Same name. Different things. Most beginners get confused.</p>
<p>Here's the simple truth: <strong>Spring Boot is Spring, but pre-configured.</strong></p>

<h2 id="what-is-spring">What is Spring?</h2>
<p>Spring is a Java framework for building enterprise apps. It handles:</p>
<ul>
  <li>Database connections</li>
  <li>Security</li>
  <li>REST APIs</li>
  <li>Dependency injection</li>
</ul>
<p><strong>Problem:</strong> Setup takes time. Lots of configuration files. Lots of XML (old days).</p>

<h2 id="what-is-spring-boot">What is Spring Boot?</h2>
<p>Spring Boot is Spring + Auto-configuration. It guesses what you need and sets it up.</p>
<p><strong>Example:</strong> You add a database dependency → Spring Boot automatically configures the connection.</p>

<h2 id="comparison">Quick Comparison</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Feature</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Spring</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Spring Boot</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Setup Time</td>
    <td style="border: 1px solid #ddd; padding: 10px;">30+ minutes</td>
    <td style="border: 1px solid #ddd; padding: 10px;">2 minutes</td>
   </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Configuration</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Manual (lots of code)</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Auto (minimal code)</td>
   </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Server</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Need external Tomcat</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Built-in Tomcat</td>
   </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">When to Use</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Legacy projects, full control</td>
    <td style="border: 1px solid #ddd; padding: 10px;">New projects (90% of cases)</td>
   </tr>
</table>

<h2 id="code-example">Code Example: Same REST API</h2>

<p><strong>Spring (without Boot):</strong> 5+ files, XML config, manual server setup</p>

<p><strong>Spring Boot:</strong> Just 1 file!</p>

<pre><code>@SpringBootApplication
@RestController
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}</code></pre>

<p>Run it. Server starts. API works. That's it!</p>

<h2 id="simple-rule">Simple Rule to Remember</h2>

<ul>
  <li><strong>Spring</strong> = Framework (the engine)</li>
  <li><strong>Spring Boot</strong> = Framework + Auto-configuration (engine + self-driving)</li>
</ul>

<h2 id="which-to-learn-first">Which to Learn First?</h2>

<p><strong>Start with Spring Boot.</strong> Why?</p>
<ul>
  <li>Less configuration = less frustration</li>
  <li>You'll build working apps faster</li>
  <li>Most companies use Spring Boot, not raw Spring</li>
</ul>

<p>Learn raw Spring later to understand internals.</p>

<h2 id="next-post">Coming Next in This Series</h2>

<p>Post 19: <strong>Creating Your First Spring Boot Project</strong> (Start.spring.io walkthrough)</p>
<p>Post 20: <strong>Understanding @SpringBootApplication Annotation</strong></p>
<p>Post 21: <strong>Spring Boot Starter Dependencies Explained</strong></p>

<h2 id="summary">Summary</h2>

<p>Spring Boot = Spring + "It just works"</p>
<p>Don't overthink. Start with Spring Boot. Build something today.</p>
<p><strong>Next post:</strong> We'll create a real Spring Boot project from scratch. 🚀</p>
    `,
  },
    // ── POST 19 (June 8, 2026) ──────────────────────────────────
  {
    slug: "create-first-spring-boot-project-step-by-step",
    title: "Create Your First Spring Boot Project: Step by Step",
    excerpt: "From zero to a running Spring Boot app in 5 minutes. No prior Spring experience needed.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Beginner", "Tutorial"],
    author: "Kartik Yadav Gurve",
    date: "June 8, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2 id="what-you-need">What You Need</h2>
<ul>
  <li>Java 17 or newer installed</li>
  <li>VS Code or IntelliJ IDEA</li>
  <li>Internet connection</li>
</ul>

<h2 id="step-1">Step 1: Go to start.spring.io</h2>
<p>Open your browser. Go to <strong>https://start.spring.io</strong></p>
<p>This is Spring Initializr — it generates complete Spring Boot projects for you.</p>

<h2 id="step-2">Step 2: Fill the Form</h2>
<p>Enter these values:</p>
<ul>
  <li><strong>Project:</strong> Maven</li>
  <li><strong>Language:</strong> Java</li>
  <li><strong>Spring Boot:</strong> 3.2.x (latest stable)</li>
  <li><strong>Group:</strong> com.example</li>
  <li><strong>Artifact:</strong> my-first-app</li>
  <li><strong>Java:</strong> 17</li>
</ul>

<h2 id="step-3">Step 3: Add Dependencies</h2>
<p>Click "ADD DEPENDENCIES" and add these:</p>
<ul>
  <li>✅ <strong>Spring Web</strong> — for building REST APIs</li>
</ul>
<p><em>(We'll add more later. Keep it simple for first project.)</em></p>

<h2 id="step-4">Step 4: Generate and Download</h2>
<p>Click the <strong>GENERATE</strong> button at the bottom.</p>
<p>A zip file named <code>my-first-app.zip</code> will download.</p>

<h2 id="step-5">Step 5: Extract and Open</h2>
<p>Extract the zip file to a folder.</p>
<p>Open the folder in VS Code or IntelliJ IDEA.</p>

<h2 id="step-6">Step 6: Create Your First API</h2>
<p>Create a new file: <code>src/main/java/com/example/myfirstapp/HelloController.java</code></p>

<pre><code>package com.example.myfirstapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}</code></pre>

<h2 id="step-7">Step 7: Run the App</h2>
<p><strong>In VS Code:</strong> Click the "Run" button next to the main method.</p>
<p><strong>Or in terminal:</strong></p>
<pre><code>./mvnw spring-boot:run</code></pre>

<p>You'll see output like:</p>
<pre><code>Started MyFirstAppApplication in 2.5 seconds</code></pre>

<h2 id="step-8">Step 8: Test Your API</h2>
<p>Open your browser. Go to: <strong>http://localhost:8080/hello</strong></p>
<p>You should see: <code>Hello from Spring Boot!</code></p>

<p>🎉 <strong>Congratulations! Your first Spring Boot app is running!</strong> 🎉</p>

<h2 id="folder-structure">What's in the Project?</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Folder/File</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Purpose</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>src/main/java/</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Your Java code goes here</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>src/main/resources/</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Config files, templates, properties</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>pom.xml</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Dependencies and build config</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>application.properties</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">App settings (port, database, etc.)</td>
  </tr>
</table>

<h2 id="common-issues">Common Issues & Fixes</h2>

<p><strong>Port 8080 already in use?</strong></p>
<p>Add this to <code>application.properties</code>:</p>
<pre><code>server.port=9090</code></pre>

<p><strong>Java not found?</strong></p>
<p>Install Java 17 and set JAVA_HOME environment variable.</p>

<p><strong>Maven download slow?</strong></p>
<p>First time takes time. Dependencies download once, then cached.</p>

<h2 id="next-steps">What's Next in This Series?</h2>

<ul>
  <li>Post 19: <strong>Understanding @SpringBootApplication</strong></li>
  <li>Post 20: <strong>Spring Boot Annotations Explained</strong></li>
  <li>Post 21: <strong>Building a Complete REST API (CRUD)</strong></li>
</ul>

<h2 id="summary">Summary</h2>

<p>You just built a Spring Boot app from scratch:</p>
<ol>
  <li>Used start.spring.io to generate project</li>
  <li>Added Spring Web dependency</li>
  <li>Created a REST controller with @RestController</li>
  <li>Ran the app on port 8080</li>
  <li>Tested the /hello endpoint</li>
</ol>

<p><strong>You're now a Spring Boot developer! 🚀</strong></p>

<p>Drop a comment if you got stuck. Next post will make things even clearer.</p>
    `,
  },
    // ── POST 19 (June 9, 2026) ──────────────────────────────────
  {
    slug: "springbootapplication-annotation-explained",
    title: "@SpringBootApplication: The Most Important Annotation Explained",
    excerpt: "What does @SpringBootApplication actually do? It's not magic — it's 3 annotations in one.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Annotations", "Beginner"],
    author: "Kartik Yadav Gurve",
    date: "June 9, 2026",
    readTime: 3,
    featured: true,
    content: `
<h2 id="the-mystery">The Mystery of @SpringBootApplication</h2>
<p>Every Spring Boot app has this line:</p>
<pre><code>@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}</code></pre>
<p>But what does <code>@SpringBootApplication</code> actually do?</p>
<p><strong>It's not magic. It's 3 annotations combined into one.</strong></p>

<h2 id="the-three-annotations">The 3 Annotations Inside</h2>

<p><code>@SpringBootApplication</code> = <code>@Configuration</code> + <code>@EnableAutoConfiguration</code> + <code>@ComponentScan</code></p>

<h3 id="1-configuration">1. @Configuration</h3>
<p>Marks this class as a source of bean definitions. Think of it as "this class contains settings for Spring."</p>
<pre><code>@Configuration
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}</code></pre>

<h3 id="2-enableautoconfiguration">2. @EnableAutoConfiguration</h3>
<p><strong>The real magic.</strong> Tells Spring Boot to automatically configure things based on dependencies you added.</p>
<p><strong>Example:</strong> You add <code>spring-web</code> dependency → Spring Boot auto-configures Tomcat, DispatcherServlet, etc.</p>
<p><strong>Example:</strong> You add <code>spring-data-jpa</code> → Spring Boot auto-configures database connection, Hibernate, etc.</p>

<h3 id="3-componentscan">3. @ComponentScan</h3>
<p>Tells Spring: "Scan this package and all sub-packages for components."</p>
<p>What components? Classes with <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, <code>@RestController</code>.</p>

<h2 id="visual-explanation">Visual Explanation</h2>

<pre><code>Your Project Structure:
src/main/java/com/example/myapp/
├── MyApp.java (has @SpringBootApplication)
├── controller/
│   └── HelloController.java (@RestController)
├── service/
│   └── UserService.java (@Service)
└── repository/
    └── UserRepository.java (@Repository)

@ComponentScan scans from "com.example.myapp" downwards.
Finds ALL components automatically.</code></pre>

<h2 id="what-happens-when-you-run">What Happens When You Run?</h2>

<ol>
  <li>Spring reads <code>@SpringBootApplication</code></li>
  <li>It sees <code>@ComponentScan</code> → finds all your controllers, services, repositories</li>
  <li>It sees <code>@EnableAutoConfiguration</code> → configures database, web server, etc.</li>
  <li>It sees <code>@Configuration</code> → loads any extra bean definitions</li>
  <li>Spring Boot starts Tomcat on port 8080</li>
  <li>Your app is ready!</li>
</ol>

<h2 id="can-you-write-them-separately">Can You Write Them Separately?</h2>

<p><strong>Yes!</strong> This works exactly the same:</p>
<pre><code>@Configuration
@EnableAutoConfiguration
@ComponentScan
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}</code></pre>

<p>But <code>@SpringBootApplication</code> is cleaner. One line instead of three.</p>

<h2 id="common-mistake">Common Mistake ❌</h2>

<p><strong>Wrong package structure:</strong></p>
<pre><code>src/main/java/com/example/
├── MyApp.java (@SpringBootApplication)
└── myapp/
    └── HelloController.java</code></pre>

<p><strong>Problem:</strong> <code>@ComponentScan</code> only scans <code>com.example</code> and below. Your controller is in <code>com.example.myapp</code> — that's fine. But if controller was outside, Spring wouldn't find it.</p>

<p><strong>Rule:</strong> Keep your main class at the root of all components.</p>

<h2 id="quick-reference">Quick Reference Card</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Annotation</th>
    <th style="border: 1px solid #ddd; padding: 10px;">What It Does</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Configuration</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">This class has bean definitions</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@EnableAutoConfiguration</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Auto-configure based on dependencies</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@ComponentScan</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Find all components in package</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@SpringBootApplication</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">All 3 combined!</td>
  </tr>
</table>

<h2 id="summary">Summary</h2>

<ul>
  <li>✅ <code>@SpringBootApplication</code> = 3 annotations in 1</li>
  <li>✅ <code>@EnableAutoConfiguration</code> does the real magic</li>
  <li>✅ <code>@ComponentScan</code> finds your controllers and services</li>
  <li>✅ Keep your main class at the root package</li>
</ul>

<p><strong>Remember:</strong> Spring Boot isn't magic. It's just smart defaults + auto-configuration. Now you know how it works! 🚀</p>

<h2 id="next-post">Coming Next in This Series</h2>
<p>Post 20: <strong>Spring Boot Annotations Every Developer Should Know</strong> (@RestController, @Autowired, @Service, @Repository, and more)</p>
    `,
  },
    // ── POST 20 (June 10, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-annotations-every-developer-should-know",
    title: "Spring Boot Annotations: 7 Annotations Every Developer Should Know",
    excerpt: "@RestController, @Autowired, @Service, @Repository, @PathVariable, @RequestBody, @GetMapping — explained with examples.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Annotations", "REST API"],
    author: "Kartik Yadav Gurve",
    date: "June 10, 2026",
    readTime: 4,
    featured: true,
    content: `
<h2 id="why-annotations">Why Annotations?</h2>
<p>Spring Boot uses annotations instead of XML files. They keep your code clean and readable.</p>
<p>Here are 7 annotations you'll use in EVERY project.</p>

<h2 id="1-restcontroller">1. @RestController — Handle HTTP Requests</h2>
<p>Marks a class as a REST API controller. Each method returns JSON/XML directly (not a webpage).</p>
<pre><code>@RestController
public class UserController {
    
    @GetMapping("/users")
    public List&lt;User&gt; getUsers() {
        return userService.findAll();
    }
}</code></pre>
<p><strong>Note:</strong> <code>@RestController</code> = <code>@Controller</code> + <code>@ResponseBody</code></p>

<h2 id="2-getmapping">2. @GetMapping — Handle GET Requests</h2>
<p>Map HTTP GET requests to Java methods.</p>
<pre><code>@GetMapping("/users")
public List&lt;User&gt; getAll() { ... }

@GetMapping("/users/{id}")
public User getOne(@PathVariable Long id) { ... }</code></pre>

<h2 id="3-postmapping">3. @PostMapping — Handle POST Requests</h2>
<p>Map HTTP POST requests (usually for creating data).</p>
<pre><code>@PostMapping("/users")
public User createUser(@RequestBody User user) {
    return userService.save(user);
}</code></pre>

<h2 id="4-pathvariable">4. @PathVariable — Get Values from URL</h2>
<p>Extract values from the URL path.</p>
<pre><code>@GetMapping("/products/{id}")
public Product getProduct(@PathVariable Long id) {
    // If URL is /products/5 → id = 5
    return productService.findById(id);
}

// Multiple path variables
@GetMapping("/users/{userId}/orders/{orderId}")
public Order getOrder(@PathVariable Long userId, @PathVariable Long orderId) {
    return orderService.find(userId, orderId);
}</code></pre>

<h2 id="5-requestbody">5. @RequestBody — Convert JSON to Java Object</h2>
<p>Automatically converts JSON from request body into a Java object.</p>
<pre><code>// Client sends: { "name": "Kartik", "email": "kartik@example.com" }
@PostMapping("/users")
public User createUser(@RequestBody User user) {
    // user.name = "Kartik", user.email = "kartik@example.com"
    return userService.save(user);
}</code></pre>

<h2 id="6-service">6. @Service — Mark Business Logic Class</h2>
<p>Indicates a class contains business logic. Spring will automatically detect and create it.</p>
<pre><code>@Service
public class UserService {
    
    public User findById(Long id) {
        // business logic here
        return userRepository.findById(id);
    }
}</code></pre>

<h2 id="7-autowired">7. @Autowired — Inject Dependencies</h2>
<p>Spring automatically gives you the object you need. No manual "new" keyword!</p>
<pre><code>@RestController
public class UserController {
    
    @Autowired  // Spring injects UserService automatically
    private UserService userService;
    
    @GetMapping("/users")
    public List&lt;User&gt; getAll() {
        return userService.findAll();  // use injected service
    }
}</code></pre>

<h2 id="bonus-repository">Bonus: @Repository — Database Access Layer</h2>
<p>Marks a class for database operations. Spring translates database exceptions.</p>
<pre><code>@Repository
public class UserRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public User findById(Long id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            new BeanPropertyRowMapper<>(User.class),
            id
        );
    }
}</code></pre>

<h2 id="complete-example">Complete Example: User API</h2>

<pre><code>// 1. Model/Entity
public class User {
    private Long id;
    private String name;
    private String email;
    // getters and setters
}

// 2. Repository
@Repository
public class UserRepository {
    // database operations
}

// 3. Service
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List&lt;User&gt; getAll() {
        return userRepository.findAll();
    }
}

// 4. Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List&lt;User&gt; getAll() {
        return userService.getAll();
    }
    
    @GetMapping("/{id}")
    public User getOne(@PathVariable Long id) {
        return userService.getById(id);
    }
    
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.save(user);
    }
}</code></pre>

<h2 id="quick-reference">Quick Reference Card</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Annotation</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Purpose</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Used In</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@RestController</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">REST API controller</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Controller layer</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@GetMapping</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Handle GET requests</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Controller methods</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@PostMapping</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Handle POST requests</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Controller methods</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@PathVariable</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Get value from URL</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Method parameters</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@RequestBody</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">JSON → Java object</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Method parameters</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Service</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Business logic</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Service layer</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Autowired</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Dependency injection</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Any class field</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Repository</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Database operations</td>
    <td style="border: 1px solid #ddd; padding: 10px;">Repository layer</td>
  </tr>
</table>

<h2 id="summary">Summary</h2>

<ul>
  <li>✅ <code>@RestController</code> = REST API endpoint</li>
  <li>✅ <code>@GetMapping/@PostMapping</code> = HTTP methods</li>
  <li>✅ <code>@PathVariable</code> = get data from URL</li>
  <li>✅ <code>@RequestBody</code> = get JSON data</li>
  <li>✅ <code>@Service</code> = business logic</li>
  <li>✅ <code>@Repository</code> = database access</li>
  <li>✅ <code>@Autowired</code> = let Spring create objects</li>
</ul>

<p><strong>Practice these 7 annotations and you'll build 90% of Spring Boot APIs!</strong></p>

<h2 id="next-post">Coming Next in This Series</h2>
<p>Post 21: <strong>Building a Complete REST API (CRUD) with Spring Boot</strong> — Create, Read, Update, Delete operations with real database connection.</p>
    `,
  },
    // ── POST 21 (June 11, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-rest-api-crud-tutorial",
    title: "Building a Complete REST API (CRUD) with Spring Boot",
    excerpt: "Create, Read, Update, Delete — build a complete User Management API step by step.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "REST API", "CRUD", "Java"],
    author: "Kartik Yadav Gurve",
    date: "June 11, 2026",
    readTime: 4,
    featured: true,
    content: `
<p>Let's build something real. A User API with all CRUD stuff.</p>

<h2 id="what-you-need">What you'll build:</h2>
<ul>
  <li>Create user → POST</li>
  <li>Get all users → GET</li>
  <li>Get one user → GET by ID</li>
  <li>Update user → PUT</li>
  <li>Delete user → DELETE</li>
</ul>

<h2 id="model">1. The User Model</h2>
<pre><code>@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phone;
    
    // getters and setters
}</code></pre>

<h2 id="repository">2. Repository (JPA magic)</h2>
<pre><code>@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
    // JpaRepository gives everything we need
}</code></pre>

<h2 id="service">3. Service Layer</h2>
<pre><code>@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List&lt;User&gt; getAll() {
        return userRepository.findAll();
    }
    
    public User getById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }
    
    public User create(User user) {
        return userRepository.save(user);
    }
    
    public User update(Long id, User newData) {
        User old = getById(id);
        old.setName(newData.getName());
        old.setEmail(newData.getEmail());
        old.setPhone(newData.getPhone());
        return userRepository.save(old);
    }
    
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}</code></pre>

<h2 id="controller">4. Controller (Where requests land)</h2>
<pre><code>@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List&lt;User&gt; getAll() {
        return userService.getAll();
    }
    
    @GetMapping("/{id}")
    public User getOne(@PathVariable Long id) {
        return userService.getById(id);
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@RequestBody User user) {
        return userService.create(user);
    }
    
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }
}</code></pre>

<h2 id="testing">Testing it out</h2>

<p><strong>Create a user:</strong></p>
<pre><code>POST http://localhost:8080/api/users
{
    "name": "Kartik",
    "email": "kartik@test.com",
    "phone": "9876543210"
}</code></pre>

<p><strong>Get all users:</strong> <code>GET http://localhost:8080/api/users</code></p>
<p><strong>Get one user:</strong> <code>GET http://localhost:8080/api/users/1</code></p>
<p><strong>Update:</strong> <code>PUT http://localhost:8080/api/users/1</code></p>
<p><strong>Delete:</strong> <code>DELETE http://localhost:8080/api/users/1</code></p>

<p>That's it. Run and test with Postman.</p>
    `,
  },
    // ── POST 22 (June 12, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-exception-handling-guide",
    title: "Exception Handling in Spring Boot: Stop Using Try-Catch Everywhere",
    excerpt: "One place to handle all errors. Clean and simple.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Exception Handling", "Java", "REST API"],
    author: "Kartik Yadav Gurve",
    date: "June 12, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>I used to write try-catch in every controller method. Looked ugly. Then I found a better way.</p>

<h2 id="the-old-way">The old way (ugly)</h2>
<pre><code>@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {
    try {
        return userService.findById(id);
    } catch (Exception e) {
        return null;  // 👎 just null? really?
    }
}</code></pre>

<p>Problems: Ugly code, no error info, repeating same thing everywhere.</p>

<h2 id="the-better-way">The better way</h2>

<p><strong>Step 1: Create a custom exception</strong></p>
<pre><code>public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User with id " + id + " not found");
    }
}</code></pre>

<p><strong>Step 2: Use it in service</strong></p>
<pre><code>public User getById(Long id) {
    return userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException(id));
}</code></pre>

<p><strong>Step 3: One global handler</strong></p>
<pre><code>@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity&lt;String&gt; handleNotFound(UserNotFoundException ex) {
        return new ResponseEntity&lt;&gt;(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}</code></pre>

<p>That's it. Now every time a user doesn't exist, Spring Boot returns 404 with your message. No try-catch needed in controllers.</p>

<h2 id="bonus">Bonus: Return proper JSON error</h2>

<pre><code>public class ErrorResponse {
    private int status;
    private String message;
    private String timestamp;
    
    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now().toString();
    }
}</code></pre>

<p>Update the handler:</p>
<pre><code>@ExceptionHandler(UserNotFoundException.class)
public ResponseEntity&lt;ErrorResponse&gt; handleNotFound(UserNotFoundException ex) {
    ErrorResponse error = new ErrorResponse(404, ex.getMessage());
    return new ResponseEntity&lt;&gt;(error, HttpStatus.NOT_FOUND);
}</code></pre>

<p>Now your API returns clean JSON errors like this:</p>
<pre><code>{
    "status": 404,
    "message": "User with id 99 not found",
    "timestamp": "2026-06-12T10:30:00"
}</code></pre>

<h2 id="summary">What changed</h2>
<ul>
  <li>Controllers are clean (no try-catch)</li>
  <li>Error responses are consistent</li>
  <li>Change error format in one place</li>
  <li>Right HTTP status codes (404, not 200)</li>
</ul>

<p>Been using this pattern for a year. Works like charm.</p>
    `,
  },
    // ── POST 23 (June 13, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-jpa-database-guide",
    title: "Spring Boot with Database: JPA Made Simple",
    excerpt: "Connect your Spring Boot app to a real database. No complicated setup.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "JPA", "Database", "Hibernate"],
    author: "Kartik Yadav Gurve",
    date: "June 13, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>You built a REST API. But data disappears when you restart the app. Time to add a real database.</p>

<h2 id="what-you-need">What you need</h2>
<ul>
  <li>PostgreSQL installed (or MySQL)</li>
  <li>Or just use H2 for testing (no installation)</li>
</ul>

<h2 id="dependencies">1. Add dependencies</h2>
<p>In <code>pom.xml</code>:</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>

<h2 id="properties">2. Configure database</h2>
<p>In <code>application.properties</code>:</p>
<pre><code># PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=yourpass

# JPA settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true</code></pre>

<p><strong>What is <code>ddl-auto=update</code>?</strong> Hibernate creates tables automatically from your Java classes. No SQL needed.</p>

<h2 id="entity">3. Create Entity</h2>
<pre><code>@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    private double price;
    
    // getters and setters
}</code></pre>

<p>Run your app. Hibernate creates the "products" table automatically. Check your database.</p>

<h2 id="repository">4. JPA Repository (No implementation needed!)</h2>
<pre><code>@Repository
public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {
    // Custom query methods
    List&lt;Product&gt; findByPriceLessThan(double price);
    Optional&lt;Product&gt; findByName(String name);
}</code></pre>

<p>Spring Boot writes the SQL for you. Just declare the method name.</p>

<h2 id="service">5. Use it in Service</h2>
<pre><code>@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepo;
    
    public List&lt;Product&gt; getAll() {
        return productRepo.findAll();
    }
    
    public Product save(Product product) {
        return productRepo.save(product);
    }
    
    public List&lt;Product&gt; getCheapProducts(double maxPrice) {
        return productRepo.findByPriceLessThan(maxPrice);
    }
}</code></pre>

<h2 id="test">Testing it</h2>
<pre><code>@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;
    
    @PostMapping
    public Product create(@RequestBody Product product) {
        return service.save(product);
    }
    
    @GetMapping
    public List&lt;Product&gt; getAll() {
        return service.getAll();
    }
    
    @GetMapping("/cheap/{price}")
    public List&lt;Product&gt; getCheap(@PathVariable double price) {
        return service.getCheapProducts(price);
    }
}</code></pre>

<h2 id="h2-for-testing">Quick tip: Use H2 for testing</h2>
<p>Don't want to install PostgreSQL? Use H2 (in-memory database):</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;com.h2database&lt;/groupId&gt;
    &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>

<p>Properties:</p>
<pre><code>spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true</code></pre>

<p>Visit <code>http://localhost:8080/h2-console</code> to see your data.</p>

<h2 id="summary">What you learned</h2>
<ul>
  <li>✅ Connect any database</li>
  <li>✅ JpaRepository = CRUD methods for free</li>
  <li>✅ Custom queries by method names</li>
  <li>✅ Hibernate auto-creates tables</li>
</ul>

<p>Took me 2 hours to figure this out first time. Now you know in 3 minutes.</p>
    `,
  },
    // ── POST 24 (June 14, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-profiles-guide",
    title: "Spring Boot Profiles: Dev, Test, Prod Made Easy",
    excerpt: "Different settings for different environments. No more changing configs manually.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Profiles", "Configuration"],
    author: "Kartik Yadav Gurve",
    date: "June 14, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>You have different databases for development and production. You don't want to change config files every time you deploy.</p>
<p>Spring Boot Profiles solve this.</p>

<h2 id="the-problem">The problem</h2>
<p>Development: localhost database, debug logs, H2 database</p>
<p>Production: cloud database, error logs only, PostgreSQL</p>
<p>Changing properties manually = mistakes waiting to happen.</p>

<h2 id="solution">Solution: Create multiple property files</h2>

<pre><code>src/main/resources/
├── application.properties        (common for all)
├── application-dev.properties    (development)
├── application-test.properties   (testing)
└── application-prod.properties   (production)</code></pre>

<h2 id="example">Example: Dev vs Prod</h2>

<p><strong>application-dev.properties:</strong></p>
<pre><code>server.port=8080
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
logging.level.root=DEBUG</code></pre>

<p><strong>application-prod.properties:</strong></p>
<pre><code>server.port=8080
spring.datasource.url=jdbc:postgresql://prod-server:5432/mydb
spring.datasource.username=produser
spring.datasource.password=strongpass
spring.jpa.show-sql=false
logging.level.root=ERROR</code></pre>

<p><strong>application.properties (common):</strong></p>
<pre><code>spring.application.name=myapp
spring.jpa.hibernate.ddl-auto=update</code></pre>

<h2 id="activate">How to activate a profile</h2>

<p><strong>Option 1: In application.properties</strong></p>
<pre><code>spring.profiles.active=dev</code></pre>

<p><strong>Option 2: Command line</strong></p>
<pre><code>java -jar myapp.jar --spring.profiles.active=prod</code></pre>

<p><strong>Option 3: Environment variable (for Docker/cloud)</strong></p>
<pre><code>export SPRING_PROFILES_ACTIVE=prod</code></pre>

<h2 id="code">Use profiles in code</h2>

<p><strong>Run code only for specific profile:</strong></p>
<pre><code>@Profile("dev")
@Component
public class DevDataLoader {
    // This runs only in development
    // Load dummy data for testing
}

@Profile("prod")
@Component
public class ProdDataLoader {
    // This runs only in production
    // Real data only
}</code></pre>

<p><strong>Or in application.properties:</strong></p>
<pre><code># Only for dev profile
spring.h2.console.enabled=true</code></pre>

<h2 id="real-example">What I actually use</h2>

<p><strong>Development (local):</strong></p>
<ul>
  <li>H2 database (no installation)</li>
  <li>Debug logs</li>
  <li>Port 8080</li>
  <li>Load fake data on startup</li>
</ul>

<p><strong>Production (server):</strong></p>
<ul>
  <li>PostgreSQL</li>
  <li>Error logs only</li>
  <li>Port 8080 (different domain)</li>
  <li>No fake data</li>
</ul>

<p><strong>Testing (CI/CD):</strong></p>
<ul>
  <li>Test database (resets every run)</li>
  <li>Info logs</li>
  <li>Random port (to avoid conflicts)</li>
</ul>

<h2 id="quick-tip">Quick tip</h2>
<p>Set default profile in application.properties:</p>
<pre><code>spring.profiles.active=dev</code></pre>
<p>Now you never forget which profile is active.</p>

<h2 id="summary">Summary</h2>
<ul>
  <li>✅ Different configs for different environments</li>
  <li>✅ No code changes between dev and prod</li>
  <li>✅ One command to switch profiles</li>
  <li>✅ @Profile annotation for profile-specific code</li>
</ul>


    `,
  },

    // ── POST 25 (June 15, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-security-basics-guide",
    title: "Spring Boot Security: Basic Auth in 10 Minutes",
    excerpt: "Add username/password protection to your APIs. No more open endpoints.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Security", "Authentication", "Java"],
    author: "Kartik Yadav Gurve",
    date: "June 15, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>Your APIs are open. Anyone can call them. That's bad for real apps. Let's add security.</p>

<h2 id="what-you-need">Add one dependency</h2>
<p>In <code>pom.xml</code>:</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<p>That's it. Restart your app. Now every endpoint needs a password.</p>

<h2 id="default-login">Default credentials</h2>
<p>Username: <code>user</code></p>
<p>Password: (look in console logs)</p>
<pre><code>Using generated security password: 8a3f2e1c-9d4b-... </code></pre>

<h2 id="custom-password">Set your own password</h2>
<p>In <code>application.properties</code>:</p>
<pre><code>spring.security.user.name=admin
spring.security.user.password=admin123
spring.security.user.roles=ADMIN</code></pre>

<p>Now use <code>admin / admin123</code> to access your APIs.</p>

<h2 id="in-memory-users">Multiple users (in-memory)</h2>
<pre><code>@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public UserDetailsService users() {
        UserDetails admin = User.builder()
            .username("admin")
            .password("{noop}admin123")
            .roles("ADMIN")
            .build();
            
        UserDetails user = User.builder()
            .username("user")
            .password("{noop}user123")
            .roles("USER")
            .build();
            
        return new InMemoryUserDetailsManager(admin, user);
    }
}</code></pre>

<p><code>{noop}</code> means no password encoding (for learning only).</p>

<h2 id="url-permissions">Control who can access what</h2>
<pre><code>@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()      // anyone
            .requestMatchers("/admin/**").hasRole("ADMIN") // only admin
            .anyRequest().authenticated()                  // logged in users
        )
        .httpBasic();  // use browser login popup
    
    return http.build();
}</code></pre>

<h2 id="test-it">Testing with Postman</h2>
<p>In Postman, go to Authorization tab:</p>
<ul>
  <li>Type: Basic Auth</li>
  <li>Username: admin</li>
  <li>Password: admin123</li>
</ul>
<p>Now call your API. Works fine.</p>
<p>Remove auth → get 401 Unauthorized.</p>

<h2 id="real-passwords">Real passwords (BCrypt)</h2>
<p>Don't use <code>{noop}</code> in production. Use BCrypt:</p>
<pre><code>@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}</code></pre>

<p>Encode password:</p>
<pre><code>String encoded = passwordEncoder().encode("mypass");</code></pre>

<h2 id="common-issues">Common issues</h2>

<p><strong>Postman giving 403?</strong></p>
<p>Add CSRF disable for testing:</p>
<pre><code>http.csrf(csrf -> csrf.disable());</code></pre>

<p><strong>Login popup not showing?</strong></p>
<p>Add <code>.httpBasic()</code> in your config.</p>

<p><strong>Static resources blocked?</strong></p>
<pre><code>.requestMatchers("/css/**", "/js/**").permitAll()</code></pre>

<h2 id="summary">What you learned</h2>
<ul>
  <li>✅ Add Spring Security = instant protection</li>
  <li>✅ Default user/password from console</li>
  <li>✅ Custom users with roles</li>
  <li>✅ Control who sees which URLs</li>
  <li>✅ Test with Postman Basic Auth</li>
</ul>

<p>Took me 2 days to figure this out first time. Now you know in 10 minutes.</p>

<h2 id="next">Coming next</h2>
<p>Post 26: <strong>JWT Authentication</strong> — stateless auth for modern apps.</p>
    `,
  },
    // ── POST 26 (June 16, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-jwt-authentication-guide",
    title: "JWT Authentication in Spring Boot: Stateless Security",
    excerpt: "Replace Basic Auth with JWT tokens. Modern, stateless, and scalable.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "JWT", "Security", "Authentication"],
    author: "Kartik Yadav Gurve",
    date: "June 16, 2026",
    readTime: 4,
    featured: true,
    content: `
<p>Basic Auth sends password with every request. Bad for security. JWT is better.</p>

<h2 id="what-is-jwt">What is JWT?</h2>
<p>JWT = JSON Web Token. A string that contains user info. Server gives it once. Client sends it with every request.</p>
<p><strong>How it works:</strong></p>
<ol>
  <li>User logs in → server creates JWT token</li>
  <li>Client stores token</li>
  <li>Client sends token in header: <code>Authorization: Bearer &lt;token&gt;</code></li>
  <li>Server validates token → no database lookup needed!</li>
</ol>

<h2 id="dependencies">1. Add JWT dependencies</h2>
<p>In <code>pom.xml</code>:</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt-api&lt;/artifactId&gt;
    &lt;version&gt;0.11.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt-impl&lt;/artifactId&gt;
    &lt;version&gt;0.11.5&lt;/version&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt-jackson&lt;/artifactId&gt;
    &lt;version&gt;0.11.5&lt;/version&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>

<h2 id="jwt-util">2. JWT Utility Class</h2>
<pre><code>@Component
public class JwtUtil {
    private String secret = "your-very-secret-key-here-1234567890";
    
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
            .signWith(getSignKey())
            .compact();
    }
    
    public String extractUsername(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(getSignKey())
            .build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
    
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    private Key getSignKey() {
        byte[] keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}</code></pre>

<h2 id="login-endpoint">3. Login Endpoint</h2>
<pre><code>@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private JwtUtil jwtUtil;
    
    @PostMapping("/login")
    public ResponseEntity&lt;?&gt; login(@RequestBody LoginRequest request) {
        // Check username/password (skip for demo)
        String token = jwtUtil.generateToken(request.getUsername());
        return ResponseEntity.ok(new LoginResponse(token));
    }
}</code></pre>

<h2 id="filter">4. JWT Filter</h2>
<pre><code>@Component
public class JwtFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain chain) throws IOException, ServletException {
        
        String authHeader = request.getHeader("Authorization");
        
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            
            if (jwtUtil.validateToken(token)) {
                String username = jwtUtil.extractUsername(token);
                // Set authentication in context
                UsernamePasswordAuthenticationToken auth = 
                    new UsernamePasswordAuthenticationToken(username, null, null);
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        
        chain.doFilter(request, response);
    }
}</code></pre>

<h2 id="security-config">5. Security Config</h2>
<pre><code>@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private JwtFilter jwtFilter;
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll()  // login open
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // no sessions!
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}</code></pre>

<h2 id="test-it">Testing with Postman</h2>

<p><strong>Step 1: Login</strong></p>
<pre><code>POST /auth/login
{
    "username": "admin",
    "password": "admin123"
}

Response:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}</code></pre>

<p><strong>Step 2: Use token for protected endpoints</strong></p>
<pre><code>GET /api/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</code></pre>

<h2 id="advantages">Why JWT over Basic Auth?</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Feature</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Basic Auth</th>
    <th style="border: 1px solid #ddd; padding: 10px;">JWT</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Password sent every time</td>
    <td style="border: 1px solid #ddd; padding: 10px;">❌ Yes (risky)</td>
    <td style="border: 1px solid #ddd; padding: 10px;">✅ No (token only)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Server needs to store session</td>
    <td style="border: 1px solid #ddd; padding: 10px;">✅ Yes (stateful)</td>
    <td style="border: 1px solid #ddd; padding: 10px;">✅ No (stateless)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Scale horizontally</td>
    <td style="border: 1px solid #ddd; padding: 10px;">❌ Hard</td>
    <td style="border: 1px solid #ddd; padding: 10px;">✅ Easy</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;">Mobile friendly</td>
    <td style="border: 1px solid #ddd; padding: 10px;">❌ No</td>
    <td style="border: 1px solid #ddd; padding: 10px;">✅ Yes</td>
  </tr>
</table>

<h2 id="important">Important Notes</h2>

<p><strong>Keep secret key safe:</strong> Don't hardcode like I did. Use environment variable:</p>
<pre><code>@Value("\${jwt.secret}")
private String secret;</code></pre>

<p>In <code>application.properties</code>:</p>
<pre><code>jwt.secret=\${JWT_SECRET:default-secret-key}</code></pre>

<p><strong>Token expiration:</strong> Set short expiry for sensitive apps (15-30 minutes).</p>

<h2 id="summary">What you built</h2>
<ul>
  <li>✅ Login endpoint returns JWT token</li>
  <li>✅ Filter validates every request</li>
  <li>✅ Stateless = easy scaling</li>
  <li>✅ No password sent repeatedly</li>
</ul>

<p>JWT is the standard now. Every modern app uses it.</p>

<h2 id="next">What's next?</h2>
<p>Post 27: <strong>Spring Boot + React: Full Stack Integration</strong> — Connect frontend with backend.</p>
    `,
  },
    // ── POST 27 (June 17, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-react-integration-guide",
    title: "Spring Boot + React: Full Stack Integration",
    excerpt: "Connect React frontend with Spring Boot backend. CORS, API calls, and deployment.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "React", "Full Stack", "CORS"],
    author: "Kartik Yadav Gurve",
    date: "June 17, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>You have Spring Boot APIs. You have React frontend. Now make them talk to each other.</p>

<h2 id="the-problem">The Problem: CORS</h2>
<p>React runs on <code>http://localhost:3000</code>. Spring Boot runs on <code>http://localhost:8080</code>.</p>
<p>Browser blocks cross-origin requests by default. CORS fixes this.</p>

<h2 id="cors-config">1. Enable CORS in Spring Boot</h2>
<p>Add this config:</p>
<pre><code>@Configuration
public class CorsConfig {
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}</code></pre>

<p>Or simpler: Add <code>@CrossOrigin</code> on controller:</p>
<pre><code>@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    // your endpoints
}</code></pre>

<h2 id="react-call">2. React: Call Spring Boot API</h2>
<pre><code>// api.js
const API_URL = "http://localhost:8080/api";

export const getUsers = async () => {
    const response = await fetch(\`${API_URL}/users\`);
    return response.json();
};

export const createUser = async (user) => {
    const response = await fetch(\`${API_URL}/users\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    return response.json();
};</code></pre>

<h2 id="react-component">3. React Component Example</h2>
<pre><code>import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from './api';

function UserList() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    
    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser({ name });
        loadUsers();
        setName('');
    };
    
    return (
        &lt;div&gt;
            &lt;form onSubmit={handleSubmit}&gt;
                &lt;input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter name"
                /&gt;
                &lt;button type="submit"&gt;Add User&lt;/button&gt;
            &lt;/form&gt;
            &lt;ul&gt;
                {users.map(user => (
                    &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}

export default UserList;</code></pre>

<h2 id="proxy">4. Proxy (Easier Development)</h2>
<p>Add this to React's <code>package.json</code>:</p>
<pre><code>{
    "proxy": "http://localhost:8080"
}</code></pre>

<p>Now call APIs without writing full URL:</p>
<pre><code>fetch("/api/users") // instead of http://localhost:8080/api/users</code></pre>

<h2 id="jwt-auth">5. With JWT Authentication</h2>
<p>Store token after login:</p>
<pre><code>const login = async (username, password) => {
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
};</code></pre>

<p>Send token with every request:</p>
<pre><code>const getUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/users', {
        headers: {
            'Authorization': \`Bearer \${token}\`
        }
    });
    return response.json();
};</code></pre>

<h2 id="deployment">6. Deployment Options</h2>

<p><strong>Option 1: Separate Hosting</strong></p>
<ul>
  <li>Spring Boot → Railway / Render / AWS</li>
  <li>React → Vercel / Netlify</li>
  <li>Update API_URL to production URL</li>
</ul>

<p><strong>Option 2: Serve React from Spring Boot</strong></p>
<pre><code>// Build React: npm run build
// Copy build/ folder to Spring Boot's src/main/resources/static
// Spring Boot serves React files automatically</code></pre>

<p><strong>Option 3: Docker (Both together)</strong></p>
<pre><code># Dockerfile for React + Spring Boot
FROM maven:3.8 AS build
COPY . .
RUN mvn clean package

FROM openjdk:17
COPY --from=build target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]</code></pre>

<h2 id="common-issues">Common Issues</h2>

<p><strong>CORS error?</strong> Check allowed origins in Spring Boot.</p>
<p><strong>404 on API?</strong> Check URL and port numbers.</p>
<p><strong>Token not sending?</strong> Check Authorization header format.</p>
<p><strong>React not updating?</strong> Add <code>useEffect</code> with dependencies.</p>

<h2 id="summary">What you built</h2>
<ul>
  <li>✅ CORS configured in Spring Boot</li>
  <li>✅ React calling Spring Boot APIs</li>
  <li>✅ JWT token handling in React</li>
  <li>✅ Multiple deployment options</li>
</ul>

<p>Full stack apps are fun. Frontend + Backend working together.</p>

<h2 id="next">What's next?</h2>
<p>Post 28: <strong>Spring Boot Testing</strong> — Unit tests, integration tests, and mocking.</p>
    `,
  },
    // ── POST 28 (June 18, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-testing-guide",
    title: "Spring Boot Testing: Unit Tests & Integration Tests",
    excerpt: "Test your APIs properly. No more deploying to check if code works.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Testing", "JUnit", "Mockito"],
    author: "Kartik Yadav Gurve",
    date: "June 18, 2026",
    readTime: 3,
    featured: true,
    content: `
<p>You write code. But does it work? Testing gives you confidence.</p>

<h2 id="types">Two Types of Tests</h2>

<p><strong>Unit Tests:</strong> Test one thing in isolation (e.g., a service method).</p>
<p><strong>Integration Tests:</strong> Test everything together (e.g., API call to database).</p>

<h2 id="dependencies">1. Add Testing Dependencies</h2>
<p>Spring Boot includes them by default. But check <code>pom.xml</code>:</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>

<h2 id="unit-test">2. Unit Test with Mockito</h2>
<p>Test service layer. Mock repository.</p>
<pre><code>@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void shouldReturnUserWhenIdExists() {
        // Arrange
        User user = new User();
        user.setId(1L);
        user.setName("Kartik");
        
        when(userRepository.findById(1L))
            .thenReturn(Optional.of(user));
        
        // Act
        User result = userService.getUserById(1L);
        
        // Assert
        assertEquals("Kartik", result.getName());
        verify(userRepository).findById(1L);
    }
    
    @Test
    void shouldThrowExceptionWhenUserNotFound() {
        // Arrange
        when(userRepository.findById(99L))
            .thenReturn(Optional.empty());
        
        // Assert
        assertThrows(RuntimeException.class, () -> {
            userService.getUserById(99L);
        });
    }
}</code></pre>

<h2 id="integration-test">3. Integration Test with @WebMvcTest</h2>
<p>Test controller layer only.</p>
<pre><code>@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void shouldReturnUser() throws Exception {
        // Arrange
        User user = new User();
        user.setId(1L);
        user.setName("Kartik");
        
        when(userService.getUserById(1L)).thenReturn(user);
        
        // Act & Assert
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Kartik"));
    }
}</code></pre>

<h2 id="full-integration">4. Full Integration Test with @SpringBootTest</h2>
<p>Test everything (controller + service + database).</p>
<pre><code>@SpringBootTest
@AutoConfigureMockMvc
class UserIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void createUserAndGetItBack() throws Exception {
        // Create user
        String userJson = "{\"name\":\"Kartik\",\"email\":\"k@test.com\"}";
        
        mockMvc.perform(post("/api/users")
            .contentType(MediaType.APPLICATION_JSON)
            .content(userJson))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").exists());
        
        // Get all users
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].name").value("Kartik"));
    }
}</code></pre>

<h2 id="test-database">5. Use Test Database</h2>
<p>In <code>application-test.properties</code>:</p>
<pre><code>spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=create-drop</code></pre>
<p>Database resets after each test. Clean tests.</p>

<h2 id="common-annotations">Common Testing Annotations</h2>

<table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 10px;">Annotation</th>
    <th style="border: 1px solid #ddd; padding: 10px;">Purpose</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Test</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Marks a test method</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@Mock</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Creates mock object</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@InjectMocks</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Injects mocks into class</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@MockBean</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Mock for Spring context</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@WebMvcTest</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Test web layer only</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 10px;"><code>@SpringBootTest</code></td>
    <td style="border: 1px solid #ddd; padding: 10px;">Full application test</td>
  </tr>
</table>

<h2 id="best-practices">Best Practices</h2>

<ul>
  <li>✅ Test one thing per test</li>
  <li>✅ Use meaningful test names (<code>shouldReturnUserWhenIdExists</code>)</li>
  <li>✅ Mock external services</li>
  <li>✅ Use test database (not production)</li>
  <li>✅ Run tests before every push</li>
</ul>

<h2 id="summary">What you learned</h2>
<ul>
  <li>✅ Unit tests with Mockito</li>
  <li>✅ Integration tests with @WebMvcTest</li>
  <li>✅ Full tests with @SpringBootTest</li>
  <li>✅ Test database configuration</li>
</ul>

<p>Testing takes time. But saves hours of debugging.</p>

<h2 id="next">What's next?</h2>
<p>Post 29: <strong>Spring Boot + Docker</strong> — Containerize your app.</p>
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
    image:      "https://images.unsplash.com/...?w=800&h=400&fit=crop",
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
