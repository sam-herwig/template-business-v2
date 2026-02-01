'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  backgroundImage?: string
  compact?: boolean
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  }
}

export function PageHero({ eyebrow, title, description, backgroundImage, compact = false }: PageHeroProps) {
  const hasImage = !!backgroundImage
  
  return (
    <section 
      className={`relative ${compact ? 'min-h-[40vh]' : 'min-h-[50vh]'} flex items-center overflow-hidden ${
        hasImage ? '' : 'bg-gradient-to-br from-primary-50 via-white to-primary-100'
      }`}
      aria-label={title}
    >
      {/* Background Image */}
      {hasImage && (
        <>
          <Image 
            src={backgroundImage} 
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/40 to-neutral-900/60" aria-hidden="true" />
        </>
      )}
      
      <motion.div 
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center py-24 md:py-32 ${
          hasImage ? 'text-white' : 'text-neutral-900'
        }`}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {eyebrow && (
          <motion.span 
            variants={fadeInUp}
            className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 block ${
              hasImage ? 'text-primary-200' : 'text-primary-600'
            }`}
          >
            {eyebrow}
          </motion.span>
        )}
        
        <motion.h1 
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            variants={fadeInUp}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              hasImage ? 'text-white/90' : 'text-neutral-600'
            }`}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}

export default PageHero
