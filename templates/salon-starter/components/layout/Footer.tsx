'use client'

import Link from 'next/link'
import { Instagram, Facebook, Star } from 'lucide-react'

const SALON = {
  name: "Luxe Hair Studio",
  tagline: "Where Style Meets Self-Care",
}

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book Now' },
]

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Yelp', icon: Star },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold mb-4 inline-block">
              {SALON.name}
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">
              {SALON.tagline}. Award-winning stylists dedicated to bringing out your natural beauty.
            </p>
            {/* Social links */}
            <nav className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                )
              })}
            </nav>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} {SALON.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
