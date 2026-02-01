'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const SALON = {
  name: "Luxe Hair Studio",
}

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

interface NavProps {
  transparent?: boolean
}

export function Nav({ transparent = false }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  
  // Only use transparent mode on homepage
  const isHome = pathname === '/'
  const useTransparent = transparent && isHome
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }

      document.addEventListener('keydown', handleTabKey)
      firstElement?.focus()
      
      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [mobileMenuOpen])
  
  const showSolid = scrolled || !useTransparent
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-neutral-100/50' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className={`font-display text-2xl font-semibold transition-colors duration-300 ${
              showSolid ? 'text-neutral-900' : 'text-white'
            }`}
            aria-label={`${SALON.name} - Home`}
          >
            {SALON.name}
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`relative font-medium transition-colors duration-200 group ${
                    showSolid 
                      ? isActive 
                        ? 'text-primary-600' 
                        : 'text-neutral-600 hover:text-primary-600'
                      : isActive
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${
                      showSolid ? 'bg-primary-500' : 'bg-white'
                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                    aria-hidden="true" 
                  />
                </Link>
              )
            })}
          </div>
          
          <Link 
            href="/book" 
            className={`hidden md:inline-flex btn-primary ${
              !showSolid && 'bg-white text-neutral-900 hover:bg-white/90'
            }`}
          >
            Book Now
          </Link>
          
          <button 
            ref={menuButtonRef}
            className={`md:hidden p-2 transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
              showSolid ? 'text-neutral-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white rounded-b-2xl shadow-lg"
            >
              <div className="py-6 px-2 space-y-4">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className={`block px-4 py-2 font-medium transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        isActive 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-neutral-600 hover:text-primary-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="pt-4 px-4">
                  <Link 
                    href="/book" 
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Nav
