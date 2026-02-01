'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, fadeInUpReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Comparison Table Component - Feature comparison for memberships
// ═══════════════════════════════════════════════════════════════

interface ComparisonFeature {
  name: string
  dayPass: boolean | string
  monthly: boolean | string
  annual: boolean | string
}

interface ComparisonTableProps {
  features: ComparisonFeature[]
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-white font-medium">{value}</span>
  }
  return value ? (
    <span className="text-primary-400">✓</span>
  ) : (
    <span className="text-gray-600">—</span>
  )
}

export function ComparisonTable({ features }: ComparisonTableProps) {
  const prefersReducedMotion = useReducedMotion()
  const variants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      className="overflow-x-auto"
    >
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-dark-700">
            <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm uppercase tracking-wider">
              Feature
            </th>
            <th className="text-center py-4 px-4 text-gray-400 font-medium text-sm uppercase tracking-wider">
              Day Pass
            </th>
            <th className="text-center py-4 px-4 text-primary-400 font-medium text-sm uppercase tracking-wider">
              Monthly
            </th>
            <th className="text-center py-4 px-4 text-gray-400 font-medium text-sm uppercase tracking-wider">
              Annual
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className="border-b border-dark-800 hover:bg-dark-800/50 transition-colors"
            >
              <td className="py-4 px-4 text-gray-300">{feature.name}</td>
              <td className="py-4 px-4 text-center">
                <FeatureValue value={feature.dayPass} />
              </td>
              <td className="py-4 px-4 text-center bg-primary-500/5">
                <FeatureValue value={feature.monthly} />
              </td>
              <td className="py-4 px-4 text-center">
                <FeatureValue value={feature.annual} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
