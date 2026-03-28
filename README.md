# Slam Pharm

![App Preview](https://imgix.cosmicjs.com/6aa2bca0-2aa0-11f1-a508-efd502e19dcb-autopilot-photo-1472099645785-5658abf4ff4e-1774700389731.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning creative photography portfolio built with Next.js 16 and Cosmic CMS. Slam Pharm features a dark cinematic aesthetic, masonry photo grids, lightbox viewing, organized collections, client testimonials, and a beautiful about page — all powered by content managed in Cosmic.

## Features

- 📸 **Photo Gallery** — Masonry grid layout with lightbox modal for full-screen viewing
- 🖼️ **Collections** — Organized photo sets with cover images and individual detail pages
- 👤 **About Page** — Personal bio with profile photo and contact information
- 💬 **Testimonials** — Client testimonials with ratings and elegant card design
- 🌙 **Dark Theme** — Cinematic dark aesthetic that makes photography the focus
- 📱 **Fully Responsive** — Beautiful on every screen size from mobile to desktop
- ⚡ **Server-Side Rendering** — Fast loads and great SEO with Next.js App Router
- 🖼️ **Image Optimization** — Automatic imgix CDN optimization for all photos

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69c7c728f9808e52fa7d8f0e&clone_repository=69c7c865f9808e52fa7d8f42)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a photography portfolio with photo galleries, collections, an about section, and client testimonials."

### Code Generation Prompt

> "Build a Next.js application for a creative portfolio called 'Slam pharm'. The content is managed in Cosmic CMS with the following object types: photos, collections, about, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [imgix](https://imgix.com/) — Image optimization CDN

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket configured

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd slam-pharm

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Run the development server
bun dev
```

### Environment Variables

Create a `.env.local` file with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching all photos

```typescript
import { cosmic } from '@/lib/cosmic';

const { objects: photos } = await cosmic.objects
  .find({ type: 'photos' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a single collection with connected photos

```typescript
const { object: collection } = await cosmic.objects
  .findOne({ type: 'collections', slug: 'my-collection' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(2);
```

## Cosmic CMS Integration

This app uses 4 Cosmic object types:

| Object Type | Description |
|---|---|
| `photos` | Individual photos with description, image, camera/lens, and location |
| `collections` | Grouped photo sets with cover image and connected photos |
| `about` | About section with bio, profile photo, and contact email |
| `testimonials` | Client testimonials with quote, name, role, and photo |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->