'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import Link from 'next/link'
import { Nav, Footer, Process, MagneticButton } from '@/app/components'
import { PageHero } from '@/app/components/shared'
import type { ServiceFull } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// SERVICES PAGE
// Expanded service details with process timeline
// ═══════════════════════════════════════════════════════════════

const SERVICES: ServiceFull[] = [
  {
    number: '01',
    name: 'Brand Strategy',
    slug: 'brand-strategy',
    description: 'We help you find your voice, define your story, and build a brand that resonates.',
    fullDescription: 'Every great brand starts with a clear understanding of who you are and who you serve. We dig deep into your business, your audience, and your competition to uncover insights that drive strategic decisions. From positioning to personality, we build the foundation your brand will stand on.',
    deliverables: ['Brand Audit', 'Positioning', 'Naming', 'Brand Architecture'],
    includes: [
      'Competitive Analysis',
      'Audience Research',
      'Brand Positioning',
      'Naming & Taglines',
      'Brand Architecture',
      'Brand Guidelines',
      'Messaging Framework',
      'Tone of Voice',
    ],
    pricing: { type: 'starting', startingFrom: 15000 },
  },
  {
    number: '02',
    name: 'Visual Identity',
    slug: 'visual-identity',
    description: 'Logos, colors, typography, and systems that make your brand instantly recognizable.',
    fullDescription: 'Your visual identity is how the world sees you. We create comprehensive design systems that ensure consistency across every touchpoint. From your logo to your business cards to your digital presence, every element works together to tell your story.',
    deliverables: ['Logo Design', 'Color Systems', 'Typography', 'Brand Guidelines'],
    includes: [
      'Logo Design',
      'Color Palette',
      'Typography System',
      'Iconography',
      'Photography Direction',
      'Pattern Library',
      'Brand Guidelines PDF',
      'Asset Library',
    ],
    pricing: { type: 'range', range: { min: 20000, max: 50000 } },
  },
  {
    number: '03',
    name: 'Web Design & Development',
    slug: 'web-design',
    description: 'Websites that convert. Fast, beautiful, accessible, and built to drive results.',
    fullDescription: 'A website is your 24/7 salesperson. We design and develop sites that not only look stunning but also perform. Every pixel is intentional, every interaction is considered, and every page is optimized for conversion. Built on modern tech stacks for speed and scalability.',
    deliverables: ['UX/UI Design', 'Development', 'CMS Integration', 'Performance'],
    includes: [
      'UX Research & Strategy',
      'Wireframing',
      'Visual Design',
      'Responsive Development',
      'CMS Integration',
      'Performance Optimization',
      'SEO Foundation',
      'Analytics Setup',
    ],
    pricing: { type: 'range', range: { min: 30000, max: 150000 } },
  },
  {
    number: '04',
    name: 'Product Design',
    slug: 'product-design',
    description: 'Digital products that users love. Apps, platforms, and tools built for humans.',
    fullDescription: 'Great products solve real problems in delightful ways. We take a user-centered approach to product design, combining research, prototyping, and iteration to create experiences that people actually want to use. From concept to launch and beyond.',
    deliverables: ['User Research', 'Interface Design', 'Prototyping', 'Design Systems'],
    includes: [
      'User Research',
      'Journey Mapping',
      'Information Architecture',
      'Interface Design',
      'Interactive Prototypes',
      'Usability Testing',
      'Design System',
      'Developer Handoff',
    ],
    pricing: { type: 'custom' },
  },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', description: 'We dig deep. Research, interviews, audits — understanding your business before touching a pixel.' },
  { step: '02', title: 'Strategy', description: 'We define the plan. Positioning, messaging, creative direction — the blueprint for everything that follows.' },
  { step: '03', title: 'Design', description: 'We bring it to life. Iterative design sprints with constant collaboration until it feels right.' },
  { step: '04', title: 'Launch', description: 'We ship it. Pixel-perfect execution, thorough QA, and ongoing support to ensure success.' },
]

export default function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Service cards
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const formatPrice = (service: ServiceFull) => {
    if (!service.pricing) return 'Contact for pricing'
    switch (service.pricing.type) {
      case 'starting':
        return `Starting from $${(service.pricing.startingFrom || 0).toLocaleString()}`
      case 'range':
        return `$${(service.pricing.range?.min || 0).toLocaleString()} – $${(service.pricing.range?.max || 0).toLocaleString()}`
      case 'custom':
        return 'Custom quote'
    }
  }

  return (
    <main ref={pageRef}>
      <Nav />
      <PageHero
        title="What We Do"
        subtitle="End-to-end creative services to take your brand from concept to launch."
      />

      {/* Services Grid */}
      <section className="services-grid bg-dark-950 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="service-card bg-dark-900 border border-dark-800 p-8 md:p-12 hover:border-dark-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <span className="text-primary-500 font-mono text-sm mb-3 block">
                    {service.number}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    {service.name}
                  </h2>
                  <p className="text-dark-300 text-lg mb-6">{service.fullDescription}</p>

                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-dark-500 mb-4">
                      What's Included
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <div
                          key={item}
                          className="text-dark-400 text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-dark-500 text-sm">
                      {formatPrice(service)}
                    </span>
                    <Link
                      href={`/work?category=${service.slug}`}
                      className="text-primary-400 text-sm uppercase tracking-wider hover:text-primary-300 transition-colors inline-flex items-center gap-1"
                    >
                      View Case Studies
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <Process steps={PROCESS_STEPS} />

      {/* CTA */}
      <section className="bg-dark-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-dark-300 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss your goals and find the right approach for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton className="btn-primary text-sm uppercase tracking-wider">
              <Link href="/contact">Get a Quote</Link>
            </MagneticButton>
            <MagneticButton className="btn-outline text-sm uppercase tracking-wider">
              <Link href="/contact">Schedule a Call</Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
