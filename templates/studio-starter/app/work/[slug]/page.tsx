'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  BentoTile, 
  AnimatedCounter,
  GlassButton,
  SectionHeader,
  colors, 
  useIsMobile,
  FloatingOrb
} from '@/components/shared'

// Sample project data - in production this would come from Sanity
const projectsData: Record<string, {
  title: string
  category: string
  year: number
  description: string
  challenge: string
  client: string
  industry: string
  timeline: string
  services: string[]
  liveUrl?: string
  colors: string[]
  metrics: { value: number; suffix: string; label: string }[]
  testimonial?: { quote: string; author: string; role: string }
  process: { title: string; description: string }[]
  prevSlug?: string
  nextSlug?: string
}> = {
  'nexus-ai': {
    title: 'Nexus AI',
    category: 'Brand + Web',
    year: 2024,
    description: 'Complete brand identity and AI-powered web platform',
    challenge: 'Nexus needed a brand that communicated cutting-edge AI technology while remaining approachable and trustworthy. They also required a high-performance web platform to showcase their capabilities.',
    client: 'Nexus Technologies',
    industry: 'Artificial Intelligence',
    timeline: '12 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design', 'Development'],
    liveUrl: 'https://nexus.ai',
    colors: [colors.violet, colors.blue],
    metrics: [
      { value: 150, suffix: '%', label: 'Engagement Increase' },
      { value: 45, suffix: 'K+', label: 'Monthly Users' },
      { value: 2.1, suffix: 's', label: 'Load Time' },
      { value: 1, suffix: 'st', label: 'Search Ranking' },
    ],
    testimonial: {
      quote: 'Prism understood our vision perfectly. They translated complex AI concepts into a brand that resonates with both technical and non-technical audiences.',
      author: 'Sarah Chen',
      role: 'CEO, Nexus Technologies'
    },
    process: [
      { title: 'Discovery', description: 'Deep dive into AI industry, competitor analysis, stakeholder interviews' },
      { title: 'Strategy', description: 'Brand positioning, messaging framework, visual direction' },
      { title: 'Design', description: 'Logo system, color palette, typography, UI components' },
      { title: 'Launch', description: 'Website development, asset delivery, brand guidelines' },
    ],
    prevSlug: 'pulse-motion',
    nextSlug: 'solace-health'
  },
  'solace-health': {
    title: 'Solace Health',
    category: 'App Design',
    year: 2024,
    description: 'Healthcare app with patient-first design philosophy',
    challenge: 'Create an intuitive mobile experience for patients managing chronic conditions while ensuring HIPAA compliance and accessibility.',
    client: 'Solace Healthcare Inc.',
    industry: 'Healthcare Technology',
    timeline: '16 weeks',
    services: ['UX Research', 'UI Design', 'Prototyping', 'Usability Testing'],
    colors: [colors.emerald, colors.blue],
    metrics: [
      { value: 4.8, suffix: '★', label: 'App Store Rating' },
      { value: 89, suffix: '%', label: 'User Retention' },
      { value: 200, suffix: 'K+', label: 'Downloads' },
      { value: 40, suffix: '%', label: 'Reduced Support' },
    ],
    process: [
      { title: 'Research', description: 'Patient interviews, journey mapping, accessibility audit' },
      { title: 'Wireframes', description: 'Low-fidelity prototypes, user flow optimization' },
      { title: 'UI Design', description: 'High-fidelity mockups, design system creation' },
      { title: 'Testing', description: 'Usability studies, iteration, final delivery' },
    ],
    prevSlug: 'nexus-ai',
    nextSlug: 'drift-commerce'
  },
  'drift-commerce': {
    title: 'Drift Commerce',
    category: 'E-commerce',
    year: 2023,
    description: 'Next-generation e-commerce platform with immersive shopping experience',
    challenge: 'Reinvent the online shopping experience with 3D product visualization and seamless checkout.',
    client: 'Drift Retail Group',
    industry: 'Retail & E-commerce',
    timeline: '20 weeks',
    services: ['UX Design', 'Development', '3D Integration', 'Performance'],
    liveUrl: 'https://drift.shop',
    colors: [colors.amber, colors.pink],
    metrics: [
      { value: 65, suffix: '%', label: 'Conversion Lift' },
      { value: 2.5, suffix: 'M', label: 'Revenue Increase' },
      { value: 3.2, suffix: 'min', label: 'Avg Session' },
      { value: 95, suffix: '%', label: 'Mobile Score' },
    ],
    process: [
      { title: 'Discovery', description: 'Market research, customer persona development' },
      { title: 'Design', description: 'UI/UX design, 3D asset integration planning' },
      { title: 'Build', description: 'Next.js development, headless commerce setup' },
      { title: 'Optimize', description: 'Performance tuning, A/B testing, launch' },
    ],
    prevSlug: 'solace-health',
    nextSlug: 'echo-audio'
  },
  'echo-audio': {
    title: 'Echo Audio',
    category: 'Brand Identity',
    year: 2023,
    description: 'Premium audio equipment brand with timeless identity',
    challenge: 'Create a luxury brand identity that appeals to audiophiles while remaining accessible.',
    client: 'Echo Audio Ltd.',
    industry: 'Consumer Electronics',
    timeline: '8 weeks',
    services: ['Brand Strategy', 'Logo Design', 'Packaging', 'Guidelines'],
    colors: [colors.pink, colors.violet],
    metrics: [
      { value: 300, suffix: '%', label: 'Brand Recognition' },
      { value: 12, suffix: '', label: 'Design Awards' },
      { value: 45, suffix: '%', label: 'Premium Pricing' },
      { value: 2, suffix: 'X', label: 'Sales Growth' },
    ],
    process: [
      { title: 'Audit', description: 'Brand audit, market positioning analysis' },
      { title: 'Concept', description: 'Visual exploration, concept development' },
      { title: 'Refine', description: 'Logo refinement, color and type selection' },
      { title: 'Deliver', description: 'Brand guidelines, asset library creation' },
    ],
    prevSlug: 'drift-commerce',
    nextSlug: 'vertex-finance'
  },
  'vertex-finance': {
    title: 'Vertex Finance',
    category: 'Dashboard',
    year: 2023,
    description: 'Modern fintech dashboard for portfolio management',
    challenge: 'Design a data-rich financial dashboard that simplifies complex information.',
    client: 'Vertex Capital',
    industry: 'Financial Services',
    timeline: '14 weeks',
    services: ['UX Design', 'Data Visualization', 'Frontend Development'],
    colors: [colors.blue, colors.emerald],
    metrics: [
      { value: 50, suffix: '%', label: 'Faster Decisions' },
      { value: 98, suffix: '%', label: 'User Satisfaction' },
      { value: 10, suffix: 'B+', label: 'Assets Managed' },
      { value: 60, suffix: '%', label: 'Task Efficiency' },
    ],
    process: [
      { title: 'Analysis', description: 'User workflow analysis, data requirements' },
      { title: 'Design', description: 'Information architecture, visualization design' },
      { title: 'Develop', description: 'React dashboard, real-time data integration' },
      { title: 'Deploy', description: 'User training, performance monitoring' },
    ],
    prevSlug: 'echo-audio',
    nextSlug: 'nova-platform'
  },
  'nova-platform': {
    title: 'Nova Platform',
    category: 'App',
    year: 2023,
    description: 'Collaborative workspace for remote teams',
    challenge: 'Build an intuitive workspace that enhances remote team collaboration.',
    client: 'Nova Labs',
    industry: 'SaaS / Productivity',
    timeline: '18 weeks',
    services: ['Product Design', 'UX Research', 'Design System', 'Prototyping'],
    colors: [colors.violet, colors.emerald],
    metrics: [
      { value: 85, suffix: '%', label: 'Team Adoption' },
      { value: 3, suffix: 'hrs', label: 'Time Saved Daily' },
      { value: 50, suffix: 'K', label: 'Active Teams' },
      { value: 4.7, suffix: '★', label: 'G2 Rating' },
    ],
    process: [
      { title: 'Research', description: 'Remote work studies, competitor analysis' },
      { title: 'Ideate', description: 'Feature prioritization, workflow design' },
      { title: 'Design', description: 'UI design, component library, prototypes' },
      { title: 'Validate', description: 'Beta testing, iteration, launch support' },
    ],
    prevSlug: 'vertex-finance',
    nextSlug: 'quantum-labs'
  },
  'quantum-labs': {
    title: 'Quantum Labs',
    category: 'Brand',
    year: 2024,
    description: 'Research laboratory brand with futuristic identity',
    challenge: 'Create a brand that represents cutting-edge quantum research.',
    client: 'Quantum Research Foundation',
    industry: 'Scientific Research',
    timeline: '10 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
    colors: [colors.blue, colors.violet],
    metrics: [
      { value: 5, suffix: 'X', label: 'Media Coverage' },
      { value: 200, suffix: '%', label: 'Funding Increase' },
      { value: 40, suffix: '+', label: 'New Researchers' },
      { value: 15, suffix: '', label: 'Partnerships' },
    ],
    process: [
      { title: 'Immerse', description: 'Quantum physics research, stakeholder interviews' },
      { title: 'Conceptualize', description: 'Visual metaphor exploration, moodboards' },
      { title: 'Design', description: 'Identity system, website design' },
      { title: 'Launch', description: 'Brand rollout, press materials' },
    ],
    prevSlug: 'nova-platform',
    nextSlug: 'pulse-motion'
  },
  'pulse-motion': {
    title: 'Pulse Motion',
    category: 'Motion Design',
    year: 2024,
    description: 'Comprehensive motion design system for digital products',
    challenge: 'Develop a scalable motion design language that enhances user experience.',
    client: 'Pulse Digital',
    industry: 'Design System',
    timeline: '6 weeks',
    services: ['Motion Design', 'Animation Library', 'Documentation'],
    colors: [colors.pink, colors.amber],
    metrics: [
      { value: 100, suffix: '+', label: 'Animations' },
      { value: 30, suffix: '%', label: 'Dev Time Saved' },
      { value: 5, suffix: '', label: 'Products Using' },
      { value: 99, suffix: '%', label: 'Consistency' },
    ],
    process: [
      { title: 'Audit', description: 'Existing animation review, principles definition' },
      { title: 'Create', description: 'Core animation set, easing curves, timing' },
      { title: 'Document', description: 'Usage guidelines, code snippets, examples' },
      { title: 'Integrate', description: 'Developer handoff, implementation support' },
    ],
    prevSlug: 'quantum-labs',
    nextSlug: 'nexus-ai'
  },
}

