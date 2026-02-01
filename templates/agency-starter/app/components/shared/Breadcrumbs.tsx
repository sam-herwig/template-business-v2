'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-28 pb-4 md:pt-32 md:pb-6 bg-dark-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm uppercase tracking-wider">
          <li>
            <Link
              href="/"
              className="text-dark-500 hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-dark-700">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-dark-500 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-dark-300">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
