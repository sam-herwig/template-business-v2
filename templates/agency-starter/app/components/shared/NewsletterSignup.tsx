'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NewsletterSignupProps {
  title?: string
  description?: string
}

export default function NewsletterSignup({
  title = 'Stay in the loop',
  description = 'Get the latest insights on design, strategy, and creative trends delivered to your inbox.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-20 md:py-28 bg-dark-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-dark-400 text-lg mb-8">{description}</p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary-400 font-medium"
            >
              ✓ Thanks for subscribing! Check your inbox.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-dark-800 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
