'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav, Footer, PageHero, MarqueeStrip, Accordion, BrutalButton, BackToTop } from '@/components'
import { SERVICES, PROCESS_STEPS, PRICING_TIERS, FAQ_ITEMS } from '@/lib/services'

// ═══════════════════════════════════════════════════════════════
// SERVICE CARD (EXPANDED)
// ═══════════════════════════════════════════════════════════════
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = service.icon
  
  const isEven = index % 2 === 0
  
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className={`border-[4px] border-brutal-black dark:border-brutal-bg p-8 md:p-10 ${isEven ? 'md:ml-0 md:mr-16' : 'md:ml-16 md:mr-0'}`}
      style={{ 
        backgroundColor: service.accentColor,
        boxShadow: '8px 8px 0 #1a1a1a',
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-brutal-black flex items-center justify-center">
            <Icon className="w-8 h-8 text-brutal-bg stroke-[2.5]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          <div className="font-display font-bold text-sm uppercase tracking-wide text-brutal-black/50 mb-2">
            0{index + 1}
          </div>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brutal-black mb-2">
            {service.title}
          </h3>
          <p className="font-body text-lg text-brutal-black/80 italic mb-4">
            &ldquo;{service.tagline}&rdquo;
          </p>
          <p className="font-body text-brutal-black/80 leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* Deliverables */}
          <div className="mb-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wide text-brutal-black mb-3">
              Deliverables:
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {service.deliverables.map((item) => (
                <li key={item} className="font-body text-sm text-brutal-black/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brutal-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t-2 border-brutal-black/20">
            <div className="font-display font-bold text-brutal-black">
              Starting at {service.startingPrice}
            </div>
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 font-display font-bold text-brutal-black hover:underline"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ═══════════════════════════════════════════════════════════════
// PROCESS TIMELINE
// ═══════════════════════════════════════════════════════════════
function ProcessSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section 
      ref={ref}
      className="bg-brutal-black dark:bg-brutal-bg py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-bg dark:text-brutal-black mb-4">
            HOW WE WORK
          </h2>
          <p className="font-body text-brutal-bg/70 dark:text-brutal-black/70 max-w-xl mx-auto">
            A proven process that delivers results, every time.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Line connecting steps */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-brutal-bg/20 dark:bg-brutal-black/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 bg-brutal-yellow border-[4px] border-brutal-bg dark:border-brutal-black flex items-center justify-center font-display font-extrabold text-2xl text-brutal-black relative z-10"
                >
                  {step.number}
                </motion.div>
                
                <h3 className="font-display font-bold text-xl text-brutal-bg dark:text-brutal-black mb-2">
                  {step.title}
                </h3>
                <div className="font-body text-sm text-brutal-pink mb-4">
                  {step.duration}
                </div>
                <p className="font-body text-sm text-brutal-bg/70 dark:text-brutal-black/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// PRICING SECTION
// ═══════════════════════════════════════════════════════════════
function PricingSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section 
      ref={ref}
      className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-4">
            INVESTMENT LEVELS
          </h2>
          <p className="font-body text-brutal-black/70 dark:text-brutal-bg/70 max-w-xl mx-auto">
            Flexible pricing for projects of all sizes. Let&apos;s find what works for you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`border-[4px] border-brutal-black dark:border-brutal-bg p-8 relative ${tier.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ 
                backgroundColor: tier.color,
                boxShadow: '6px 6px 0 #1a1a1a',
              }}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brutal-black text-brutal-bg px-4 py-1 font-display font-bold text-sm uppercase">
                  Popular
                </div>
              )}
              
              <h3 className="font-display font-bold text-xl text-brutal-black mb-2">
                {tier.name}
              </h3>
              <div className="font-display font-extrabold text-3xl text-brutal-black mb-3">
                {tier.price}
              </div>
              <p className="font-body text-brutal-black/70 mb-6">
                {tier.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {tier.includes.map((item) => (
                  <li key={item} className="font-body text-sm text-brutal-black flex items-start gap-2">
                    <span className="text-brutal-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <BrutalButton 
                color="#1a1a1a" 
                shadowColor={tier.color}
                href="/contact"
              >
                Get Quote
              </BrutalButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// FAQ SECTION
// ═══════════════════════════════════════════════════════════════
function FAQSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section 
      ref={ref}
      className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-4">
            QUESTIONS? WE GOT ANSWERS.
          </h2>
        </motion.div>
        
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════
function ServicesCTA(): JSX.Element {
  return (
    <section className="bg-brutal-blue border-y-[4px] border-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-brutal-bg mb-6"
        >
          READY TO <br />
          <span className="inline-block bg-brutal-yellow px-2 border-[4px] border-brutal-bg shadow-brutal rotate-1 text-brutal-black">
            GET STARTED?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-brutal-bg/80 mb-10"
        >
          Tell us about your project. We&apos;ll get back to you within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <BrutalButton color="#FFFEF5" shadowColor="#FFE600" size="large" href="/contact">
            Start a Conversation →
          </BrutalButton>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function ServicesPage(): JSX.Element {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          badge={{ text: 'What We Do', emoji: '⚡', color: '#3B82F6' }}
          title="SERVICES THAT"
          highlight={{ text: 'SLAP', color: '#FFE600', rotate: 1 }}
          subtitle="Full-stack creative. From napkin sketch to shipped product. No fluff."
          shapes={[
            { color: '#FF5CAA', size: 100, top: '20%', left: '5%', rotate: -15 },
            { color: '#22C55E', size: 70, top: '55%', right: '8%', rotate: 20 },
          ]}
        />
        
        {/* Services Grid */}
        <section className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </section>
        
        <MarqueeStrip 
          text="BRAND • WEB • APP • MOTION • STRATEGY • DEVELOPMENT" 
          bgColor="#FF5CAA" 
          textColor="#1a1a1a"
        />
        
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ServicesCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
