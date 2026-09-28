# Espaço Eventos

A modern and responsive website built for **Espaço Eventos**, a family-owned event venue based in Porto Alegre, Brazil.

The website showcases the venue, services, event gallery, and business information while providing a clear conversion path through WhatsApp for inquiries and event quotations.

## Overview

This project was built as a real-world production website, with a strong focus on visual experience, responsive design, accessibility, performance, and maintainable frontend architecture.

The interface combines an editorial visual style with immersive photography, video backgrounds, subtle animations, and responsive interactions across desktop and mobile devices.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **GSAP**
- **Lucide React**
- **Bootstrap Icons**

## Pages

- **Home** — `/`
- **Gallery** — `/galeria`
- **Services** — `/servicos`
- **About** — `/sobre`
- **404** — Custom fallback page for unknown routes

## Key Features

### Responsive Experience

The interface is designed for desktop, tablet, and mobile devices, with responsive navigation, layouts, typography, media, and interactions.

### Interactive Gallery

The gallery includes:

- Category-based filtering
- Responsive image layouts
- Full-screen lightbox
- Keyboard navigation
- Focus management
- Escape-key support

### Video Experiences

Multiple sections use video content with playback behavior designed around:

- Viewport visibility
- Browser tab visibility
- Reduced-motion preferences
- Mobile browser restrictions
- Graceful playback fallback

### Animations

GSAP is used for subtle reveal animations and transitions while respecting the user's `prefers-reduced-motion` accessibility preference.

### Accessibility

Accessibility considerations include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Focus trapping in interactive overlays
- Focus restoration
- Skip navigation
- Reduced-motion support
- Accessible menu and lightbox interactions

### Performance

The project includes several performance optimizations:

- Local images converted to WebP
- Responsive image handling
- Lazy loading
- Asynchronous image decoding
- Optimized production assets
- Vite production builds

### SEO

The website includes:

- Route-specific page titles and descriptions
- Canonical URL support
- Open Graph metadata
- Structured data
- `robots.txt`
- Sitemap support
- Semantic heading structure
- Custom 404 metadata

The production domain can be configured through `SITE_URL` in:

```text
src/lib/seo.ts
```

### Browser Identity

The project includes a complete browser identity setup with:

- Favicon
- Multiple favicon sizes
- Apple Touch Icon
- 192×192 and 512×512 icons
- Web App Manifest
- Browser theme color

## Project Structure

```text
src/
├── components/
│   └── home/
├── data/
├── hooks/
├── lib/
├── pages/
└── assets/

public/
├── fotos/
├── videos/
├── favicon.ico
├── apple-touch-icon.png
└── site.webmanifest
```

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Daviddm03/EspacoEventos.git
cd EspacoEventos
npm install
```

Start the development server:

```bash
npm run dev
```

## Validation

Run the project's quality checks:

```bash
npm run lint
npm run check:types
npm audit
npm run build
```

## Production Build

Create a production build:

```bash
npm run build
```

The generated production files are placed in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for deployment on **Vercel**.

The `vercel.json` configuration provides SPA route fallback so React Router routes can be accessed directly without returning a server-level 404.

Production configuration:

```text
Build command: npm run build
Output directory: dist
```

## Project Status

The core website is complete.

Remaining production tasks include final domain configuration, production SEO URLs, analytics integration, Search Console setup, and final media updates.

---

Built as a real-world frontend project with a focus on user experience, accessibility, performance, and maintainable code.