function HeroSection({ project }: { project: typeof projectsData[string] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.colors[0]}30 0%, ${project.colors[1]}20 50%, #0A0A0F 100%)`
          }}
        />
        <FloatingOrb color={project.colors[0]} size={300} delay={0} className="top-[20%] left-[10%]" />
        <FloatingOrb color={project.colors[1]} size={200} delay={2} className="top-[40%] right-[20%]" />
      </motion.div>
      
      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-end px-4 md:px-8 lg:px-16 pb-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/60 mb-4 block"
          >
            {project.category} • {project.year}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1] mb-6"
          >
            {project.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-white/70 max-w-xl"
          >
            {project.description}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ProjectInfoGrid({ project }: { project: typeof projectsData[string] }) {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
        {/* Challenge */}
        <BentoTile 
          span={isMobile ? 'normal' : 'wide'}
          accentColor={project.colors[0]}
          className="min-h-[200px]"
        >
          <div className="h-full flex flex-col">
            <span className="text-xs text-white/50 uppercase tracking-widest mb-4">The Challenge</span>
            <p className="text-lg text-white/80 leading-relaxed">{project.challenge}</p>
          </div>
        </BentoTile>

        {/* Info Column */}
        <div className="space-y-4">
          <BentoTile accentColor={project.colors[1]} className="min-h-[100px]">
            <div>
              <span className="text-xs text-white/50 uppercase tracking-widest">Client</span>
              <p className="font-semibold mt-1">{project.client}</p>
            </div>
          </BentoTile>
          
          <BentoTile accentColor={project.colors[0]} className="min-h-[100px]">
            <div>
              <span className="text-xs text-white/50 uppercase tracking-widest">Industry</span>
              <p className="font-semibold mt-1">{project.industry}</p>
            </div>
          </BentoTile>
          
          <BentoTile accentColor={project.colors[1]} className="min-h-[100px]">
            <div>
              <span className="text-xs text-white/50 uppercase tracking-widest">Timeline</span>
              <p className="font-semibold mt-1">{project.timeline}</p>
            </div>
          </BentoTile>
          
          <BentoTile accentColor={project.colors[0]} className="min-h-[100px]">
            <div>
              <span className="text-xs text-white/50 uppercase tracking-widest">Services</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.services.map(s => (
                  <span key={s} className="text-xs bg-white/10 px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </BentoTile>

          {project.liveUrl && (
            <BentoTile 
              accentColor={project.colors[0]} 
              className="min-h-[80px]"
              href={project.liveUrl}
            >
              <div className="flex items-center justify-between h-full">
                <span className="font-semibold">View Live Site</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </BentoTile>
          )}
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ project }: { project: typeof projectsData[string] }) {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ Process"
        title="How we did it"
        description="Our approach to bringing this project to life"
      />

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-4'}`}>
        {project.process.map((step, i) => (
          <BentoTile
            key={step.title}
            delay={i * 0.1}
            accentColor={project.colors[i % 2]}
            className="min-h-[180px]"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: `${project.colors[i % 2]}30` }}
                >
                  0{i + 1}
                </span>
                <h3 className="font-bold">{step.title}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
            </div>
          </BentoTile>
        ))}
      </div>
    </section>
  )
}

