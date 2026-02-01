'use client'

import { motion } from 'framer-motion'

interface FloatingShape {
  color: string
  size: number
  top: string
  left?: string
  right?: string
  rotate: number
}

interface PageHeroProps {
  badge: {
    text: string
    emoji?: string
    color: string
  }
  title: string
  highlight: {
    text: string
    color: string
    rotate?: number
  }
  subtitle: string
  shapes?: FloatingShape[]
}

const DEFAULT_SHAPES: FloatingShape[] = [
  { color: '#FFE600', size: 100, top: '20%', left: '5%', rotate: 15 },
  { color: '#FF5CAA', size: 70, top: '60%', right: '8%', rotate: -20 },
]

export function PageHero({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  shapes = DEFAULT_SHAPES 
}: PageHeroProps): JSX.Element {
  return (
    <section 
      className="bg-brutal-bg dark:bg-brutal-black relative flex items-center justify-center px-4 md:px-8 py-24 pt-32 md:py-32 md:pt-40 overflow-hidden"
      aria-labelledby="page-hero-heading"
    >
      {/* Floating shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border-[3px] border-brutal-black dark:border-brutal-bg z-[1] hidden md:block"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            transform: `rotate(${shape.rotate}deg)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [shape.rotate, shape.rotate + 5, shape.rotate],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}
      
      <div className="text-center max-w-4xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block border-[3px] border-brutal-black shadow-brutal px-5 py-2 mb-8 font-display font-bold text-sm uppercase text-brutal-black"
          style={{ backgroundColor: badge.color }}
        >
          {badge.emoji && <span className="mr-2">{badge.emoji}</span>}
          {badge.text}
        </motion.div>
        
        {/* Title */}
        <motion.h1
          id="page-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-none text-brutal-black dark:text-brutal-bg mb-8"
        >
          {title}
          <br />
          <span 
            className="inline-block bg-brutal-pink px-2 border-[4px] border-brutal-black dark:border-brutal-bg shadow-brutal text-brutal-black"
            style={{ 
              backgroundColor: highlight.color,
              transform: `rotate(${highlight.rotate || -2}deg)`,
            }}
          >
            {highlight.text}
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-[clamp(1.125rem,2vw,1.35rem)] text-brutal-black/80 dark:text-brutal-bg/80 max-w-xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
