'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Template {
  slug: string
  name: string
  category: 'Local Business' | 'Digital Business' | 'Creative'
  description: string
  color: string
}

const templates: Template[] = [
  // Local Business
  {
    slug: 'restaurant',
    name: 'Restaurant',
    category: 'Local Business',
    description: 'Perfect for restaurants, cafes, and bars',
    color: 'from-orange-500 to-red-500',
  },
  {
    slug: 'gym',
    name: 'Gym',
    category: 'Local Business',
    description: 'Ideal for gyms and fitness studios',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'salon',
    name: 'Salon',
    category: 'Local Business',
    description: 'Designed for salons, spas, and beauty services',
    color: 'from-pink-500 to-rose-500',
  },
  {
    slug: 'contractor',
    name: 'Contractor',
    category: 'Local Business',
    description: 'Built for contractors, plumbers, and electricians',
    color: 'from-amber-500 to-orange-500',
  },
  {
    slug: 'brunch',
    name: 'Brunch',
    category: 'Local Business',
    description: 'Warm and inviting for brunch spots and cafes',
    color: 'from-yellow-400 to-orange-400',
  },
  // Digital Business
  {
    slug: 'saas',
    name: 'SaaS',
    category: 'Digital Business',
    description: 'Launch your software product',
    color: 'from-violet-500 to-purple-500',
  },
  {
    slug: 'coach',
    name: 'Coach',
    category: 'Digital Business',
    description: 'Personal brand for coaches and consultants',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'agency',
    name: 'Agency',
    category: 'Digital Business',
    description: 'Showcase your agency work',
    color: 'from-fuchsia-500 to-pink-500',
  },
  // Creative
  {
    slug: 'aurora',
    name: 'Aurora',
    category: 'Creative',
    description: 'Animated mesh gradients and modern design',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    slug: 'brutalist',
    name: 'Brutalist',
    category: 'Creative',
    description: 'Raw, bold, unapologetic design',
    color: 'from-zinc-600 to-zinc-800',
  },
  {
    slug: 'minimal',
    name: 'Minimal',
    category: 'Creative',
    description: 'Clean, focused, distraction-free',
    color: 'from-gray-400 to-gray-600',
  },
  {
    slug: 'typography',
    name: 'Typography',
    category: 'Creative',
    description: 'Type-driven design with kinetic text',
    color: 'from-slate-500 to-slate-700',
  },
  {
    slug: 'studio',
    name: 'Studio',
    category: 'Creative',
    description: 'Portfolio-focused for creatives',
    color: 'from-rose-500 to-pink-600',
  },
]

const categories = ['All', 'Local Business', 'Digital Business', 'Creative'] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent-cyan to-accent-emerald p-[1px]">
                <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                  <span className="text-lg font-bold text-white">T</span>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">Template Showcase</h1>
                <p className="text-text-muted text-sm">Debug & Preview</p>
              </div>
            </div>
            <a 
              href="https://github.com/toddclawd-del/template-business-v2" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors text-sm"
            >
              GitHub →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Sections */}
        {(['Local Business', 'Digital Business', 'Creative'] as const).map((category) => (
          <section key={category} id={category.toLowerCase().replace(' ', '-')} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">{category}</h2>
            <p className="text-text-secondary mb-8">
              {category === 'Local Business' && 'Templates for brick-and-mortar businesses'}
              {category === 'Digital Business' && 'Templates for online products and services'}
              {category === 'Creative' && 'Experimental and portfolio-focused designs'}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates
                .filter(t => t.category === category)
                .map((template, i) => (
                  <motion.div
                    key={template.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={`/templates/${template.slug}`}
                      className="block group"
                    >
                      <div className="bg-surface border border-surface-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        {/* Preview gradient */}
                        <div className={`h-32 bg-gradient-to-br ${template.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white/80 text-4xl font-bold">{template.name[0]}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                              {template.name}
                            </h3>
                            <span className="text-text-muted text-sm">→</span>
                          </div>
                          <p className="text-text-secondary text-sm">
                            {template.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}

        {/* Quick Nav */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-surface/90 backdrop-blur-lg border border-surface-border rounded-full px-6 py-3 shadow-xl">
            <div className="flex items-center gap-6">
              <a href="#local-business" className="text-text-secondary hover:text-white text-sm transition-colors">
                Local
              </a>
              <a href="#digital-business" className="text-text-secondary hover:text-white text-sm transition-colors">
                Digital
              </a>
              <a href="#creative" className="text-text-secondary hover:text-white text-sm transition-colors">
                Creative
              </a>
            </div>
          </div>
        </nav>
      </main>
    </div>
  )
}
