'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Nav, Footer, PageHero, MarqueeStrip, BrutalButton, BackToTop } from '@/components'
import { PROJECTS, CATEGORIES, type Category } from '@/lib/projects'

// ═══════════════════════════════════════════════════════════════
// FILTER TABS
// ═══════════════════════════════════════════════════════════════
function FilterTabs({ 
  active, 
  onChange 
}: { 
  active: Category
  onChange: (cat: Category) => void 
}): JSX.Element {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {CATEGORIES.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-3 font-display font-bold text-sm uppercase border-[3px] border-brutal-black dark:border-brutal-bg transition-all ${
            active === cat
              ? 'bg-brutal-pink text-brutal-black shadow-brutal'
              : 'bg-brutal-bg dark:bg-brutal-black text-brutal-black dark:text-brutal-bg hover:bg-brutal-yellow'
          }`}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// PROJECT CARD
// ═══════════════════════════════════════════════════════════════
interface ProjectCardProps {
  project: typeof PROJECTS[0]
  index: number
  featured?: boolean
}

function ProjectCard({ project, index, featured }: ProjectCardProps): JSX.Element {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const needsLightText = project.accentColor === '#A855F7' || project.accentColor === '#3B82F6'
  const overlayTextClass = needsLightText ? 'text-brutal-bg' : 'text-brutal-black'
  
  if (featured) {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative col-span-1 md:col-span-2 aspect-[16/9] border-[4px] border-brutal-black dark:border-brutal-bg overflow-hidden cursor-pointer"
        style={{ boxShadow: `8px 8px 0 ${project.accentColor}` }}
      >
        <Link href={`/work/${project.slug}`} className="block w-full h-full">
          <motion.div
            className="w-full h-full"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={index === 0}
            />
          </motion.div>
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-brutal-green border-[3px] border-brutal-black px-4 py-2 font-display font-bold text-sm uppercase">
            Featured
          </div>
          
          {/* Info overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-brutal-bg dark:bg-brutal-black border-t-[4px] border-brutal-black dark:border-brutal-bg p-6"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {project.category.map((cat) => (
                <span key={cat} className="font-body text-xs uppercase tracking-wide text-brutal-black/60 dark:text-brutal-bg/60">
                  {cat}
                </span>
              ))}
              <span className="font-body text-xs text-brutal-black/60 dark:text-brutal-bg/60">• {project.year}</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brutal-black dark:text-brutal-bg">
              {project.title}
            </h3>
            <p className="font-body text-brutal-black/70 dark:text-brutal-bg/70 mt-2 max-w-xl">
              {project.description}
            </p>
          </motion.div>
        </Link>
      </motion.article>
    )
  }
  
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[4/3] border-[4px] border-brutal-black dark:border-brutal-bg overflow-hidden cursor-pointer group"
      style={{ boxShadow: `6px 6px 0 ${project.accentColor}` }}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index < 4 ? 'eager' : 'lazy'}
          />
        </motion.div>
        
        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 flex flex-col justify-center items-center p-8 ${overlayTextClass}`}
              style={{ background: project.accentColor }}
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-body text-sm uppercase tracking-widest mb-2 opacity-90"
              >
                {project.category.join(' + ')} • {project.year}
              </motion.span>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-display font-extrabold text-2xl md:text-3xl text-center"
              >
                {project.title}
              </motion.h3>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 font-display font-bold border-b-2 border-current"
              >
                View Project →
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Default title */}
        {!hovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="font-display font-bold text-xl text-white">
              {project.title}
            </h3>
            <span className="font-body text-sm text-white/70">
              {project.category.join(' • ')} • {project.year}
            </span>
          </div>
        )}
      </Link>
    </motion.article>
  )
}

// ═══════════════════════════════════════════════════════════════
// STATS STRIP
// ═══════════════════════════════════════════════════════════════
const STATS = [
  { num: '150+', label: 'Projects Shipped' },
  { num: '8', label: 'Years Running' },
  { num: '100%', label: 'Satisfaction Rate' },
  { num: '2M+', label: 'Reach Generated' },
]

function StatsStrip(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section 
      ref={ref}
      className="bg-brutal-yellow border-y-[4px] border-brutal-black py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-4xl md:text-5xl text-brutal-black">
                {stat.num}
              </div>
              <div className="font-body text-sm text-brutal-black/70 uppercase tracking-wide mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════
function WorkCTA(): JSX.Element {
  return (
    <section className="bg-brutal-pink border-y-[4px] border-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-brutal-black mb-6"
        >
          READY TO CREATE <br />
          <span className="inline-block bg-brutal-yellow px-2 border-[4px] border-brutal-black shadow-brutal rotate-1">
            YOUR NEXT HIT?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-brutal-black/80 mb-10"
        >
          Let&apos;s make something unforgettable together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <BrutalButton color="#1a1a1a" shadowColor="#FFE600" size="large" href="/contact">
            Start a Project →
          </BrutalButton>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function WorkPage(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  
  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(activeFilter))
  
  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)
  
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          badge={{ text: 'Selected Work', emoji: '🔥', color: '#22C55E' }}
          title="WE SHIP"
          highlight={{ text: 'HITS', color: '#FF5CAA', rotate: -2 }}
          subtitle="A curated selection of our boldest brand transformations and digital builds."
          shapes={[
            { color: '#FFE600', size: 120, top: '15%', left: '8%', rotate: 15 },
            { color: '#3B82F6', size: 80, top: '60%', left: '5%', rotate: -20 },
            { color: '#FF5CAA', size: 100, top: '20%', right: '12%', rotate: -10 },
          ]}
        />
        
        {/* Filter + Grid */}
        <section className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <FilterTabs active={activeFilter} onChange={setActiveFilter} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {featuredProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} featured />
                ))}
                {regularProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i + featuredProjects.length} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        
        <StatsStrip />
        <MarqueeStrip 
          text="WE MAKE LOUD BRANDS • SHIP IT • NO BS" 
          bgColor="#3B82F6" 
          textColor="#FFFEF5"
          direction="right"
        />
        <WorkCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
