'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const eventTypes = [
  'Portrait Session',
  'Wedding',
  'Engagement',
  'Commercial',
  'Editorial',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', eventType: '', date: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-white mb-4">Thank You</h3>
        <p className="text-neutral-400">
          Your message has been received. I&apos;ll be in touch within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm text-neutral-500 hover:text-white transition-colors underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Type of Session
          </label>
          <select
            id="eventType"
            required
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-neutral-900">Select type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type} className="bg-neutral-900">{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
          Tell Me About Your Vision
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors resize-none"
          placeholder="Share your ideas, inspiration, or any details about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-12 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
