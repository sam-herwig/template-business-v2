'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  topic?: string
  message: string
}

interface ContactFormProps {
  topics?: string[]
  onSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
}

export function ContactForm({ topics, onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setStatus('loading')
    
    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', topic: '', message: '' })
    } catch {
      setStatus('error')
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }
  
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center ${className}`}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl text-neutral-900 mb-2">Message Sent!</h3>
        <p className="text-neutral-600 mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Send another message
        </button>
      </motion.div>
    )
  }
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white rounded-3xl p-8 md:p-10 shadow-sm ${className}`}
    >
      <h3 className="font-display text-2xl text-neutral-900 mb-6">Send us a message</h3>
      
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Name <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? 'border-red-500' : 'border-neutral-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email <span className="text-primary-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-500' : 'border-neutral-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone <span className="text-neutral-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        
        {/* Topic */}
        {topics && topics.length > 0 && (
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-neutral-700 mb-2">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
            >
              <option value="">Select a topic</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        )}
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Message <span className="text-primary-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? 'border-red-500' : 'border-neutral-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none`}
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>
        
        {/* Error message */}
        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            Something went wrong. Please try again.
          </div>
        )}
        
        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
