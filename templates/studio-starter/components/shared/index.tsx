'use client'

import { useRef, useState, useCallback, useSyncExternalStore } from 'react'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

// ═══════════════════════════════════════════════════════════════
// COLORS - Shared across all pages
// ═══════════════════════════════════════════════════════════════
export const colors = {
  violet: '#8B5CF6',
  blue: '#3B82F6',
  emerald: '#10B981',
  amber: '#F59E0B',
  pink: '#EC4899',
}

// ═══════════════════════════════════════════════════════════════
// HOOKS - SSR-safe media queries
// ═══════════════════════════════════════════════════════════════
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener('change', callback)
      return () => mediaQuery.removeEventListener('change', callback)
    },
    [query]
  )

  const getSnapshot = useCallback(() => {
    return window.matchMedia(query).matches
  }, [query])

  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export const useIsMobile = (): boolean => useMediaQuery('(max-width: 768px)')
export const useIsTablet = (): boolean => useMediaQuery('(max-width: 1024px)')

// ═══════════════════════════════════════════════════════════════
// SKIP LINK
// ═══════════════════════════════════════════════════════════════
export function SkipLink(): JSX.Element {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  )
}

// ═══════════════════════════════════════════════════════════════
// FLOATING ORB COMPONENT
// ═══════════════════════════════════════════════════════════════
export function FloatingOrb({ 
  color, 
  size = 120, 
  delay = 0,
  className = ''
}: { 
  color: string
  size?: number
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[40px] pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}80 0%, ${color}00 70%)`,
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -25, 15, -10, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  )
}

// ═══════════════════════════════════════════════════════════════
// MAGNETIC WRAPPER (Desktop only)
// ═══════════════════════════════════════════════════════════════
export function MagneticWrapper({ 
  children, 
  className = '',
  strength = 0.15
}: { 
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 400 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
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
      style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// BENTO TILE
// ═══════════════════════════════════════════════════════════════
interface BentoTileProps {
  children: React.ReactNode
  span?: 'normal' | 'wide' | 'tall' | 'large'
  delay?: number
  accentColor?: string
  hoverContent?: React.ReactNode
  gradient?: boolean
  gradientColors?: string[]
  className?: string
  onClick?: () => void
  href?: string
}

export function BentoTile({ 
  children, 
  span = 'normal',
  delay = 0,
  accentColor = colors.violet,
  hoverContent,
  gradient = false,
  gradientColors = [colors.violet, colors.blue],
  className = '',
  onClick,
  href
}: BentoTileProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isActive, setIsActive] = useState(false)
  const isMobile = useIsMobile()

  const getSpanClasses = () => {
    switch (span) {
      case 'wide': return 'col-span-1 md:col-span-2'
      case 'tall': return 'col-span-1 row-span-1 md:row-span-2'
      case 'large': return 'col-span-1 md:col-span-2 row-span-1 md:row-span-2'
      default: return 'col-span-1'
    }
  }

  const handleInteraction = () => {
    if (onClick) onClick()
    if (isMobile && hoverContent) {
      setIsActive(!isActive)
    }
  }

  const Wrapper = href ? motion.a : motion.div

  return (
    <Wrapper
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.215, 0.61, 0.355, 1] 
      }}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={handleInteraction}
      onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && handleInteraction()}
      tabIndex={hoverContent || onClick || href ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-expanded={hoverContent ? isActive : undefined}
      className={`
        relative rounded-3xl border overflow-hidden block
        min-h-[160px] p-6
        transition-all duration-300
        ${getSpanClasses()}
        ${className}
      `}
      style={{
        background: '#16161F',
        borderColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
        boxShadow: isActive 
          ? `0 20px 60px -15px ${accentColor}30, 0 0 0 1px ${accentColor}20`
          : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {gradient && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
          <motion.div
            className="absolute inset-[-50%] gradient-bg-rotate"
            style={{
              background: `conic-gradient(from 0deg, ${gradientColors.join(', ')})`,
              filter: 'blur(60px)',
              opacity: isActive ? 0.15 : 0.08,
            }}
          />
        </div>
      )}

      <AnimatePresence>
        {isActive && hoverContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center p-6 rounded-3xl z-10"
            style={{
              background: `linear-gradient(135deg, ${accentColor}15 0%, #16161Fee 100%)`,
              backdropFilter: 'blur(8px)',
            }}
          >
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scale: isActive ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-[1] h-full"
      >
        {children}
      </motion.div>

      <motion.div
        animate={{ opacity: isActive ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      {isMobile && hoverContent && (
        <div 
          className="absolute bottom-2 right-3 text-xs text-white/70 transition-opacity duration-300"
          style={{ opacity: isActive ? 0 : 0.6 }}
          aria-hidden="true"
        >
          Tap to explore
        </div>
      )}
    </Wrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════════
import { useEffect } from 'react'

export function AnimatedCounter({ 
  value, 
  suffix = '',
  prefix = ''
}: { 
  value: number
  suffix?: string
  prefix?: string
}): JSX.Element {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }
      
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }
    
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      startTimeRef.current = null
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
// GLASS BUTTON
// ═══════════════════════════════════════════════════════════════
export function GlassButton({ 
  children, 
  primary = false,
  onClick,
  href,
  ariaLabel,
  type = 'button',
  disabled = false,
  className = ''
}: { 
  children: React.ReactNode
  primary?: boolean
  onClick?: () => void
  href?: string
  ariaLabel?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}) {
  const buttonClasses = `
    px-6 py-3 rounded-xl text-sm font-medium min-h-[44px]
    flex items-center gap-2 transition-all duration-300
    ${primary 
      ? 'bg-gradient-to-r from-studio-violet to-studio-blue text-white hover:shadow-lg hover:shadow-studio-violet/40' 
      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
    }
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `

  const content = (
    <>
      {children}
      <motion.span
        className="inline-block"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={buttonClasses} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={buttonClasses}
      style={{ backdropFilter: primary ? 'none' : 'blur(12px)' }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  )
}

// ═══════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════
export function SectionHeader({
  tag,
  title,
  description,
  className = '',
  center = false
}: {
  tag?: string
  title: string | React.ReactNode
  description?: string
  className?: string
  center?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${center ? 'text-center' : ''} ${className}`}
    >
      {tag && (
        <span className="inline-block px-4 py-2 rounded-full text-sm text-studio-violet mb-4 border border-studio-violet/30 bg-gradient-to-r from-studio-violet/20 to-studio-blue/20">
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-white/60 max-w-xl mx-auto">{description}</p>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// PAGE HERO
// ═══════════════════════════════════════════════════════════════
export function PageHero({
  tag,
  title,
  description,
  children,
  className = ''
}: {
  tag?: string
  title: string | React.ReactNode
  description?: string
  children?: React.ReactNode
  className?: string
}) {
  const isMobile = useIsMobile()

  return (
    <section className={`relative overflow-hidden px-4 md:px-8 lg:px-16 pt-32 pb-16 ${className}`}>
      <FloatingOrb color={colors.violet} size={isMobile ? 120 : 200} delay={0} className="top-[10%] left-[10%]" />
      <FloatingOrb color={colors.blue} size={isMobile ? 90 : 150} delay={2} className="top-[40%] right-[15%]" />
      
      <div className="max-w-7xl mx-auto text-center">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full text-sm text-studio-violet mb-6 border border-studio-violet/30 bg-gradient-to-r from-studio-violet/20 to-studio-blue/20"
          >
            {tag}
          </motion.span>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
          >
            {description}
          </motion.p>
        )}
        
        {children}
      </div>
    </section>
  )
}
