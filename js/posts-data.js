// posts-data.js - Complete Blog Posts Database with Fixed Images

const POSTS_DB = [
  // ── POST 1 (May 21, 2026) ──────────────────────────────────
  {
    slug: "my-love-and-passion-about-coding-since-2018",
    title: "Coding Since 2018",
    excerpt: "RPG Maker, GBA games, and never finishing anything.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Personal", "Coding"],
    author: "Kartik Yadav Gurve",
    date: "May 21, 2026",
    readTime: 1,
    featured: true,
    content: `<p>2018. I was making dumb games in RPG Maker. Playing Pokemon GBA roms. Breaking things. Fixing nothing.</p>
<p>Never finished a single game.</p>
<p>But that was the start.</p>
<p>Now I code for real. Still breaking things. Still loving it.</p>
<p>— Kartik</p>`
  },

  // ── POST 2 (May 22, 2026) ──────────────────────────────────
  {
    slug: "the-idea-about-the-blogging-website",
    title: "The Idea About the Blogging Website",
    excerpt: "The idea about the blogging website and why I built it this way",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
    tags: ["Blogging", "Web Development"],
    author: "Kartik Yadav Gurve",
    date: "May 22, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">The Idea About the Blogging Website</h2>
<p>The idea about the blogging website came from wanting to share my journey.</p>`
  },

  // ── POST 3 (May 23, 2026) ──────────────────────────────────
  {
    slug: "how-i-work-as-instructor-at-sai-ambrosia",
    title: "How I Work as an Instructor at Sai Ambrosia After 10th",
    excerpt: "After 10th how I work as instructor at Sai Ambrosia Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
    tags: ["Teaching", "Power BI"],
    author: "Kartik Yadav Gurve",
    date: "May 23, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">How I Work as an Instructor at Sai Ambrosia After 10th</h2>
<p>After 10th I started teaching at Sai Ambrosia Education.</p>`
  },

  // ── POST 4 (May 24, 2026) ──────────────────────────────────
  {
    slug: "tech-skills-i-have-learned",
    title: "The Tech Skills I Have Learned",
    excerpt: "The tech skills I have learned over the years",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
    tags: ["Skills", "Learning"],
    author: "Kartik Yadav Gurve",
    date: "May 24, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">The Tech Skills I Have Learned</h2>
<p>The tech skills I have learned include Android, Kotlin, Firebase, ML, Power BI, Docker and more.</p>`
  },

  // ── POST 5 (May 25, 2026) ──────────────────────────────────
  {
    slug: "connect-java-to-postgresql",
    title: "How to Connect Java Application to PostgreSQL",
    excerpt: "Step-by-step guide to connect Java with PostgreSQL database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["Java", "PostgreSQL", "Database", "JDBC"],
    author: "Kartik Yadav Gurve",
    date: "May 25, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">How to Connect Java Application to PostgreSQL</h2>
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
java -cp "lib/postgresql-42.7.3.jar:." Main</code></pre>`
  },

  // ── POST 6 (May 26, 2026) ──────────────────────────────────
  {
    slug: "hibernate-orm-simple-guide",
    title: "Hibernate ORM: What It Is and Why You Need It",
    excerpt: "Simple explanation of Hibernate — the Java ORM that saves you from writing SQL queries manually.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Database"],
    author: "Kartik Yadav Gurve",
    date: "May 26, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="what-is-hibernate">What is Hibernate?</h2>
<p>Hibernate is a framework that lets you work with databases using Java objects instead of writing SQL queries.</p>
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
session.save(user);  // Hibernate handles the SQL</code></pre>`
  },

  // ── POST 7 (May 27, 2026) ──────────────────────────────────
  {
    slug: "hibernate-orm-mapping-relationships-annotations",
    title: "Hibernate ORM: Mapping Relationships & Annotations (Theory)",
    excerpt: "A simple guide to understanding @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany in Hibernate.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Database", "Theory"],
    author: "Kartik Yadav Gurve",
    date: "May 27, 2026",
    readTime: 5,
    featured: true,
    content: `<h2 id="intro">Understanding Hibernate Relationships</h2>
<p>When you work with databases, tables are connected. In Hibernate, we use simple annotations to tell Java how these connections work.</p>
<h2 id="one-to-one">1. @OneToOne</h2>
<p><strong>Theory:</strong> One record in Table A is linked to exactly one record in Table B.</p>
<p><strong>Real-world example:</strong> One <strong>User</strong> has exactly one <strong>Profile</strong>.</p>
<h2 id="one-to-many">2. @OneToMany</h2>
<p><strong>Theory:</strong> One record in Table A can be linked to multiple records in Table B.</p>
<p><strong>Real-world example:</strong> One <strong>Category</strong> can have many <strong>Blog Posts</strong>.</p>
<h2 id="many-to-one">3. @ManyToOne</h2>
<p><strong>Theory:</strong> Many records in Table B belong to one record in Table A.</p>
<p><strong>Real-world example:</strong> Many <strong>Blog Posts</strong> belong to one <strong>Category</strong>.</p>
<h2 id="many-to-many">4. @ManyToMany</h2>
<p><strong>Theory:</strong> Many records in Table A can be linked to many records in Table B.</p>
<p><strong>Real-world example:</strong> A <strong>Student</strong> can enroll in many <strong>Courses</strong>.</p>`
  },

  // ── POST 8 (May 28, 2026) ──────────────────────────────────
  {
    slug: "hibernate-orm-crud-methods-merge-persist-remove",
    title: "Hibernate ORM: The Big 4 Methods (Save, Find, Update, Delete)",
    excerpt: "A simple guide to persist, merge, find, and remove – the 4 superhero methods of Hibernate.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfa3a995?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Database", "Theory", "CRUD"],
    author: "Kartik Yadav Gurve",
    date: "May 28, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">Your App's Conversation with the Database</h2>
