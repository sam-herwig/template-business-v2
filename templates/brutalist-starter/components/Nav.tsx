'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BrutalButton } from './BrutalButton'

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

interface MobileMenuProps {
  readonly isOpen: boolean
  readonly onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps): JSX.Element {
  const pathname = usePathname()
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <motion.div
            className="absolute inset-0 bg-brutal-black/80"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-brutal-bg dark:bg-brutal-black border-l-[3px] border-brutal-black dark:border-brutal-bg p-8 flex flex-col"
            aria-label="Mobile navigation"
          >
            <button
              onClick={onClose}
              className="self-end p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm"
              aria-label="Close navigation menu"
            >
              <span className="font-display font-bold text-2xl" aria-hidden="true">✕</span>
            </button>
            <ul className="flex flex-col gap-6 mt-8 list-none" role="list">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`font-display font-semibold text-2xl uppercase transition-colors py-2 block ${
                      pathname === item.href 
                        ? 'text-brutal-pink' 
                        : 'text-brutal-black dark:text-brutal-bg hover:text-brutal-pink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <BrutalButton color="#FF5CAA" href="/contact" ariaLabel="Start a conversation">
                Let&apos;s Talk
              </BrutalButton>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Nav(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled 
            ? 'bg-brutal-bg dark:bg-brutal-black border-b-[3px] border-brutal-black dark:border-brutal-bg' 
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="font-display font-extrabold text-2xl text-brutal-black dark:text-brutal-bg flex items-center gap-2"
            aria-label="SMASH Studio - Home"
          >
            <span 
              className="inline-block w-8 h-8 bg-brutal-pink border-[3px] border-brutal-black dark:border-brutal-bg transform rotate-45" 
              aria-hidden="true" 
            />
            <span>SMASH</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className={`font-display font-semibold uppercase transition-colors py-2 px-1 ${
                  pathname === item.href 
                    ? 'text-brutal-pink' 
                    : 'text-brutal-black dark:text-brutal-bg hover:text-brutal-pink'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <BrutalButton color="#FF5CAA" href="/contact" ariaLabel="Start a conversation">
            Let&apos;s Talk
          </BrutalButton>
        </div>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="font-display font-bold text-2xl text-brutal-black dark:text-brutal-bg" aria-hidden="true">☰</span>
        </button>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={handleCloseMenu} />
    </header>
  )
}
