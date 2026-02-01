'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Calendar, MapPin, Twitter, Linkedin, Instagram, Dribbble, Copy, Check, Send } from 'lucide-react'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  PageHero, 
  BentoTile,
  GlassButton, 
  colors, 
  useIsMobile,
  FloatingOrb
} from '@/components/shared'

const projectTypes = [
  { value: 'brand', label: 'Branding' },
  { value: 'web', label: 'Web Design & Development' },
  { value: 'app', label: 'App Design' },
  { value: 'motion', label: 'Motion Design' },
  { value: 'other', label: 'Other' },
]

const budgetRanges = [
  { value: '5k-15k', label: '$5K - $15K' },
  { value: '15k-50k', label: '$15K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k+', label: '$100K+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const quickContacts = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'hello@prism.studio',
    action: 'copy',
    color: colors.violet,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+1 (415) 555-0123',
    action: 'call',
    color: colors.blue,
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    label: 'Schedule',
    value: 'Book a 30-min call',
    action: 'calendly',
    color: colors.emerald,
  },
]

const socials = [
  { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', handle: '@studioprism', href: '#', color: '#1DA1F2' },
  { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', handle: '/studioprism', href: '#', color: '#0A66C2' },
  { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', handle: '@studioprism', href: '#', color: '#E4405F' },
  { icon: <Dribbble className="w-6 h-6" />, label: 'Dribbble', handle: '/studioprism', href: '#', color: '#EA4C89' },
]

function GlassInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string
  type?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  placeholder?: string
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative">
      <motion.label
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${focused || value ? 'text-xs top-2 text-studio-violet' : 'text-sm top-4 text-white/50'}
        `}
      >
        {label} {required && <span className="text-studio-pink">*</span>}
      </motion.label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={focused ? placeholder : ''}
        className={`
          w-full px-4 pt-6 pb-3 rounded-xl text-white
          bg-white/5 backdrop-blur-sm
          border transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-studio-violet/50
          ${focused ? 'border-studio-violet/50' : 'border-white/10'}
        `}
      />
    </div>
  )
}

function GlassTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  rows = 4,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative">
      <motion.label
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${focused || value ? 'text-xs top-2 text-studio-violet' : 'text-sm top-4 text-white/50'}
        `}
      >
        {label} {required && <span className="text-studio-pink">*</span>}
      </motion.label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className={`
          w-full px-4 pt-6 pb-3 rounded-xl text-white resize-none
          bg-white/5 backdrop-blur-sm
          border transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-studio-violet/50
          ${focused ? 'border-studio-violet/50' : 'border-white/10'}
        `}
      />
    </div>
  )
}

function GlassSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  required?: boolean
}) {
  return (
    <div className="relative">
      <label className="absolute left-4 top-2 text-xs text-studio-violet pointer-events-none">
        {label} {required && <span className="text-studio-pink">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 pt-6 pb-3 rounded-xl text-white appearance-none
          bg-white/5 backdrop-blur-sm
          border border-white/10 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-studio-violet/50 focus:border-studio-violet/50
        `}
      >
        <option value="" disabled className="bg-studio-bg">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-studio-bg">
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
    }, 3000)
  }

  return (
    <BentoTile
      accentColor={colors.violet}
      gradient
      gradientColors={[colors.violet, colors.blue]}
      className="min-h-[500px] p-6 md:p-8"
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-full flex flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-studio-emerald/20 flex items-center justify-center mb-6"
            >
              <Check className="w-10 h-10 text-studio-emerald" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-white/60">We&apos;ll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="h-full flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            
            <div className="space-y-4 flex-grow">
              <GlassInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <GlassInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <GlassSelect
                label="Project Type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                options={projectTypes}
                required
              />
              
              <GlassSelect
                label="Budget Range"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={budgetRanges}
              />
              
              <GlassTextarea
                label="Tell us about your project"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className={`
                mt-6 w-full py-4 rounded-xl font-semibold
                flex items-center justify-center gap-2
                bg-gradient-to-r from-studio-violet to-studio-blue
                hover:shadow-lg hover:shadow-studio-violet/40
                transition-all duration-300
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </BentoTile>
  )
}

function QuickContactTile({ contact }: { contact: typeof quickContacts[0] }) {
  const [copied, setCopied] = useState(false)

  const handleAction = () => {
    if (contact.action === 'copy') {
      navigator.clipboard.writeText(contact.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else if (contact.action === 'call') {
      window.location.href = `tel:${contact.value.replace(/\D/g, '')}`
    } else if (contact.action === 'calendly') {
      window.open('https://calendly.com/studioprism', '_blank')
    }
  }

  return (
    <BentoTile
      accentColor={contact.color}
      className="min-h-[120px] cursor-pointer group"
      onClick={handleAction}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${contact.color}20` }}
          >
            <span style={{ color: contact.color }}>{contact.icon}</span>
          </div>
          <motion.div
            animate={{ opacity: copied ? 1 : 0 }}
            className="text-studio-emerald text-sm flex items-center gap-1"
          >
            <Check className="w-4 h-4" />
            Copied!
          </motion.div>
        </div>
        
        <div>
          <p className="text-xs text-white/50 uppercase tracking-widest mb-1">{contact.label}</p>
          <p className="font-semibold group-hover:text-studio-violet transition-colors">{contact.value}</p>
        </div>
      </div>
    </BentoTile>
  )
}

function LocationSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {/* Map placeholder */}
        <BentoTile
          accentColor={colors.violet}
          className="min-h-[300px]"
        >
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-white/60">Interactive map coming soon</p>
          </div>
        </BentoTile>

        {/* Address */}
        <BentoTile
          accentColor={colors.blue}
          className="min-h-[300px]"
        >
          <div className="h-full flex flex-col">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `${colors.blue}20` }}
            >
              <MapPin className="w-7 h-7 text-studio-blue" />
            </div>
            
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            
            <div className="space-y-2 text-white/70 flex-grow">
              <p>123 Design Street</p>
              <p>Suite 456</p>
              <p>San Francisco, CA 94102</p>
              <p>United States</p>
            </div>
            
            <GlassButton href="https://maps.google.com" className="mt-6">
              Get Directions
            </GlassButton>
          </div>
        </BentoTile>
      </div>
    </section>
  )
}

function SocialsSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl font-bold mb-8"
      >
        Follow Us
      </motion.h3>

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {socials.map((social, i) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <BentoTile
                accentColor={social.color}
                className="min-h-[140px] group"
                hoverContent={
                  <div 
                    className="text-center"
                    style={{ color: social.color }}
                  >
                    <div className="mb-2">{social.icon}</div>
                    <p className="text-sm">Follow →</p>
                  </div>
                }
              >
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${social.color}20` }}
                  >
                    <span style={{ color: social.color }}>{social.icon}</span>
                  </div>
                  <p className="font-semibold">{social.label}</p>
                  <p className="text-xs text-white/50">{social.handle}</p>
                </div>
              </BentoTile>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function ContactPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      
      <main id="main-content">
        <PageHero
          tag="✦ Get in Touch"
          title={<>Let&apos;s create something <span className="gradient-text">extraordinary</span></>}
          description="Whether you have a project in mind or just want to say hello, we'd love to hear from you."
        />

        {/* Contact Form Section */}
        <section className="px-4 md:px-8 pb-16 max-w-7xl mx-auto relative">
          <FloatingOrb color={colors.violet} size={200} className="top-0 left-0" />
          <FloatingOrb color={colors.blue} size={150} delay={2} className="bottom-0 right-0" />

          <div className={`grid gap-6 relative z-10 ${isMobile ? 'grid-cols-1' : 'grid-cols-5'}`}>
            {/* Form - takes 3 columns */}
            <div className={isMobile ? '' : 'col-span-3'}>
              <ContactForm />
            </div>

            {/* Quick contacts - takes 2 columns */}
            <div className={`space-y-4 ${isMobile ? '' : 'col-span-2'}`}>
              {quickContacts.map((contact) => (
                <QuickContactTile key={contact.label} contact={contact} />
              ))}
            </div>
          </div>
        </section>

        <LocationSection />
        <SocialsSection />
      </main>
      
      <Footer />
    </>
  )
}
