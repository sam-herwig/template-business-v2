'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, fadeInUpReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Page Hero Component - Reusable hero section for inner pages
// ═══════════════════════════════════════════════════════════════

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  children?: React.ReactNode
  backgroundImage?: string
}

export function PageHero({ eyebrow, title, description, children, backgroundImage }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const variants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </>
      )}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="section-title text-5xl md:text-6xl lg:text-7xl mb-6">{title}</h1>
          {description && (
            <p className="section-description mx-auto mb-8">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
