# 🚀 Kartik Yadav Gurve — Personal Blog Website

A visually stunning, 3D-enhanced personal blog with dark/light mode, built with Three.js, Bootstrap 5, and Vanilla JS.

---

## 📁 File Structure

```
blog-website/
├── index.html          # Homepage — hero, blog grid, newsletter, testimonials
├── blog-post.html      # Single post — TOC, copy-code, quote highlight, comments
├── about.html          # About — timeline, skill rings, fun facts
├── contact.html        # Contact — floating form, social links
├── css/
│   ├── theme.css       # CSS variables for dark/light mode
│   └── style.css       # All global styles, components, animations
├── js/
│   ├── main.js         # Core: cursor, scroll, copy-code, quote-highlight, typewriter
│   ├── three-scene.js  # Three.js: loading animation + hero 3D scene
│   ├── theme-toggle.js # Dark/light mode with OS preference + localStorage
│   └── newsletter.js   # Mailchimp free-tier JSONP integration
└── assets/
    └── images/         # Drop your images here
```

---

## ⚙️ Quick Start

1. **Clone or extract** the project folder.
2. Open `index.html` in a modern browser — no build step needed.
3. For live-reload during development, use VS Code's Live Server extension.

---

## 🎨 Customization

### Personal Info
Search and replace across all `.html` files:
- `Kartik Yadav Gurve` → your name
- `kartik@example.com` → your email
- `VNIT Nagpur` → your university
- `Mountreach Solutions` → your company
- `LazyCoder's` → your team name

### Colors
Edit `css/theme.css` — all colors are CSS variables:
```css
:root {                          /* Light mode */
  --accent-purple: #7c3aed;      /* Primary accent */
  --accent-cyan:   #0891b2;      /* Secondary accent */
}
[data-theme="dark"] {            /* Dark mode */
  --accent-purple: #a78bfa;
  --accent-cyan:   #22d3ee;
}
```

### Fonts
Change in both `css/style.css` (Google Fonts import) and the `font-family` declarations. Current stack: **Syne** (headings) + **DM Sans** (body) + **JetBrains Mono** (code).

---

## 📧 Mailchimp Free-Tier Setup

1. Sign up at [mailchimp.com](https://mailchimp.com) (free tier = 500 contacts, 1,000 emails/month).
2. Go to **Audience → Signup forms → Embedded forms**.
3. Copy your form's action URL. It looks like:
   ```
   https://yoursite.us1.list-manage.com/subscribe/post?u=ABC&id=XYZ
   ```
4. Open `js/newsletter.js` and update:
   ```javascript
   const MC_CONFIG = {
     actionUrl: 'https://yoursite.us1.list-manage.com/subscribe/post-json',
     u: 'ABC',          // your "u" param
     id: 'XYZ',         // your "id" param
   };
   ```
5. The integration uses **JSONP** — no server required, works on static hosting.

---

## 🗄️ MongoDB Integration (Optional Backend)

For a dynamic blog (post storage, comments, contact form submissions):

### 1. MongoDB Atlas Free Tier (M0 — 512 MB)
- Sign up at [cloud.mongodb.com](https://cloud.mongodb.com)
- Create a **free M0 cluster**
- Get your connection string:
  ```
  mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/blog
  ```

### 2. Simple Express API (Node.js)
```bash
npm init -y
npm install express mongoose cors dotenv
```

**server.js**
```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

// Post schema
const postSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  excerpt: String,
  content: String,
  tags: [String],
  author: { type: String, default: 'Kartik Yadav Gurve' },
  readTime: Number,
  publishedAt: { type: Date, default: Date.now },
});
const Post = mongoose.model('Post', postSchema);

// Comment schema
const commentSchema = new mongoose.Schema({
  postSlug: String,
  name: String,
  email: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
});
const Comment = mongoose.model('Comment', commentSchema);

// Contact schema
const contactSchema = new mongoose.Schema({
  name: String, email: String, subject: String,
  message: String, topic: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', contactSchema);

// ── Routes ──────────────────────────────────────────────
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().sort({ publishedAt: -1 }).select('-content');
  res.json(posts);
});

app.get('/api/posts/:slug', async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

app.post('/api/comments', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json({ ok: true });
});

app.get('/api/comments/:slug', async (req, res) => {
  const comments = await Comment.find({ postSlug: req.params.slug });
  res.json(comments);
});

app.post('/api/contact', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ ok: true });
});

app.listen(process.env.PORT || 3000, () =>
  console.log('API running on port 3000'));
```

**.env**
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/blog
PORT=3000
```

### 3. Connect frontend to API
In `contact.html`, replace the `submitContact()` mock with:
```javascript
const res = await fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message, topic: selectedTopic })
});
```

### 4. Deploy API (free options)
- **Railway** — [railway.app](https://railway.app) (free tier, auto-deploys from GitHub)
- **Render** — [render.com](https://render.com) (free web service)
- **Cyclic** — [cyclic.sh](https://cyclic.sh) (serverless, free)

---

## 🌐 Static Hosting (Frontend)

Deploy the HTML/CSS/JS files for free on:
- **Vercel** — drag & drop or GitHub integration
- **Netlify** — `netlify deploy --dir .`
- **GitHub Pages** — push to `gh-pages` branch

---

## 📋 Copy Code Button

Automatically added to every `<pre>` block on page load. Works via the Clipboard API with a textarea fallback for older browsers. The button shows ✅ Copied! for 2 seconds after clicking.

## 💬 Quote Highlighting

Select any text on a blog post (10+ characters) — a floating toolbar appears with:
- **Highlight** — wraps selection in a `<mark>` tag. Click the highlight to remove it.
- **Copy** — copies selected text to clipboard.
- **Tweet** — opens Twitter intent with the quote.
- **Quote** — prepends `> quote` to the comment textarea.

---

## 🌙 Dark/Light Mode

- Auto-detects OS preference via `prefers-color-scheme`
- Persisted in `localStorage` (key: `ky-blog-theme`)
- Three.js hero colors update on theme change
- Smooth CSS variable transitions throughout

---

## 🔧 Browser Compatibility

| Browser  | Status |
|----------|--------|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Mobile Chrome/Safari | ✅ Cursor hidden, 3D simplified |

---

## ⚡ Performance Tips

- Three.js particle count auto-reduces on mobile (`< 768px`)
- `IntersectionObserver` used for all scroll animations (no scroll listeners on mobile)
- Images: add `loading="lazy"` to any `<img>` tags you add
- For production, minify CSS/JS with [esbuild](https://esbuild.github.io/) or Parcel

---

## 📄 License

MIT — free to use and modify for personal and commercial projects.

---

*Built with ❤️ by Kartik Yadav Gurve — Nagpur, India*
