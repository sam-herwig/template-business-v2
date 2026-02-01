'use client'

import { useState } from 'react'

interface ContactFormProps {
  subjectOptions?: string[]
  submitLabel?: string
  successMessage?: string
}

export function ContactForm({
  subjectOptions = ['1:1 Coaching', 'Group Program', 'VIP Day', 'Just have a question'],
  submitLabel = 'Send Message',
  successMessage = "Thanks for reaching out! I'll get back to you within 24-48 hours.",
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call - replace with actual form handling
    setTimeout(() => {
      setStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  if (status === 'success') {
    return (
      <div className="bg-sage-100 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-sage-700 font-medium">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-cream-100 border-2 border-cream-300 text-primary-900 placeholder:text-primary-800/40 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 focus:bg-white focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-cream-100 border-2 border-cream-300 text-primary-900 placeholder:text-primary-800/40 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 focus:bg-white focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-800 mb-3">
          What brings you here?
        </label>
        <div className="flex flex-wrap gap-3">
          {subjectOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFormState({ ...formState, subject: option })}
              className={`px-4 py-2 rounded-full border-2 text-sm transition-all ${
                formState.subject === option
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-cream-300 text-primary-800/70 hover:border-primary-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full px-5 py-4 rounded-xl bg-cream-100 border-2 border-cream-300 text-primary-900 placeholder:text-primary-800/40 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 focus:bg-white focus:outline-none resize-none"
          placeholder="Tell me a bit about what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-medium text-lg transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : submitLabel}
      </button>
    </form>
  )
}

export default ContactForm
