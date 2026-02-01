'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { 
  RotatingWords, 
  Marquee, 
  ScrollRevealText,
  ScrambleText,
  WaveText,
  MagneticText
} from '@/components/motion'
import { services, processSteps, tools } from '@/lib/data'

function ServiceAccordion({ service, isOpen, onToggle, index }: { 
  service: typeof services[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      className="border border-kinetic-border rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.button
        className="w-full flex items-center justify-between p-8 text-left group"
        onClick={onToggle}
        whileHover={{ backgroundColor: 'rgba(250, 250, 250, 0.02)' }}
      >
        <div className="flex items-center gap-6">
          <span className="text-kinetic-accent font-mono text-sm">{service.number}</span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            <WaveText>{service.title}</WaveText>
          </h3>
        </div>
        <motion.span
          className="text-2xl text-kinetic-muted"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-8 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-kinetic-border">
                <div>
                  <p className="text-kinetic-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-kinetic-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col md:items-end justify-between">
                  <div className="text-right mb-6">
                    <p className="text-xs uppercase tracking-widest text-kinetic-muted mb-1">Starting at</p>
                    <p className="text-3xl font-bold text-kinetic-accent">{service.startingPrice}</p>
                  </div>
                  <Link href="/contact">
                    <motion.span
                      className="inline-flex items-center gap-2 px-6 py-3 bg-kinetic-text text-kinetic-bg font-semibold rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                      <span>→</span>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5']
  })

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 border-t border-kinetic-border">
      <div className="max-w-6xl mx-auto">
        <ScrollRevealText className="mb-16 text-center">
          <span className="section-label">How we work</span>
          <h2 className="section-title">
            <ScrambleText>Our Process</ScrambleText>
          </h2>
        </ScrollRevealText>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-kinetic-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-kinetic-accent to-purple-500"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.span
          className="w-12 h-12 flex items-center justify-center border border-kinetic-accent rounded-full text-kinetic-accent font-bold"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
        >
          {step.number}
        </motion.span>
        {index < processSteps.length - 1 && (
          <div className="hidden lg:block flex-1 h-px bg-kinetic-border" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-kinetic-muted text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>('01')

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
              Our Expertise
            </motion.div>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                WHAT WE
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <RotatingWords words={['CREATE', 'BUILD', 'DESIGN', 'CRAFT']} />
              </motion.span>
            </h1>

            <motion.p
              className="text-[clamp(1.1rem,2vw,1.4rem)] text-kinetic-muted max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              We transform static brands into living, breathing visual experiences.
            </motion.p>
          </motion.div>
        </section>

        {/* Services Accordion */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, i) => (
              <ServiceAccordion
                key={service.number}
                service={service}
                isOpen={openService === service.number}
                onToggle={() => setOpenService(openService === service.number ? null : service.number)}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Tools Marquee */}
        <section className="py-12 border-y border-kinetic-border" style={{ background: 'rgba(250, 250, 250, 0.02)' }}>
          <Marquee speed={30}>
            <span className="marquee-text">
              {tools.map(tool => `${tool} • `).join('')}
            </span>
          </Marquee>
          <Marquee speed={35} direction="right">
            <span className="marquee-text-outline">
              {[...tools].reverse().map(tool => `${tool} • `).join('')}
            </span>
          </Marquee>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollRevealText className="mb-16 text-center">
              <span className="section-label">Investment</span>
              <h2 className="section-title">
                <ScrambleText>Pricing Tiers</ScrambleText>
              </h2>
            </ScrollRevealText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <motion.div
                className="p-8 rounded-3xl border border-kinetic-border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ y: -8, borderColor: 'rgba(250, 250, 250, 0.2)' }}
              >
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-4xl font-extrabold text-kinetic-accent mb-4">$5K-10K</p>
                <p className="text-kinetic-muted text-sm mb-6">Perfect for single deliverables</p>
                <ul className="space-y-3 mb-8">
                  {['Logo animation', '3 assets', '2 revision rounds'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-kinetic-muted">
                      <span className="w-1.5 h-1.5 bg-kinetic-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.span
                    className="block text-center py-3 border border-kinetic-border rounded-full font-medium hover:bg-kinetic-text hover:text-kinetic-bg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Inquire
                  </motion.span>
                </Link>
              </motion.div>

              {/* Studio - Featured */}
              <motion.div
                className="p-8 rounded-3xl border-2 border-kinetic-accent relative"
                style={{ background: 'rgba(96, 165, 250, 0.05)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-kinetic-accent text-kinetic-bg text-xs font-bold rounded-full">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold mb-2">Studio</h3>
                <p className="text-4xl font-extrabold text-kinetic-accent mb-4">$15K-30K</p>
                <p className="text-kinetic-muted text-sm mb-6">Full motion system</p>
                <ul className="space-y-3 mb-8">
                  {['Complete system', '10+ assets', 'Motion guidelines', 'Source files'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-kinetic-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.span
                    className="block text-center py-3 bg-kinetic-text text-kinetic-bg rounded-full font-semibold"
                    whileHover={{ scale: 1.02, backgroundColor: '#60a5fa' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.span>
                </Link>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                className="p-8 rounded-3xl border border-kinetic-border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8, borderColor: 'rgba(250, 250, 250, 0.2)' }}
              >
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-4xl font-extrabold text-kinetic-accent mb-4">Custom</p>
                <p className="text-kinetic-muted text-sm mb-6">Dedicated partnership</p>
                <ul className="space-y-3 mb-8">
                  {['Dedicated team', 'Retainer model', 'Priority support', 'Custom scope'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-kinetic-muted">
                      <span className="w-1.5 h-1.5 bg-kinetic-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.span
                    className="block text-center py-3 border border-kinetic-border rounded-full font-medium hover:bg-kinetic-text hover:text-kinetic-bg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 text-center border-t border-kinetic-border" style={{ background: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.03))' }}>
          <ScrollRevealText>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8 max-w-3xl mx-auto">
              Ready to make your brand move?
            </h2>
          </ScrollRevealText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticText>
              <Link href="/contact">
                <motion.span
                  className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WaveText>Start a Project</WaveText>
                  <span>→</span>
                </motion.span>
              </Link>
            </MagneticText>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
