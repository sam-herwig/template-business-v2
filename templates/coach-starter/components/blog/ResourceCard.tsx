'use client'

import Link from 'next/link'

interface ResourceCardProps {
  type: 'guide' | 'tool' | 'podcast' | 'video'
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

const typeIcons = {
  guide: '📘',
  tool: '📊',
  podcast: '🎧',
  video: '🎬',
}

const typeLabels = {
  guide: 'Free Guide',
  tool: 'Free Tool',
  podcast: 'Podcast',
  video: 'Video',
}

export function ResourceCard({ type, title, description, ctaLabel, ctaHref }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-cream-300 hover:border-primary-200 transition-all duration-300 hover:shadow-md">
      <div className="text-4xl mb-4">{typeIcons[type]}</div>
      <span className="text-xs font-medium text-sage-500 uppercase tracking-wider">{typeLabels[type]}</span>
      <h3 className="font-display text-lg text-primary-900 mt-1 mb-2">{title}</h3>
      <p className="text-sm text-primary-800/70 mb-4 leading-relaxed">{description}</p>
      <Link
        href={ctaHref}
        className="inline-flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
      >
        {ctaLabel}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default ResourceCard
