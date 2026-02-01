'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Code, Star, Film, Target, ChevronDown, Check } from 'lucide-react'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  PageHero, 
  BentoTile,
  SectionHeader,
  GlassButton, 
  colors, 
  useIsMobile,
  FloatingOrb
} from '@/components/shared'

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'From wireframes to pixel-perfect interfaces, we craft experiences users love.',
    features: ['User Research', 'Wireframing', 'Interface Design', 'Usability Testing', 'Design Systems'],
    color: colors.violet,
    span: 'wide' as const
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Development',
    description: 'Performant code. Modern stacks. Scalable solutions that grow with you.',
    features: ['React/Next.js', 'TypeScript', 'Headless CMS', 'API Integration', 'Performance'],
    color: colors.blue,
    span: 'normal' as const
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Branding',
    description: 'Memorable identities that resonate with your audience and stand the test of time.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Naming'],
    color: colors.emerald,
    span: 'normal' as const
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: 'Motion Design',
    description: 'Animation that tells stories and brings interfaces to life.',
    features: ['UI Animation', 'Video Production', '3D/WebGL', 'Lottie Animations', 'Micro-interactions'],
    color: colors.pink,
    span: 'normal' as const
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Strategy',
    description: 'Data-driven decision making to ensure your digital presence delivers results.',
    features: ['Market Research', 'User Analytics', 'Growth Strategy', 'Conversion Optimization', 'A/B Testing'],
    color: colors.amber,
    span: 'normal' as const
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and users. Through research and strategy sessions, we uncover the insights that will drive design decisions.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Armed with insights, we explore creative directions through wireframes, prototypes, and visual design. Every decision is intentional and user-focused.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We bring designs to life with clean, performant code. Our development process prioritizes scalability, accessibility, and maintainability.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Launch is just the beginning. We ensure smooth deployment, provide documentation, and offer ongoing support to help your product succeed.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$5K-15K',
    description: 'Perfect for small projects and MVPs',
    features: [
      '1-2 Page Website',
      'Basic Brand Elements',
      'Mobile Responsive',
      '2 Week Timeline',
      '2 Revision Rounds',
    ],
    featured: false,
    color: colors.violet,
  },
  {
    name: 'Growth',
    price: '$15K-50K',
    description: 'Ideal for growing businesses',
    features: [
      '5-10 Page Website',
      'Full Brand Identity',
      'CMS Integration',
      '4-6 Week Timeline',
      'Unlimited Revisions',
      'Design System',
      '30-Day Support',
    ],
    featured: true,
    color: colors.blue,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex, large-scale projects',
    features: [
      'Unlimited Pages',
      'Custom Solutions',
      'Dedicated Team',
      'Ongoing Partnership',
      'Priority Support',
      'Performance SLAs',
      'Strategic Consulting',
    ],
    featured: false,
    color: colors.emerald,
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A simple landing page might take 2-3 weeks, while a full brand and website project typically takes 8-12 weeks. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What\'s your design process like?',
    answer: 'We follow a collaborative, iterative process. After discovery and research, we move through wireframes, visual design, and prototyping. You\'ll be involved at every stage with opportunities for feedback and refinement.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups and understand the unique challenges of early-stage companies. We offer flexible engagement models and can help you prioritize features for MVP development.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, and various headless CMS platforms. We choose the tech stack that best fits your project\'s needs and your team\'s capabilities.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer various support packages from monthly retainers to ad-hoc assistance. We want to ensure your digital presence continues to perform long after launch.',
  },
]

function ServiceTile({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <BentoTile
      span={service.span}
      delay={index * 0.1}
      accentColor={service.color}
      className="min-h-[280px]"
    >
      <div className="h-full flex flex-col">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${service.color}20` }}
        >
          <div style={{ color: service.color }}>{service.icon}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-white/60 mb-6">{service.description}</p>
        
        <ul className="mt-auto space-y-2">
          {service.features.slice(0, 4).map(feature => (
            <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </BentoTile>
  )
}

function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ How We Work"
        title="Our Process"
        description="A proven approach to delivering exceptional results"
        center
      />

      <div className="relative">
        {/* Connector line */}
        {!isMobile && (
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-violet via-studio-blue to-studio-emerald opacity-20" />
        )}

        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-4'}`}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BentoTile
                accentColor={Object.values(colors)[i]}
                className="min-h-[200px] cursor-pointer"
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span 
                      className="text-3xl font-extrabold opacity-30"
                      style={{ color: Object.values(colors)[i] }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  
                  <AnimatePresence>
                    {(activeStep === i || !isMobile) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-white/60 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {isMobile && (
                    <ChevronDown 
                      className={`w-5 h-5 mt-auto mx-auto transition-transform ${activeStep === i ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </BentoTile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 relative overflow-hidden">
      <FloatingOrb color={colors.violet} size={200} className="top-0 left-[10%]" />
      <FloatingOrb color={colors.blue} size={150} delay={2} className="bottom-0 right-[10%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          tag="✦ Pricing"
          title="Investment Levels"
          description="Transparent pricing tailored to your project scope"
          center
        />

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BentoTile
                accentColor={tier.color}
                gradient={tier.featured}
                gradientColors={tier.featured ? [colors.violet, colors.blue] : undefined}
                className={`min-h-[400px] ${tier.featured ? 'ring-2 ring-studio-violet/50' : ''}`}
              >
                <div className="h-full flex flex-col">
                  {tier.featured && (
                    <span className="inline-block self-start px-3 py-1 rounded-full text-xs bg-gradient-to-r from-studio-violet to-studio-blue mb-4">
                      Most Popular
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-extrabold mb-2 gradient-text">{tier.price}</p>
                  <p className="text-sm text-white/60 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-studio-emerald shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <GlassButton 
                    primary={tier.featured}
                    href="/contact"
                    className="w-full justify-center"
                  >
                    {tier.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </GlassButton>
                </div>
              </BentoTile>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 md:px-8 py-24 max-w-4xl mx-auto">
      <SectionHeader
        tag="✦ FAQ"
        title="Common Questions"
        description="Everything you need to know about working with us"
        center
      />

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <BentoTile
              accentColor={Object.values(colors)[i % 5]}
              className="cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 shrink-0" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white/60 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BentoTile>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="px-4 md:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <BentoTile
          gradient
          gradientColors={[colors.violet, colors.blue, colors.emerald]}
          accentColor={colors.violet}
          className="min-h-[300px] p-8 md:p-12"
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight mb-4">
              Ready to start your project?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg">
              Let&apos;s discuss your goals and find the perfect approach for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlassButton primary href="/contact">Schedule a Call</GlassButton>
              <GlassButton href="/work">View Our Work</GlassButton>
            </div>
          </div>
        </BentoTile>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      
      <main id="main-content">
        <PageHero
          tag="✦ What We Do"
          title={<>Full-spectrum <span className="gradient-text">digital services</span></>}
          description="From strategy to execution, we provide everything you need to create exceptional digital experiences."
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassButton primary href="/contact">Start a Project</GlassButton>
          </motion.div>
        </PageHero>

        {/* Services Grid */}
        <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {services.map((service, i) => (
              <ServiceTile key={service.title} service={service} index={i} />
            ))}
          </div>
        </section>

        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  )
}
