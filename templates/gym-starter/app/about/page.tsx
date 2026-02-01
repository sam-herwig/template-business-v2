'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  ImageGallery,
  TrialCTA,
  GYM,
  STATS,
  GYM_VALUES,
  FACILITIES,
  EQUIPMENT,
} from '../components'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from '../components/animations'

// ═══════════════════════════════════════════════════════════════
// About Page - Our Story & Facilities
// ═══════════════════════════════════════════════════════════════

function StatsBar() {
  const prefersReducedMotion = useReducedMotion()
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  return (
    <div className="stats-bar section-padding-sm">
      <motion.div
        className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {STATS.map((stat, i) => (
          <motion.div key={i} className="stat-item" variants={itemVariants}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function ValueCard({ value }: { value: typeof GYM_VALUES[number] }) {
  return (
    <div className="bg-dark-800 rounded-2xl p-8 text-center border border-dark-700 hover:border-primary-500/30 transition-colors">
      <div className="text-5xl mb-4">{value.icon}</div>
      <h3 className="font-display text-xl text-white tracking-wider mb-2">{value.title}</h3>
      <p className="text-gray-400">{value.description}</p>
    </div>
  )
}

function EquipmentSection() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {EQUIPMENT.map((category, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="bg-dark-800 rounded-xl p-6 border border-dark-700"
        >
          <h4 className="font-display text-lg text-primary-400 tracking-wider mb-4 uppercase">
            {category.name}
          </h4>
          <ul className="space-y-2">
            {category.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-gray-600">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Our Story"
          title={GYM.name}
          description="Denver's Premier Fitness Community Since 2015"
          backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=600&fit=crop&q=85"
        />

        <StatsBar />

        {/* Our Mission Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=750&fit=crop&q=85"
                  alt="Founders"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <span className="section-eyebrow">Mission</span>
                <h2 className="section-title mb-6">OUR STORY</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Iron Athletics was founded with a simple belief: fitness should be accessible, enjoyable, and transformative for everyone.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  What started as a small gym in downtown Denver has grown into a thriving community of over 10,000 members who push each other to be their best every single day.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We're not just a gym—we're a community dedicated to helping you become your strongest self, both physically and mentally.
                </p>
                <p className="text-white font-medium">— Jake & Maria, Founders</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Principles</span>
              <h2 className="section-title">OUR VALUES</h2>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {GYM_VALUES.map((value, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <ValueCard value={value} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Facilities Gallery Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Spaces</span>
              <h2 className="section-title">OUR FACILITIES</h2>
              <p className="section-description mx-auto">
                State-of-the-art spaces designed for every type of workout.
              </p>
            </motion.div>
            <ImageGallery facilities={FACILITIES} />
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Gear</span>
              <h2 className="section-title">WORLD-CLASS EQUIPMENT</h2>
              <p className="section-description mx-auto">
                We invest in the best equipment so you can train at your best.
              </p>
            </motion.div>
            <EquipmentSection />
          </div>
        </section>

        {/* Location & Hours Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <span className="section-eyebrow">Find Us</span>
                <h2 className="section-title mb-8">VISIT US</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Address</h3>
                    <p className="text-gray-400">
                      {GYM.address}<br />
                      {GYM.city}, {GYM.state} {GYM.zip}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Hours</h3>
                    <p className="text-gray-400">
                      Member Access: {GYM.hours.memberAccess}<br />
                      Staffed Hours: {GYM.hours.staffed}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Parking</h3>
                    <p className="text-gray-400">
                      Free lot parking available<br />
                      Street parking also available
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-dark-800 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center border border-dark-700"
              >
                {/* Map placeholder - replace with actual Google Maps embed */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-gray-400">
                    Interactive map placeholder<br />
                    <span className="text-gray-600 text-sm">Add Google Maps API key to enable</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TrialCTA />
      </main>
      <Footer />
    </>
  )
}
