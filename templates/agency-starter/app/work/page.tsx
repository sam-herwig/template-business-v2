'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Nav, Footer, CTA } from '@/app/components'
import { PageHero, FilterTabs, ProjectCard } from '@/app/components/shared'
import type { CaseStudy } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// WORK/PORTFOLIO PAGE
// Filterable grid of case studies with GSAP animations
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = ['All', 'Branding', 'Web', 'Product', 'Campaigns']

const PROJECTS: CaseStudy[] = [
  {
    id: 1,
    slug: 'spotify-wrapped-2024',
    title: 'Spotify Wrapped 2024',
    category: 'Campaigns',
    tags: ['branding', 'web'],
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=1000&fit=crop',
    description: 'Reimagining the annual music celebration with bold visuals',
    link: '/work/spotify-wrapped-2024',
  },
  {
    id: 2,
    slug: 'fintech-app-redesign',
    title: 'Fintech App Redesign',
    category: 'Product',
    tags: ['product', 'mobile'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Simplifying complex financial tools for everyday users',
    link: '/work/fintech-app-redesign',
  },
  {
    id: 3,
    slug: 'artisan-coffee-brand',
    title: 'Artisan Coffee Brand',
    category: 'Branding',
    tags: ['branding'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    description: 'Craft coffee deserves craft design',
    link: '/work/artisan-coffee-brand',
  },
  {
    id: 4,
    slug: 'ai-startup-launch',
    title: 'AI Startup Launch',
    category: 'Web',
    tags: ['web', 'branding'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    description: 'Making artificial intelligence human',
    link: '/work/ai-startup-launch',
  },
  {
    id: 5,
    slug: 'fitness-platform',
    title: 'Fitness Platform',
    category: 'Product',
    tags: ['product', 'web', 'mobile'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    description: 'Workout experiences reimagined for the modern athlete',
    link: '/work/fitness-platform',
  },
  {
    id: 6,
    slug: 'luxury-real-estate',
    title: 'Luxury Real Estate',
    category: 'Web',
    tags: ['web'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    description: 'Selling dreams through pixels',
    link: '/work/luxury-real-estate',
  },
  {
    id: 7,
    slug: 'sustainable-fashion',
    title: 'Sustainable Fashion',
    category: 'Branding',
    tags: ['branding', 'campaigns'],
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop',
    description: 'Eco-conscious style meets bold identity',
    link: '/work/sustainable-fashion',
  },
  {
    id: 8,
    slug: 'healthcare-platform',
    title: 'Healthcare Platform',
    category: 'Product',
    tags: ['product', 'web'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    description: 'Patient-first digital health experience',
    link: '/work/healthcare-platform',
  },
  {
    id: 9,
    slug: 'music-festival',
    title: 'Music Festival Campaign',
    category: 'Campaigns',
    tags: ['campaigns', 'branding'],
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    description: 'Bringing the live experience to life',
    link: '/work/music-festival',
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, gridRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <main>
      <Nav />
      <PageHero
        title="Our Work"
        subtitle="Selected projects across branding, web design, and digital campaigns."
      />

      {/* Filter Section */}
      <section className="bg-dark-950 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <FilterTabs
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-dark-950 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6" ref={gridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
