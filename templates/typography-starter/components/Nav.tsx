'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MagneticText, WaveText } from './motion'

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: 'linear-gradient(to bottom, rgba(10, 10, 11, 0.9), transparent)', backdropFilter: 'blur(8px)' }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <MagneticText className="text-2xl font-bold tracking-tight">
            <Link href="/" className="nav-link" aria-label="Kinetic - Home">
              <WaveText>kinetic.</WaveText>
            </Link>
          </MagneticText>
          
          {/* Desktop nav */}
          <div className="nav-links hidden sm:flex gap-10 items-center" role="list">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  role="listitem"
                >
                  <Link
                    href={item.href}
                    className={`nav-link relative font-medium transition-colors ${
                      isActive ? 'text-kinetic-accent' : 'text-kinetic-muted hover:text-kinetic-text'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-kinetic-accent"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="w-6 h-0.5 bg-kinetic-text block"
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-kinetic-text block"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-kinetic-text block"
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -4 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-kinetic-bg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-4xl font-bold tracking-tight ${
                      isActive ? 'text-kinetic-accent' : 'text-kinetic-text'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
