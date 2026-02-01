'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BUDGET_OPTIONS = [
  'Under $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
]

const PROJECT_TYPES = ['Branding', 'Web Design', 'Product Design', 'Campaign', 'Other']

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectTypes: [] as string[],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
  }

  const toggleProjectType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }))
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-900 border border-dark-700 p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
          <p className="text-dark-400">
            Thanks for reaching out. We'll get back to you within 24-48 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-dark-400 text-sm uppercase tracking-wider mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-900 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-dark-400 text-sm uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark-900 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-dark-400 text-sm uppercase tracking-wider mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-dark-900 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-dark-400 text-sm uppercase tracking-wider mb-2">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-dark-900 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">Select budget</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-dark-400 text-sm uppercase tracking-wider mb-3">
              Project Type
            </label>
            <div className="flex flex-wrap gap-3">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleProjectType(type)}
                  className={`px-4 py-2 text-sm border transition-all duration-200 ${
                    formData.projectTypes.includes(type)
                      ? 'bg-primary-500 border-primary-500 text-white'
                      : 'bg-transparent border-dark-700 text-dark-400 hover:border-dark-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-dark-400 text-sm uppercase tracking-wider mb-2">
              Tell us about your project *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-dark-900 border border-dark-700 text-white px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
              placeholder="What are you looking to create?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full text-sm uppercase tracking-wider disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
