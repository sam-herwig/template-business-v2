'use client'

import { motion, useScroll } from 'framer-motion'
import { colors } from '@/components/shared'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      style={{
        background: `linear-gradient(90deg, ${colors.violet}, ${colors.blue})`,
        scaleX: scrollYProgress,
      }}
      aria-hidden="true"
    />
  )
}
