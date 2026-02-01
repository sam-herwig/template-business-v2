'use client'

import Link from 'next/link'
import { GYM } from './data'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from './icons'

// ═══════════════════════════════════════════════════════════════
// Footer Component - Multi-Page Support
// ═══════════════════════════════════════════════════════════════

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'YouTube', icon: YouTubeIcon, href: '#' },
] as const

const FOOTER_LINKS = {
  gym: [
    { label: 'Classes', href: '/classes' },
    { label: 'Memberships', href: '/memberships' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'About', href: '/about' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/memberships#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
} as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl text-white tracking-[0.2em]">
              {GYM.name}
            </Link>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              {GYM.description}
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors p-2 -ml-2"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Gym Links */}
          <div>
            <h4 className="font-display text-sm text-white tracking-widest uppercase mb-4">
              Gym
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.gym.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display text-sm text-white tracking-widest uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm text-white tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <span className="block">{GYM.address}</span>
                <span>{GYM.city}, {GYM.state} {GYM.zip}</span>
              </li>
              <li>
                <a href={`tel:${GYM.phone}`} className="hover:text-white transition-colors">
                  {GYM.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${GYM.email}`} className="hover:text-white transition-colors">
                  {GYM.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} {GYM.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
