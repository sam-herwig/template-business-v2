'use client'

import { MapPin, ExternalLink } from 'lucide-react'

interface MapEmbedProps {
  address: string
  height?: number
  className?: string
}

export function MapEmbed({ address, height = 400, className = '' }: MapEmbedProps) {
  // Encode address for Google Maps URLs
  const encodedAddress = encodeURIComponent(address)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`
  
  return (
    <div className={className}>
      {/* Map placeholder - replace with actual embed when API key is configured */}
      <div 
        className="bg-neutral-200 rounded-3xl flex items-center justify-center relative overflow-hidden"
        style={{ height: `${height}px` }}
        role="img"
        aria-label={`Map showing location at ${address}`}
      >
        {/* Decorative map pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapGrid)" />
          </svg>
        </div>
        
        <div className="text-center z-10">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-primary-600" strokeWidth={1.5} />
          </div>
          <p className="text-neutral-700 font-medium mb-1">{address}</p>
          <p className="text-neutral-500 text-sm">Interactive map available with API key</p>
        </div>
      </div>
      
      {/* Get Directions button */}
      <div className="mt-4 text-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default MapEmbed
