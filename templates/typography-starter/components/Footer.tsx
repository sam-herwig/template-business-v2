'use client'

import Link from 'next/link'
import { MagneticText, Marquee } from './motion'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/kinetic' },
  { name: 'Instagram', url: 'https://instagram.com/kinetic' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/kinetic' },
  { name: 'Dribbble', url: 'https://dribbble.com/kinetic' },
]

export function Footer() {
  return (
    <footer className="border-t border-kinetic-border" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex-1 min-w-[200px]">
          <MagneticText className="text-3xl font-extrabold tracking-tight mb-2 block">
            <Link href="/" className="nav-link" aria-label="Kinetic - Home">kinetic.</Link>
          </MagneticText>
          <p className="text-sm text-kinetic-subtle">Typography in motion since 2014</p>
        </div>
        
        <nav className="flex gap-16 flex-wrap" aria-label="Footer navigation">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-kinetic-muted uppercase tracking-widest mb-2">Navigate</h4>
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="footer-link text-kinetic-muted hover:text-kinetic-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-kinetic-muted uppercase tracking-widest mb-2">Connect</h4>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="footer-link text-kinetic-muted hover:text-kinetic-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name} (opens in new tab)`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-kinetic-muted uppercase tracking-widest mb-2">Contact</h4>
            <a 
              href="mailto:hello@kinetic.design" 
              className="footer-link text-kinetic-muted hover:text-kinetic-accent transition-colors"
            >
              hello@kinetic.design
            </a>
            <a 
              href="tel:+15551234567" 
              className="footer-link text-kinetic-muted hover:text-kinetic-accent transition-colors"
            >
              +1 (555) 123-4567
            </a>
            <p className="text-kinetic-subtle text-sm">
              123 Motion Street<br />
              San Francisco, CA 94102
            </p>
          </div>
        </nav>
      </div>
      
      <div className="border-t border-kinetic-border py-6 overflow-hidden">
        <p className="sr-only">© 2026 Kinetic Design Studio. All Rights Reserved.</p>
        <Marquee speed={40}>
          <span className="footer-marquee">
            © 2026 Kinetic Design Studio • All Rights Reserved • Made with ♥ and lots of keyframes • 
          </span>
        </Marquee>
      </div>
    </footer>
  )
}