<p>Hibernate uses 4 main methods to talk to your database.</p>
<h2 id="persist">1. persist() – "Save a New Record"</h2>
<p><strong>What it does:</strong> Inserts a brand new row into your database table.</p>
<h2 id="find">2. find() – "Find an Existing Record"</h2>
<p><strong>What it does:</strong> Fetches one record from the database using its ID.</p>
<h2 id="merge">3. merge() – "Update an Existing Record"</h2>
<p><strong>What it does:</strong> If the record exists → updates it. If not → inserts it.</p>
<h2 id="remove">4. remove() – "Delete a Record"</h2>
<p><strong>What it does:</strong> Permanently deletes a record from the database.</p>`
  },

  // ── POST 9 (May 29, 2026) ──────────────────────────────────
  {
    slug: "cant-hurt-me-book-takeaways-david-goggins",
    title: "I Finished Can't Hurt Me. My Brain Feels Heavier (In a Good Way).",
    excerpt: "David Goggins won't hug you. He'll call you soft. Here's what changed after finishing his book.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=400&fit=crop",
    tags: ["Books", "Mindset", "Motivation", "Self-Improvement"],
    author: "Kartik Yadav Gurve",
    date: "May 29, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="intro">No Summary. Just Feelings.</h2>
<p>I just closed <em>Can't Hurt Me</em> by David Goggins. This is what happened inside my head while reading it.</p>
<h2 id="cookie-jar">1. The Cookie Jar</h2>
<p>Goggins talks about a "Cookie Jar" — a mental collection of your past hard moments. When life gets hard, you reach in and say: <em>"I survived worse."</em></p>
<h2 id="accountability-mirror">2. The Accountability Mirror</h2>
<p>I wrote down my real problems. Not the cute versions. The ugly ones. The mirror didn't clap. It stared back.</p>
<h2 id="calloused-mind">3. A calloused mind > a comfortable one</h2>
<p>Goggins says: <strong>"You stop growing when you stop being uncomfortable."</strong></p>
<h2 id="verdict">Final verdict</h2>
<p>Would I recommend <em>Can't Hurt Me</em>? Yes — but only if you're ready to stop lying to yourself.</p>`
  },

  // ── POST 10 (May 30, 2026) ──────────────────────────────────
  {
    slug: "hibernate-session-factory-session-lifecycle-deep-dive",
    title: "Hibernate Deep Dive: SessionFactory, Session, and Their Lifecycle",
    excerpt: "Understanding Hibernate's heart: how SessionFactory is born, how Sessions live and die.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Database", "Deep Dive", "Performance"],
    author: "Kartik Yadav Gurve",
    date: "May 30, 2026",
    readTime: 6,
    featured: true,
    content: `<h2 id="the-brain-and-the-hands">The Brain and The Hands</h2>
<p>Think of Hibernate as a restaurant kitchen. <strong>SessionFactory</strong> is the head chef. <strong>Session</strong> is the line cook.</p>
<h2 id="sessionfactory">SessionFactory: The Heavyweight King</h2>
<p><strong>What it is:</strong> A factory that creates Session objects. It caches your database schema, your mappings, and your configuration.</p>
<p><strong>How many:</strong> ONE per database. Create it once.</p>
<h2 id="session">Session: The Short-Lived Worker</h2>
<p><strong>What it is:</strong> A single unit of work. One conversation between your app and the database.</p>
<p><strong>How many:</strong> Many. Open one per request.</p>`
  },

  // ── POST 11 (May 31, 2026) ──────────────────────────────────
  {
    slug: "hibernate-session-problems-transactions-lazy-loading",
    title: "Hibernate Session Problems: Transactions, Lazy Loading, and Session Management",
    excerpt: "3 biggest problems developers face with Hibernate sessions and how to fix them.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Session", "Transactions", "Lazy Loading"],
    author: "Kartik Yadav Gurve",
    date: "May 31, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="problem-1">Problem #1: The Forgotten Transaction</h2>
