'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Link from 'next/link'
import { Palette, Code, Star, Film, Target, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  FloatingOrb, 
  MagneticWrapper, 
  BentoTile, 
  AnimatedCounter, 
  GlassButton,
  colors,
  useIsMobile,
  useIsTablet
} from '@/components/shared'

// ═══════════════════════════════════════════════════════════════
// STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════
function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Studio Prism',
    description: 'Full-spectrum digital design services. We craft experiences that inspire and convert.',
    url: 'https://prism.studio',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@prism.studio',
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
// HERO SECTION
// ═══════════════════════════════════════════════════════════════
function Hero() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-8 lg:px-16 pt-24 pb-12">
      <FloatingOrb color={colors.violet} size={isMobile ? 120 : 200} delay={0} className="top-[10%] left-[10%]" />
      <FloatingOrb color={colors.blue} size={isMobile ? 90 : 150} delay={2} className="top-[60%] right-[20%]" />
      <FloatingOrb color={colors.emerald} size={isMobile ? 100 : 180} delay={4} className="bottom-[20%] left-[30%]" />

      <div className={`
        grid gap-8 md:gap-16 items-center max-w-7xl mx-auto w-full
        ${isTablet ? 'grid-cols-1' : 'grid-cols-2'}
      `}>
        <div className={isTablet ? 'text-center' : ''}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-sm text-studio-violet mb-6 border border-studio-violet/30"
            style={{ background: `linear-gradient(135deg, ${colors.violet}20 0%, ${colors.blue}20 100%)` }}
          >
            ✦ Digital Design Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            We craft
            <br />
            <span className="gradient-text">digital experiences</span>
            <br />
            that inspire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-8 mx-auto md:mx-0"
          >
            Studio Prism transforms ambitious ideas into stunning digital 
            realities. From brand strategy to immersive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`flex gap-4 flex-wrap ${isTablet ? 'justify-center' : ''}`}
          >
            <GlassButton primary href="/work">View Our Work</GlassButton>
            <GlassButton href="/services">Learn More</GlassButton>
          </motion.div>
        </div>

        {/* Bento Grid Preview */}
        <div className={`
          grid gap-3 md:gap-4
          ${isMobile ? 'grid-cols-2 grid-rows-4' : 'grid-cols-3 grid-rows-3'}
        `} aria-label="Featured work preview">
          <BentoTile 
            span="large" 
            delay={0.3}
            gradient
            gradientColors={[colors.violet, colors.pink]}
            accentColor={colors.violet}
            href="/work/nexus-ai"
          >
            <div className="flex flex-col justify-between h-full">
              <span className="text-xs text-white/70 uppercase tracking-widest">Featured</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Nexus AI</h3>
                <p className="text-sm text-white/60">Complete brand & web platform</p>
              </div>
            </div>
          </BentoTile>

          <BentoTile 
            span={isMobile ? 'normal' : 'tall'}
            delay={0.4}
            accentColor={colors.emerald}
            hoverContent={
              <div className="text-center">
                <p className="text-3xl mb-2" aria-hidden="true">🎨</p>
                <p className="text-sm text-white/60">View Project</p>
              </div>
            }
          >
            <div className="h-full flex flex-col justify-end">
              <p className="text-sm text-white/60 leading-relaxed">
                &ldquo;Prism understood our vision perfectly.&rdquo;
              </p>
              <p className="text-xs text-white/70 mt-3">— Sarah Chen, Founder</p>
            </div>
          </BentoTile>

          <BentoTile delay={0.5} accentColor={colors.blue}>
            <div className="text-center h-full flex flex-col justify-center">
              <p className="text-3xl md:text-4xl font-extrabold gradient-text">
                <AnimatedCounter value={150} suffix="+" />
              </p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest mt-1">
                Projects
              </p>
            </div>
          </BentoTile>

          <BentoTile delay={0.6} accentColor={colors.amber}>
            <div className="text-center h-full flex flex-col justify-center">
              <p className="text-3xl md:text-4xl font-extrabold" style={{
                background: `linear-gradient(135deg, ${colors.amber}, ${colors.pink})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                <AnimatedCounter value={98} suffix="%" />
              </p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest mt-1">
                Satisfaction
              </p>
            </div>
          </BentoTile>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/70">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-studio-violet"
          />
        </div>
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CLIENTS SECTION
// ═══════════════════════════════════════════════════════════════
function Clients() {
  const isMobile = useIsMobile()
  
  const clients = [
    { name: 'Stripe', logo: '💳' },
    { name: 'Notion', logo: '📝' },
    { name: 'Linear', logo: '🎯' },
    { name: 'Vercel', logo: '▲' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Framer', logo: '✨' },
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="clients-heading">
      <motion.p
        id="clients-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-white/70 uppercase tracking-[0.2em] mb-8"
      >
        Trusted by innovative teams
      </motion.p>
      
      <div className={`grid gap-3 ${isMobile ? 'grid-cols-3' : 'grid-cols-6'}`}>
        {clients.map((client, i) => (
          <BentoTile
            key={client.name}
            delay={i * 0.05}
            accentColor={colors.blue}
            className="min-h-[80px] md:min-h-[100px]"
          >
            <div className="h-full flex flex-col items-center justify-center gap-2">
              <span className="text-xl md:text-2xl" aria-hidden="true">{client.logo}</span>
              <span className="text-xs text-white/60 font-medium">{client.name}</span>
            </div>
          </BentoTile>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// SERVICES SECTION
// ═══════════════════════════════════════════════════════════════
function Services() {
  const isMobile = useIsMobile()
  
  const services = [
    { icon: <Palette className="w-6 h-6" />, title: 'UI/UX Design', desc: 'Intuitive interfaces that users love', color: colors.violet },
    { icon: <Code className="w-6 h-6" />, title: 'Development', desc: 'Performant, scalable solutions', color: colors.blue },
    { icon: <Star className="w-6 h-6" />, title: 'Branding', desc: 'Memorable visual identities', color: colors.emerald },
    { icon: <Film className="w-6 h-6" />, title: 'Motion', desc: 'Animations that tell stories', color: colors.amber },
    { icon: <Target className="w-6 h-6" />, title: 'Strategy', desc: 'Data-driven decision making', color: colors.pink },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="services-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 id="services-heading" className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">What we do</h2>
        <p className="text-white/60 max-w-md">
          Full-spectrum digital services tailored to your unique vision.
        </p>
      </motion.div>

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-5'}`}>
        {services.map((service, i) => (
          <BentoTile
            key={service.title}
            delay={i * 0.1}
            accentColor={service.color}
            span={isMobile && i === 4 ? 'wide' : 'normal'}
            href="/services"
            hoverContent={
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="mb-2 flex justify-center"
                  aria-hidden="true"
                >
                  {service.icon}
                </motion.div>
                <p className="text-sm">Explore →</p>
              </div>
            }
          >
            <div className="h-full flex flex-col justify-between">
              <div aria-hidden="true">{service.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-xs text-white/60">{service.desc}</p>
              </div>
            </div>
          </BentoTile>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// WORK SECTION
// ═══════════════════════════════════════════════════════════════
function Work() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  const projects = [
    { title: 'Quantum Labs', category: 'Brand + Web', colors: [colors.violet, colors.blue], span: 'large' as const, slug: 'quantum-labs' },
    { title: 'Solace Health', category: 'App Design', colors: [colors.emerald, colors.blue], span: 'normal' as const, slug: 'solace-health' },
    { title: 'Drift Commerce', category: 'E-commerce', colors: [colors.amber, colors.pink], span: 'tall' as const, slug: 'drift-commerce' },
    { title: 'Echo Audio', category: 'Brand Identity', colors: [colors.pink, colors.violet], span: 'wide' as const, slug: 'echo-audio' },
    { title: 'Vertex Finance', category: 'Dashboard', colors: [colors.blue, colors.emerald], span: 'normal' as const, slug: 'vertex-finance' },
    { title: 'Nova Platform', category: 'App', colors: [colors.violet, colors.emerald], span: 'wide' as const, slug: 'nova-platform' },
  ]

  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-8" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
        >
          <div>
            <h2 id="work-heading" className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">Selected Work</h2>
            <p className="text-white/60 max-w-md">
              A glimpse into our latest projects and collaborations.
            </p>
          </div>
          <GlassButton href="/work">View All</GlassButton>
        </motion.div>

        <div className={`
          grid gap-4
          ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'}
          auto-rows-[180px]
        `}>
          {projects.map((project, i) => (
            <Link key={project.title} href={`/work/${project.slug}`}>
              <BentoTile
                span={isMobile ? 'normal' : project.span}
                delay={Math.min(i * 0.05, 0.5)}
                gradient
                gradientColors={project.colors}
                accentColor={project.colors[0]}
                className={`h-full ${project.span === 'large' || project.span === 'tall' ? 'min-h-[240px]' : ''}`}
                hoverContent={
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-1">{project.title}</p>
                    <p className="text-sm text-white/60">View Case Study →</p>
                  </div>
                }
              >
                <div className="h-full flex flex-col justify-end">
                  <span className="text-[10px] text-white/70 uppercase tracking-widest mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                </div>
              </BentoTile>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// STATS SECTION
// ═══════════════════════════════════════════════════════════════
function Stats() {
  const isMobile = useIsMobile()
  
  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', color: colors.violet },
    { value: 150, suffix: '+', label: 'Projects Delivered', color: colors.blue },
    { value: 45, suffix: 'M+', label: 'Users Reached', color: colors.emerald },
    { value: 12, suffix: '', label: 'Industry Awards', color: colors.amber },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" aria-label="Studio statistics">
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {stats.map((stat, i) => (
          <BentoTile
            key={stat.label}
            delay={i * 0.1}
            accentColor={stat.color}
            gradient
            gradientColors={[stat.color, '#16161F']}
            className="min-h-[120px] md:min-h-[150px]"
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p 
                className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-1"
                style={{
                  background: `linear-gradient(135deg, ${stat.color} 0%, white 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </BentoTile>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════
function CTA() {
  const isMobile = useIsMobile()
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto">
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          <BentoTile
            gradient
            gradientColors={[colors.violet, colors.blue, colors.emerald]}
            accentColor={colors.violet}
            className={`min-h-[280px] md:min-h-[350px] p-8 md:p-12 ${isMobile ? '' : 'col-span-2'}`}
          >
            <div className="h-full flex flex-col justify-center">
              <h2 id="cta-heading" className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight mb-4">
                Ready to build
                <br />
                <span className="gradient-text">something extraordinary?</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-md">
                Let&apos;s turn your vision into reality. We&apos;re ready when you are.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlassButton primary href="/contact">Start a Project</GlassButton>
                <GlassButton href="/contact">Schedule a Call</GlassButton>
              </div>
            </div>
          </BentoTile>

          <div className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'grid-rows-2'}`}>
            <BentoTile
              accentColor={colors.amber}
              href="mailto:hello@prism.studio"
              hoverContent={
                <div className="text-center">
                  <p className="text-2xl mb-2" aria-hidden="true">📧</p>
                  <p className="text-sm">hello@prism.studio</p>
                </div>
              }
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-3xl mb-2" aria-hidden="true">📧</p>
                <p className="text-sm text-white/60">Email Us</p>
              </div>
            </BentoTile>

            <BentoTile
              accentColor={colors.pink}
              href="/about"
              hoverContent={
                <div className="text-center">
                  <p className="text-2xl mb-2" aria-hidden="true">📍</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              }
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-3xl mb-2" aria-hidden="true">📍</p>
                <p className="text-sm text-white/60">Visit Us</p>
              </div>
            </BentoTile>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE EXPORT
// ═══════════════════════════════════════════════════════════════
export default function StudioPage() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <Clients />
        <Services />
        <Work />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
