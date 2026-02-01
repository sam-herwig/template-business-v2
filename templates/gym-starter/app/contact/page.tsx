'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  ContactForm,
  GYM,
} from '../components'
import { fadeInUp, fadeInUpReduced, useVariant } from '../components/animations'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/icons'

// ═══════════════════════════════════════════════════════════════
// Contact Page - Get in Touch
// ═══════════════════════════════════════════════════════════════

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'YouTube', icon: YouTubeIcon, href: '#' },
] as const

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Get in Touch"
          title="CONTACT US"
          description="Questions? Ready to start? We're here to help you reach your fitness goals."
        />

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={itemVariants}
                >
                  <h2 className="font-display text-2xl text-white tracking-wider mb-6">
                    SEND US A MESSAGE
                  </h2>
                  <ContactForm />
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="bg-dark-800 rounded-2xl p-8 border border-dark-700 sticky top-32"
                >
                  <h2 className="font-display text-2xl text-white tracking-wider mb-8">
                    CONTACT INFO
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary-400">📍</span>
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Location</h3>
                      </div>
                      <p className="text-gray-400 pl-6">
                        {GYM.address}<br />
                        {GYM.city}, {GYM.state} {GYM.zip}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary-400">📞</span>
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Phone</h3>
                      </div>
                      <a
                        href={`tel:${GYM.phone}`}
                        className="text-gray-400 hover:text-white transition-colors pl-6"
                      >
                        {GYM.phone}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary-400">✉️</span>
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Email</h3>
                      </div>
                      <a
                        href={`mailto:${GYM.email}`}
                        className="text-gray-400 hover:text-white transition-colors pl-6"
                      >
                        {GYM.email}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary-400">🕐</span>
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Hours</h3>
                      </div>
                      <p className="text-gray-400 pl-6">
                        Member Access: {GYM.hours.memberAccess}<br />
                        Staffed: {GYM.hours.staffed}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-dark-700 mt-8 pt-8">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          className="w-10 h-10 flex items-center justify-center bg-dark-700 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
                          aria-label={social.name}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Trial CTA Section */}
        <section className="cta-section section-padding">
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="text-5xl mb-6">🎁</div>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
                START YOUR FREE 7-DAY TRIAL
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Experience everything Iron Athletics has to offer. No commitment, no credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="text-white flex items-center gap-2">
                  <span className="text-white/60">✓</span> Full gym access
                </span>
                <span className="text-white flex items-center gap-2">
                  <span className="text-white/60">✓</span> All classes
                </span>
                <span className="text-white flex items-center gap-2">
                  <span className="text-white/60">✓</span> Locker room
                </span>
              </div>
              <button className="btn-outline">
                Claim Your Free Trial
              </button>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-dark-900">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={itemVariants}
            className="h-[400px] bg-dark-800 flex items-center justify-center border-t border-dark-800"
          >
            {/* Map placeholder - replace with actual Google Maps embed */}
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-400 mb-4">
                Interactive map placeholder<br />
                <span className="text-gray-600 text-sm">Add Google Maps API key to enable</span>
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                Get Directions on Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
