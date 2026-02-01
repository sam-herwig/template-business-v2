'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import {
  AnimatedSplitText,
  MagneticText,
  WaveText,
  ScrambleText,
  Typewriter,
  RotatingWords,
  Marquee,
  ScrollRevealText
} from '@/components/motion'

// ═══════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════
function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 pt-32 pb-16 relative">
      <motion.div className="max-w-4xl" style={{ opacity, y, scale }}>
        {/* Badge */}
        <motion.div
          className="badge mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="badge-dot" />
          Typography in Motion
        </motion.div>
        
        {/* Title */}
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-none tracking-tight mb-6">
          <AnimatedSplitText delay={0.6} stagger={0.04}>
            Words that
          </AnimatedSplitText>
          <br />
          <span className="block min-h-[1.2em]">
            <RotatingWords 
              words={['move', 'inspire', 'dance', 'connect']} 
            />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-[clamp(1.1rem,2vw,1.4rem)] text-kinetic-muted max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          We create <Typewriter words={['experiences', 'emotions', 'stories', 'impact']} className="text-kinetic-accent font-semibold" />
          <br />
          through kinetic typography.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Link href="/contact">
            <motion.span
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>→</motion.span>
            </motion.span>
          </Link>
          <Link href="/work">
            <motion.span
              className="btn-secondary inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Work
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-kinetic-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, y: { duration: 1.5, repeat: Infinity } }}
      >
        ↓
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MARQUEE SECTION
// ═══════════════════════════════════════════════════════════════
function MarqueeSection() {
  return (
    <section className="py-12 border-y border-kinetic-border" style={{ background: 'rgba(250, 250, 250, 0.02)' }}>
      <Marquee speed={25}>
        <span className="marquee-text">
          MOTION • TYPOGRAPHY • DESIGN • ANIMATION • KINETIC • CREATIVE • 
        </span>
      </Marquee>
      <Marquee speed={30} direction="right">
        <span className="marquee-text-outline">
          STORYTELLING • IMPACT • BRAND • EXPERIENCE • VISUAL • DYNAMIC • 
        </span>
      </Marquee>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// SERVICES SECTION
// ═══════════════════════════════════════════════════════════════
function Services() {
  const services = [
    { number: '01', title: 'Kinetic Branding', description: 'Transform static logos into living, breathing brand expressions that captivate and engage.' },
    { number: '02', title: 'Motion Systems', description: 'Comprehensive animation guidelines that bring consistency and life to every touchpoint.' },
    { number: '03', title: 'Type Experiences', description: 'Interactive typography that responds, morphs, and creates memorable digital moments.' },
    { number: '04', title: 'Video & Titles', description: 'Cinematic title sequences and video typography that elevate your visual storytelling.' }
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <ScrollRevealText className="mb-16">
        <span className="section-label">What we do</span>
        <h2 className="section-title">
          <ScrambleText>Services</ScrambleText>
        </h2>
      </ScrollRevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            whileFocus={{ y: -8 }}
            tabIndex={0}
            role="listitem"
            aria-labelledby={`service-title-${service.number}`}
          >
            <span className="block text-sm font-semibold text-kinetic-subtle mb-6" aria-hidden="true">{service.number}</span>
            <h3 id={`service-title-${service.number}`} className="text-2xl font-bold tracking-tight mb-4">
              <WaveText>{service.title}</WaveText>
            </h3>
            <p className="text-kinetic-muted leading-relaxed mb-6">{service.description}</p>
            <Link href="/services" className="text-xl text-kinetic-accent hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// STATEMENT SECTION
// ═══════════════════════════════════════════════════════════════
function Statement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = 'Typography is the voice of design. When it moves, it speaks louder.'.split(' ')

  return (
    <section ref={ref} className="py-24 md:py-40 px-4 md:px-8 max-w-5xl mx-auto text-center">
      <p className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-snug tracking-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// STATS SECTION
// ═══════════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '12', label: 'Years Experience' },
    { value: '40+', label: 'Global Clients' },
    { value: '8', label: 'Design Awards' }
  ]

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto border-y border-kinetic-border">
      {stats.map((stat, i) => (
        <ScrollRevealText key={stat.label} direction={i % 2 === 0 ? 'up' : 'down'}>
          <div className="text-center">
            <span className="block text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight stat-gradient">
              {stat.value}
            </span>
            <span className="block text-sm text-kinetic-muted mt-2">{stat.label}</span>
          </div>
        </ScrollRevealText>
      ))}
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// WORK SECTION
// ═══════════════════════════════════════════════════════════════
function Work() {
  const projects = [
    { title: 'Nike Motion', category: 'Brand Animation', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', slug: 'nike-motion' },
    { title: 'Spotify Wrapped', category: 'Type System', image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80', slug: 'spotify-wrapped' },
    { title: 'Apple Events', category: 'Title Sequence', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80', slug: 'apple-events' }
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <ScrollRevealText className="mb-16">
        <span className="section-label">Featured</span>
        <h2 className="section-title">
          <ScrambleText>Selected Work</ScrambleText>
        </h2>
      </ScrollRevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="work-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            role="listitem"
          >
            <Link 
              href={`/work/${project.slug}`}
              className="block focus-ring rounded-2xl"
              aria-label={`View ${project.title} project - ${project.category}`}
            >
              <motion.div 
                className="work-image-container"
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
                  <span>View Project →</span>
                </motion.div>
              </motion.div>
              <div className="py-5 px-2">
                <span className="block text-xs text-kinetic-accent uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href="/work">
          <motion.span
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            View All Work
            <span>→</span>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════
function CTA() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 text-center" style={{ background: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.03))' }}>
      <ScrollRevealText>
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight mb-12 max-w-4xl mx-auto">
          <AnimatedSplitText type="words" stagger={0.08}>
            Ready to bring your words to life?
          </AnimatedSplitText>
        </h2>
      </ScrollRevealText>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <MagneticText>
          <Link href="/contact">
            <motion.span
              className="btn-primary text-lg px-12 py-5 inline-block"
              whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
              whileTap={{ scale: 0.95 }}
            >
              <WaveText>Let&apos;s Talk</WaveText>
            </motion.span>
          </Link>
        </MagneticText>
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// SKIP LINK
// ═══════════════════════════════════════════════════════════════
function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  )
}

// ═══════════════════════════════════════════════════════════════
// STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════
function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kinetic',
    description: 'We create experiences through kinetic typography. Motion design studio specializing in animated text and brand expression.',
    url: 'https://kinetic.design',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@kinetic.design',
      contactType: 'customer service',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE EXPORT
// ═══════════════════════════════════════════════════════════════
export default function TypographyPage() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <header>
        <Nav />
      </header>
      <main id="main-content">
        <Hero />
        <MarqueeSection />
        <Services />
        <Statement />
        <Stats />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
