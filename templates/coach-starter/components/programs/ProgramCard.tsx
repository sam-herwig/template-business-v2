'use client'

import Link from 'next/link'

interface ProgramCardProps {
  name: string
  tagline: string
  description: string
  features: string[]
  price: string
  priceNote?: string
  cta: {
    label: string
    href: string
    variant?: 'primary' | 'secondary'
  }
  featured?: boolean
  badge?: string
  status?: 'available' | 'waitlist' | 'sold-out'
  id?: string
}

export function ProgramCard({
  name,
  tagline,
  description,
  features,
  price,
  priceNote,
  cta,
  featured = false,
  badge,
  status = 'available',
  id,
}: ProgramCardProps) {
  return (
    <div
      id={id}
      className={`program-card relative bg-white rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:shadow-lg ${
        featured
          ? 'ring-2 ring-primary-400 ring-offset-4 ring-offset-cream-200 border-primary-200'
          : 'border-cream-300 hover:border-primary-200'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6 bg-sage-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          {badge}
        </div>
      )}

      <p className="text-sage-500 font-medium text-sm mb-1">{tagline}</p>
      <h3 className="font-display text-2xl text-primary-900 mb-3">{name}</h3>
      <p className="text-primary-800/70 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-primary-800/80">
            <svg
              className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-cream-200">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-display text-primary-900">{price}</span>
        </div>
        {priceNote && <p className="text-sm text-primary-800/60 mb-4">{priceNote}</p>}
        
        {status === 'sold-out' ? (
          <button
            disabled
            className="w-full py-3.5 rounded-full font-medium text-center bg-cream-200 text-primary-800/50 cursor-not-allowed"
          >
            Sold Out
          </button>
        ) : (
          <Link
            href={cta.href}
            className={`block w-full py-3.5 rounded-full font-medium text-center transition-all ${
              cta.variant === 'secondary' || status === 'waitlist'
                ? 'bg-cream-200 text-primary-700 hover:bg-cream-300'
                : 'bg-primary-500 text-white hover:bg-primary-600'
            }`}
          >
            {status === 'waitlist' ? 'Join Waitlist' : cta.label}
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProgramCard
