'use client'

interface ExpectationStepProps {
  number: number
  title: string
  description: string
}

export function ExpectationStep({ number, title, description }: ExpectationStepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="font-display text-2xl text-sage-600">{number}</span>
      </div>
      <h3 className="font-display text-lg text-primary-900 mb-2">{title}</h3>
      <p className="text-sm text-primary-800/70 leading-relaxed">{description}</p>
    </div>
  )
}

export default ExpectationStep