<p><strong>What happens:</strong> You call <code>persist()</code> but forget to begin/commit transaction. Nothing saves.</p>
<pre><code>// ❌ WRONG
Session session = factory.openSession();
session.persist(user);  // Nothing happens!
session.close();
// ✅ CORRECT
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.persist(user);
tx.commit();
session.close();</code></pre>
<h2 id="problem-2">Problem #2: LazyInitializationException</h2>
<p><strong>What happens:</strong> You load a User. Close Session. Then try to access <code>user.getOrders()</code>. BOOM.</p>
<p><strong>Fix:</strong> Load data before closing Session using JOIN FETCH.</p>
<pre><code>Query query = session.createQuery(
  "FROM User u JOIN FETCH u.orders WHERE u.id = :id"
);</code></pre>`
  },

  // ── POST 12 (June 1, 2026) ──────────────────────────────────
  {
    slug: "hibernate-n-plus-1-problem-and-first-level-cache",
    title: "2 Hibernate Concepts That Save Your Database: N+1 Problem & First-Level Cache",
    excerpt: "Why 10 users become 11 queries (and how to fix it). Plus the cache you already have.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "Performance", "Caching"],
    author: "Kartik Yadav Gurve",
    date: "June 1, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="concept-1">Concept 1: First-Level Cache</h2>
<p><strong>What it is:</strong> Every Hibernate Session has a built-in cache. It remembers every object you fetch.</p>
<p><strong>Result:</strong> Ask for the same object twice → one SQL query. Not two.</p>
<h2 id="concept-2">Concept 2: The N+1 Problem</h2>
<p><strong>What it is:</strong> You load N parent objects. Hibernate makes N extra queries to load their children. Total = N+1 queries.</p>
<p><strong>Example:</strong> 10 Users → 11 queries (1 for users + 10 for orders).</p>
<p><strong>Fix:</strong> Use JOIN FETCH.</p>
<pre><code>List&lt;User&gt; users = session.createQuery(
    "FROM User u JOIN FETCH u.orders"
).list();</code></pre>`
  },

  // ── POST 13 (June 2, 2026) ──────────────────────────────────
  {
    slug: "hibernate-second-level-cache-batch-fetching-jpa-vs-hibernate",
    title: "3 More Hibernate Concepts: Second-Level Cache, Batch Fetching & JPA vs Hibernate",
    excerpt: "Cache across sessions, fetch in batches, and understand JPA vs Hibernate.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Java", "Hibernate", "JPA", "Caching", "Performance"],
    author: "Kartik Yadav Gurve",
    date: "June 2, 2026",
    readTime: 4,
    featured: true,
    content: `<h2>Concept 1: Second-Level Cache</h2>
<p><strong>First-Level Cache</strong> = per Session.</p>
<p><strong>Second-Level Cache</strong> = shared across Sessions.</p>
<h2>Concept 2: Batch Fetching</h2>
<p><strong>Problem:</strong> JOIN FETCH loads ALL child records at once. If a user has 10,000 orders → memory crash.</p>
<p><strong>Solution:</strong> @BatchSize(size=20) — fetches 20 orders at a time.</p>
<h2>Concept 3: JPA vs Hibernate</h2>
<p><strong>JPA</strong> = A standard (rules everyone agrees on).</p>
<p><strong>Hibernate</strong> = A tool that follows JPA rules (plus extra features).</p>`
  },

  // ── POST 14 (June 3, 2026) ──────────────────────────────────
  {
    slug: "git-basics-every-developer-should-know",
    title: "Git Basics: 5 Commands Every Developer Must Know",
    excerpt: "No more git panic. Just clone, commit, push, pull, and branch — explained simply.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
    tags: ["Git", "GitHub", "Version Control", "Beginner"],
    author: "Kartik Yadav Gurve",
    date: "June 3, 2026",
    readTime: 3,
    featured: true,
    content: `<h2>Command 1: git clone</h2>
<p><strong>What it does:</strong> Download a repository from GitHub.</p>
<pre><code>git clone https://github.com/username/repo-name.git</code></pre>
<h2>Command 2: git add + git commit</h2>
<p><strong>What it does:</strong> Save your changes locally.</p>
<pre><code>git add .
git commit -m "Your message"</code></pre>
<h2>Command 3: git push</h2>
<p><strong>What it does:</strong> Upload your commits to GitHub.</p>
<pre><code>git push origin main</code></pre>
<h2>Command 4: git pull</h2>
<p><strong>What it does:</strong> Download latest changes from GitHub.</p>
<pre><code>git pull origin main</code></pre>
<h2>Command 5: git branch</h2>
<p><strong>What it does:</strong> Create and switch between branches.</p>
<pre><code>git branch feature-xyz
git checkout feature-xyz
git checkout -b new-branch</code></pre>`
  },

  // ── POST 15 (June 4, 2026) ──────────────────────────────────
  {
    slug: "docker-basics-every-developer-needs",
    title: "Docker Basics: 5 Commands That Will Change How You Develop",
    excerpt: "Stop saying 'it works on my machine' — containerize your apps.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800&h=400&fit=crop",
    tags: ["Docker", "DevOps", "Containers"],
    author: "Kartik Yadav Gurve",
    date: "June 4, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="what-is-docker">What is Docker?</h2>
<p>Docker packages your app + all its dependencies into a container. That container runs anywhere.</p>
<h2 id="command-1">1. docker pull</h2>
<pre><code>docker pull node:18
docker pull postgres:15</code></pre>
<h2 id="command-2">2. docker run</h2>
<pre><code>docker run -d -p 3000:3000 node:18
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecret postgres:15</code></pre>
<h2 id="command-3">3. docker ps</h2>
<pre><code>docker ps
docker ps -a</code></pre>
<h2 id="command-4">4. docker stop / start</h2>
<pre><code>docker stop container_name
docker start container_name</code></pre>
<h2 id="command-5">5. docker exec</h2>
<pre><code>docker exec -it container_name bash</code></pre>`
  },

  // ── POST 16 (June 5, 2026) ──────────────────────────────────
  {
    slug: "rest-api-vs-graphql-simple-comparison",
    title: "REST API vs GraphQL: Which One Should You Learn First?",
    excerpt: "Simple comparison with real examples — no complex theory.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["API", "GraphQL", "REST", "Backend"],
    author: "Kartik Yadav Gurve",
    date: "June 5, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="the-problem">The Problem Both Solve</h2>
<p>Your frontend needs data from your backend. REST and GraphQL are two different ways to build that conversation.</p>
<h2 id="rest-explained">REST: One Endpoint = One Resource</h2>
<pre><code>GET /posts        → returns ALL posts
GET /posts/1      → returns post #1
GET /users/1      → returns user #1</code></pre>
<h2 id="graphql-explained">GraphQL: One Endpoint = Ask For Exactly What You Need</h2>
<pre><code>query {
  post(id: 1) {
    title
    content
    author { name }
  }
}</code></pre>
<h2 id="which-to-learn-first">Which Should You Learn First?</h2>
<p><strong>Learn REST first. Always.</strong> 90% of APIs are still REST.</p>`
  },

  // ── POST 17 (June 6, 2026) ──────────────────────────────────
  {
    slug: "top-5-vs-code-extensions-for-developers",
    title: "Top 5 VS Code Extensions That Make Coding 10x Easier",
    excerpt: "Prettier, GitLens, Thunder Client, Live Server, Error Lens — my favorite extensions.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    tags: ["VS Code", "Tools", "Productivity"],
    author: "Kartik Yadav Gurve",
    date: "June 6, 2026",
    readTime: 2,
    featured: true,
    content: `<h2 id="why-extensions">Why These 5?</h2>
<p>I tested 50+ extensions. These 5 stayed installed.</p>
<h2 id="1-prettier">1. Prettier — Format Everything</h2>
<pre><code>// Before
const x=   "hello";
// After save
const x = "hello";</code></pre>
<h2 id="2-gitlens">2. GitLens — See Who Wrote What</h2>
<p>Hover over any line of code → See who wrote it and when.</p>
<h2 id="3-thunder-client">3. Thunder Client — Test APIs Without Postman</h2>
<p>Postman inside VS Code.</p>
<h2 id="4-live-server">4. Live Server — Instant HTML Reload</h2>
<p>Right-click HTML → Open with Live Server. Save → Browser refreshes.</p>
<h2 id="5-error-lens">5. Error Lens — See Errors Inline</h2>
<pre><code>console.log(x)  // ❌ 'x' is not defined</code></pre>`
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
    content: `<h2 id="the-confusion">The Confusion</h2>
<p>Spring? Spring Boot? Same name. Different things.</p>
<p><strong>Spring Boot is Spring, but pre-configured.</strong></p>
<h2 id="what-is-spring">What is Spring?</h2>
<p>Spring is a Java framework for building enterprise apps.</p>
<h2 id="what-is-spring-boot">What is Spring Boot?</h2>
<p>Spring Boot is Spring + Auto-configuration. It guesses what you need and sets it up.</p>
<h2 id="comparison">Quick Comparison</h2>
<p><strong>Spring:</strong> 30+ minutes setup, manual configuration, external Tomcat</p>
<p><strong>Spring Boot:</strong> 2 minutes setup, auto-configuration, built-in Tomcat</p>`
  },

  // ── POST 19 (June 8, 2026) ──────────────────────────────────
  {
    slug: "create-first-spring-boot-project-step-by-step",
    title: "Create Your First Spring Boot Project: Step by Step",
    excerpt: "From zero to a running Spring Boot app in 5 minutes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Beginner", "Tutorial"],
    author: "Kartik Yadav Gurve",
    date: "June 8, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="step-1">Step 1: Go to start.spring.io</h2>
