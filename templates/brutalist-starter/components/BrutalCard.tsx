'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface BrutalCardProps {
  readonly children: React.ReactNode
  readonly color?: string
  readonly delay?: number
  readonly className?: string
  readonly hoverable?: boolean
}

export function BrutalCard({ 
  children, 
  color = '#fff', 
  delay = 0,
  className = '',
  hoverable = true,
}: BrutalCardProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const getTextColor = (bg: string): string => {
    const darkBgs = ['#3B82F6', '#A855F7', '#1a1a1a', '#000000']
    return darkBgs.includes(bg) ? '#FFFEF5' : '#1a1a1a'
  }
  const textColor = getTextColor(color)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className={`border-[3px] border-brutal-black dark:border-brutal-bg p-8 relative ${className}`}
      style={{
        background: color,
        color: textColor,
        boxShadow: '8px 8px 0 #1a1a1a',
      }}
      whileHover={hoverable ? {
        x: -4,
        y: -4,
        boxShadow: '12px 12px 0 #1a1a1a',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
