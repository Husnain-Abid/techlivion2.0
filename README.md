# Techlivion — Next.js 13+ Business Website

A pixel-perfect recreation of [techlivion.com](https://techlivion.com/) built with Next.js 13+ App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** — App Router
- **React 18** — Functional components
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **TypeScript** — Type safety
- **Lucide React** — Icons
- **React CountUp** — Animated number counters
- **React Intersection Observer** — Scroll-triggered animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
techlivion/
├── app/
│   ├── globals.css          # Global styles, CSS variables, custom classes
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page (assembles all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky animated navbar with mobile menu
│   │   └── Footer.tsx        # Multi-column footer
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll-triggered fade/slide animation wrapper
│       ├── CounterNumber.tsx    # Animated stat counter
│       └── SectionTag.tsx       # Small red tag above section headings
│
├── sections/
│   ├── HeroSection.tsx       # Full-screen hero with animated headline
│   ├── AboutSection.tsx      # Who we are — two-column with image
│   ├── ValueSection.tsx      # Mission, vision, stats row
│   ├── ServicesSection.tsx   # Traffic/sales highlights with image
│   ├── OfferingsSection.tsx  # 9-service grid with image cards
│   ├── WhyChooseSection.tsx  # 4 reasons + CTA card
│   ├── SkillsSection.tsx     # Animated progress bars
│   ├── PortfolioSection.tsx  # Filterable project showcase grid
│   ├── TeamSection.tsx       # 4-member team grid
│   ├── TestimonialsSection.tsx  # Animated testimonial carousel
│   ├── TrustedSection.tsx    # Infinite brand logo marquee
│   ├── CtaSection.tsx        # Red CTA banner
│   └── ContactSection.tsx   # Contact form + info
│
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Key Design Decisions

- **Dark theme** — Rich `#0a0a0a` / `#0d0d0d` alternating section backgrounds
- **Red accent** — `#e8171e` primary color used for CTAs, highlights, progress bars
- **Barlow Condensed** — Headline font (condensed, bold)
- **Barlow** — Body font (clean, readable)
- **Framer Motion** — All scroll-triggered animations use `useInView` + `motion` variants
- **CSS variables** — All brand colors exposed as `--primary`, `--bg-dark`, etc.

## Customization

1. **Colors** — Edit `--primary` in `app/globals.css` and `tailwind.config.js`
2. **Content** — All text content lives directly in each section file
3. **Images** — Currently using Unsplash; replace `src` props with your own images
4. **Fonts** — Change the Google Fonts import in `app/layout.tsx`

## Performance Notes

- Images use standard `<img>` tags pointing to Unsplash CDN
- For production, replace with Next.js `<Image>` components
- Framer Motion animations use `triggerOnce: true` to avoid re-triggering
- Marquee animation is CSS-only for performance
