# Parker's Lawn & Landscaping — Company Website

**Live Site:** [parkerslawnandlandscaping.com](https://parkerslawnandlandscaping.com)

A full-stack marketing website built for Parker's Lawn & Landscaping LLC, a licensed and insured landscaping company serving Central Indiana. Designed, developed, and deployed as a freelance contract project.

---

## Overview

This project is a production-ready, multi-page React application built to serve as the primary online presence for a local landscaping business. The site is optimized for local SEO, mobile responsiveness, and lead generation through integrated contact and estimate request forms.

---

## Features

- **Multi-page SPA** with React Router v6 — seamless client-side navigation across Home, Services, Quote, Careers, Tips, and individual service category pages
- **Dynamic service galleries** — photo gallery with lightbox viewer across four service categories (Lawn Care, Landscaping, Hardscapes, Specialty Services)
- **Lead generation forms** — quote request and job application forms integrated with Formspree for zero-backend email delivery
- **Full-screen scroll experience** — each homepage section fills the viewport for a premium feel
- **Lucide React icons** — consistent, lightweight icon system throughout the UI
- **Local SEO optimization** — semantic HTML, meta descriptions, Open Graph tags, geo-targeting meta, and keyword-optimized copy targeting Central Indiana search terms
- **Licensed & Insured trust signals** — prominent placement of business credentials throughout the site
- **Responsive design** — fully mobile-optimized with a hamburger menu and stacked layouts on small screens
- **Sticky transparent navbar** — darkens on scroll with a hover dropdown for service navigation
- **Testimonials section** — real customer reviews with photo avatars
- **Tips & Tricks blog** — static article system with individual article pages and related content sidebar
- **Service area section** — city-level coverage map for local SEO signal
- **Careers page** — job application form targeting seasonal and full-time crew members

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Forms | Formspree |
| Build Tool | Vite |
| Hosting | Netlify |
| DNS / CDN | Cloudflare |
| Version Control | Git / GitHub |

---

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx     # Sticky transparent nav with dropdown
│   ├── Footer.jsx     # 4-column footer with contact and social links
│   ├── ServiceCard.jsx
│   ├── PhotoGallery.jsx
│   └── TestimonialBlock.jsx
├── pages/             # Route-level page components
│   ├── Home.jsx
│   ├── Services.jsx   # Dynamic — renders any service category
│   ├── Quote.jsx
│   ├── Careers.jsx
│   ├── Tips.jsx
│   └── TipDetail.jsx
├── data/              # Static data layer
│   ├── services.js    # All service categories, features, and photo maps
│   └── tips.js        # Blog article content
└── css/               # Component and page stylesheets
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

The site is deployed on **Netlify** with continuous deployment from the `main` branch on GitHub. Every push to `main` triggers an automatic rebuild and deployment. DNS is managed through **Cloudflare** with Full SSL mode.

---

## Client

**Parker's Lawn & Landscaping LLC**
Central Indiana · Licensed through the Office of Indiana State Chemist
[parkerslawnandlandscaping.com](https://parkerslawnandlandscaping.com)

---

*Freelance project — designed, built, and deployed by Adi P.*
