'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  AlertCircle,
  Calendar,
  User,
  Scissors
} from 'lucide-react'
import { Nav, Footer } from '@/components/layout'
import { PageHero, Breadcrumbs } from '@/components/shared'
import { BookingEmbed } from '@/components/BookingButton'

const SERVICES_FOR_BOOKING = [
  { id: 'womens-cut', name: "Women's Cut & Style", price: 65, duration: "60 min", category: "Hair Cuts" },
  { id: 'mens-cut', name: "Men's Cut", price: 35, duration: "30 min", category: "Hair Cuts" },
  { id: 'single-color', name: "Single Process Color", price: 85, duration: "90 min", category: "Color Services" },
  { id: 'highlights', name: "Full Highlights", price: 150, duration: "120 min", category: "Color Services" },
  { id: 'balayage', name: "Balayage / Ombre", price: 200, duration: "180 min", category: "Color Services" },
  { id: 'blowout', name: "Blowout", price: 45, duration: "45 min", category: "Styling" },
  { id: 'keratin', name: "Keratin Treatment", price: 250, duration: "180 min", category: "Treatments" },
]

const STYLISTS = [
  { id: 'any', name: 'No preference', specialty: '' },
  { id: 'sarah', name: 'Sarah Johnson', specialty: 'Balayage & Color' },
  { id: 'michelle', name: 'Michelle Chen', specialty: 'Precision Cuts' },
  { id: 'jessica', name: 'Jessica Rivera', specialty: 'Vivid Colors' },
  { id: 'emma', name: 'Emma Thompson', specialty: 'Curly Hair' },
]

const POLICIES = [
  {
    title: 'Cancellation Policy',
    content: 'We kindly request at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee equal to 50% of the scheduled service.'
  },
  {
    title: 'Deposits',
    content: 'For color services over $100, a non-refundable deposit of $50 is required to secure your appointment. This deposit will be applied to your service total.'
  },
  {
    title: 'Late Arrivals',
    content: 'If you arrive more than 15 minutes late, we may need to reschedule your appointment to avoid impacting other clients. Please plan accordingly.'
  },
]

// Booking configuration - this would typically come from Sanity
const bookingConfig = {
  enabled: true,
  provider: 'fresha' as const,
  embedUrl: 'https://widget.fresha.com/luxehairstudio',
  buttonText: 'Book Now',
}

export default function BookPage() {
  const [useForm, setUseForm] = useState(false)
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: 'any',
    date: '',
    time: '',
    isNewClient: true,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking request:', formData)
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.')
  }

  return (
    <>
      <Nav />
      <main id="main-content">
        <PageHero
          eyebrow="Book Online"
          title="Book Your Appointment"
          description="Schedule your visit online or contact us directly"
          compact
        />
        
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'Book' }]} className="mb-8" />
            
            {/* Toggle between embed and form */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-neutral-100 rounded-full p-1">
                <button
                  onClick={() => setUseForm(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    !useForm 
                      ? 'bg-white text-neutral-900 shadow-sm' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Book Online
                </button>
                <button
                  onClick={() => setUseForm(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    useForm 
                      ? 'bg-white text-neutral-900 shadow-sm' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Request Form
                </button>
              </div>
            </div>
            
            {/* Booking Widget */}
            {!useForm ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <BookingEmbed config={bookingConfig} height={700} className="w-full" />
              </motion.div>
            ) : (
              /* Booking Form */
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
              >
                <h2 className="font-display text-2xl text-neutral-900 mb-6">Request an Appointment</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      <Scissors className="w-4 h-4 inline mr-2" />
                      Select Service <span className="text-primary-600">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Choose a service</option>
                      {SERVICES_FOR_BOOKING.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name} — ${service.price} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Stylist Selection */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Preferred Stylist
                    </label>
                    <select
                      name="stylist"
                      value={formData.stylist}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      {STYLISTS.map(stylist => (
                        <option key={stylist.id} value={stylist.id}>
                          {stylist.name} {stylist.specialty && `— ${stylist.specialty}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Name <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  {/* New Client */}
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="isNewClient"
                        checked={formData.isNewClient}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-neutral-700">I'm a new client</span>
                    </label>
                  </div>
                  
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 7pm)</option>
                    </select>
                  </div>
                  
                  {/* Additional Notes */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Any special requests or information we should know?"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <button type="submit" className="btn-primary w-full">
                    Request Appointment
                  </button>
                  <p className="text-center text-neutral-500 text-sm mt-4">
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </motion.form>
            )}
            
            {/* Alternative Contact */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-neutral-600 mb-4">Prefer to speak with us?</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:+15552345678" 
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (555) 234-5678
                </a>
                <a 
                  href="mailto:hello@luxehairstudio.com" 
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Mail className="w-5 h-5" />
                  hello@luxehairstudio.com
                </a>
              </div>
            </motion.div>
            
            {/* Policies */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl text-neutral-900 mb-6 text-center">
                Booking Policies
              </h3>
              <div className="space-y-3">
                {POLICIES.map((policy, index) => (
                  <div 
                    key={index}
                    className="bg-neutral-50 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedPolicy(expandedPolicy === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-medium text-neutral-900">{policy.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-neutral-500 transition-transform ${
                          expandedPolicy === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedPolicy === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-neutral-600 text-sm">{policy.content}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
