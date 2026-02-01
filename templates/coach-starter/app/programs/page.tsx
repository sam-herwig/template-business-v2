'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import {
  Nav,
  Footer,
  PageHero,
  SectionHeader,
  ProgramCard,
  ProcessTimeline,
  ComparisonTable,
  TestimonialCard,
  FAQAccordion,
  CTASection,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// PROGRAMS PAGE DATA
// ═══════════════════════════════════════════════════════════════

const PROGRAMS = [
  {
    name: '1:1 Coaching',
    tagline: 'Deep, personalized support',
    description: 'Personalized support to build your business strategy, overcome mindset blocks, and take consistent action toward your biggest goals.',
    features: [
      '12 weekly 60-minute sessions',
      'Unlimited Voxer access between calls',
      'Custom action plans for your business',
      'Accountability & mindset support',
      'Resource library access',
    ],
    price: '$3,500+',
    priceNote: 'Payment plans available',
    cta: { label: 'Apply Now', href: '/book?program=1on1' },
    featured: true,
    badge: 'Most Popular',
    id: '1-on-1-coaching',
  },
  {
    name: 'Group Program',
    tagline: 'Learn & grow with community',
    description: 'Join a community of ambitious women building businesses together. Learn, grow, and celebrate wins as a group.',
    features: [
      '8-week transformative program',
      'Weekly group coaching calls',
      'Private community access',
      'Templates & resources',
      'Peer accountability partners',
    ],
    price: '$997',
    priceNote: 'Next cohort starts March 2025',
    cta: { label: 'Join Waitlist', href: '/book?program=group' },
    status: 'waitlist' as const,
    id: 'group-program',
  },
  {
    name: 'VIP Intensive',
    tagline: 'One day. Total clarity.',
    description: 'A full day together to map out your entire business strategy. Leave with complete clarity and a 90-day action plan.',
    features: [
      '6-hour intensive session',
      'Full business audit',
      'Complete 90-day roadmap',
      '30 days follow-up support',
      'Implementation checklist',
    ],
    price: '$2,500',
    cta: { label: 'Book Your Day', href: '/book?program=vip' },
    id: 'vip-intensive',
  },
]

const COMPARISON_PROGRAMS = [
  { name: '1:1 Coaching', duration: '12 weeks', sessions: '12 weekly', messaging: 'Unlimited Voxer', price: '$3,500+', ctaLabel: 'Apply', ctaHref: '/book?program=1on1' },
  { name: 'Group Program', duration: '8 weeks', sessions: '8 group calls', messaging: 'Community', price: '$997', ctaLabel: 'Waitlist', ctaHref: '/book?program=group' },
  { name: 'VIP Intensive', duration: '1 day', sessions: '1 intensive', messaging: '30-day access', price: '$2,500', ctaLabel: 'Book', ctaHref: '/book?program=vip' },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Discovery Call', description: 'We chat about where you are, where you want to be, and whether we\'re a good fit.' },
  { number: 2, title: 'Deep Dive', description: 'I learn everything about your business, goals, and what\'s been holding you back.' },
  { number: 3, title: 'Action Plan', description: 'We create a customized roadmap with clear, actionable steps toward your goals.' },
  { number: 4, title: 'Celebrate Wins', description: 'You take action, we iterate, and we celebrate every milestone along the way.' },
]

const TESTIMONIALS = [
  { quote: "The clarity I got from just one session was incredible. Sarah has a gift for cutting through the noise.", author: 'Jessica M.', role: 'Life Coach', result: '$10K month in 3 months', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { quote: "The group program changed everything. Not just the strategies, but the community of women cheering me on.", author: 'Amanda C.', role: 'Brand Strategist', result: 'Fully booked in 6 weeks', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { quote: "The VIP Day was worth every penny. I walked in overwhelmed and walked out with a clear plan.", author: 'Rachel T.', role: 'Business Consultant', result: '3x revenue in 6 months', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
]

const FAQ = [
  { question: 'Is coaching right for me?', answer: "Coaching is for you if you're ready to take action and want support getting there faster. If you're looking for someone to do the work for you, this isn't it. But if you want a partner who'll help you unlock your potential and hold you accountable? Let's talk." },
  { question: 'What if I can\'t afford the full price?', answer: 'I believe money shouldn\'t be the only barrier to growth. All programs have payment plan options, and I occasionally offer scholarships. Let\'s discuss what works for you on our discovery call.' },
  { question: 'How do I know which program to choose?', answer: 'Great question! On our discovery call, I\'ll ask about your goals, timeline, and learning style. Together, we\'ll figure out which program is the best fit for where you are right now.' },
  { question: 'Can I switch programs partway through?', answer: 'Absolutely. If you start in the group program and realize you need more personalized support, we can always discuss upgrading. Your investment will be applied toward the new program.' },
]

// ═══════════════════════════════════════════════════════════════
// PROGRAMS PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function ProgramsPage() {
  const programsRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.program-card-animate', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.programs-grid',
          start: 'top 75%',
        },
      })
    }, programsRef)

    return () => ctx.revert()
  }, [])

  return (
    <main id="main-content" className="bg-cream-100">
      <Nav />
      
      <PageHero
        eyebrow="Programs & Packages"
        headline="Find the Right Fit for Your Journey"
        subheadline="Whether you need deep 1:1 support or prefer learning in community, I've got you covered."
      />

      {/* Programs Grid */}
      <section ref={programsRef} className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="programs-grid grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => (
              <div key={program.name} className="program-card-animate">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ComparisonTable programs={COMPARISON_PROGRAMS} />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            title="What Working Together Looks Like"
            description="A simple, supportive process designed to get you results."
          />
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="What My Clients Say"
            description="Don't just take my word for it. Here's what they have to say about working together."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion
            items={FAQ}
            title="Common Questions About My Programs"
            description="Still not sure? Here's what most people ask."
          />
        </div>
      </section>

      <CTASection
        headline="Still not sure? Let's chat."
        description="A discovery call is free and there's no pressure. Let's just talk about where you are and what you need."
        ctaLabel="Book a Free Discovery Call"
        ctaHref="/book"
        note="30 minutes • Video or phone • Zero obligation"
      />

      <Footer />
    </main>
  )
}
