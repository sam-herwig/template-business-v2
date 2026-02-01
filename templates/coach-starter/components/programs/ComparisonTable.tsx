'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Program {
  name: string
  duration: string
  sessions: string
  messaging: string
  price: string
  ctaLabel: string
  ctaHref: string
}

interface ComparisonTableProps {
  programs: Program[]
}

export function ComparisonTable({ programs }: ComparisonTableProps) {
  const [isOpen, setIsOpen] = useState(false)

  const features = [
    { key: 'duration', label: 'Duration' },
    { key: 'sessions', label: 'Sessions' },
    { key: 'messaging', label: 'Support' },
    { key: 'price', label: 'Investment' },
  ] as const

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-3xl overflow-hidden border border-cream-300">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-cream-100 border-b border-cream-300">
                <th className="text-left p-6 font-display text-lg text-primary-900">Compare Programs</th>
                {programs.map((program) => (
                  <th key={program.name} className="p-6 text-center">
                    <span className="font-display text-lg text-primary-900">{program.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.key} className={i < features.length - 1 ? 'border-b border-cream-200' : ''}>
                  <td className="p-6 text-primary-800/70">{feature.label}</td>
                  {programs.map((program) => (
                    <td key={program.name} className="p-6 text-center text-primary-800">
                      {program[feature.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-cream-300 bg-cream-50">
                <td className="p-6"></td>
                {programs.map((program) => (
                  <td key={program.name} className="p-6 text-center">
                    <Link
                      href={program.ctaHref}
                      className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors"
                    >
                      {program.ctaLabel}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white rounded-xl px-6 py-4 flex items-center justify-between border border-cream-300"
        >
          <span className="font-display text-lg text-primary-900">Compare Programs</span>
          <svg
            className={`w-5 h-5 text-primary-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {programs.map((program) => (
                  <div key={program.name} className="bg-white rounded-xl p-6 border border-cream-300">
                    <h4 className="font-display text-lg text-primary-900 mb-4">{program.name}</h4>
                    <dl className="space-y-3">
                      {features.map((feature) => (
                        <div key={feature.key} className="flex justify-between">
                          <dt className="text-primary-800/70">{feature.label}</dt>
                          <dd className="text-primary-800 font-medium">{program[feature.key]}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      href={program.ctaHref}
                      className="mt-4 block w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-full font-medium text-center transition-colors"
                    >
                      {program.ctaLabel}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ComparisonTable
