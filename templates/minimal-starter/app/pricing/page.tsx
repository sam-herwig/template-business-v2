'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Check, Minus, ChevronDown } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

const tiers = [
  {
    name: 'Starter',
    description: 'For small teams getting organized.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Up to 5 team members',
      '10 workflows per month',
      'Core integrations',
      'Community support',
      '7-day history',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need power.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      'Unlimited team members',
      'Unlimited workflows',
      'All 200+ integrations',
      'Priority support (24hr)',
      'Unlimited history',
      'Advanced analytics',
      'Custom branding',
    ],
    cta: 'Start 14-Day Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations that demand the best.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    features: [
      'Everything in Pro',
      'SSO/SAML authentication',
      'Dedicated success manager',
      'Custom SLA (99.99%)',
      'Advanced security controls',
      'Audit logs & compliance',
      'On-premise option',
      'Custom contracts',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
]

const comparisonFeatures = [
  { name: 'Team members', hobby: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Workflows', hobby: '10/mo', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Integrations', hobby: 'Core (20+)', pro: 'All (200+)', enterprise: 'All + Custom' },
  { name: 'History retention', hobby: '7 days', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'API access', hobby: false, pro: true, enterprise: true },
  { name: 'Analytics', hobby: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
  { name: 'Custom branding', hobby: false, pro: true, enterprise: true },
  { name: 'Priority support', hobby: false, pro: true, enterprise: true },
  { name: 'SLA guarantee', hobby: false, pro: '99.9%', enterprise: '99.99%' },
  { name: 'SSO/SAML', hobby: false, pro: false, enterprise: true },
]

const faqs = [
  {
    question: 'How does the 14-day trial work?',
    answer: 'Start with full access to Pro features—no credit card required. At the end of 14 days, choose a plan or continue on our free Starter tier. Your data is always safe.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Absolutely. Upgrade instantly and get prorated billing. Downgrade anytime—changes take effect at your next billing date. No penalties, no hassle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'All major credit cards (Visa, Mastercard, Amex), ACH/wire for annual plans, and PayPal. Enterprise customers can pay via invoice with NET-30 terms.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is non-negotiable. We\'re SOC 2 Type II certified, use end-to-end encryption, and never sell your data. Enterprise plans include additional compliance features.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'Yes! Qualified startups get 50% off their first year. Nonprofits receive 25% off all plans. Contact sales to apply.',
  },
]

function PricingToggle({ yearly, setYearly }: { yearly: boolean; setYearly: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`text-sm ${!yearly ? 'font-semibold text-minimal-text dark:text-minimal-dark-text' : 'text-minimal-muted dark:text-minimal-dark-muted'}`}>
        Monthly
      </span>
      <button
        onClick={() => setYearly(!yearly)}
        className="relative w-14 h-7 rounded-full bg-minimal-border dark:bg-minimal-dark-border transition-colors"
        role="switch"
        aria-checked={yearly}
        aria-label="Toggle yearly billing"
      >
        <span className={`absolute top-1 w-5 h-5 rounded-full bg-minimal-text dark:bg-minimal-dark-text transition-transform ${yearly ? 'left-8' : 'left-1'}`} />
      </button>
      <span className={`text-sm ${yearly ? 'font-semibold text-minimal-text dark:text-minimal-dark-text' : 'text-minimal-muted dark:text-minimal-dark-muted'}`}>
        Yearly <span className="text-green-500 font-semibold">Save 17%</span>
      </span>
    </div>
  )
}

function PricingCards({ yearly }: { yearly: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 md:px-16 py-12">
      {tiers.map((tier) => {
        const price = yearly ? tier.yearlyPrice : tier.monthlyPrice
        return (
          <article
            key={tier.name}
            className={`pricing-card relative rounded-2xl p-8 border transition-all ${
              tier.popular
                ? 'border-[#0070f3] shadow-lg shadow-blue-500/10'
                : 'border-minimal-border dark:border-minimal-dark-border hover:border-minimal-muted dark:hover:border-minimal-dark-muted'
            } bg-white dark:bg-minimal-dark-card`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0070f3] text-white">
                Most Popular
              </span>
            )}

            <h3 className="font-display text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-minimal-muted dark:text-minimal-dark-muted text-sm mb-6">{tier.description}</p>

            <div className="mb-6">
              {typeof price === 'number' ? (
                <>
                  <span className="font-display text-4xl font-bold">${price}</span>
                  <span className="text-minimal-muted dark:text-minimal-dark-muted">/user/mo</span>
                </>
              ) : (
                <span className="font-display text-4xl font-bold">Custom</span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={tier.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
              {tier.cta}
            </button>
          </article>
        )
      })}
    </div>
  )
}

function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.comparison-table', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-minimal-muted dark:text-minimal-dark-muted mx-auto" />
      )
    }
    return value
  }

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 max-w-5xl mx-auto">
      <h2 className="font-display text-2xl font-bold text-center mb-12">Compare all features</h2>
      <div className="comparison-table overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-minimal-border dark:border-minimal-dark-border">
              <th className="py-4 px-4 font-semibold">Feature</th>
              <th className="py-4 px-4 text-center font-semibold">Starter</th>
              <th className="py-4 px-4 text-center font-semibold">Pro</th>
              <th className="py-4 px-4 text-center font-semibold">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row) => (
              <tr key={row.name} className="border-b border-minimal-border dark:border-minimal-dark-border">
                <td className="py-4 px-4">{row.name}</td>
                <td className="py-4 px-4 text-center">{renderValue(row.hobby)}</td>
                <td className="py-4 px-4 text-center">{renderValue(row.pro)}</td>
                <td className="py-4 px-4 text-center">{renderValue(row.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 max-w-3xl mx-auto">
      <h2 className="font-display text-2xl font-bold text-center mb-12">Common questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="faq-item border border-minimal-border dark:border-minimal-dark-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-minimal-bg dark:hover:bg-minimal-dark-bg transition-colors"
              aria-expanded={openIndex === i}
            >
              {faq.question}
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 text-minimal-muted dark:text-minimal-dark-muted">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false)

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <Nav />
      </header>
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          tag="Pricing"
          title="Plans that scale with you"
          description="Start free. Upgrade when you're ready. No hidden fees, no surprises."
        >
          <PricingToggle yearly={yearly} setYearly={setYearly} />
        </PageHeader>

        <PricingCards yearly={yearly} />
        <ComparisonTable />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
