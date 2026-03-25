# Parker's Lawn & Landscaping Website

## Stack
- React 18 + React Router v6
- Formspree (form submissions, no backend)
- Deployed on Netlify (recommended)

## Setup

```bash
npm install
npm start
```

## Before Going Live — Checklist

### 1. Formspree
- Create a free account at formspree.io
- Create two forms: "Quote Request" and "Careers Application"
- Replace `YOUR_FORMSPREE_ID` in `Quote.jsx` and `YOUR_FORMSPREE_CAREERS_ID` in `Careers.jsx`

### 2. Contact Info
Search for `XXXXXXXXXX` across the project and replace with Parker's real phone number.
Search for `parker@example.com` and replace with real email.

### 3. Social Links
In `Footer.jsx`, update the href values for Facebook, Instagram, and Yelp.

### 4. Photos
Replace all Unsplash placeholder URLs with Parker's real photos.
Recommended: put photos in `/public/images/` and reference them as `/images/photo.jpg`

### 5. Logo
Replace the text "P" logo mark in `Navbar.jsx` and `Footer.jsx` with Parker's real logo.
`<img src="/images/logo.png" alt="Parker's Lawn & Landscaping" />`

## Deployment (Netlify)

1. Run `npm run build`
2. Drag the `build/` folder to netlify.com/drop
3. Or connect your GitHub repo for auto-deploys

## Adding New Tips
Open `src/data/tips.js` and add a new object following the same pattern as existing tips.

## Adding New Photos to a Service Gallery
Open `src/data/services.js`, find the service, and add to its `photos` array:
`{ src: "/images/your-photo.jpg", alt: "Description", caption: "Optional caption" }`