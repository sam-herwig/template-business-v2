'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoTestimonialProps {
  thumbnail: string
  videoUrl: string
  client: {
    name: string
    role: string
  }
}

export function VideoTestimonial({ thumbnail, videoUrl, client }: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract video ID and type
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\s]+)/)?.[1]
      return `https://www.youtube.com/embed/${id}?autoplay=1`
    }
    if (url.includes('vimeo.com')) {
      const id = url.match(/vimeo\.com\/(\d+)/)?.[1]
      return `https://player.vimeo.com/video/${id}?autoplay=1`
    }
    return url
  }

  return (
    <div className="group">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-cream-200 mb-3">
        {isPlaying ? (
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt={`Video testimonial from ${client.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/30 transition-colors" />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="w-16 h-16 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                <svg className="w-6 h-6 text-primary-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>
      <div className="text-center">
        <div className="font-medium text-primary-900">{client.name}</div>
        <div className="text-sm text-primary-800/60">{client.role}</div>
      </div>
    </div>
  )
}

export default VideoTestimonial
