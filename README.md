# Portfolio — Digital Marketer Portfolio Website

A clean, minimal, and professional portfolio website built for a digital marketer. Designed to showcase skills, projects, certifications, and attract freelance clients and job offers.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Plus Jakarta Sans (headings) via `next/font`
- **Deployable to:** Vercel (zero config)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Edit Content

**All site content is stored in a single file:**

```
src/data/site.ts
```

This file contains every piece of text, image path, link, metric, and configuration for the entire site. Open it and search for `TODO: replace` comments to find all placeholder content that needs to be updated.

### Content sections in `site.ts`:

| Section | What to edit |
|---------|-------------|
| `siteConfig` | Name, email, phone, location, resume URL, site URL |
| `hero` | Headline, subheadline, badge text, stat chips, portrait image |
| `tools` | Tools/platforms you work with |
| `about` | Bio paragraphs, quick facts, value cards, about image |
| `services` | Service titles and descriptions |
| `skills` | Skill names and proficiency levels (0-100) |
| `projects` | Project titles, categories, metrics, case study details |
| `impactStats` | Numbers for the impact counter section |
| `processSteps` | Process step titles and descriptions |
| `education` | Course and certification details |
| `testimonials` | Quotes, names, roles |
| `blogPosts` | Article titles, excerpts, dates |
| `faqs` | FAQ questions and answers |
| `socialLinks` | Social media URLs |

### Adding Images

Place image files in `public/images/` and reference them as `/images/filename.jpg` in `site.ts`. The site uses image placeholders that will be replaced when real images are added.

### Contact Form

The contact form posts to `/api/contact` which currently logs submissions to the console. To enable email delivery, integrate with:
- **Resend** (`npm install resend`)
- **Nodemailer** (`npm install nodemailer`)
- **Formspree** (external service, no package needed)

See the TODO comment in `src/app/api/contact/route.ts`.

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── work/[slug]/            # Case study detail pages
│   │   ├── page.tsx
│   │   └── case-study-content.tsx
│   ├── globals.css             # Design system & base styles
│   ├── layout.tsx              # Root layout with fonts & SEO
│   ├── page.tsx                # Home page (all sections)
│   ├── not-found.tsx           # Custom 404
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt config
├── components/
│   ├── sections/               # Page section components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ToolsStrip.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── Impact.tsx
│   │   ├── Process.tsx
│   │   ├── Education.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                     # Reusable UI components
│       ├── motion.tsx          # Animation wrappers
│       └── image-placeholder.tsx
└── data/
    └── site.ts                 # All site content (edit here!)
```

## Deployment

Deploy to Vercel with zero configuration:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

All rights reserved.
