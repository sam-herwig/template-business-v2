'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { 
  Typewriter, 
  RotatingWords, 
  Marquee, 
  ScrollRevealText,
  ScrambleText,
  WaveText
} from '@/components/motion'
import { projects } from '@/lib/data'

const categories = ['All', 'Brand Animation', 'Type System', 'Title Sequence', 'Kinetic Interface', 'Event Typography']

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      className={`work-card ${project.wide ? 'md:col-span-2' : ''} ${project.featured ? 'md:row-span-2' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      layout
    >
      <Link 
        href={`/work/${project.slug}`}
        className="block focus-ring rounded-2xl group"
        aria-label={`View ${project.title} project - ${project.category}`}
      >
        <motion.div 
          className={`work-image-container ${project.featured ? 'aspect-[4/5]' : project.wide ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image 
            src={project.image} 
            alt={`${project.title} - ${project.category} project thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="work-image" 
          />
          <motion.div
            className="work-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            aria-hidden="true"
          >
            <span className="flex items-center gap-2 text-lg font-semibold">
              View Project 
              <motion.span 
                initial={{ x: 0 }} 
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                →
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
        <div className="py-5 px-2">
          <span className="block text-xs text-kinetic-accent uppercase tracking-widest mb-2 group-hover:text-kinetic-text transition-colors">
            {project.category} · {project.year}
          </span>
          <h3 className="text-xl font-bold tracking-tight">
            <WaveText>{project.title}</WaveText>
          </h3>
        </div>
      </Link>
    </motion.article>
  )
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <header>
        <Nav />
      </header>
      
      <main id="main-content">
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 md:px-8 pt-32 pb-16">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="badge mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="badge-dot" />
              Selected Work
            </motion.div>

            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-none tracking-tight mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                OUR
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Typewriter words={['WORK', 'CRAFT', 'ART']} className="text-kinetic-accent" />
              </motion.span>
            </h1>

            <motion.p
              className="text-[clamp(1.1rem,2vw,1.4rem)] text-kinetic-muted max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Stories told through{' '}
              <RotatingWords words={['motion', 'type', 'craft', 'design']} />
            </motion.p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="px-4 md:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-6 py-3 text-sm font-medium transition-colors rounded-full ${
                    activeFilter === category 
                      ? 'text-kinetic-bg bg-kinetic-text' 
                      : 'text-kinetic-muted hover:text-kinetic-text border border-kinetic-border hover:border-kinetic-muted'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <section className="py-8 border-y border-kinetic-border" style={{ background: 'rgba(250, 250, 250, 0.02)' }}>
          <Marquee speed={25}>
            <span className="marquee-text">
              MOTION • TYPOGRAPHY • DESIGN • ANIMATION • KINETIC • CREATIVE • 
            </span>
          </Marquee>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.p
                className="text-center text-kinetic-muted py-20 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects found in this category.
              </motion.p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-4 md:px-8 text-center border-t border-kinetic-border">
          <ScrollRevealText>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8 max-w-3xl mx-auto">
              <ScrambleText>Have a project in mind?</ScrambleText>
            </h2>
          </ScrollRevealText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.span
                className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
                whileTap={{ scale: 0.95 }}
              >
                <WaveText>Let&apos;s Talk</WaveText>
                <span>→</span>
              </motion.span>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
