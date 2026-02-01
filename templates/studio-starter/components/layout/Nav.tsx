'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MagneticWrapper, GlassButton, useIsMobile } from '@/components/shared'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-studio-bg border-l border-white/10 p-8 flex flex-col"
            aria-label="Mobile navigation"
          >
            <button
              onClick={onClose}
              className="self-end p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white"
              aria-label="Close menu"
            >
              <span className="text-2xl">✕</span>
            </button>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`text-xl font-medium transition-colors py-2 ${
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <GlassButton primary href="/contact">Let&apos;s Talk</GlassButton>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8 py-4
          flex justify-between items-center transition-all duration-400
          ${scrolled ? 'bg-studio-bg/85 backdrop-blur-xl border-b border-white/10' : ''}
        `}
        aria-label="Main navigation"
      >
        <MagneticWrapper>
          <Link href="/" className="text-2xl font-extrabold tracking-tight">PRISM</Link>
        </MagneticWrapper>

        <div className="flex items-center gap-4 md:gap-10">
          {!isMobile && navLinks.map((item, i) => (
            <motion.div key={item.href}>
              <Link
                href={item.href}
                className={`
                  text-sm font-medium transition-colors py-3 px-1 min-h-[44px] flex items-center
                  ${pathname === item.href || pathname.startsWith(item.href + '/') 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'}
                `}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="hidden md:block">
            <GlassButton primary href="/contact">Let&apos;s Talk</GlassButton>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
