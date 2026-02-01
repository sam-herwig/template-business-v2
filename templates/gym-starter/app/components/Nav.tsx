'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { GYM } from './data'
import { MenuIcon, CloseIcon } from './icons'
import { mobileMenu, mobileMenuReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Navigation Component - Multi-Page Support
// ═══════════════════════════════════════════════════════════════

const NAV_ITEMS = [
  { label: 'Classes', href: '/classes' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const menuVariants = useVariant(mobileMenu, mobileMenuReduced, prefersReducedMotion)

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-lg border-b border-dark-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl text-white tracking-[0.2em]">
            {GYM.name}
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'text-primary-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href={GYM.bookingUrl} className="hidden md:inline-flex btn-primary text-sm">
            Start Free Trial
          </Link>

          <button
            className="md:hidden p-3 -m-1 text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
              className="md:hidden overflow-hidden border-t border-dark-800"
            >
              <div className="py-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-3 px-4 uppercase tracking-widest text-sm font-medium hover:text-white hover:bg-dark-800 transition-colors min-h-[48px] flex items-center ${
                      isActive(item.href) ? 'text-primary-500' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 px-4 space-y-3">
                  <Link href="/blog" className="block py-2 text-gray-500 text-sm hover:text-gray-300 transition-colors">
                    Blog & Tips
                  </Link>
                  <Link
                    href={GYM.bookingUrl}
                    className="btn-primary text-center block min-h-[48px] flex items-center justify-center"
                  >
                    Start Free Trial
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
