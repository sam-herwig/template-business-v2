'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Nav, Footer, MarqueeStrip, BrutalButton, BackToTop } from '@/components'
import { getProjectBySlug, getAdjacentProjects, PROJECTS } from '@/lib/projects'

// ═══════════════════════════════════════════════════════════════
// PROJECT HERO
// ═══════════════════════════════════════════════════════════════
function ProjectHero({ project }: { project: typeof PROJECTS[0] }): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  
  return (
    <>
      {/* Header */}
      <section className="bg-brutal-bg dark:bg-brutal-black pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 font-display font-bold text-brutal-black dark:text-brutal-bg hover:text-brutal-pink transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Work
            </Link>
          </motion.div>
          
          {/* Category badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {project.category.map((cat) => (
              <span 
                key={cat}
                className="px-4 py-2 bg-brutal-yellow border-[3px] border-brutal-black font-display font-bold text-sm uppercase text-brutal-black"
              >
                {cat}
              </span>
            ))}
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-none text-brutal-black dark:text-brutal-bg mb-8"
          >
            {project.title}
          </motion.h1>
          
          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 font-body text-brutal-black/70 dark:text-brutal-bg/70"
          >
            <div>
              <span className="font-display font-bold text-brutal-black dark:text-brutal-bg">Client:</span> {project.client}
            </div>
            <div>
              <span className="font-display font-bold text-brutal-black dark:text-brutal-bg">Year:</span> {project.year}
            </div>
            <div>
              <span className="font-display font-bold text-brutal-black dark:text-brutal-bg">Duration:</span> {project.duration}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Full-bleed hero image with parallax */}
      <div ref={heroRef} className="relative h-[60vh] md:h-[80vh] overflow-hidden border-y-[4px] border-brutal-black dark:border-brutal-bg">
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHALLENGE SECTION
// ═══════════════════════════════════════════════════════════════
function ChallengeSection({ project }: { project: typeof PROJECTS[0] }): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Decorative shape */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="hidden md:block"
          >
            <div 
              className="w-full aspect-square border-[4px] border-brutal-black dark:border-brutal-bg transform rotate-3"
              style={{ backgroundColor: project.accentColor, boxShadow: '12px 12px 0 #1a1a1a' }}
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-6">
              THE CHALLENGE
            </h2>
            <p className="font-body text-lg text-brutal-black/80 dark:text-brutal-bg/80 leading-relaxed mb-8">
              {project.challenge.text}
            </p>
            <ul className="space-y-3">
              {project.challenge.goals.map((goal, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-brutal-pink border-[2px] border-brutal-black flex items-center justify-center font-display font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="font-body text-brutal-black dark:text-brutal-bg">{goal}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// BENTO GALLERY
// ═══════════════════════════════════════════════════════════════
function BentoGallery({ images, accentColor }: { images: string[]; accentColor: string }): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-black dark:bg-brutal-bg py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="col-span-2 row-span-2 relative aspect-[4/3] border-[4px] border-brutal-bg dark:border-brutal-black overflow-hidden"
            style={{ boxShadow: `8px 8px 0 ${accentColor}` }}
          >
            <Image
              src={images[0]}
              alt="Project gallery"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          {/* Smaller images */}
          {images.slice(1, 5).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative aspect-square border-[4px] border-brutal-bg dark:border-brutal-black overflow-hidden"
              style={{ boxShadow: `6px 6px 0 ${accentColor}` }}
            >
              <Image
                src={img}
                alt="Project gallery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// APPROACH SECTION
// ═══════════════════════════════════════════════════════════════
function ApproachSection({ project }: { project: typeof PROJECTS[0] }): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const colors = ['#FFE600', '#FF5CAA', '#3B82F6']
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-12 text-center"
        >
          THE APPROACH
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.approach.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 border-[3px] border-brutal-black dark:border-brutal-bg"
              style={{ 
                backgroundColor: colors[i],
                boxShadow: '6px 6px 0 #1a1a1a',
              }}
            >
              <div className="font-display font-extrabold text-5xl mb-4 opacity-30">
                {step.step}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-brutal-black">
                {step.title}
              </h3>
              <p className="font-body text-brutal-black/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// RESULTS SECTION
// ═══════════════════════════════════════════════════════════════
function ResultsSection({ project }: { project: typeof PROJECTS[0] }): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section 
      ref={ref} 
      className="py-16 md:py-24 px-4 md:px-8 border-y-[4px] border-brutal-black"
      style={{ backgroundColor: '#22C55E' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black mb-12 text-center"
        >
          THE RESULTS
        </motion.h2>
        
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {project.results.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-5xl md:text-6xl text-brutal-black">
                {metric.value}
              </div>
              <div className="font-body text-brutal-black/70 uppercase tracking-wide mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-xl md:text-2xl text-brutal-black italic leading-relaxed mb-6">
            &ldquo;{project.results.testimonial.quote}&rdquo;
          </p>
          <footer className="font-display font-bold text-brutal-black">
            — {project.results.testimonial.author}, {project.results.testimonial.role}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// NEXT/PREV NAVIGATION
// ═══════════════════════════════════════════════════════════════
function ProjectNav({ slug }: { slug: string }): JSX.Element {
  const { prev, next } = getAdjacentProjects(slug)
  
  return (
    <section className="bg-brutal-bg dark:bg-brutal-black py-12 px-4 md:px-8 border-t-[4px] border-brutal-black dark:border-brutal-bg">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {prev && (
          <Link 
            href={`/work/${prev.slug}`}
            className="group flex items-center gap-4"
          >
            <ArrowLeft className="w-6 h-6 text-brutal-black dark:text-brutal-bg group-hover:-translate-x-2 transition-transform" />
            <div>
              <div className="font-body text-sm text-brutal-black/60 dark:text-brutal-bg/60 uppercase">Prev Project</div>
              <div className="font-display font-bold text-brutal-black dark:text-brutal-bg group-hover:text-brutal-pink transition-colors">
                {prev.title}
              </div>
            </div>
          </Link>
        )}
        
        {next && (
          <Link 
            href={`/work/${next.slug}`}
            className="group flex items-center gap-4 text-right ml-auto"
          >
            <div>
              <div className="font-body text-sm text-brutal-black/60 dark:text-brutal-bg/60 uppercase">Next Project</div>
              <div className="font-display font-bold text-brutal-black dark:text-brutal-bg group-hover:text-brutal-pink transition-colors">
                {next.title}
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-brutal-black dark:text-brutal-bg group-hover:translate-x-2 transition-transform" />
          </Link>
        )}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function WorkDetailPage(): JSX.Element {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <ProjectHero project={project} />
        <ChallengeSection project={project} />
        <BentoGallery images={project.gallery} accentColor={project.accentColor} />
        <ApproachSection project={project} />
        <ResultsSection project={project} />
        <MarqueeStrip 
          text={`${project.title} • ${project.client} • ${project.year}`}
          bgColor={project.accentColor}
          textColor={project.accentColor === '#FFE600' || project.accentColor === '#22C55E' ? '#1a1a1a' : '#FFFEF5'}
        />
        <ProjectNav slug={slug} />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
