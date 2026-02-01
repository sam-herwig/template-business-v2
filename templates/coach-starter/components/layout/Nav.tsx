'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: '1:1 Coaching', href: '/programs#1-on-1-coaching' },
      { label: 'Group Program', href: '/programs#group-program' },
      { label: 'VIP Intensive', href: '/programs#vip-intensive' },
      { label: 'View All Programs', href: '/programs' },
    ],
  },
  { label: 'Results', href: '/results' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book', href: '/book' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-lg border-b border-cream-300 shadow-sm'
          : 'bg-cream-100/90 backdrop-blur-lg border-b border-cream-300'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl text-primary-700 hover:text-primary-800 transition-colors">
            Sarah Mitchell
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="nav-link flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${programsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {programsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-cream-300 py-2 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2.5 text-primary-800/70 hover:text-primary-800 hover:bg-cream-100 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link
              href="/book"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-cream-300 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <Link
                        href={link.href}
                        className="block py-3 text-primary-800/70 hover:text-primary-800 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {link.dropdown.slice(0, -1).map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 text-sm text-primary-800/60 hover:text-primary-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-3 text-primary-800/70 hover:text-primary-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4">
                  <Link
                    href="/book"
                    className="block bg-primary-500 text-white px-6 py-3 rounded-full font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Work With Me
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
