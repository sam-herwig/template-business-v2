'use client'

import Image from 'next/image'

interface CaseStudyProps {
  client: {
    name: string
    role: string
    photo: string
  }
  badge: string
  quote: string
  challenge: string
  transformation: string
  results: string[]
  featured?: boolean
}

export function CaseStudy({
  client,
  badge,
  quote,
  challenge,
  transformation,
  results,
  featured = false,
}: CaseStudyProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-cream-300 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-sage-200/50 rounded-3xl -rotate-2" />
            <Image
              src={client.photo}
              alt={client.name}
              width={400}
              height={500}
              className="relative rounded-2xl object-cover w-full aspect-[4/5]"
            />
          </div>
          <div>
            <div className="inline-block bg-primary-500 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              {badge}
            </div>
            <blockquote className="font-display text-xl md:text-2xl text-primary-900 leading-relaxed mb-8">
              "{quote}"
            </blockquote>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary-900 mb-2 uppercase text-sm tracking-wide">The Challenge</h4>
                <p className="text-primary-800/70 leading-relaxed">{challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-900 mb-2 uppercase text-sm tracking-wide">The Transformation</h4>
                <p className="text-primary-800/70 leading-relaxed">{transformation}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-900 mb-2 uppercase text-sm tracking-wide">The Results</h4>
                <ul className="space-y-2">
                  {results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-800/80">
                      <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cream-200 flex items-center gap-4">
              <span className="font-semibold text-primary-900">{client.name}</span>
              <span className="text-primary-800/60">{client.role}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Non-featured compact version
  return (
    <div className="bg-cream-100 rounded-2xl p-6 border border-cream-300">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={client.photo}
          alt={client.name}
          width={60}
          height={60}
          className="rounded-full object-cover w-15 h-15"
        />
        <div>
          <div className="inline-block bg-sage-500 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-1">
            {badge}
          </div>
          <div className="font-semibold text-primary-900">{client.name}</div>
          <div className="text-sm text-primary-800/60">{client.role}</div>
        </div>
      </div>
      <p className="text-primary-800/80 leading-relaxed mb-4">"{quote}"</p>
      <ul className="space-y-1">
        {results.slice(0, 2).map((result, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-primary-800/70">
            <svg className="w-4 h-4 text-sage-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {result}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CaseStudy
