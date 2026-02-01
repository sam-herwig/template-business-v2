'use client'

import { useRef } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Nav, Footer } from '@/app/components'
import { Breadcrumbs } from '@/app/components/shared'
import type { CaseStudyFull } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// CASE STUDY TEMPLATE PAGE
// Full project detail with hero, challenge/solution, results
// ═══════════════════════════════════════════════════════════════

const CASE_STUDIES: Record<string, CaseStudyFull> = {
  'spotify-wrapped-2024': {
    id: 1,
    slug: 'spotify-wrapped-2024',
    title: 'Spotify Wrapped 2024',
    category: 'Brand Campaign',
    tags: ['branding', 'web'],
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=1000&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1920&h=1080&fit=crop',
    description: 'Reimagining the annual music celebration with bold visuals',
    link: '/work/spotify-wrapped-2024',
    client: 'Spotify',
    timeline: '8 weeks',
    industry: 'Music/Tech',
    year: '2024',
    services: ['Brand Strategy', 'Visual Design', 'Motion Graphics', 'Web Development'],
    challenge: 'Spotify needed to reinvent their annual Wrapped campaign to stand out in an increasingly crowded social media landscape. The challenge was to create a visual system that felt fresh while maintaining the brand recognition users expected.',
    solution: 'We developed a bold new visual language centered around dynamic color gradients and personalized data visualization. Each user\'s Wrapped became a unique piece of generative art, shareable across all platforms with built-in virality mechanics.',
    results: [
      { value: '150', suffix: 'M+', label: 'Social Shares' },
      { value: '42', suffix: '%', label: 'Engagement Increase' },
      { value: '#1', suffix: '', label: 'Trending Worldwide' },
      { value: '2.5', suffix: 'x', label: 'ROI' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=1200&h=800&fit=crop', alt: 'Spotify Wrapped mobile view', caption: 'Mobile experience' },
      { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop', alt: 'Spotify Wrapped social media', caption: 'Social sharing' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop', alt: 'Spotify Wrapped billboard', caption: 'OOH campaign' },
    ],
    testimonial: {
      quote: 'Working with Studio transformed our annual campaign. They understood our vision and delivered beyond expectations. The creative direction was bold yet perfectly on-brand.',
      author: 'Sarah Chen',
      role: 'VP of Marketing',
      company: 'Spotify',
    },
  },
  'fintech-app-redesign': {
    id: 2,
    slug: 'fintech-app-redesign',
    title: 'Fintech App Redesign',
    category: 'Product Design',
    tags: ['product', 'mobile'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
    description: 'Simplifying complex financial tools for everyday users',
    link: '/work/fintech-app-redesign',
    client: 'MoneyWise',
    timeline: '12 weeks',
    industry: 'Finance',
    year: '2024',
    services: ['UX Research', 'UI Design', 'Design System', 'Prototyping'],
    challenge: 'MoneyWise\'s existing app suffered from low user engagement and high churn rates. Users found the interface confusing, especially when navigating investment and savings features.',
    solution: 'We conducted extensive user research and redesigned the entire app from the ground up. The new design prioritizes clarity with a streamlined navigation, personalized dashboards, and gamified savings goals.',
    results: [
      { value: '180', suffix: '%', label: 'Engagement Up' },
      { value: '65', suffix: '%', label: 'Churn Reduced' },
      { value: '4.8', suffix: '★', label: 'App Rating' },
      { value: '45', suffix: 's', label: 'Avg Task Time' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop', alt: 'App dashboard', caption: 'Dashboard redesign' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', alt: 'Investment view', caption: 'Investment tracking' },
    ],
    testimonial: {
      quote: 'The redesign completely changed how our users interact with money management. Our retention metrics speak for themselves.',
      author: 'James Park',
      role: 'CEO',
      company: 'MoneyWise',
    },
  },
  'artisan-coffee-brand': {
    id: 3,
    slug: 'artisan-coffee-brand',
    title: 'Artisan Coffee Brand',
    category: 'Brand Identity',
    tags: ['branding'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop',
    description: 'Craft coffee deserves craft design',
    link: '/work/artisan-coffee-brand',
    client: 'Ember Roasters',
    timeline: '10 weeks',
    industry: 'Food & Beverage',
    year: '2023',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging', 'Web Design'],
    challenge: 'Ember Roasters needed a brand identity that would differentiate them in the saturated specialty coffee market while communicating their commitment to quality and sustainability.',
    solution: 'We created a warm, sophisticated brand identity inspired by the roasting process. Rich amber tones, hand-drawn elements, and premium packaging position Ember as a premium yet approachable choice.',
    results: [
      { value: '300', suffix: '%', label: 'Sales Growth' },
      { value: '25', suffix: '+', label: 'Retail Partners' },
      { value: '12', suffix: 'K', label: 'Instagram Followers' },
      { value: '1', suffix: 'st', label: 'Local Awards' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop', alt: 'Coffee packaging', caption: 'Packaging design' },
      { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop', alt: 'Coffee shop interior', caption: 'Cafe experience' },
    ],
    testimonial: {
      quote: 'Studio captured the essence of what we stand for. The brand identity has become our biggest differentiator.',
      author: 'Maria Santos',
      role: 'Founder',
      company: 'Ember Roasters',
    },
  },
}

// Helper to get adjacent projects
function getAdjacentProjects(currentSlug: string) {
  const slugs = Object.keys(CASE_STUDIES)
  const currentIndex = slugs.indexOf(currentSlug)
  return {
    previous: currentIndex > 0 ? CASE_STUDIES[slugs[currentIndex - 1]] : null,
    next: currentIndex < slugs.length - 1 ? CASE_STUDIES[slugs[currentIndex + 1]] : null,
  }
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = CASE_STUDIES[slug]
  
  const pageRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Hero image parallax
      gsap.to('.project-hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.project-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Title animation
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: 'words' })
        gsap.from(split.words, {
          y: 60,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        })
      }

      // Content sections
      gsap.from('.content-section', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.content-area',
          start: 'top 80%',
        },
      })

      // Stats counter
      gsap.from('.result-stat', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.results-grid',
          start: 'top 80%',
        },
      })

      // Gallery
      gsap.from('.gallery-image', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top 80%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [slug])

  if (!project) {
    notFound()
  }

  const { previous, next } = getAdjacentProjects(slug)

  return (
    <main ref={pageRef}>
      <Nav />
      <Breadcrumbs
        items={[
          { label: 'Work', href: '/work' },
          { label: project.title },
        ]}
      />

      {/* Hero Image */}
      <section className="project-hero relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="project-hero-image object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
            {project.category}
          </span>
          <h1
            ref={titleRef}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {project.title}
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl">{project.description}</p>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-dark-700">
            <div>
              <span className="text-dark-500 text-sm uppercase tracking-wider block mb-2">
                Client
              </span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-dark-500 text-sm uppercase tracking-wider block mb-2">
                Timeline
              </span>
              <span className="text-white font-medium">{project.timeline}</span>
            </div>
            <div>
              <span className="text-dark-500 text-sm uppercase tracking-wider block mb-2">
                Services
              </span>
              <span className="text-white font-medium">
                {project.services.slice(0, 2).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-dark-500 text-sm uppercase tracking-wider block mb-2">
                Industry
              </span>
              <span className="text-white font-medium">{project.industry}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="content-area bg-dark-950 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          <div className="content-section grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src={project.gallery[0]?.src || project.image}
                alt="Challenge visual"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-dark-300 text-lg leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          <div className="content-section grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-dark-300 text-lg leading-relaxed">{project.solution}</p>
            </div>
            <div className="relative aspect-square order-1 md:order-2">
              <Image
                src={project.gallery[1]?.src || project.image}
                alt="Solution visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery-section bg-dark-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="gallery-image relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-950">
                    <span className="text-dark-300 text-sm">{image.caption}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-dark-900 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            The Results
          </h2>
          <div className="results-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="result-stat text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  {result.value}
                  <span className="text-primary-500">{result.suffix}</span>
                </div>
                <div className="text-dark-400 uppercase tracking-wider text-sm">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="bg-dark-950 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-dark-900 p-8 md:p-12 border border-dark-800">
              <svg
                className="w-12 h-12 text-primary-500 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-white mb-6">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-dark-400">
                <span className="text-white font-medium">
                  {project.testimonial.author}
                </span>
                {' — '}
                {project.testimonial.role}, {project.testimonial.company}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="bg-dark-950 py-8 md:py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {previous ? (
              <Link
                href={`/work/${previous.slug}`}
                className="group flex items-center gap-3 text-dark-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <div>
                  <span className="text-sm uppercase tracking-wider block">Previous</span>
                  <span className="text-white font-display font-bold">{previous.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-center gap-3 text-dark-400 hover:text-white transition-colors text-right"
              >
                <div>
                  <span className="text-sm uppercase tracking-wider block">Next</span>
                  <span className="text-white font-display font-bold">{next.title}</span>
                </div>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
