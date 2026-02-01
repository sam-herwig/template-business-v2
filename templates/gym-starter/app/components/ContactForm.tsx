'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, fadeInUpReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Contact Form Component
// ═══════════════════════════════════════════════════════════════

const INTEREST_OPTIONS = [
  'Free Trial',
  'Membership',
  'Personal Training',
  'Classes',
  'Corporate Rates',
  'General Inquiry',
] as const

export function ContactForm() {
  const prefersReducedMotion = useReducedMotion()
  const variants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="bg-dark-800 rounded-2xl p-8 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl text-white tracking-wider mb-2">Message Sent!</h3>
        <p className="text-gray-400">We'll get back to you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            required
            value={formState.firstName}
            onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            required
            value={formState.lastName}
            onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
            className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={formState.phone}
          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
          I'm interested in *
        </label>
        <select
          id="interest"
          required
          value={formState.interest}
          onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
        >
          <option value="">Select an option</option>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
          placeholder="Tell us about your fitness goals..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  )
}
