# Kinetic Typography Starter

A bold, immersive template for motion design studios, type foundries, and creative agencies. Features advanced text animations, kinetic effects, and a dramatic dark aesthetic optimized for showcasing creative typography work.

![Preview](./screenshots/preview-desktop.png)

## ✨ Features

### Typography Animation System
- **AnimatedSplitText** - Character-by-character or word-by-word reveal animations
- **WaveText** - Smooth hover wave effect that ripples through text
- **ScrambleText** - Matrix-style text reveal with character scrambling
- **Typewriter** - Classic typewriter effect with cursor and word cycling
- **RotatingWords** - 3D rotating word carousel with customizable easing
- **WordByWordReveal** - Scroll-triggered word reveals with staggered timing
- **MagneticText** - Interactive magnetic effect following cursor movement
- **Marquee** - Infinite horizontal scrolling text bands

### Motion Design
- Smooth scroll powered by Lenis
- Framer Motion for performant animations
- Custom cursor with magnetic interactions
- Scroll-reveal animations with viewport triggers
- Parallax effects on hero sections

### Design System
- Dark theme with blue accent (#60A5FA)
- High contrast for readability
- Custom CSS properties for easy theming
- Responsive typography with `clamp()`
- Gradient text effects

### Pages Included
- **Homepage** - Hero with animated headline, marquee, services grid, stats, work showcase, CTA
- **Work** - Filterable portfolio grid with category tabs
- **Work Detail** - Project case study with video embed, gallery, credits
- **Services** - Expandable service cards with pricing tiers
- **About** - Team grid, values, awards, company story
- **Contact** - Animated form with floating labels, FAQ accordion

### Accessibility
- ✅ Skip link to main content
- ✅ Focus-visible styles on all interactive elements
- ✅ `prefers-reduced-motion` support (disables all animations)
- ✅ Semantic HTML with proper landmarks
- ✅ ARIA labels on decorative elements
- ✅ Proper heading hierarchy (h1 → h6)

### SEO & Performance
- ✅ Meta title and description optimized for motion design keywords
- ✅ OpenGraph and Twitter Card meta tags
- ✅ JSON-LD structured data (Organization schema)
- ✅ Semantic HTML structure
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx    # About page
│   ├── contact/page.tsx  # Contact page
│   ├── services/page.tsx # Services page
│   ├── work/
│   │   ├── page.tsx      # Work listing
│   │   └── [slug]/page.tsx # Work detail
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Nav.tsx           # Navigation
│   ├── Footer.tsx        # Footer
│   ├── motion/           # Animation components
│   └── CustomCursor.tsx  # Custom cursor
├── lib/
│   ├── data.ts           # Content data
│   ├── lenis.tsx         # Smooth scroll
│   └── gsap.ts           # GSAP setup
└── public/
    └── fonts/            # Custom fonts (optional)
```

## 🎨 Customization

### Content
All content is centralized in `lib/data.ts`:
- `projects` - Portfolio case studies
- `services` - Service offerings and pricing
- `team` - Team members with bios
- `values` - Company values
- `awards` - Recognition and awards
- `faqs` - Frequently asked questions

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  kinetic: {
    bg: '#0a0a0b',      // Background
    text: '#fafafa',    // Primary text
    accent: '#60a5fa',  // Blue accent
    muted: '#a1a1aa',   // Muted text
    border: '#27272a',  // Borders
  }
}
```

### Typography
The template uses Inter as a fallback. To use Satoshi (recommended):
1. Download from [Fontshare](https://www.fontshare.com/fonts/satoshi)
2. Place `.woff2` files in `public/fonts/`
3. Update `app/layout.tsx` with local font import

### Animation Timing
Motion settings can be adjusted in individual components. Common patterns:
```tsx
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}  // Expo out
transition={{ delay: 0.3, stagger: 0.05 }}               // Staggered
```

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `framer-motion` | Animation library |
| `lenis` | Smooth scrolling |
| `gsap` | Advanced animations (optional) |
| `tailwindcss` | Utility CSS |

## 🔧 Environment Variables

None required for basic functionality. Add as needed:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Lighthouse Scores

| Metric | Score |
|--------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

For static export, add to `next.config.js`:
```js
output: 'export'
```

## 📄 License

MIT - Use freely for personal and commercial projects.

---

Built with ❤️ and lots of keyframes.
