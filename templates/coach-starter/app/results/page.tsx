'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import {
  Nav,
  Footer,
  PageHero,
  SectionHeader,
  CaseStudy,
  VideoTestimonial,
  StatsBar,
  TestimonialCard,
  CTASection,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// RESULTS PAGE DATA
// ═══════════════════════════════════════════════════════════════

const STATS = [
  { value: 200, suffix: '+', label: 'Clients Helped' },
  { value: 2.4, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
  { value: 94, suffix: '%', label: 'Hit Their Goals' },
  { value: 4.9, suffix: '★', label: 'Average Rating' },
]

const FEATURED_CASE_STUDY = {
  client: {
    name: 'Jessica Martinez',
    role: 'Life Coach & Speaker',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop',
  },
  badge: '$10K month in 3 months',
  quote: "Working with Sarah completely transformed how I see my business. I went from barely scraping by to my first $10K month within 3 months. She doesn't just teach strategy — she helps you believe it's possible.",
  challenge: "Jessica came to me overwhelmed and undercharging. She had the expertise and the passion, but she was stuck in the feast-or-famine cycle, constantly worrying about where her next client would come from.",
  transformation: "We rebuilt her offers from the ground up, repositioned her as a premium coach, and created a simple but powerful marketing system. More importantly, we worked on her money mindset and helped her see her true value.",
  results: [
    'Hit first $10K month within 90 days',
    'Raised prices by 200%',
    'Went from 0 to 12 clients on retainer',
    'Now works 25 hours/week instead of 50+',
  ],
}

const CASE_STUDIES = [
  {
    client: { name: 'Amanda Chen', role: 'Brand Strategist', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
    badge: 'Fully booked in 6 weeks',
    quote: "I finally feel like I know what I'm doing. Sarah gave me the clarity and confidence I needed.",
    challenge: 'Struggling to stand out in a crowded market.',
    transformation: 'Clarified positioning and created a signature framework.',
    results: ['Fully booked within 6 weeks', '50% increase in project rates'],
  },
  {
    client: { name: 'Rachel Thompson', role: 'Business Consultant', photo: 'https://randomuser.me/api/portraits/women/33.jpg' },
    badge: '3x revenue in 6 months',
    quote: "The VIP Intensive was worth every penny. I walked in overwhelmed and walked out with complete clarity.",
    challenge: 'Too many ideas, no clear direction.',
    transformation: 'Created a focused 90-day plan and stuck to it.',
    results: ['Tripled revenue in 6 months', 'Actually takes weekends off now'],
  },
]

const VIDEO_TESTIMONIALS = [
  { thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', client: { name: 'Sarah K.', role: 'Mindset Coach' } },
  { thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=225&fit=crop', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', client: { name: 'Michelle L.', role: 'Career Coach' } },
  { thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', client: { name: 'Jennifer P.', role: 'Executive Coach' } },
]

const TESTIMONIALS = [
  { quote: "Sarah has a way of cutting through all the noise and getting to what really matters. I've worked with coaches before, but she's different.", author: 'Emily R.', role: 'Health Coach', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
  { quote: "The group program was exactly what I needed. The community aspect was incredible — having other women cheering me on made all the difference.", author: 'Lisa M.', role: 'Nutritionist', avatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
  { quote: "I was skeptical at first, but the results speak for themselves. My business is unrecognizable (in the best way).", author: 'Kate S.', role: 'Leadership Coach', avatar: 'https://randomuser.me/api/portraits/women/49.jpg' },
  { quote: "The VIP Day was transformative. Six hours that completely changed the trajectory of my business.", author: 'Diana H.', role: 'Business Strategist', avatar: 'https://randomuser.me/api/portraits/women/51.jpg' },
  { quote: "Sarah doesn't just give you strategies — she helps you believe in yourself enough to actually execute them.", author: 'Nicole T.', role: 'Life Coach', avatar: 'https://randomuser.me/api/portraits/women/53.jpg' },
  { quote: "Best investment I've ever made in my business. Period.", author: 'Ashley W.', role: 'Wellness Coach', avatar: 'https://randomuser.me/api/portraits/women/55.jpg' },
]

const BEFORE_AFTER = [
  { before: 'Overwhelmed by options', after: 'Clear 90-day roadmap' },
  { before: 'Undercharging for expertise', after: 'Premium pricing with confidence' },
  { before: 'Working 60+ hours/week', after: '30-hour weeks with boundaries' },
  { before: 'Barely breaking even', after: 'Consistent $10K+ months' },
]

// ═══════════════════════════════════════════════════════════════
// RESULTS PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function ResultsPage() {
  const caseStudiesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.case-study-card', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: caseStudiesRef.current,
          start: 'top 70%',
        },
      })
    }, caseStudiesRef)

    return () => ctx.revert()
  }, [])

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.testimonial-animate', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 75%',
        },
      })
    }, testimonialsRef)

    return () => ctx.revert()
  }, [])

  return (
    <main id="main-content" className="bg-cream-100">
      <Nav />
      
      <PageHero
        eyebrow="Client Success Stories"
        headline="Real Women. Real Results."
        subheadline="I don't just talk about transformation — I deliver it. Here's proof."
      />

      <StatsBar stats={STATS} />

      {/* Featured Case Study */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Featured Story"
            title="From Struggling to $10K Months"
            alignment="left"
          />
          <CaseStudy {...FEATURED_CASE_STUDY} featured />
        </div>
      </section>

      {/* More Case Studies */}
      <section ref={caseStudiesRef} className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="More Success Stories" />
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="case-study-card">
                <CaseStudy {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Hear It From Them"
            description="Watch what my clients have to say about working together."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <VideoTestimonial key={i} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section ref={testimonialsRef} className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="More Kind Words" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="testimonial-animate">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader title="The Before & After" />
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-cream-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg text-primary-400 mb-4 uppercase tracking-wide">Before</h3>
                <ul className="space-y-3">
                  {BEFORE_AFTER.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-800/70">
                      <span className="w-2 h-2 bg-primary-300 rounded-full" />
                      {item.before}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg text-sage-500 mb-4 uppercase tracking-wide">After</h3>
                <ul className="space-y-3">
                  {BEFORE_AFTER.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-800">
                      <svg className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item.after}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Become the Next Success Story?"
        description="Let's talk about what transformation looks like for you."
        ctaLabel="Start Your Transformation →"
        ctaHref="/book"
      />

      <Footer />
    </main>
  )
}
