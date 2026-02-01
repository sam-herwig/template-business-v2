'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { FAQ } from './types'

// ═══════════════════════════════════════════════════════════════
// FAQ Accordion Component
// ═══════════════════════════════════════════════════════════════

interface FAQAccordionProps {
  faqs: FAQ[]
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="border-b border-dark-700">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium pr-4">{faq.question}</span>
        <span
          className={`text-primary-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronIcon />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { duration: prefersReducedMotion ? 0.01 : 0.3 }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { duration: prefersReducedMotion ? 0.01 : 0.2 }
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}

function ChevronIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}
