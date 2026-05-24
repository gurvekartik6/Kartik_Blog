Kartik Yadav Gurve — Personal Blog Website
A visually stunning, 3D-enhanced personal blog with dark/light mode, built with Three.js, Bootstrap 5, and Vanilla JS.

📁 File Structure
text
blog-website/
├── index.html          # Homepage — hero, blog grid, newsletter
├── blog-post.html      # Blog listing + single post view
├── about.html          # About — timeline, skills
├── contact.html        # Contact — floating form, social links
├── css/
│   ├── theme.css       # CSS variables for dark/light mode
│   └── style.css       # All global styles, components, animations
├── js/
│   ├── main.js         # Core: cursor, scroll, copy-code, typewriter
│   ├── three-scene.js  # Three.js: loading animation + hero 3D scene
│   ├── theme-toggle.js # Dark/light mode with OS preference
│   ├── post-data.js    # All blog posts database
│   └── newsletter.js   # Mailchimp free-tier JSONP integration
└── assets/
    └── images/         # Drop your images here
⚙️ Quick Start
Clone or extract the project folder.

Open index.html in a modern browser — no build step needed.

🎨 Customization
Personal Info
Search and replace across all .html files:

Kartik Yadav Gurve → your name

Wardha → your city

SGGS Nanded → your college

Colors
Edit css/theme.css — all colors are CSS variables.

Fonts
Change in both css/style.css (Google Fonts import) and the font-family declarations. Current stack: Syne (headings) + DM Sans (body) + JetBrains Mono (code).

📧 Mailchimp Free-Tier Setup
Sign up at mailchimp.com (free tier = 500 contacts, 1,000 emails/month).

Go to Audience → Signup forms → Embedded forms.

Copy your form's action URL.

Open js/newsletter.js and update:

javascript
const MC_CONFIG = {
  actionUrl: 'https://yoursite.us1.list-manage.com/subscribe/post-json',
  u: 'ABC',
  id: 'XYZ',
};
The integration uses JSONP — no server required, works on static hosting.

📝 Adding Blog Posts
Open js/post-data.js and add a new post object:

javascript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Short description shown on blog listing.",
  emoji: "🚀",
  coverImage: "images/your-image.jpg",
  tags: ["Tag1", "Tag2"],
  author: "Kartik Yadav Gurve",
  date: "May 25, 2025",
  readTime: 5,
  featured: true,
  content: `<h2>Your content here</h2><p>Write HTML...</p>`
}
📋 Features
Feature	Description
Copy Code Button	Automatically added to every <pre> block
Dark/Light Mode	Auto-detects OS preference, persists in localStorage
3D Hero Scene	Three.js animated background
Responsive Design	Works on mobile, tablet, and desktop
Mailchimp Integration	JSONP-based newsletter signup
Search & Filter	Search posts by title/tags, filter by category
Toast Notifications	Success/error messages for subscriptions
🔧 Browser Compatibility
Browser	Status
Chrome 90+	✅ Full support
Firefox 88+	✅ Full support
Safari 14+	✅ Full support
Edge 90+	✅ Full support
🌐 Deployment
Deploy for free on:

Vercel — drag & drop folder

Netlify — drag & drop folder

GitHub Pages — push to repository

📄 License
MIT — free to use and modify.

Built with ❤️ by Kartik Yadav Gurve — Wardha, India
