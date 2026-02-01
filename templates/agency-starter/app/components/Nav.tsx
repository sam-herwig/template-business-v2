'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

// ═══════════════════════════════════════════════════════════════
// NAVIGATION COMPONENT
// Fixed nav with mobile menu and accessibility features
// Updated for multi-page routing
// ═══════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)
  
  // Handle Escape key and focus trapping
  useEffect(() => {
    if (!mobileMenuOpen) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      
      // Focus trapping
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault()
            lastFocusableRef.current?.focus()
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault()
            firstFocusableRef.current?.focus()
          }
        }
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    // Focus first item when menu opens
    firstFocusableRef.current?.focus()
    
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-lg border-b border-dark-800">
      {/* Skip to content link for keyboard accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight">
            STUDIO<span className="text-primary-500">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-dark-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Link href="/contact">
              <MagneticButton className="btn-outline text-sm uppercase tracking-wider">
                Start a Project
              </MagneticButton>
            </Link>
          </div>
          
          <button 
            ref={menuButtonRef}
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              ref={mobileMenuRef}
              id="mobile-menu"
              className="md:hidden py-6 border-t border-dark-800 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="menu"
              aria-orientation="vertical"
            >
              <motion.div 
                className="flex flex-col gap-6"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {NAV_LINKS.map((link, index) => (
                  <Link 
                    key={link.href}
                    ref={index === 0 ? firstFocusableRef : index === NAV_LINKS.length - 1 ? lastFocusableRef : undefined}
                    href={link.href} 
                    className="text-white text-lg focus:outline-none focus:text-primary-400"
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/contact"
                  className="btn-primary w-full text-center"
                  role="menuitem"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