<p>Open <strong>https://start.spring.io</strong></p>
<h2 id="step-2">Step 2: Fill the Form</h2>
<ul>
  <li><strong>Project:</strong> Maven</li>
  <li><strong>Language:</strong> Java</li>
  <li><strong>Spring Boot:</strong> 3.2.x</li>
  <li><strong>Group:</strong> com.example</li>
  <li><strong>Artifact:</strong> my-first-app</li>
  <li><strong>Java:</strong> 17</li>
</ul>
<h2 id="step-3">Step 3: Add Dependencies</h2>
<ul>
  <li>Spring Web</li>
</ul>
<h2 id="step-4">Step 4: Generate and Download</h2>
<p>Click <strong>GENERATE</strong>. Download the zip.</p>
<h2 id="step-5">Step 5: Create Your First API</h2>
<pre><code>@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}</code></pre>
<h2 id="step-6">Step 6: Run the App</h2>
<pre><code>./mvnw spring-boot:run</code></pre>`
  },

  // ── POST 20 (June 9, 2026) ──────────────────────────────────
  {
    slug: "springbootapplication-annotation-explained",
    title: "@SpringBootApplication: The Most Important Annotation Explained",
    excerpt: "It's not magic — it's 3 annotations in one.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Annotations", "Beginner"],
    author: "Kartik Yadav Gurve",
    date: "June 9, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="the-mystery">The Mystery of @SpringBootApplication</h2>
<p><code>@SpringBootApplication</code> = <code>@Configuration</code> + <code>@EnableAutoConfiguration</code> + <code>@ComponentScan</code></p>
<h2 id="1-configuration">1. @Configuration</h2>
<p>Marks this class as a source of bean definitions.</p>
<h2 id="2-enableautoconfiguration">2. @EnableAutoConfiguration</h2>
<p>The real magic. Tells Spring Boot to automatically configure things based on dependencies you added.</p>
<h2 id="3-componentscan">3. @ComponentScan</h2>
<p>Tells Spring: "Scan this package and all sub-packages for components."</p>`
  },

  // ── POST 21 (June 10, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-annotations-every-developer-should-know",
    title: "Spring Boot Annotations: 7 Annotations Every Developer Should Know",
    excerpt: "@RestController, @Autowired, @Service, @Repository, @PathVariable, @RequestBody, @GetMapping — explained.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Java", "Annotations", "REST API"],
    author: "Kartik Yadav Gurve",
    date: "June 10, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="1-restcontroller">1. @RestController</h2>
