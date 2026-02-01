import Link from 'next/link'

// ═══════════════════════════════════════════════════════════════
// FOOTER COMPONENT (Server Component)
// Static footer - updated for multi-page routing
// ═══════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://dribbble.com', label: 'Dribbble' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight block mb-4">
              STUDIO<span className="text-primary-500">.</span>
            </Link>
            <p className="text-dark-400 max-w-sm">
              Award-winning digital studio crafting bold brands and unforgettable digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-dark-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Social</h4>
            <ul className="space-y-2 text-dark-400">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Studio Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-dark-500 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
