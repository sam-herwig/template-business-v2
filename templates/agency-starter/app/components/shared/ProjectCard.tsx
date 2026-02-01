'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudy } from '@/app/types'

interface ProjectCardProps {
  project: CaseStudy
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({ project, variant = 'grid' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`case-study-card group block ${
        isFeatured ? 'col-span-full' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'aspect-[21/9]' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="case-study-image"
          sizes={isFeatured ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <span className="text-primary-400 text-sm uppercase tracking-wider font-medium mb-2 block">
            {project.category}
          </span>
          <h3
            className={`font-display font-bold text-white group-hover:text-primary-400 transition-colors duration-300 ${
              isFeatured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
            }`}
          >
            {project.title}
          </h3>
          {isFeatured && (
            <p className="text-dark-300 mt-2 max-w-xl">{project.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
