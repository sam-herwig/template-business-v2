'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { 
  AnimatedSplitText,
  ScrambleText,
  WordByWordReveal,
  ScrollRevealText,
  WaveText
} from '@/components/motion'
import { getProjectBySlug, getNextProject } from '@/lib/data'

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  const nextProject = getNextProject(params.slug)

  return (
    <>
      <header>
        <Nav />
      </header>
      
      <main id="main-content">
        {/* Hero */}
        <HeroSection project={project} />
        
        {/* Video/Showreel */}
        {project.videoUrl && <VideoSection videoUrl={project.videoUrl} />}
        
        {/* Description & Credits */}
        <DescriptionSection project={project} />
        
        {/* Gallery */}
        <GallerySection gallery={project.gallery} />
        
        {/* Quote */}
        {project.quote && <QuoteSection quote={project.quote} />}
        
        {/* Next Project */}
        {nextProject && <NextProjectSection project={nextProject} />}
      </main>

      <Footer />
    </>
  )
}

function HeroSection({ project }: { project: ReturnType<typeof getProjectBySlug> }) {
  if (!project) return null
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section ref={containerRef} className="min-h-[80vh] flex flex-col justify-center px-4 md:px-8 pt-32 pb-16 relative overflow-hidden">
      {/* Back button */}
      <motion.div
        className="absolute top-28 left-4 md:left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link 
          href="/work" 
          className="flex items-center gap-2 text-kinetic-muted hover:text-kinetic-text transition-colors group"
        >
          <motion.span 
            className="inline-block"
            whileHover={{ x: -5 }}
          >
            ←
          </motion.span>
          Back to Work
        </Link>
      </motion.div>

      <motion.div className="max-w-6xl mx-auto w-full" style={{ opacity, y }}>
        {/* Category */}
        <motion.p
          className="text-kinetic-accent uppercase tracking-widest text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ScrambleText trigger="mount">{project.category}</ScrambleText>
        </motion.p>

        {/* Giant Title */}
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter mb-8">
          <AnimatedSplitText delay={0.5} stagger={0.05}>
            {project.title.toUpperCase()}
          </AnimatedSplitText>
        </h1>

        {/* Meta */}
        <motion.div
          className="flex flex-wrap gap-8 text-kinetic-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div>
            <span className="text-xs uppercase tracking-widest block mb-1">Client</span>
            <span className="text-kinetic-text font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest block mb-1">Year</span>
            <span className="text-kinetic-text font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest block mb-1">Role</span>
            <span className="text-kinetic-text font-medium">{project.role}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function VideoSection({ videoUrl }: { videoUrl: string }) {
  return (
    <section className="px-4 md:px-8 pb-24">
      <ScrollRevealText className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-kinetic-border">
          <iframe
            src={videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Project Showreel"
          />
        </div>
      </ScrollRevealText>
    </section>
  )
}

function DescriptionSection({ project }: { project: ReturnType<typeof getProjectBySlug> }) {
  if (!project) return null
  
  return (
    <section className="py-24 px-4 md:px-8 border-t border-kinetic-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Brief */}
        <ScrollRevealText>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-kinetic-accent mb-6">The Brief</h2>
            <p className="text-xl leading-relaxed text-kinetic-muted">
              {project.description}
            </p>
          </div>
        </ScrollRevealText>

        {/* Credits & Deliverables */}
        <div className="space-y-12">
          <ScrollRevealText delay={0.1}>
            <div>
              <h2 className="text-xs uppercase tracking-widest text-kinetic-accent mb-6">Credits</h2>
              <ul className="space-y-3">
                {project.credits.map((credit, i) => (
                  <li key={i} className="flex justify-between items-baseline border-b border-kinetic-border pb-3">
                    <span className="text-kinetic-muted">{credit.role}</span>
                    <span className="font-medium">{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.2}>
            <div>
              <h2 className="text-xs uppercase tracking-widest text-kinetic-accent mb-6">Deliverables</h2>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-kinetic-muted">
                    <span className="w-1.5 h-1.5 bg-kinetic-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealText>
        </div>
      </div>
    </section>
  )
}

function GallerySection({ gallery }: { gallery: { type: 'image' | 'video'; src: string; alt?: string }[] }) {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {gallery.map((item, i) => (
          <GalleryItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

function GalleryItem({ item, index }: { item: { type: 'image' | 'video'; src: string; alt?: string }; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const isWide = index === 0 || index % 3 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${isWide ? 'aspect-video' : 'aspect-[4/3]'}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {item.type === 'image' ? (
        <motion.div className="relative w-full h-full" style={{ y }}>
          <Image
            src={item.src}
            alt={item.alt || 'Project gallery image'}
            fill
            className="object-cover scale-110"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
        </motion.div>
      ) : (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  )
}

function QuoteSection({ quote }: { quote: { text: string; author: string } }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-4 md:px-8 border-y border-kinetic-border" style={{ background: 'rgba(250, 250, 250, 0.02)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <blockquote>
          <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-snug italic mb-8">
            &ldquo;<WordByWordReveal staggerDelay={0.06}>{quote.text}</WordByWordReveal>&rdquo;
          </p>
          <motion.footer
            className="text-kinetic-muted"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            — {quote.author}
          </motion.footer>
        </blockquote>
      </div>
    </section>
  )
}

function NextProjectSection({ project }: { project: ReturnType<typeof getProjectBySlug> }) {
  if (!project) return null
  
  return (
    <section className="py-24 px-4 md:px-8">
      <Link href={`/work/${project.slug}`} className="block group">
        <motion.div
          className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kinetic-bg via-kinetic-bg/50 to-transparent" />
          </div>
          
          <div className="relative z-10 p-12 md:p-20">
            <p className="text-kinetic-accent uppercase tracking-widest text-sm font-medium mb-4 flex items-center gap-4">
              Next Project
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
              >
                →
              </motion.span>
            </p>
            <h3 className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight">
              <WaveText>{project.title}</WaveText>
            </h3>
            <p className="text-kinetic-muted mt-2">{project.category} · {project.year}</p>
          </div>
        </motion.div>
      </Link>
    </section>
  )
}
