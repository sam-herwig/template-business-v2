'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════
// ANIMATED SPLIT TEXT
// ═══════════════════════════════════════════════════════════════
export function AnimatedSplitText({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.03,
  type = 'chars'
}: { 
  children: string
  className?: string
  delay?: number
  stagger?: number
  type?: 'chars' | 'words' | 'lines'
}) {
  const items = useMemo(() => {
    if (type === 'words') return children.split(' ')
    if (type === 'lines') return children.split('\n')
    return children.split('')
  }, [children, type])

  return (
    <span className={className} aria-label={children} role="text">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          aria-hidden="true"
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          style={{ transformOrigin: 'bottom' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {type === 'words' && i < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAGNETIC TEXT
// ═══════════════════════════════════════════════════════════════
export function MagneticText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// WAVE TEXT
// ═══════════════════════════════════════════════════════════════
export function WaveText({ children, className = '' }: { children: string; className?: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const chars = children.split('')

  return (
    <motion.span
      className={`inline-flex ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={isHovered ? {
            y: [0, -20, 0],
            color: ['#ffffff', '#60a5fa', '#ffffff']
          } : { y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: 'easeOut'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ═══════════════════════════════════════════════════════════════
// SCRAMBLE TEXT
// ═══════════════════════════════════════════════════════════════
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export function ScrambleText({ children, className = '', trigger = 'inView' }: { 
  children: string
  className?: string
  trigger?: 'inView' | 'mount'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayText, setDisplayText] = useState(children)
  const shouldAnimate = trigger === 'mount' ? true : isInView

  useEffect(() => {
    if (!shouldAnimate) return
    
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split('')
          .map((char, i) => {
            if (i < iteration) return children[i]
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )
      
      iteration += 1/3
      if (iteration >= children.length) {
        clearInterval(interval)
        setDisplayText(children)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [shouldAnimate, children])

  return (
    <span ref={ref} className={className} aria-label={children}>
      <span aria-hidden="true">{displayText}</span>
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// TYPEWRITER EFFECT
// ═══════════════════════════════════════════════════════════════
export function Typewriter({ words, className = '' }: { words: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className} role="text" aria-label={words.join(', ')}>
      <span aria-hidden="true">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="cursor"
        aria-hidden="true"
      >
        |
      </motion.span>
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// ROTATING WORDS
// ═══════════════════════════════════════════════════════════════
export function RotatingWords({ words, className = '' }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span 
      className={`inline-block relative ${className}`} 
      style={{ perspective: '500px', minWidth: '4ch' }}
      role="text"
      aria-label={words.join(', ')}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block gradient-text italic"
          aria-hidden="true"
          initial={{ y: 50, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -50, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ transformOrigin: 'center bottom' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════════
export function Marquee({ children, speed = 20, direction = 'left' }: { 
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
}) {
  return (
    <div className="marquee-container" aria-hidden="true" role="presentation">
      <motion.div
        className="marquee-track"
        animate={{ 
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL TEXT
// ═══════════════════════════════════════════════════════════════
export function ScrollRevealText({ 
  children, 
  className = '',
  direction = 'up',
  delay = 0
}: { 
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// WORD BY WORD REVEAL
// ═══════════════════════════════════════════════════════════════
export function WordByWordReveal({ 
  children, 
  className = '',
  staggerDelay = 0.08
}: { 
  children: string
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * staggerDelay, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// PARALLAX IMAGE
// ═══════════════════════════════════════════════════════════════
export function ParallaxWrapper({ 
  children, 
  className = '',
  speed = 0.5
}: { 
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef(null)
  const y = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const element = ref.current as HTMLElement
      const rect = element.getBoundingClientRect()
      const scrollY = window.scrollY
      const elementTop = rect.top + scrollY
      const offset = (scrollY - elementTop) * speed
      y.set(offset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, y])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// STAGGERED CHILDREN
// ═══════════════════════════════════════════════════════════════
export function StaggeredContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: { 
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
}
