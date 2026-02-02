'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  PageHero, 
  BentoTile, 
  colors, 
  useIsMobile, 
  useIsTablet 
} from '@/components/shared'

// Sample project data - in production this would come from Sanity
const projects = [
  { 
    slug: 'nexus-ai',
    title: 'Nexus AI', 
    category: 'brand', 
    year: 2024,
    description: 'Complete brand identity and AI-powered web platform',
    colors: [colors.violet, colors.blue], 
    span: 'large' as const,
    featured: true
  },
  { 
    slug: 'solace-health',
    title: 'Solace Health', 
    category: 'app', 
    year: 2024,
    description: 'Healthcare app with patient-first design',
    colors: [colors.emerald, colors.blue], 
    span: 'normal' as const 
  },
  { 
    slug: 'drift-commerce',
    title: 'Drift Commerce', 
    category: 'web', 
    year: 2023,
    description: 'Next-gen e-commerce platform',
    colors: [colors.amber, colors.pink], 
    span: 'tall' as const 
  },
  { 
    slug: 'echo-audio',
    title: 'Echo Audio', 
    category: 'brand', 
    year: 2023,
    description: 'Premium audio brand identity',
    colors: [colors.pink, colors.violet], 
    span: 'wide' as const 
  },
  { 
    slug: 'vertex-finance',
    title: 'Vertex Finance', 
    category: 'web', 
    year: 2023,
    description: 'Modern fintech dashboard',
    colors: [colors.blue, colors.emerald], 
    span: 'normal' as const 
  },
  { 
    slug: 'nova-platform',
    title: 'Nova Platform', 
    category: 'app', 
    year: 2023,
    description: 'Collaborative workspace app',
    colors: [colors.violet, colors.emerald], 
    span: 'wide' as const 
  },
  { 
    slug: 'quantum-labs',
    title: 'Quantum Labs', 
    category: 'brand', 
    year: 2024,
    description: 'Research lab branding',
    colors: [colors.blue, colors.violet], 
    span: 'normal' as const 
  },
  { 
    slug: 'pulse-motion',
    title: 'Pulse Motion', 
    category: 'motion', 
    year: 2024,
    description: 'Motion design system',
    colors: [colors.pink, colors.amber], 
    span: 'normal' as const 
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'brand', label: 'Brand' },
  { id: 'web', label: 'Web' },
  { id: 'app', label: 'App' },
  { id: 'motion', label: 'Motion' },
]

function FilterPills({ 
  active, 
  onChange 
}: { 
  active: string
  onChange: (category: string) => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex gap-3 flex-wrap justify-center mb-12"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`
            px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px]
            ${active === cat.id 
              ? 'bg-gradient-to-r from-studio-violet to-studio-blue text-white' 
              : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-12"
    >
      <Link href={`/work/${project.slug}`}>
        <BentoTile
          span="large"
          gradient
          gradientColors={project.colors}
          accentColor={project.colors[0]}
          className="min-h-[350px] md:min-h-[450px] group"
          hoverContent={
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">View Case Study</p>
              <p className="text-sm text-white/60">See how we did it →</p>
            </div>
          }
        >
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80">
                Featured
              </span>
              <span className="text-xs text-white/60">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} • {project.year}
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/60 max-w-md">{project.description}</p>
            </div>
          </div>
        </BentoTile>
      </Link>
    </motion.div>
  )
}

type Project = {
  slug: string
  title: string
  category: string
  year: number
  description: string
  colors: string[]
  span: 'normal' | 'wide' | 'tall' | 'large'
  featured?: boolean
}

function ProjectGrid({ projects: projectList }: { projects: Project[] }) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  return (
    <div className={`
      grid gap-4
      ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'}
      auto-rows-[180px]
    `}>
      <AnimatePresence mode="popLayout">
        {projectList.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link href={`/work/${project.slug}`}>
              <BentoTile
                span={isMobile ? 'normal' : project.span}
                gradient
                gradientColors={project.colors}
                accentColor={project.colors[0]}
                className={`h-full ${project.span === 'large' || project.span === 'tall' ? 'min-h-[280px]' : ''}`}
                hoverContent={
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-1">{project.title}</p>
                    <p className="text-sm text-white/60">View Case Study →</p>
                  </div>
                }
              >
                <div className="h-full flex flex-col justify-end">
                  <span className="text-[10px] text-white/70 uppercase tracking-widest mb-1">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                </div>
              </BentoTile>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const featured = projects.find(p => p.featured)
  const filteredProjects = projects.filter(p => {
    if (activeCategory === 'all') return !p.featured
    return p.category === activeCategory && !p.featured
  })

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      
      <main id="main-content">
        <PageHero
          tag="✦ Our Work"
          title={<>Selected <span className="gradient-text">Projects</span></>}
          description="Projects that push boundaries and create lasting impact. Each one a story of collaboration, creativity, and craft."
        >
          <FilterPills active={activeCategory} onChange={setActiveCategory} />
        </PageHero>

        <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
          {activeCategory === 'all' && featured && (
            <FeaturedProject project={featured} />
          )}
          
          <ProjectGrid projects={filteredProjects} />
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-white/60 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </section>
      </main>
      
      <Footer />
    </>
  )
}
