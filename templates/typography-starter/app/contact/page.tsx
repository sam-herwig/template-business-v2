'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { 
  RotatingWords, 
  ScrollRevealText,
  ScrambleText,
  WaveText,
  Typewriter,
  MagneticText
} from '@/components/motion'
import { faqs } from '@/lib/data'

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
  budget: string
}

function FloatingInput({ 
  label, 
  name, 
  type = 'text',
  value,
  onChange,
  required = false
}: { 
  label: string
  name: string
  type?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <motion.label
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue 
            ? 'text-xs top-0 text-kinetic-accent' 
            : 'text-base top-6 text-kinetic-muted'
        }`}
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.85 : 1
        }}
      >
        {label} {required && '*'}
      </motion.label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full bg-transparent border-b-2 border-kinetic-border py-6 pt-8 outline-none transition-colors focus:border-kinetic-accent"
      />
      <motion.span
        className="absolute bottom-0 left-1/2 h-0.5 bg-kinetic-accent"
        initial={{ width: 0, x: '-50%' }}
        animate={{ width: isFocused ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

function FloatingTextarea({ 
  label, 
  name, 
  value,
  onChange,
  required = false
}: { 
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <motion.label
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue 
            ? 'text-xs top-0 text-kinetic-accent' 
            : 'text-base top-6 text-kinetic-muted'
        }`}
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.85 : 1
        }}
      >
        {label} {required && '*'}
      </motion.label>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={4}
        className="w-full bg-transparent border-b-2 border-kinetic-border py-6 pt-8 outline-none transition-colors focus:border-kinetic-accent resize-none"
      />
      <motion.span
        className="absolute bottom-0 left-1/2 h-0.5 bg-kinetic-accent"
        initial={{ width: 0, x: '-50%' }}
        animate={{ width: isFocused ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

function BudgetSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const options = ['< $5K', '$5K - $15K', '$15K - $30K', '$30K+']

  return (
    <div>
      <p className="text-sm text-kinetic-muted mb-4">Budget Range</p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <motion.button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`py-3 px-4 rounded-full text-sm font-medium transition-all ${
              value === option
                ? 'bg-kinetic-text text-kinetic-bg'
                : 'border border-kinetic-border text-kinetic-muted hover:border-kinetic-muted'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-kinetic-accent/20 flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-4xl">✓</span>
        </motion.div>
        <h3 className="text-2xl font-bold mb-4">
          <ScrambleText trigger="mount">Message sent!</ScrambleText>
        </h3>
        <p className="text-kinetic-muted">
          <Typewriter words={["We'll respond within 24 hours."]} />
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FloatingInput
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        required
      />
      
      <FloatingInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
        required
      />
      
      <div className="relative">
        <label className="text-xs text-kinetic-muted block mb-2">Project Type</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full bg-transparent border-b-2 border-kinetic-border py-4 outline-none appearance-none cursor-pointer focus:border-kinetic-accent"
          required
        >
          <option value="" className="bg-kinetic-bg">Select a service...</option>
          <option value="branding" className="bg-kinetic-bg">Kinetic Branding</option>
          <option value="motion" className="bg-kinetic-bg">Motion Systems</option>
          <option value="titles" className="bg-kinetic-bg">Title Sequences</option>
          <option value="interactive" className="bg-kinetic-bg">Interactive Type</option>
          <option value="other" className="bg-kinetic-bg">Other</option>
        </select>
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-kinetic-muted pointer-events-none">▼</span>
      </div>
      
      <FloatingTextarea
        label="Tell us about your project"
        name="message"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        required
      />
      
      <BudgetSelector
        value={formData.budget}
        onChange={(value) => setFormData({ ...formData, budget: value })}
      />

      <MagneticText>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-kinetic-text text-kinetic-bg font-semibold rounded-full flex items-center justify-center gap-3"
          whileHover={{ scale: 1.02, backgroundColor: '#60a5fa' }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <motion.span
              className="w-5 h-5 border-2 border-kinetic-bg border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              <WaveText>Send Message</WaveText>
              <motion.span whileHover={{ x: 5 }}>→</motion.span>
            </>
          )}
        </motion.button>
      </MagneticText>
    </form>
  )
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-kinetic-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-medium group-hover:text-kinetic-accent transition-colors">
          {faq.question}
        </span>
        <motion.span
          className="text-xl text-kinetic-muted"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 text-kinetic-muted leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      
      <main id="main-content">
        {/* Hero */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 md:px-8 pt-32 pb-16">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(3rem,10vw,7rem)] font-extrabold leading-none tracking-tight mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                LET&apos;S
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <RotatingWords words={['TALK', 'COLLABORATE', 'CREATE', 'BUILD']} />
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-kinetic-muted max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Got a project in mind? We&apos;d love to hear about it.
              <br />Drop us a line and let&apos;s make something incredible.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Layout */}
        <section className="py-16 px-4 md:px-8 border-t border-kinetic-border">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollRevealText>
              <div>
                <h2 className="text-2xl font-bold mb-8">
                  <ScrambleText>Send us a message</ScrambleText>
                </h2>
                <ContactForm />
              </div>
            </ScrollRevealText>

            {/* Contact Info Sidebar */}
            <ScrollRevealText delay={0.2}>
              <div className="lg:pl-8 lg:border-l border-kinetic-border">
                <h2 className="text-2xl font-bold mb-8">
                  <ScrambleText>Get in touch</ScrambleText>
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-kinetic-muted mb-2">Email</p>
                    <a 
                      href="mailto:hello@kinetic.design"
                      className="text-lg font-medium hover:text-kinetic-accent transition-colors"
                    >
                      hello@kinetic.design
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-kinetic-muted mb-2">Phone</p>
                    <a 
                      href="tel:+15551234567"
                      className="text-lg font-medium hover:text-kinetic-accent transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-kinetic-muted mb-2">Location</p>
                    <p className="text-lg">
                      123 Motion Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-kinetic-muted mb-4">Follow Us</p>
                    <div className="flex gap-6">
                      {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((platform, i) => (
                        <motion.a
                          key={platform}
                          href="#"
                          className="text-kinetic-muted hover:text-kinetic-accent transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {platform}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="aspect-video rounded-2xl overflow-hidden bg-kinetic-border/50 flex items-center justify-center">
                    <div className="text-center text-kinetic-muted">
                      <motion.span
                        className="text-4xl block mb-2"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        📍
                      </motion.span>
                      <p className="text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 md:px-8 border-t border-kinetic-border">
          <div className="max-w-3xl mx-auto">
            <ScrollRevealText className="mb-12 text-center">
              <span className="section-label">Questions?</span>
              <h2 className="section-title">
                <ScrambleText>Frequently Asked</ScrambleText>
              </h2>
            </ScrollRevealText>

            <div className="border-t border-kinetic-border">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-4 md:px-8 text-center" style={{ background: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.03))' }}>
          <ScrollRevealText>
            <p className="text-kinetic-muted mb-4">Prefer a quick call?</p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-8">
              Schedule a 15-minute discovery call
            </h2>
          </ScrollRevealText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <motion.span
                className="btn-secondary text-lg px-10 py-4 inline-flex items-center gap-2"
                whileHover={{ scale: 1.02, borderColor: 'rgba(96, 165, 250, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
                <span>↗</span>
              </motion.span>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