<p>Marks a class as a REST API controller.</p>
<h2 id="2-getmapping">2. @GetMapping</h2>
<p>Map HTTP GET requests to Java methods.</p>
<h2 id="3-postmapping">3. @PostMapping</h2>
<p>Map HTTP POST requests.</p>
<h2 id="4-pathvariable">4. @PathVariable</h2>
<p>Extract values from the URL path.</p>
<h2 id="5-requestbody">5. @RequestBody</h2>
<p>Convert JSON to Java object.</p>
<h2 id="6-service">6. @Service</h2>
<p>Mark business logic class.</p>
<h2 id="7-autowired">7. @Autowired</h2>
<p>Inject dependencies automatically.</p>`
  },

  // ── POST 22 (June 11, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-rest-api-crud-tutorial",
    title: "Building a Complete REST API (CRUD) with Spring Boot",
    excerpt: "Create, Read, Update, Delete — build a complete User Management API.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "REST API", "CRUD", "Java"],
    author: "Kartik Yadav Gurve",
    date: "June 11, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="model">1. The User Model</h2>
<pre><code>@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}</code></pre>
<h2 id="repository">2. Repository</h2>
<pre><code>@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {}</code></pre>
<h2 id="service">3. Service Layer</h2>
<pre><code>@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List&lt;User&gt; getAll() {
        return userRepository.findAll();
    }
    
    public User create(User user) {
        return userRepository.save(user);
    }
}</code></pre>
<h2 id="controller">4. Controller</h2>
<pre><code>@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List&lt;User&gt; getAll() {
        return userService.getAll();
    }
    
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.create(user);
    }
}</code></pre>`
  },

  // ── POST 23 (June 12, 2026) ──────────────────────────────────
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
    content: `<h2 id="the-old-way">The old way (ugly)</h2>
<pre><code>@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {
    try {
        return userService.findById(id);
    } catch (Exception e) {
        return null;
    }
}</code></pre>
<h2 id="the-better-way">The better way</h2>
<pre><code>public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User with id " + id + " not found");
    }
}</code></pre>
<pre><code>@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity&lt;String&gt; handleNotFound(UserNotFoundException ex) {
        return new ResponseEntity&lt;&gt;(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}</code></pre>`
  },

  // ── POST 24 (June 13, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-jpa-database-guide",
    title: "Spring Boot with Database: JPA Made Simple",
    excerpt: "Connect your Spring Boot app to a real database.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "JPA", "Database", "Hibernate"],
    author: "Kartik Yadav Gurve",
    date: "June 13, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="dependencies">1. Add dependencies</h2>
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
<pre><code>spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=yourpass
spring.jpa.hibernate.ddl-auto=update</code></pre>
<h2 id="repository">3. JPA Repository</h2>
<pre><code>@Repository
public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {
    List&lt;Product&gt; findByPriceLessThan(double price);
}</code></pre>`
  },

  // ── POST 25 (June 14, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-profiles-guide",
    title: "Spring Boot Profiles: Dev, Test, Prod Made Easy",
    excerpt: "Different settings for different environments.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Profiles", "Configuration"],
    author: "Kartik Yadav Gurve",
    date: "June 14, 2026",
    readTime: 3,
    featured: true,
    content: `<p>Development: localhost database, debug logs. Production: cloud database, error logs only.</p>
<h2 id="solution">Solution: Create multiple property files</h2>
<pre><code>src/main/resources/
├── application.properties
├── application-dev.properties
├── application-test.properties
└── application-prod.properties</code></pre>
<h2 id="example">Example: Dev vs Prod</h2>
<p><strong>application-dev.properties:</strong></p>
<pre><code>spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
logging.level.root=DEBUG</code></pre>
<p><strong>application-prod.properties:</strong></p>
<pre><code>spring.datasource.url=jdbc:postgresql://prod-server:5432/mydb
spring.jpa.show-sql=false
logging.level.root=ERROR</code></pre>
<h2 id="activate">How to activate</h2>
<pre><code>spring.profiles.active=dev</code></pre>`
  },

  // ── POST 26 (June 15, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-security-basics-guide",
    title: "Spring Boot Security: Basic Auth in 10 Minutes",
    excerpt: "Add username/password protection to your APIs.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Security", "Authentication", "Java"],
    author: "Kartik Yadav Gurve",
    date: "June 15, 2026",
    readTime: 3,
    featured: true,
    content: `<h2 id="what-you-need">Add one dependency</h2>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
