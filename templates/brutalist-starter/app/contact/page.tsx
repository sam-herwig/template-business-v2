'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Twitter, Instagram, Dribbble, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react'
import { 
  Nav, 
  Footer, 
  PageHero, 
  BrutalButton, 
  BackToTop,
  BrutalInput,
  BrutalTextarea,
  BrutalSelect,
  BrutalRadioGroup,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════════════════════
const INQUIRY_TYPES = [
  { value: 'new-project', label: 'New Project' },
  { value: 'existing', label: 'Existing Work' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'career', label: 'Career' },
  { value: 'hello', label: 'Just Saying Hi' },
]

const BUDGET_OPTIONS = [
  { value: '10-25k', label: '$10K – $25K' },
  { value: '25-50k', label: '$25K – $50K' },
  { value: '50-100k', label: '$50K – $100K' },
  { value: '100k+', label: '$100K+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

interface FormData {
  name: string
  email: string
  company: string
  inquiryType: string
  budget: string
  message: string
}

function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }
  
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brutal-green border-[4px] border-brutal-black p-12 text-center"
        style={{ boxShadow: '8px 8px 0 #1a1a1a' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        <h3 className="font-display font-extrabold text-3xl text-brutal-black mb-4">
          MESSAGE SENT!
        </h3>
        <p className="font-body text-brutal-black/80 mb-8">
          We got your message and we&apos;re excited.<br />
          Expect a reply within 24 hours.
        </p>
        <BrutalButton 
          color="#1a1a1a" 
          href="/"
          ariaLabel="Return to homepage"
        >
          Back to Home
        </BrutalButton>
      </motion.div>
    )
  }
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-brutal-bg dark:bg-brutal-black border-[4px] border-brutal-black dark:border-brutal-bg p-8 md:p-10"
      style={{ boxShadow: '8px 8px 0 #1a1a1a' }}
    >
      <h2 className="font-display font-extrabold text-2xl text-brutal-black dark:text-brutal-bg mb-8">
        CONTACT FORM
      </h2>
      
      <BrutalInput
        label="Your Name"
        placeholder="Jane Smith"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      
      <BrutalInput
        label="Email Address"
        type="email"
        placeholder="jane@company.com"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      
      <BrutalInput
        label="Company"
        placeholder="Acme Inc."
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      
      <BrutalRadioGroup
        label="What brings you here?"
        name="inquiryType"
        options={INQUIRY_TYPES}
        value={formData.inquiryType}
        onChange={(value) => setFormData({ ...formData, inquiryType: value })}
      />
      
      <BrutalSelect
        label="Budget Range"
        options={BUDGET_OPTIONS}
        value={formData.budget}
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
      />
      
      <BrutalTextarea
        label="Tell us about your project"
        placeholder="Give us the details... What are you building? What's your timeline? What's keeping you up at night?"
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      
      <BrutalButton 
        type="submit" 
        color="#FF5CAA" 
        size="large"
        disabled={isSubmitting}
        ariaLabel="Send message"
      >
        {isSubmitting ? 'Sending...' : 'SEND IT →'}
      </BrutalButton>
    </motion.form>
  )
}

// ═══════════════════════════════════════════════════════════════
// CONTACT INFO
// ═══════════════════════════════════════════════════════════════
const SOCIAL_LINKS = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/smashstudio' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/smashstudio' },
  { name: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com/smashstudio' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/smashstudio' },
]

function ContactInfo(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="space-y-8"
    >
      <h2 className="font-display font-extrabold text-2xl text-brutal-black dark:text-brutal-bg">
        QUICK INFO
      </h2>
      
      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brutal-yellow border-[3px] border-brutal-black flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-brutal-black dark:text-brutal-bg mb-1">Email</h3>
          <a 
            href="mailto:hello@smash.studio"
            className="font-body text-brutal-pink hover:underline"
          >
            hello@smash.studio
          </a>
        </div>
      </div>
      
      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brutal-pink border-[3px] border-brutal-black flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-brutal-black dark:text-brutal-bg mb-1">Location</h3>
          <address className="font-body text-brutal-black/70 dark:text-brutal-bg/70 not-italic">
            1234 Larimer St<br />
            Denver, CO 80202
          </address>
        </div>
      </div>
      
      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brutal-blue border-[3px] border-brutal-black flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-brutal-bg" />
        </div>
        <div>
          <h3 className="font-display font-bold text-brutal-black dark:text-brutal-bg mb-1">Phone</h3>
          <a 
            href="tel:+17205557627"
            className="font-body text-brutal-black/70 dark:text-brutal-bg/70 hover:text-brutal-pink transition-colors"
          >
            (720) 555-SMASH
          </a>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t-2 border-brutal-black/20 dark:border-brutal-bg/20 pt-8">
        <h3 className="font-display font-bold text-brutal-black dark:text-brutal-bg mb-4">SOCIAL</h3>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brutal-black dark:bg-brutal-bg border-[3px] border-brutal-black dark:border-brutal-bg flex items-center justify-center"
                style={{ boxShadow: '3px 3px 0 #FF5CAA' }}
                whileHover={{ x: -2, y: -2, boxShadow: '5px 5px 0 #FF5CAA' }}
                whileTap={{ x: 1, y: 1, boxShadow: '1px 1px 0 #FF5CAA' }}
                aria-label={`Follow us on ${link.name}`}
              >
                <Icon className="w-5 h-5 text-brutal-bg dark:text-brutal-black" />
              </motion.a>
            )
          })}
        </div>
      </div>
      
      {/* Response time */}
      <div className="border-t-2 border-brutal-black/20 dark:border-brutal-bg/20 pt-8">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-brutal-green" />
          <div>
            <h3 className="font-display font-bold text-brutal-black dark:text-brutal-bg">RESPONSE TIME</h3>
            <p className="font-body text-sm text-brutal-black/70 dark:text-brutal-bg/70">
              &lt; 24 hours (usually much less)
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAP SECTION
// ═══════════════════════════════════════════════════════════════
function MapSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="font-display font-bold text-xl text-brutal-black dark:text-brutal-bg">
            COME SAY HI IN PERSON
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative aspect-[21/9] border-[4px] border-brutal-black dark:border-brutal-bg overflow-hidden"
          style={{ boxShadow: '8px 8px 0 #FFE600' }}
        >
          {/* Placeholder for map - in production, use Google Maps or Mapbox */}
          <div className="absolute inset-0 bg-gradient-to-br from-brutal-blue/20 to-brutal-purple/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-brutal-pink border-[3px] border-brutal-black flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="font-display font-bold text-brutal-black dark:text-brutal-bg">
                1234 Larimer St, Denver CO
              </p>
              <a 
                href="https://maps.google.com/?q=1234+Larimer+St+Denver+CO"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-brutal-pink hover:underline inline-flex items-center gap-1 mt-2"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function ContactPage(): JSX.Element {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          badge={{ text: 'Get in Touch', emoji: '📬', color: '#FF5CAA' }}
          title="LET'S"
          highlight={{ text: 'TALK', color: '#22C55E', rotate: -1 }}
          subtitle="Drop us a line. We'll buy the first round of coffee."
          shapes={[
            { color: '#3B82F6', size: 80, top: '20%', left: '6%', rotate: 25 },
            { color: '#FFE600', size: 60, top: '55%', right: '10%', rotate: -20 },
          ]}
        />
        
        {/* Contact Split */}
        <section className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              
              {/* Info */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        <MapSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
