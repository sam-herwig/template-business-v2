'use client'

import { motion } from 'framer-motion'

interface MarqueeStripProps {
  readonly text: string
  readonly bgColor?: string
  readonly textColor?: string
  readonly direction?: 'left' | 'right'
}

export function MarqueeStrip({ 
  text, 
  bgColor = '#FFE600', 
  textColor = '#1a1a1a', 
  direction = 'left' 
}: MarqueeStripProps): JSX.Element {
  const content = Array(10).fill(text).join(' ★ ')
  
  return (
    <div 
      className="border-y-[3px] border-brutal-black dark:border-brutal-bg py-4 overflow-hidden relative"
      style={{ background: bgColor }}
      aria-hidden="true"
      role="presentation"
    >
      <motion.div
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap font-display font-bold text-2xl uppercase tracking-wider"
        style={{ color: textColor }}
      >
        {content} ★ {content}
      </motion.div>
    </div>
  )
}
