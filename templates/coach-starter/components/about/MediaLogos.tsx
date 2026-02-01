'use client'

interface Logo {
  name: string
  src?: string
  href?: string
}

interface MediaLogosProps {
  title?: string
  logos: Logo[]
}

export function MediaLogos({ title = 'As Featured In', logos }: MediaLogosProps) {
  // Placeholder logos - in production, these would be actual logo images
  const placeholderLogos = [
    'Forbes', 'Entrepreneur', 'HuffPost', 'Inc.', 'Fast Company'
  ]

  const displayLogos: Logo[] = logos.length > 0 ? logos : placeholderLogos.map(name => ({ name }))

  return (
    <div className="text-center">
      {title && <p className="text-sm text-primary-800/60 mb-6 uppercase tracking-wide">{title}</p>}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {displayLogos.map((logo, i) => (
          <div
            key={i}
            className="group transition-all duration-300"
          >
            {logo.src ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ) : (
              <span className="font-display text-xl md:text-2xl text-primary-800/30 group-hover:text-primary-800 transition-colors duration-300">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaLogos
