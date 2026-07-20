# Soulful Sessions

A premium, production-ready psychologist appointment booking website built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## Features

- **Modern Design** — Calming purple/teal palette with Playfair Display + Inter typography
- **Fully Responsive** — Mobile-first design with glassmorphism navbar and drawer menu
- **Smooth Animations** — Framer Motion fade, stagger, parallax, and hover effects
- **Complete Pages** — Home, About, Services (with individual pages), Why Therapy, Testimonials, FAQ, Contact, Book Appointment, 404, Privacy, Terms
- **Form Validation** — React Hook Form + Zod for appointment and contact forms
- **Dark Mode** — Toggle between light and dark themes
- **SEO Ready** — Metadata, Open Graph, sitemap, and robots.txt
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- ShadCN UI
- Framer Motion
- React Hook Form + Zod
- Lucide Icons

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                  # Next.js App Router pages
components/
  ui/                 # ShadCN UI primitives
  layout/             # Navbar, Footer, FloatingButtons
  home/               # Home page sections
  shared/             # Reusable components
  forms/              # Appointment & Contact forms
lib/
  data/               # Site content and services data
hooks/                # Custom React hooks
types/                # TypeScript interfaces
utils/                # Constants and animation variants
public/               # Static assets
```

## Customization

- Update clinic details in `utils/constants.ts`
- Modify therapist bio in `lib/data/site-data.ts`
- Add/edit services in `lib/data/services.ts`
- Adjust colors in `tailwind.config.ts`

## License

Private project for Soulful Sessions.
