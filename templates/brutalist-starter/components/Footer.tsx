'use client'

import { Twitter, Instagram, Dribbble, Linkedin } from 'lucide-react'
import Link from 'next/link'

const FOOTER_NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/about#careers' },
] as const

interface SocialLink {
  readonly name: string
  readonly icon: React.ReactNode
  readonly href: string
}

const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/smashstudio' },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/smashstudio' },
  { name: 'Dribbble', icon: <Dribbble className="w-5 h-5" />, href: 'https://dribbble.com/smashstudio' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/smashstudio' },
]

export function Footer(): JSX.Element {
  return (
    <footer 
      className="bg-brutal-black dark:bg-brutal-bg py-12 md:py-16 px-4 md:px-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <div>
          <Link 
            href="/"
            className="font-display font-extrabold text-3xl text-brutal-bg dark:text-brutal-black flex items-center gap-2 mb-4"
          >
            <span 
              className="inline-block w-7 h-7 bg-brutal-pink border-[3px] border-brutal-bg dark:border-brutal-black transform rotate-45" 
              aria-hidden="true" 
            />
            <span>SMASH</span>
          </Link>
          <p className="font-body text-brutal-bg/70 dark:text-brutal-black/70 leading-relaxed">
            Denver&apos;s boldest creative agency. <br />
            Making brands that refuse to blend in.
          </p>
        </div>
        
        <nav aria-label="Footer navigation - Studio">
          <h4 className="font-display font-bold text-brutal-bg dark:text-brutal-black uppercase mb-4">
            Studio
          </h4>
          <ul className="list-none" role="list">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block font-body text-brutal-bg/70 dark:text-brutal-black/70 hover:text-brutal-bg dark:hover:text-brutal-black transition-colors mb-2 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <nav aria-label="Social media links">
          <h4 className="font-display font-bold text-brutal-bg dark:text-brutal-black uppercase mb-4">
            Connect
          </h4>
          <ul className="list-none" role="list">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 font-body text-brutal-bg/70 dark:text-brutal-black/70 hover:text-brutal-bg dark:hover:text-brutal-black transition-colors mb-2 py-1"
                  aria-label={`Follow us on ${link.name} (opens in new tab)`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div>
          <h4 className="font-display font-bold text-brutal-bg dark:text-brutal-black uppercase mb-4">
            Say Hi
          </h4>
          <a
            href="mailto:hello@smash.studio"
            className="font-body text-brutal-yellow hover:underline focus:underline"
          >
            hello@smash.studio
          </a>
          <address className="font-body text-brutal-bg/70 dark:text-brutal-black/70 mt-4 leading-relaxed not-italic">
            1234 Larimer St<br />
            Denver, CO 80202
          </address>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-brutal-bg/20 dark:border-brutal-black/20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-body text-sm text-brutal-bg/50 dark:text-brutal-black/50">
          © {new Date().getFullYear()} SMASH Studio. All rights reserved.
        </span>
        <span className="font-body text-sm text-brutal-bg/50 dark:text-brutal-black/50">
          Built with 🔥 in Denver
        </span>
      </div>
    </footer>
  )
}
