# Espaço Eventos

A responsive website built for Espaço Eventos, a family-owned event venue in Porto Alegre, Brazil.

The website presents the venue, services, gallery, and business information while giving visitors a direct way to request information and quotations through WhatsApp.

## About

This project was built for a real event venue.

The main goal was to create a modern website where potential clients could understand the space, explore previous events, see the available services, and easily contact the business.

The site is built as a React single-page application with multiple routes and responsive layouts for desktop and mobile devices.

## Pages

```text
/           Home
/galeria    Gallery
/servicos   Services
/sobre      About
```

A custom 404 page handles unknown routes.

## Features

- Responsive navigation and layouts
- Event and venue gallery
- Category-based gallery filtering
- Full-screen image lightbox
- Keyboard-accessible interactions
- WhatsApp contact flow
- Video sections
- GSAP reveal animations
- Reduced-motion support
- Route-specific metadata
- Open Graph metadata
- Structured data
- Sitemap and robots configuration
- Custom favicon and web app icons
- Responsive and optimized WebP images
- Custom 404 page

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- GSAP
- Lucide React
- Bootstrap Icons

## Getting Started

### Requirements

- Node.js
- npm

Clone the repository:

```bash
git clone git@github.com:Daviddm03/EspacoEventos.git
cd EspacoEventos
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development address in the terminal.

## Available Commands

Development:

```bash
npm run dev
```

Lint the project:

```bash
npm run lint
```

Check TypeScript:

```bash
npm run check:types
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   └── home/
├── data/
├── lib/
├── pages/
├── App.tsx
├── index.css
└── main.tsx

public/
├── fotos/
├── videos/
├── favicon.ico
├── apple-touch-icon.png
└── site.webmanifest
```

The content used by the gallery, services, and testimonials is separated into files inside `src/data`, while reusable interface elements live in `src/components`.

## Accessibility & Performance

Accessibility was considered throughout the interface with keyboard navigation, visible focus states, semantic HTML, reduced-motion support, focus management, and accessible overlays.

Images are served primarily as WebP files, non-critical media is loaded when needed, and the production build is generated through Vite.

## SEO

The website includes route-specific titles and descriptions, canonical URLs, Open Graph metadata, structured data, sitemap support, and semantic heading structure.

The production domain can be configured in:

```text
src/lib/seo.ts
```

## Deployment

The project includes a `vercel.json` configuration for deployment on Vercel and SPA routing support.

Create the production build with:

```bash
npm run build
```

The generated files are placed in:

```text
dist/
```

## What I Learned

This was one of my first projects built for a real use case rather than an exercise.

Beyond building the interface, I had to think about responsive behavior, accessibility, performance, SEO, media optimization, navigation, and how visitors would move from discovering the venue to contacting the business.

It also gave me more experience organizing a React and TypeScript project as it grew beyond a single page.

## Tech

React · TypeScript · Vite · Tailwind CSS · GSAP
