'use client'

interface BeliefCardProps {
  emoji: string
  title: string
  description: string
}

export function BeliefCard({ emoji, title, description }: BeliefCardProps) {
  return (
    <div className="belief-card bg-cream-100 rounded-2xl p-6 border border-cream-300 text-center transition-all duration-300 hover:border-sage-300 hover:shadow-md">
      <div className="text-4xl mb-4">{emoji}</div>
      <h4 className="font-display text-lg text-primary-900 mb-2">{title}</h4>
      <p className="text-sm text-primary-800/70 leading-relaxed">{description}</p>
    </div>
  )
}

export default BeliefCard
