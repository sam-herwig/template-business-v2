# Coach Starter Template

A warm, personal Next.js template for coaches, consultants, and creators. Premium GSAP animations, Sanity CMS integration, booking embeds, and a sophisticated warm color palette designed to build trust and convert visitors into clients.

![Preview Desktop](./screenshots/preview-desktop.png)

---

## ✨ Features

### Design & Experience
- **Warm, Personal Aesthetic** — Terracotta, cream, and sage color palette that feels approachable yet professional
- **Premium GSAP Animations** — SplitText headlines, scroll-triggered reveals, counter animations, and smooth parallax
- **Responsive Mobile Design** — Beautiful on all devices with optimized mobile navigation
- **Accessibility First** — Skip links, reduced motion support, semantic HTML, ARIA labels
- **Lenis Smooth Scroll** — Buttery smooth scrolling experience

### Content & Pages
- **Homepage** — Hero with coach photo, about section, services, testimonials, lead magnet, FAQ, and CTA
- **About Page** — Full story, photo gallery, beliefs/philosophy, media features, and fun facts
- **Programs Page** — Program cards, comparison table, process timeline, testimonials, and FAQ
- **Results Page** — Stats bar, featured case studies, video testimonials, testimonial grid, before/after
- **Blog Page** — Category filtering, featured posts, resource cards, newsletter signup
- **Book Page** — Calendly/Cal.com embed, contact form, expectations, FAQ

### Integrations
- **Sanity CMS** — Full schema for testimonials, services, FAQ, settings, and more
- **Booking Systems** — Calendly, Cal.com, Acuity, and custom URL support
- **Payment Systems** — Stripe Pricing Tables, checkout links, PayPal, Gumroad, LemonSqueezy
- **Analytics Ready** — Easy to add Google Analytics, Plausible, or Fathom

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account (free tier available)

### Installation

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/coach-starter.git
cd coach-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 🎨 Customization

### Colors

The default warm color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    100: '#fdf5f3',
    200: '#f9e7e2',
    300: '#f2cec4',
    400: '#e8a999',
    500: '#d97254',  // Main brand color (terracotta)
    600: '#c45d3f',
    700: '#a44b32',
    800: '#6b3424',
    900: '#4a2519',
  },
  sage: {
    100: '#f0f5f1',
    200: '#dce8de',
    300: '#b8d4bd',
    400: '#81b29a',  // Accent color
    500: '#5a9a7a',
    600: '#467a60',
    700: '#385f4c',
  },
  cream: {
    100: '#fffcf7',
    200: '#f8f4ed',  // Background color
    300: '#efe8dc',
  },
}
```

### Typography

The template uses Google Fonts:
- **Display/Headlines:** Fraunces (elegant serif)
- **Body:** Outfit (modern sans-serif)

Change fonts in `app/layout.tsx`:

```tsx
import { Fraunces, Outfit } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' })
```

### Content

All demo content is in the page files. To customize:

1. **Homepage:** Edit `app/page.tsx` — update HERO_CONTENT, ABOUT_CONTENT, SERVICES, TESTIMONIALS, etc.
2. **About:** Edit `app/about/page.tsx` — update ABOUT object, PHOTOS, BELIEFS, FUN_FACTS
3. **Programs:** Edit `app/programs/page.tsx` — update PROGRAMS array with your offerings
4. **Results:** Edit `app/results/page.tsx` — update STATS, case studies, testimonials
5. **Blog:** Edit `app/blog/page.tsx` — update BLOG_POSTS or connect to Sanity

---

## 📐 Project Structure

```
coach-starter/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx    # About page
│   ├── programs/page.tsx # Programs/services page
│   ├── results/page.tsx  # Results/testimonials page
│   ├── blog/page.tsx     # Blog listing
│   ├── blog/[slug]/      # Individual blog posts
│   └── book/page.tsx     # Booking/contact page
├── components/
│   ├── layout/           # Nav, Footer, PageHero, SectionHeader
│   ├── shared/           # CTASection, FAQAccordion, TestimonialCard, NewsletterForm
│   ├── about/            # MediaLogos, PhotoGallery, BeliefCard
│   ├── blog/             # BlogCard, CategoryFilter, ResourceCard, AuthorBio
│   ├── results/          # StatsBar, CaseStudy, VideoTestimonial
│   ├── programs/         # ProgramCard, ComparisonTable, ProcessTimeline
│   ├── book/             # ContactForm, ExpectationStep
│   ├── BookingButton.tsx # Booking integration component
│   └── PaymentEmbed.tsx  # Payment integration component
├── sanity/
│   ├── schemas/          # Sanity CMS schemas
│   └── lib/              # Sanity client & queries
├── lib/
│   ├── gsap.ts           # GSAP configuration with plugins
│   └── lenis.tsx         # Smooth scroll provider
├── hooks/
│   └── useGsapAnimations.ts
└── public/
    └── screenshots/      # Template preview images
```

---

## 🔗 Integrations

### Booking (Calendly/Cal.com)

The `BookingButton` and `BookingEmbed` components support multiple providers:

```tsx
import { BookingButton, BookingEmbed } from '@/components/BookingButton'

// Popup button
<BookingButton 
  config={{
    provider: 'calendly',
    embedUrl: 'https://calendly.com/yourname/discovery',
    buttonText: 'Book Free Call',
    openInModal: true,
  }} 
/>

// Inline embed
<BookingEmbed 
  config={{
    provider: 'calendly',
    embedUrl: 'https://calendly.com/yourname/discovery',
  }}
  height={650}
/>
```

### Payments (Stripe)

```tsx
import { PaymentEmbed } from '@/components/PaymentEmbed'

<PaymentEmbed 
  config={{
    provider: 'stripe',
    pricingTableId: 'prctbl_xxx',
    publishableKey: 'pk_live_xxx',
  }}
/>
```

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Fcoach-starter)

1. Click the button above
2. Connect your GitHub repository
3. Add environment variables
4. Deploy!

### Other Platforms

Works with Netlify, Railway, or any Node.js hosting platform.

---

## 📝 Content Tips

### Hero Section
- Use a professional, approachable photo (4:5 aspect ratio works best)
- Lead with the transformation you provide, not what you do
- Example: "Helping ambitious women build businesses they love"

### Testimonials
- Include specific results ("$10K month in 3 months")
- Use real names and roles for credibility
- Video testimonials convert better than text

### Services/Programs
- Focus on outcomes, not features
- Use clear pricing or "starting at" ranges
- Include a CTA for each offering

### Stats
- Use believable numbers that build trust
- Example: "200+ clients", "$2.4M revenue generated", "94% hit their goals"

---

## 🎭 Animation Details

The template uses GSAP for premium animations:

- **SplitText:** Headlines animate word-by-word on load
- **ScrollTrigger:** Sections fade/slide in as you scroll
- **Counter Animation:** Stats count up when visible
- **Parallax:** Hero image has subtle depth effect
- **Reduced Motion:** All animations respect `prefers-reduced-motion`

---

## 📄 License

MIT License — use this template for personal or commercial projects.

---

## 🤝 Support

- **Issues:** Open a GitHub issue
- **Questions:** Start a discussion
- **Updates:** Star & watch for new features

---

Made with ❤️ for coaches who change lives
