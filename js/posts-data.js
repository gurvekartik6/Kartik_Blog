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

  // ── POST 1 (May 21, 2025) ──────────────────────────────────
  {
    slug:       "my-love-and-passion-about-coding-since-2018",
    title:      "My Love and Passion About Coding Since 2018 When I Made RPG Maker Games",
    excerpt:    "My love and passion about coding since 2018 when I made RPG maker games",
    emoji:      "",
    tags:       ["Personal", "Coding", "Passion"],
    author:     "Kartik Yadav Gurve",
    date:       "May 21, 2025",
    readTime:   5,
    featured:   true,
    content: `
<h2 id="intro">My Love and Passion About Coding Since 2019</h2>
<p>I made RPG maker games in 2019 and that started my coding journey.</p>
    `
  },

  // ── POST 2 (May 22, 2025) ──────────────────────────────────
  {
    slug:       "the-idea-about-the-blogging-website",
    title:      "The Idea About the Blogging Website",
    excerpt:    "The idea about the blogging website and why I built it this way",
    emoji:      "",
    tags:       ["Blogging", "Web Development"],
    author:     "Kartik Yadav Gurve",
    date:       "May 22, 2025",
    readTime:   4,
    featured:   true,
    content: `
<h2 id="intro">The Idea About the Blogging Website</h2>
<p>The idea about the blogging website came from wanting to share my journey.</p>
    `
  },

  // ── POST 3 (May 23, 2025) ──────────────────────────────────
  {
    slug:       "how-i-work-as-instructor-at-sai-ambrosia",
    title:      "How I Work as an Instructor at Sai Ambrosia After 10th",
    excerpt:    "After 10th how I work as instructor at Sai Ambrosia Education",
    emoji:      "",
    tags:       ["Teaching", "Power BI"],
    author:     "Kartik Yadav Gurve",
    date:       "May 23, 2025",
    readTime:   4,
    featured:   true,
    content: `
<h2 id="intro">How I Work as an Instructor at Sai Ambrosia After 10th</h2>
<p>After 10th I started teaching Power BI at Sai Ambrosia Education.</p>
    `
  },

  // ── POST 4 (May 24, 2025) ──────────────────────────────────
  {
    slug:       "tech-skills-i-have-learned",
    title:      "The Tech Skills I Have Learned",
    excerpt:    "The tech skills I have learned over the years",
    emoji:      "",
    tags:       ["Skills", "Learning"],
    author:     "Kartik Yadav Gurve",
    date:       "May 24, 2025",
    readTime:   4,
    featured:   true,
    content: `
<h2 id="intro">The Tech Skills I Have Learned</h2>
<p>The tech skills I have learned include Android, Kotlin, Firebase, ML, Power BI, Docker and more.</p>
    `
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
  return POSTS_DB.find(p => p.slug === slug) || null;
}

/**
 * Get posts filtered by tag.
 */
function getPostsByTag(tag) {
  return POSTS_DB.filter(p => p.tags.includes(tag));
}

/**
 * Get related posts (same tags, different slug).
 */
function getRelatedPosts(slug, limit = 3) {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return POSTS_DB
    .filter(p => p.slug !== slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, limit);
}

/**
 * Get all unique tags across all posts.
 */
function getAllTags() {
  const tagSet = new Set();
  POSTS_DB.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  return [...tagSet].sort();
}

/**
 * Search posts by query (title + excerpt + tags).
 */
function searchPosts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return getAllPosts();
  return POSTS_DB.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
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
    date:       "Jun 1, 2025",
    readTime:   5,
    featured:   false,
    content: `
      <h2 id="section-1">Section Title</h2>
      <p>Your content here...</p>
    `
  },

──────────────────────────────────────────────────────────── */