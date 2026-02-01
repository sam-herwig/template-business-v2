'use client'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  alignment?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl mb-12 ${alignment === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeader
