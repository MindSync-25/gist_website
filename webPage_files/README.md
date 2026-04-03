# Gist — Website File System

A complete multi-page website for **Gist**, a writing and publishing platform.
Built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools required.

---

## File Structure

```
gist/
├── index.html              ← Home / Landing page
├── README.md               ← This file
│
├── css/
│   ├── global.css          ← Design tokens, nav, buttons, footer, shared utilities
│   ├── home.css            ← Hero, features grid, quote, CTA banner (home only)
│   └── pages.css           ← Inner pages: features, pricing, blog, about
│
├── js/
│   └── main.js             ← Nav scroll effect, fade-in animations, mobile menu
│
├── images/                 ← (empty) — add your own images here
│
└── pages/
    ├── features.html       ← Features listing page
    ├── pricing.html        ← Pricing tiers & FAQ
    ├── blog.html           ← Blog post grid
    └── about.html          ← Team & company story
```

---

## Design System

| Token | Value |
|---|---|
| Primary Blue | `#2563eb` (blue-600) |
| Dark Blue | `#1d4ed8` (blue-700) |
| Light Blue | `#eff6ff` (blue-50) |
| Text Dark | `#0f172a` (slate-900) |
| Text Muted | `#64748b` (slate-500) |
| Display Font | Playfair Display (Google Fonts) |
| Body Font | DM Sans (Google Fonts) |

---

## How to Open

Just open `index.html` in any modern browser. No server needed.

For local development with live reload, use VS Code's Live Server extension
or run: `npx serve .` from the `gist/` directory.

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, features, testimonial, how-it-works, CTA |
| Features | `pages/features.html` | Full feature grid |
| Pricing | `pages/pricing.html` | 3 tiers + FAQ |
| Blog | `pages/blog.html` | Article card grid |
| About | `pages/about.html` | Mission, values, team |