<h2 id="default-login">Default credentials</h2>
<p>Username: <code>user</code></p>
<p>Password: (look in console logs)</p>
<h2 id="custom-password">Set your own password</h2>
<pre><code>spring.security.user.name=admin
spring.security.user.password=admin123</code></pre>
<h2 id="url-permissions">Control who can access what</h2>
<pre><code>@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .httpBasic();
    return http.build();
}</code></pre>`
  },

  // ── POST 27 (June 16, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-jwt-authentication-guide",
    title: "JWT Authentication in Spring Boot: Stateless Security",
    excerpt: "Replace Basic Auth with JWT tokens. Modern and scalable.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "JWT", "Security", "Authentication"],
    author: "Kartik Yadav Gurve",
    date: "June 16, 2026",
    readTime: 4,
    featured: true,
    content: `<p>Basic Auth sends password with every request. Bad for security. JWT is better.</p>
<h2 id="what-is-jwt">What is JWT?</h2>
<p>JWT = JSON Web Token. A string that contains user info. Server gives it once. Client sends it with every request.</p>
<h2 id="dependencies">1. Add JWT dependencies</h2>
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
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
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
                .requestMatchers("/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}</code></pre>`
  },

  // ── POST 28 (June 17, 2026) ──────────────────────────────────
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
    content: `<p>You have Spring Boot APIs. You have React frontend. Now make them talk to each other.</p>
<h2 id="the-problem">The Problem: CORS</h2>
<p>React runs on <code>http://localhost:3000</code>. Spring Boot runs on <code>http://localhost:8080</code>.</p>
<h2 id="cors-config">1. Enable CORS in Spring Boot</h2>
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
<h2 id="react-call">2. React: Call Spring Boot API</h2>
<pre><code>// api.js
const API_URL = "http://localhost:8080/api";
export const getUsers = async () => {
    const response = await fetch(\`${API_URL}/users\`);
    return response.json();
};</code></pre>
<h2 id="react-component">3. React Component Example</h2>
<pre><code>import React, { useState, useEffect } from 'react';
import { getUsers } from './api';
function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(setUsers);
    }, []);
    return (
        &lt;ul&gt;
            {users.map(user => &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)}
        &lt;/ul&gt;
    );
}</code></pre>`
  },

  // ── POST 29 (June 18, 2026) ──────────────────────────────────
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
    content: `<p>You write code. But does it work? Testing gives you confidence.</p>
<h2 id="types">Two Types of Tests</h2>
<p><strong>Unit Tests:</strong> Test one thing in isolation.</p>
<p><strong>Integration Tests:</strong> Test everything together.</p>
<h2 id="unit-test">2. Unit Test with Mockito</h2>
<pre><code>@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserService userService;
    
    @Test
    void shouldReturnUserWhenIdExists() {
        User user = new User();
        user.setId(1L);
        user.setName("Kartik");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        User result = userService.getUserById(1L);
        assertEquals("Kartik", result.getName());
    }
}</code></pre>
<h2 id="integration-test">3. Integration Test with @WebMvcTest</h2>
<pre><code>@WebMvcTest(UserController.class)
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;
    
    @Test
    void shouldReturnUser() throws Exception {
        User user = new User();
        user.setId(1L);
        user.setName("Kartik");
        when(userService.getUserById(1L)).thenReturn(user);
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Kartik"));
    }
}</code></pre>`
  },

  // ── POST 30 (June 19, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-docker-guide",
    title: "Spring Boot + Docker: Containerize Your App",
    excerpt: "Package your Spring Boot app as a Docker container. Deploy anywhere.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Docker", "DevOps", "Deployment"],
    author: "Kartik Yadav Gurve",
    date: "June 19, 2026",
    readTime: 3,
    featured: true,
    content: `<p>You built a Spring Boot app. Now package it as a Docker container.</p>
<h2 id="step1">1. Build your JAR</h2>
<pre><code>./mvnw clean package</code></pre>
<h2 id="step2">2. Create Dockerfile</h2>
<pre><code>FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]</code></pre>
<h2 id="step3">3. Build Docker Image</h2>
<pre><code>docker build -t myapp .</code></pre>
<h2 id="step4">4. Run Container</h2>
<pre><code>docker run -p 8080:8080 myapp</code></pre>
<h2 id="docker-compose">Docker Compose</h2>
<pre><code>version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - postgres
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/mydb</code></pre>
<pre><code>docker-compose up -d</code></pre>`
  },

  // ── POST 31 (June 20, 2026) ──────────────────────────────────
  {
    slug: "spring-boot-kubernetes-deployment-guide",
    title: "Spring Boot + Kubernetes: Deploy at Scale",
    excerpt: "Take your Docker container to Kubernetes. Scale, manage, and deploy like a pro.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Spring Boot", "Kubernetes", "DevOps", "Deployment"],
    author: "Kartik Yadav Gurve",
    date: "June 20, 2026",
    readTime: 4,
    featured: true,
    content: `<p>You have a Docker container. Now run it on Kubernetes.</p>
<h2 id="what-is-kubernetes">What is Kubernetes?</h2>
<p>Kubernetes (K8s) runs your containers in production. It handles scaling, self-healing, load balancing, and rolling updates.</p>
<h2 id="deployment">1. Create Deployment.yaml</h2>
<pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_DATASOURCE_URL
          value: jdbc:postgresql://postgres-service:5432/mydb</code></pre>
<h2 id="service">2. Create Service.yaml</h2>
<pre><code>apiVersion: v1
kind: Service
metadata:
  name: spring-boot-service
spec:
  selector:
    app: spring-boot-app
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer</code></pre>
<h2 id="deploy-commands">3. Deploy to Kubernetes</h2>
<pre><code>kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get services</code></pre>
<h2 id="scale">4. Scale Your App</h2>
<pre><code>kubectl scale deployment spring-boot-app --replicas=5</code></pre>
<h2 id="update">5. Rolling Update</h2>
<pre><code>kubectl set image deployment/spring-boot-app app=myapp:v2
kubectl rollout status deployment/spring-boot-app</code></pre>
<h2 id="summary">Summary</h2>
<ul>
  <li>✅ Deployment.yaml defines how to run your app</li>
  <li>✅ Service.yaml exposes your app to the world</li>
  <li>✅ Scale with one command</li>
  <li>✅ Rolling updates = zero downtime</li>
</ul>
<p>Kubernetes = run your app at scale. No downtime. No excuses. ☸️</p>`
  },

  // ── POST 32 (June 21, 2026) ──────────────────────────────────
  {
    slug: "microservices-architecture-basics",
    title: "Microservices Architecture: Breaking the Monolith",
    excerpt: "Understanding microservices: what they are, why they exist, and when to use them.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Microservices", "Architecture", "System Design"],
    author: "Kartik Yadav Gurve",
    date: "June 21, 2026",
    readTime: 5,
    featured: true,
    content: `<h2 id="what-are-microservices">What Are Microservices?</h2>
<p>Microservices are small, independent services that work together to form an application.</p>
<h2 id="monolith-vs-microservices">Monolith vs Microservices</h2>
<p><strong>Monolith:</strong> One big codebase. Everything together.</p>
<p><strong>Microservices:</strong> Many small services. Each does one thing well.</p>
<h2 id="key-benefits">Key Benefits</h2>
<ul>
  <li><strong>Independent deployment</strong> — Deploy one service without affecting others</li>
  <li><strong>Team autonomy</strong> — Different teams own different services</li>
  <li><strong>Technology freedom</strong> — Use different tech stacks per service</li>
  <li><strong>Scalability</strong> — Scale only what needs scaling</li>
</ul>
<h2 id="challenges">Challenges</h2>
<ul>
  <li><strong>Complexity</strong> — Many services = many things to manage</li>
  <li><strong>Network latency</strong> — Services talk over network</li>
  <li><strong>Data consistency</strong> — Harder to keep data in sync</li>
</ul>
<p><strong>Pro tip:</strong> Start with a monolith. Split into microservices only when you need to.</p>`
  },

  // ── POST 33 (June 22, 2026) ──────────────────────────────────
  {
    slug: "system-design-basics-load-balancing",
    title: "System Design 101: Load Balancing Explained",
    excerpt: "What happens when millions of users hit your app? Load balancing saves the day.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["System Design", "Load Balancing", "Scalability"],
    author: "Kartik Yadav Gurve",
    date: "June 22, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="the-problem">The Problem</h2>
<p>One server can handle only so many requests. When traffic grows, you need more servers.</p>
<h2 id="what-is-load-balancing">What is Load Balancing?</h2>
<p>A load balancer sits between users and your servers. It distributes incoming requests across multiple servers.</p>
<h2 id="algorithms">Load Balancing Algorithms</h2>
<p><strong>Round Robin:</strong> Requests go to servers in order (1,2,3,1,2,3...)</p>
<p><strong>Least Connections:</strong> Send request to the server with fewest active connections</p>
<p><strong>IP Hash:</strong> Same user always goes to same server (good for sessions)</p>
<p><strong>Weighted:</strong> Better servers get more traffic</p>
<h2 id="types">Types of Load Balancers</h2>
<p><strong>Hardware:</strong> F5, Citrix — expensive, powerful</p>
<p><strong>Software:</strong> Nginx, HAProxy, AWS ELB — cheaper, flexible</p>
<h2 id="best-practices">Best Practices</h2>
<ol>
  <li>Always use health checks — don't send traffic to dead servers</li>
  <li>Use SSL termination at the load balancer</li>
  <li>Sticky sessions when needed</li>
</ol>`
  },

  // ── POST 34 (June 23, 2026) ──────────────────────────────────
  {
    slug: "caching-strategies-system-design",
    title: "Caching Strategies: Making Your App Blazing Fast",
    excerpt: "Cache everything? Not quite. Learn when and what to cache.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Caching", "System Design", "Performance"],
    author: "Kartik Yadav Gurve",
    date: "June 23, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="what-is-caching">What is Caching?</h2>
<p>Storing a copy of data so future requests are faster.</p>
<h2 id="cache-levels">Cache Levels</h2>
<p><strong>Browser Cache:</strong> Store static files (CSS, JS, images) locally</p>
<p><strong>CDN:</strong> Edge servers close to users</p>
<p><strong>Application Cache:</strong> In-memory cache (Redis, Memcached)</p>
<p><strong>Database Cache:</strong> Database query cache</p>
<h2 id="strategies">Caching Strategies</h2>
<p><strong>Cache-Aside:</strong> App checks cache first. If miss, gets from DB and caches.</p>
<p><strong>Write-Through:</strong> Write to cache AND DB at the same time.</p>
<p><strong>Write-Back:</strong> Write to cache first. Write to DB later.</p>
<h2 id="when-to-cache">When to Cache</h2>
<ul>
  <li>✅ Frequently read data</li>
  <li>✅ Data that doesn't change often</li>
  <li>✅ Expensive computations</li>
  <li>❌ Frequently changing data</li>
  <li>❌ Data that needs real-time accuracy</li>
</ul>
<h2 id="eviction">Cache Eviction Policies</h2>
<p><strong>LRU:</strong> Least Recently Used → Remove oldest accessed items</p>
<p><strong>TTL:</strong> Time To Live → Items expire after set time</p>
<p><strong>FIFO:</strong> First In First Out → Remove oldest added items</p>`
  },

  // ── POST 35 (June 24, 2026) ──────────────────────────────────
  {
    slug: "database-sharding-explained",
    title: "Database Sharding: When One Database Isn't Enough",
    excerpt: "Split your database across multiple servers. Scale beyond limits.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["Database", "Sharding", "Scalability", "System Design"],
    author: "Kartik Yadav Gurve",
    date: "June 24, 2026",
    readTime: 5,
    featured: true,
    content: `<h2 id="what-is-sharding">What is Sharding?</h2>
<p>Sharding splits your database into smaller parts called "shards". Each shard is a separate database.</p>
<h2 id="why-shard">Why Shard?</h2>
<p>One database has limits: storage, CPU, memory, connection limits. Sharding breaks these limits.</p>
<h2 id="sharding-strategies">Sharding Strategies</h2>
<p><strong>Range-based:</strong> Split by data ranges. e.g., User IDs 1-1000, 1001-2000</p>
<p><strong>Hash-based:</strong> Hash the key. Use the hash to decide which shard.</p>
<p><strong>Directory-based:</strong> Lookup table that maps keys to shards.</p>
<h2 id="challenges">Challenges</h2>
<ul>
  <li><strong>Cross-shard queries</strong> — Joining data across shards is hard</li>
  <li><strong>Resharding</strong> — Adding new shards means moving data</li>
  <li><strong>Complexity</strong> — More code, more ops</li>
</ul>
<h2 id="when-to-shard">When to Shard?</h2>
<p><strong>Shard when:</strong></p>
<ul>
  <li>Your database is at its limits</li>
  <li>You have billions of rows</li>
  <li>You need high write throughput</li>
</ul>`
  },

  // ── POST 36 (June 25, 2026) ──────────────────────────────────
  {
    slug: "api-gateway-pattern-system-design",
    title: "API Gateway Pattern: One Door to All Your Services",
    excerpt: "A single entry point for all your microservices. Authentication, routing, and more.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["API Gateway", "Microservices", "System Design"],
    author: "Kartik Yadav Gurve",
    date: "June 25, 2026",
    readTime: 4,
    featured: true,
    content: `<h2 id="what-is-api-gateway">What is an API Gateway?</h2>
<p>An API Gateway is a server that acts as a single entry point for all client requests to your microservices.</p>
<h2 id="why-use">Why Use an API Gateway?</h2>
<ul>
  <li><strong>Single URL</strong> — Clients talk to one endpoint, not many</li>
  <li><strong>Authentication</strong> — Handle auth once at the gateway</li>
  <li><strong>Rate Limiting</strong> — Protect your services from abuse</li>
  <li><strong>Request Routing</strong> — Send requests to the right service</li>
  <li><strong>Logging & Monitoring</strong> — One place for all logs</li>
</ul>
<h2 id="how-it-works">How It Works</h2>
<pre><code>Client → API Gateway → Service A
                    → Service B
                    → Service C</code></pre>
<h2 id="popular-tools">Popular API Gateway Tools</h2>
<p><strong>Kong</strong> — Open-source, plugin ecosystem</p>
<p><strong>Nginx</strong> — Fast, reliable, widely used</p>
<p><strong>AWS API Gateway</strong> — Managed, serverless</p>
<p><strong>Spring Cloud Gateway</strong> — Java-based, Spring ecosystem</p>
<h2 id="best-practices">Best Practices</h2>
<ol>
  <li>Keep your gateway lightweight — no business logic</li>
  <li>Use caching for static responses</li>
  <li>Implement circuit breakers</li>
  <li>Monitor everything</li>
</ol>`
  }
];

// ─── HELPER FUNCTIONS ──────────────────────────────────────────

function getAllPosts() {
  return [...POSTS_DB].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getPostBySlug(slug) {
  return POSTS_DB.find((p) => p.slug === slug) || null;
}

function getPostsByTag(tag) {
  return POSTS_DB.filter((p) => p.tags.includes(tag));
}

function getRelatedPosts(slug, limit) {
  if (limit === undefined) limit = 3;
  const post = getPostBySlug(slug);
  if (!post) return [];
  return POSTS_DB.filter(
    (p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t))
  ).slice(0, limit);
}

function getAllTags() {
  const tagSet = new Set();
  POSTS_DB.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}

function searchPosts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return getAllPosts();
  return POSTS_DB.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}