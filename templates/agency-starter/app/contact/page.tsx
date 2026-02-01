'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Nav, Footer } from '@/app/components'
import { PageHero, ContactForm, ContactInfo } from '@/app/components/shared'
import type { ContactInfo as ContactInfoType } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE
// Contact form with info sidebar and map
// ═══════════════════════════════════════════════════════════════

const CONTACT_INFO: ContactInfoType = {
  email: 'hello@studio.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Design Street',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
    country: 'United States',
  },
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ],
}

export default function ContactPage() {
  const pageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Form animation
      gsap.from('.contact-form', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })

      // Info sidebar
      gsap.from('.contact-info', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4,
      })

      // Map
      gsap.from('.map-section', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.map-section',
          start: 'top 85%',
        },
      })

      // Careers
      gsap.from('.careers-section', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.careers-section',
          start: 'top 85%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      <Nav />
      <PageHero
        title="Let's Talk"
        subtitle="Ready to start your next project? We'd love to hear from you."
      />

      {/* Contact Section */}
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="contact-form lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info Sidebar */}
            <div className="contact-info lg:col-span-2 lg:pl-8 lg:border-l lg:border-dark-800">
              <ContactInfo info={CONTACT_INFO} />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] md:aspect-[21/7] bg-dark-800">
            {/* Placeholder for map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-dark-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-dark-500 text-sm uppercase tracking-wider">
                  Brooklyn, NY
                </p>
                <p className="text-dark-600 text-sm mt-1">
                  Map integration available
                </p>
              </div>
            </div>
            {/* 
              To add a real map, integrate Google Maps or Mapbox:
              <iframe 
                src="https://www.google.com/maps/embed?..."
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'grayscale(100%) invert(92%) hue-rotate(180deg)' }}
              />
            */}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers-section bg-dark-950 py-16 md:py-24 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Careers
          </h2>
          <p className="text-dark-400 text-lg mb-8 max-w-2xl mx-auto">
            Join our team of creative minds. We're always looking for talented designers,
            developers, and strategists who share our passion for great work.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm uppercase tracking-wider"
          >
            View Open Positions
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
      </section>

      <Footer />
    </main>
  )
}
