'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  FAQAccordion,
  ComparisonTable,
  MEMBERSHIP,
  COMPARISON_FEATURES,
  ADDONS,
  MEMBERSHIP_FAQS,
} from '../components'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from '../components/animations'
import type { MembershipPlan, AddOn } from '../components/types'

// ═══════════════════════════════════════════════════════════════
// Memberships Page - Pricing & Plans
// ═══════════════════════════════════════════════════════════════

function PricingCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <div className="pricing-badge">Most Popular</div>}
      <h3 className="pricing-name">{plan.name}</h3>
      <div className="pricing-amount">
        <span className="pricing-price">${plan.price}</span>
        <span className="pricing-period">{plan.period}</span>
      </div>
      {plan.note && <p className="pricing-note">{plan.note}</p>}
      <ul className="pricing-features">
        {plan.features.map((f, j) => (
          <li key={j} className="pricing-feature">
            <span className="pricing-feature-check" aria-hidden="true">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={plan.featured ? 'pricing-cta-primary' : 'pricing-cta-secondary'}>
        {plan.featured ? 'Start Free Trial' : 'Get Started'}
      </button>
    </div>
  )
}

function AddOnCard({ addon }: { addon: AddOn }) {
  return (
    <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-3xl">{addon.icon}</span>
          <h3 className="font-display text-xl text-white tracking-wider mt-2">{addon.name}</h3>
        </div>
        <div className="text-right">
          <span className="font-display text-2xl text-white">+${addon.price}</span>
          <span className="text-gray-500 text-sm block">{addon.period}</span>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{addon.description}</p>
      <ul className="space-y-2 mb-5">
        {addon.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
            <span className="text-primary-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-widest bg-dark-700 text-white border border-dark-600 hover:bg-dark-600 transition-colors">
        Add to Plan
      </button>
    </div>
  )
}

export default function MembershipsPage() {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Pricing"
          title="MEMBERSHIP PLANS"
          description="Choose your path to fitness. All plans include a 7-day free trial. No contracts, cancel anytime."
        />

        {/* Pricing Cards Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-3 gap-6 lg:gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {MEMBERSHIP.map((plan, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <PricingCard plan={plan} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Details</span>
              <h2 className="section-title">COMPARE ALL FEATURES</h2>
            </motion.div>
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
              <ComparisonTable features={COMPARISON_FEATURES} />
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Enhance</span>
              <h2 className="section-title">ADD-ONS</h2>
              <p className="section-description mx-auto">
                Take your fitness to the next level with these premium additions.
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {ADDONS.map((addon) => (
                <motion.div key={addon.id} variants={itemVariants}>
                  <AddOnCard addon={addon} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Questions</span>
              <h2 className="section-title">FAQ</h2>
            </motion.div>
            <FAQAccordion faqs={MEMBERSHIP_FAQS} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section section-padding">
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
                READY TO START?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Try us free for 7 days. No credit card required. Full access to all classes and facilities.
              </p>
              <button className="btn-outline">
                Claim Your Free Trial
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