function MetricsSection({ project }: { project: typeof projectsData[string] }) {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ Results"
        title="Impact & Metrics"
        description="The measurable outcomes of our collaboration"
      />

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {project.metrics.map((metric, i) => (
          <BentoTile
            key={metric.label}
            delay={i * 0.1}
            accentColor={project.colors[i % 2]}
            gradient
            gradientColors={project.colors}
            className="min-h-[140px]"
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p 
                className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-1"
                style={{
                  background: `linear-gradient(135deg, ${project.colors[0]} 0%, white 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-xs text-white/70 uppercase tracking-widest">
                {metric.label}
              </p>
            </div>
          </BentoTile>
        ))}
      </div>
    </section>
  )
}

function TestimonialSection({ project }: { project: typeof projectsData[string] }) {
  if (!project.testimonial) return null

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <BentoTile
        gradient
        gradientColors={project.colors}
        accentColor={project.colors[0]}
        className="min-h-[250px] p-8 md:p-12"
      >
        <div className="h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-white/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white/90">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold">{project.testimonial.author}</p>
            <p className="text-sm text-white/60">{project.testimonial.role}</p>
          </div>
        </div>
      </BentoTile>
    </section>
  )
}

function ProjectNavigation({ project }: { project: typeof projectsData[string] }) {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {project.prevSlug && (
            <Link href={`/work/${project.prevSlug}`}>
              <BentoTile
                accentColor={colors.violet}
                className="min-h-[120px] group"
              >
                <div className="h-full flex items-center gap-4">
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-widest">Previous</span>
                    <p className="font-bold text-lg">{projectsData[project.prevSlug]?.title}</p>
                  </div>
                </div>
              </BentoTile>
            </Link>
          )}
          
          {project.nextSlug && (
            <Link href={`/work/${project.nextSlug}`}>
              <BentoTile
                accentColor={colors.blue}
                className="min-h-[120px] group"
              >
                <div className="h-full flex items-center justify-end gap-4 text-right">
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-widest">Next</span>
                    <p className="font-bold text-lg">{projectsData[project.nextSlug]?.title}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </BentoTile>
            </Link>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <GlassButton href="/work">View All Projects</GlassButton>
        </div>
      </div>
    </section>
  )
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <GlassButton href="/work">Back to Work</GlassButton>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      
      <main id="main-content">
        <HeroSection project={project} />
        <ProjectInfoGrid project={project} />
        <ProcessSection project={project} />
        <MetricsSection project={project} />
        <TestimonialSection project={project} />
        <ProjectNavigation project={project} />
      </main>
      
      <Footer />
    </>
  )
}
