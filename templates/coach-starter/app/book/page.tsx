'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Nav,
  Footer,
  PageHero,
  SectionHeader,
  BookingEmbed,
  ContactForm,
  ExpectationStep,
  FAQAccordion,
  TestimonialCard,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// BOOK PAGE DATA
// ═══════════════════════════════════════════════════════════════

const BOOKING_CONFIG = {
  enabled: true,
  provider: 'calendly' as const,
  embedUrl: 'https://calendly.com/demo/discovery-call',
  buttonText: 'Book a Call',
  primaryColor: '#d97254',
  hideGdprBanner: true,
}

const EXPECTATIONS = [
  { number: 1, title: 'We Talk About You', description: 'Share where you are in your business and where you want to be. No judgment, just curiosity.' },
  { number: 2, title: 'I Listen & Ask Questions', description: "I'll dig into what's really going on and what might be holding you back." },
  { number: 3, title: 'We Decide Together', description: "If we're a fit, great. If not, I'll point you in the right direction. No pressure either way." },
]

const BOOKING_FAQ = [
  { question: 'Is the call really free?', answer: "Yes, 100% free with no strings attached. It's a genuine conversation to see if we're a good fit for each other. I don't do pushy sales tactics — ever." },
  { question: 'How long is the call?', answer: "Discovery calls are 30 minutes. That's enough time to get clear on your situation and explore next steps without taking up your whole day." },
  { question: 'Will you try to sell me something?', answer: "I'll share how we might work together if I think I can genuinely help you. But I'll never pressure you into anything. If coaching isn't right for you right now, I'll tell you that too." },
  { question: "I'm not ready to commit. Should I still book?", answer: "Absolutely! The call is designed for exactly where you are. It's exploratory — a chance to get clarity and ask questions. Zero commitment required." },
  { question: 'What if I need to reschedule?', answer: 'Life happens! You can reschedule directly through the calendar link in your confirmation email. I just ask for 24 hours notice when possible.' },
]

const TESTIMONIALS = [
  { quote: "Even just the discovery call gave me so much clarity. Sarah has a gift for cutting through the noise.", author: 'Jennifer P.', role: 'Leadership Coach', avatar: 'https://randomuser.me/api/portraits/women/62.jpg' },
  { quote: "I was nervous to book, but Sarah made me feel so comfortable. It was like talking to a friend who actually gets it.", author: 'Michelle R.', role: 'Health Coach', avatar: 'https://randomuser.me/api/portraits/women/64.jpg' },
]

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'hello@sarahmitchell.co', href: 'mailto:hello@sarahmitchell.co' },
  { icon: '📸', label: 'Instagram', value: '@sarahmitchell', href: 'https://instagram.com/sarahmitchell' },
  { icon: '💼', label: 'LinkedIn', value: '/in/sarahmitchell', href: 'https://linkedin.com/in/sarahmitchell' },
]

// ═══════════════════════════════════════════════════════════════
// BOOK PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function BookPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const bookRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.booking-embed', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('.expectation-step', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.expectations-section',
          start: 'top 75%',
        },
      })
    }, bookRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={bookRef} id="main-content" className="bg-cream-100">
      <Nav />
      
      <PageHero
        eyebrow="Let's Connect"
        headline="Book Your Free Discovery Call"
        subheadline="30 minutes to talk about where you are, where you want to be, and how I might help."
        checkmarks={[
          'No pitch, no pressure',
          'Video or phone — your choice',
          'Leave with clarity, regardless',
        ]}
      />

      {/* Booking Embed */}
      <section className="py-12 md:py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="booking-embed bg-white rounded-3xl p-4 md:p-8 border border-cream-300 shadow-sm">
            <BookingEmbed config={BOOKING_CONFIG} height={650} />
          </div>
        </div>
      </section>

      {/* Alternative: Contact Form */}
      <section className="py-8 bg-cream-100">
        <div className="max-w-2xl mx-auto px-6">
          <button
            onClick={() => setShowContactForm(!showContactForm)}
            className="w-full bg-white rounded-xl px-6 py-4 flex items-center justify-between border border-cream-300 hover:border-primary-200 transition-colors"
          >
            <span className="text-primary-800/70">Prefer to send a message instead?</span>
            <svg
              className={`w-5 h-5 text-primary-500 transition-transform ${showContactForm ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {showContactForm && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <div className="bg-white rounded-2xl p-8 border border-cream-300">
                    <ContactForm />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* What to Expect */}
      <section className="expectations-section py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            title="What Happens on Our Call"
            description="A simple, pressure-free conversation to explore if we're a good fit."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {EXPECTATIONS.map((step) => (
              <div key={step.number} className="expectation-step">
                <ExpectationStep {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion
            items={BOOKING_FAQ}
            title="Before You Book"
            description="Answers to the questions I get most often."
          />
        </div>
      </section>

      {/* Testimonials about the call */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            title="What Clients Say About Our First Call"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SectionHeader title="Other Ways to Reach Me" />
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 border border-cream-300 hover:border-primary-200 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="text-left">
                  <div className="text-sm text-primary-800/60">{item.label}</div>
                  <div className="text-primary-800 font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
