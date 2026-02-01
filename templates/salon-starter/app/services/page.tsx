'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Brush,
  ArrowRight,
  Clock
} from 'lucide-react'
import { Nav, Footer } from '@/components/layout'
import { PageHero, Breadcrumbs } from '@/components/shared'

// Service category icons mapping
const SERVICE_ICONS = {
  "Hair Cuts": Scissors,
  "Color Services": Palette,
  "Treatments": Sparkles,
  "Styling": Brush,
} as const

const SERVICES = [
  {
    category: "Hair Cuts",
    description: "Expert cuts tailored to your face shape and lifestyle",
    items: [
      { name: "Women's Cut & Style", price: 65, duration: "60 min", description: "Consultation, shampoo, precision cut, and blowout styling" },
      { name: "Men's Cut", price: 35, duration: "30 min", description: "Classic or modern cut with attention to detail" },
      { name: "Children's Cut (12 & under)", price: 25, duration: "30 min", description: "Patient, gentle service for your little ones" },
      { name: "Bang Trim", price: 15, duration: "15 min", description: "Quick trim between appointments" },
    ]
  },
  {
    category: "Color Services",
    description: "From subtle enhancements to bold transformations",
    items: [
      { name: "Single Process Color", price: 85, duration: "90 min", description: "Full coverage root touch-up or all-over color" },
      { name: "Full Highlights", price: 150, duration: "120 min", description: "Dimensional highlights throughout" },
      { name: "Partial Highlights", price: 100, duration: "90 min", description: "Face-framing or targeted highlights" },
      { name: "Balayage / Ombre", price: 200, duration: "180 min", description: "Hand-painted, sun-kissed highlights" },
      { name: "Color Correction", price: null, duration: "Varies", description: "Customized correction - consultation required" },
    ]
  },
  {
    category: "Treatments",
    description: "Restore and rejuvenate your hair's natural beauty",
    items: [
      { name: "Deep Conditioning", price: 35, duration: "30 min", description: "Intensive moisture and repair treatment" },
      { name: "Keratin Treatment", price: 250, duration: "180 min", description: "Smooth, frizz-free results for up to 3 months" },
      { name: "Scalp Treatment", price: 45, duration: "30 min", description: "Detox and nourish for a healthy foundation" },
    ]
  },
  {
    category: "Styling",
    description: "Perfect looks for every occasion",
    items: [
      { name: "Blowout", price: 45, duration: "45 min", description: "Shampoo and professional blowdry styling" },
      { name: "Special Occasion Style", price: 85, duration: "60 min", description: "Updo or styled look for events" },
      { name: "Bridal Hair (trial included)", price: 200, duration: "120 min", description: "Your dream wedding day look" },
    ]
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  }
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all')
  
  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory)
  
  return (
    <>
      <Nav />
      <main id="main-content">
        <PageHero
          eyebrow="Services"
          title="Our Services"
          description="Experience the art of beautiful hair with our talented team of stylists"
          compact
        />
        
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'Services' }]} className="mb-8" />
            
            {/* Category Filter Tabs */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              role="tablist"
              aria-label="Service categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <button
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={activeCategory === 'all' ? 'category-tab-active' : 'category-tab-inactive'}
              >
                All Services
              </button>
              {SERVICES.map(cat => {
                const IconComponent = SERVICE_ICONS[cat.category as keyof typeof SERVICE_ICONS]
                return (
                  <button
                    key={cat.category}
                    role="tab"
                    aria-selected={activeCategory === cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={activeCategory === cat.category ? 'category-tab-active' : 'category-tab-inactive'}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4 mr-2" aria-hidden="true" />}
                    {cat.category}
                  </button>
                )
              })}
            </motion.div>
            
            {/* Service Cards */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-12"
            >
              {filteredServices.map((category) => {
                const IconComponent = SERVICE_ICONS[category.category as keyof typeof SERVICE_ICONS]
                return (
                  <motion.div 
                    key={category.category}
                    variants={fadeInUp}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-100"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {IconComponent && (
                        <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                      )}
                      <div>
                        <h2 className="font-display text-2xl text-neutral-900">{category.category}</h2>
                        <p className="text-neutral-500 text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.items.map((service, i) => (
                        <div 
                          key={i}
                          className="p-5 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-neutral-900 group-hover:text-primary-700 transition-colors">
                              {service.name}
                            </h3>
                            <div className="text-right">
                              <span className="font-display text-lg font-semibold text-primary-600">
                                {service.price ? `$${service.price}` : 'Consultation'}
                              </span>
                            </div>
                          </div>
                          <p className="text-neutral-500 text-sm mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center text-xs text-neutral-400">
                              <Clock className="w-3 h-3 mr-1" />
                              {service.duration}
                            </span>
                            <Link 
                              href="/book" 
                              className="text-sm font-medium text-primary-600 hover:text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              Book →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
            
            {/* Booking CTA */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl text-neutral-900 mb-4">
                Ready for your transformation?
              </h3>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                Book your appointment online and let our talented stylists create your perfect look.
              </p>
              <Link href="/book" className="btn-primary group">
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
