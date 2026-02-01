'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  headline?: string
  description?: string
  buttonLabel?: string
  variant?: 'inline' | 'card' | 'minimal'
  note?: string
}

export function NewsletterForm({
  headline,
  description,
  buttonLabel = 'Subscribe',
  variant = 'inline',
  note = 'No spam, ever. Unsubscribe anytime.',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call - replace with actual newsletter integration
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-5 py-3 rounded-full border border-cream-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-900"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : buttonLabel}
        </button>
      </form>
    )
  }

  if (variant === 'card') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-cream-300">
        {headline && <h3 className="font-display text-2xl text-primary-900 mb-2">{headline}</h3>}
        {description && <p className="text-primary-800/70 mb-6">{description}</p>}
        
        {status === 'success' ? (
          <div className="text-sage-600 font-medium py-4">
            ✓ Thanks for subscribing! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl border-2 border-cream-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 focus:outline-none text-primary-900 bg-cream-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-medium text-lg transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : buttonLabel}
            </button>
            {note && <p className="text-xs text-primary-800/50 text-center">{note}</p>}
          </form>
        )}
      </div>
    )
  }

  // Default: inline variant
  return (
    <div className="max-w-xl mx-auto">
      {headline && <h3 className="font-display text-2xl text-primary-900 mb-2 text-center">{headline}</h3>}
      {description && <p className="text-primary-800/70 mb-6 text-center">{description}</p>}
      
      {status === 'success' ? (
        <div className="text-sage-600 font-medium py-4 text-center">
          ✓ Thanks for subscribing! Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-4 rounded-xl border-2 border-cream-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 focus:outline-none text-primary-900"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : buttonLabel}
          </button>
        </form>
      )}
      {note && status !== 'success' && <p className="text-xs text-primary-800/50 text-center mt-3">{note}</p>}
    </div>
  )
}

export default NewsletterForm
