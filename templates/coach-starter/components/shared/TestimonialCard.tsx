'use client'

import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
  result?: string
  featured?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  result,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`testimonial-card ${
        featured
          ? 'bg-white border-primary-200 shadow-lg p-10'
          : 'bg-cream-100 p-8'
      }`}
    >
      {result && (
        <div className="inline-block bg-sage-700 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          {result}
        </div>
      )}
      <p className={`text-primary-800/80 leading-relaxed mb-6 ${featured ? 'text-xl' : 'text-lg'}`}>
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {avatar && (
          <Image
            src={avatar}
            alt={author}
            width={featured ? 56 : 48}
            height={featured ? 56 : 48}
            className={`rounded-full object-cover ring-4 ring-cream-200 ${
              featured ? 'w-14 h-14' : 'w-12 h-12'
            }`}
          />
        )}
        <div>
          <div className="font-semibold text-primary-900">{author}</div>
          <div className="text-sm text-primary-800/60">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
