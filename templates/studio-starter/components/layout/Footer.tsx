'use client'

import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react'
import { useIsMobile } from '@/components/shared'

export function Footer() {
  const isMobile = useIsMobile()
  
  return (
    <footer className="border-t border-white/10 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid gap-8 mb-12 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
          {/* Brand */}
          <div className={isMobile ? 'col-span-2' : ''}>
            <Link href="/" className="text-2xl font-extrabold">PRISM</Link>
            <p className="text-sm text-white/70 mt-3">
              Design without boundaries.
              <br />
              Build without limits.
            </p>
          </div>
          
          {/* Links */}
          <nav aria-label="Work links">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
              Work
            </h4>
            <Link href="/work" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              All Projects
            </Link>
            <Link href="/work?category=brand" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Branding
            </Link>
            <Link href="/work?category=web" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Web Design
            </Link>
          </nav>

          <nav aria-label="Company links">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
              Company
            </h4>
            <Link href="/about" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              About Us
            </Link>
            <Link href="/services" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Services
            </Link>
            <Link href="/contact" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Contact
            </Link>
          </nav>

          <nav aria-label="Resources links">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
              Resources
            </h4>
            <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Blog
            </a>
            <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Careers
            </a>
            <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors mb-2 py-1">
              Press Kit
            </a>
          </nav>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Studio Prism. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
              { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
              { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
              { icon: <Dribbble className="w-5 h-5" />, label: 'Dribbble', href: '#' }
            ].map((social) => (
              <a 
                key={social.label} 
                href={social.href}
                className="hover:text-white transition-colors py-1"
                aria-label={`Follow us on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
