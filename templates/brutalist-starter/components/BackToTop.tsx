'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTop(): JSX.Element {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -4, boxShadow: '8px 8px 0 #1a1a1a' }}
          whileTap={{ y: 0, boxShadow: '2px 2px 0 #1a1a1a' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-brutal-yellow border-[3px] border-brutal-black flex items-center justify-center"
          style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-brutal-black" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
