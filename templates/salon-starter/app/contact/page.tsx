'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  Instagram,
  Facebook,
  Star,
  Car,
  Accessibility,
  Train,
  ArrowRight
} from 'lucide-react'
import { Nav, Footer } from '@/components/layout'
import { PageHero, Breadcrumbs, ContactForm, MapEmbed } from '@/components/shared'

const SALON = {
  name: "Luxe Hair Studio",
  phone: "(555) 234-5678",
  email: "hello@luxehairstudio.com",
  address: "456 Style Avenue, Suite 100, Beverly Hills, CA 90210",
  hours: { 
    weekday: "Monday - Friday: 9am - 7pm", 
    saturday: "Saturday: 9am - 5pm", 
    sunday: "Sunday: Closed" 
  },
}

const LOCATION_INFO = [
  {
    icon: Car,
    title: "Parking",
    description: "Free parking available in our private lot behind the building. Street parking also available."
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Fully wheelchair accessible with ramp entrance and accessible restrooms."
  },
  {
    icon: Train,
    title: "Public Transit",
    description: "2 blocks from Metro Station. Bus lines 14, 37, and 217 stop at Style & Main."
  },
]

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/luxehairstudio', handle: '@luxehairstudio' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/luxehairstudio', handle: 'Luxe Hair Studio' },
  { icon: Star, label: 'Yelp', href: 'https://yelp.com/luxehairstudio', handle: 'Read Reviews' },
]

const CONTACT_TOPICS = [
  'General Inquiry',
  'Appointment Question',
  'Feedback',
  'Careers',
  'Events & Partnerships',
  'Other',
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="Get in Touch"
          description="We'd love to hear from you"
          compact
        />
        
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'Contact' }]} className="mb-12" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl text-neutral-900 mb-8">Visit Us</h2>
                
                <address className="not-italic space-y-6">
                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="contact-label">Location</h3>
                      <p className="contact-value">{SALON.address}</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <Clock className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="contact-label">Hours</h3>
                      <p className="contact-value">{SALON.hours.weekday}</p>
                      <p className="contact-value">{SALON.hours.saturday}</p>
                      <p className="contact-value">{SALON.hours.sunday}</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <Phone className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="contact-label">Phone</h3>
                      <p className="contact-value">
                        <a 
                          href={`tel:${SALON.phone.replace(/[^\d+]/g, '')}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {SALON.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="contact-label">Email</h3>
                      <p className="contact-value">
                        <a 
                          href={`mailto:${SALON.email}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {SALON.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </address>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">Follow Us</h3>
                  <nav className="flex flex-wrap gap-3" aria-label="Social media links">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon
                      return (
                        <a 
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 rounded-full text-sm transition-colors"
                          aria-label={`Follow us on ${social.label}`}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span>{social.handle}</span>
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ContactForm topics={CONTACT_TOPICS} />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-[rgb(var(--muted))] py-0">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapEmbed address={SALON.address} height={400} />
            </motion.div>
          </div>
        </section>
        
        {/* Additional Info */}
        <section className="section-padding-sm bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {LOCATION_INFO.map((info) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    variants={fadeInUp}
                    className="p-6 bg-neutral-50 rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{info.title}</h3>
                    <p className="text-neutral-600 text-sm">{info.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
        
        {/* Booking CTA */}
        <section className="section-padding bg-primary-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
                Ready to Book?
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Schedule your appointment online and let us take care of the rest.
              </p>
              <Link 
                href="/book" 
                className="btn-primary bg-white text-primary-700 hover:bg-white/90 group"
              >
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
