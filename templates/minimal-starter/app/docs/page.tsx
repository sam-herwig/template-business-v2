'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Search, Rocket, BookOpen, Code, ArrowRight, ExternalLink } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

const quickStartCards = [
  {
    icon: Rocket,
    title: 'Quick Start',
    description: 'Get your first workflow running in under 5 minutes with our interactive setup.',
    href: '/docs/quickstart',
  },
  {
    icon: BookOpen,
    title: 'Core Concepts',
    description: 'Understand workflows, triggers, actions, and how they work together.',
    href: '/docs/concepts',
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Full REST and GraphQL API documentation with code examples in every language.',
    href: '/docs/api',
  },
]

const topicCategories = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Create your account', href: '/docs/signup' },
      { title: 'Your first workflow', href: '/docs/first-workflow' },
      { title: 'Invite your team', href: '/docs/team-setup' },
      { title: 'Connect integrations', href: '/docs/integrations-setup' },
    ],
  },
  {
    title: 'Workflows',
    links: [
      { title: 'Triggers explained', href: '/docs/triggers' },
      { title: 'Actions & steps', href: '/docs/actions' },
      { title: 'Conditions & filters', href: '/docs/conditions' },
      { title: 'Error handling', href: '/docs/error-handling' },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { title: 'Slack', href: '/docs/integrations/slack' },
      { title: 'Salesforce', href: '/docs/integrations/salesforce' },
      { title: 'GitHub', href: '/docs/integrations/github' },
      { title: 'All integrations', href: '/docs/integrations' },
    ],
  },
  {
    title: 'Analytics',
    links: [
      { title: 'Dashboard overview', href: '/docs/analytics' },
      { title: 'Custom reports', href: '/docs/reports' },
      { title: 'Metrics & KPIs', href: '/docs/metrics' },
      { title: 'Exporting data', href: '/docs/export' },
    ],
  },
  {
    title: 'API & Developers',
    links: [
      { title: 'Authentication', href: '/docs/api/auth' },
      { title: 'REST endpoints', href: '/docs/api/rest' },
      { title: 'GraphQL schema', href: '/docs/api/graphql' },
      { title: 'Webhooks', href: '/docs/api/webhooks' },
    ],
  },
  {
    title: 'Security & Compliance',
    links: [
      { title: 'SSO/SAML setup', href: '/docs/sso' },
      { title: 'Audit logs', href: '/docs/audit-logs' },
      { title: 'Data encryption', href: '/docs/encryption' },
      { title: 'Compliance (SOC 2)', href: '/docs/compliance' },
    ],
  },
]

const integrations = [
  { name: 'Slack', icon: '💬' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'HubSpot', icon: '🟠' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Jira', icon: '🔵' },
  { name: 'Notion', icon: '📝' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Airtable', icon: '📊' },
]

function DocsSearch() {
  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      <input
        type="search"
        placeholder="Search documentation..."
        className="w-full px-6 py-4 pl-12 rounded-xl border border-minimal-border dark:border-minimal-dark-border bg-white dark:bg-minimal-dark-card focus:border-[#0070f3] focus:ring-2 focus:ring-blue-500/20 transition-all text-lg"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-minimal-muted dark:text-minimal-dark-muted" />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-minimal-border dark:bg-minimal-dark-border text-xs font-mono text-minimal-muted dark:text-minimal-dark-muted">
        ⌘K
      </kbd>
    </div>
  )
}

function QuickStartCards() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.quick-start-card', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-16 px-4 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStartCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="quick-start-card group p-6 rounded-2xl border border-minimal-border dark:border-minimal-dark-border bg-white dark:bg-minimal-dark-card hover:border-[#0070f3] hover:shadow-lg hover:shadow-blue-500/5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
              <card.icon className="w-6 h-6 text-[#0070f3]" />
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-[#0070f3] transition-colors">
              {card.title}
            </h3>
            <p className="text-minimal-muted dark:text-minimal-dark-muted text-sm mb-4">{card.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#0070f3]">
              Get started <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function TopicGrid() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.topic-category', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
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
    <section ref={ref} className="py-16 px-4 md:px-16 max-w-6xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-8">Browse by topic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topicCategories.map((category) => (
          <div key={category.title} className="topic-category">
            <h3 className="font-semibold mb-4 text-minimal-muted dark:text-minimal-dark-muted uppercase text-xs tracking-wider">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#0070f3] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-minimal-border dark:bg-minimal-dark-border" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function IntegrationsSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.integration-badge', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 bg-white dark:bg-minimal-dark-card border-y border-minimal-border dark:border-minimal-dark-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-2xl font-bold mb-4">Integration guides</h2>
        <p className="text-minimal-muted dark:text-minimal-dark-muted mb-8">
          Step-by-step setup guides for all 200+ integrations
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((int) => (
            <a
              key={int.name}
              href={`/docs/integrations/${int.name.toLowerCase()}`}
              className="integration-badge flex items-center gap-2 px-4 py-3 rounded-xl border border-minimal-border dark:border-minimal-dark-border bg-minimal-bg dark:bg-minimal-dark-bg hover:border-[#0070f3] transition-colors"
            >
              <span className="text-xl">{int.icon}</span>
              <span className="font-medium">{int.name}</span>
            </a>
          ))}
          <a
            href="/docs/integrations"
            className="integration-badge flex items-center gap-2 px-4 py-3 rounded-xl border border-minimal-border dark:border-minimal-dark-border bg-minimal-bg dark:bg-minimal-dark-bg hover:border-[#0070f3] transition-colors text-[#0070f3]"
          >
            <span>View all 200+</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function HelpSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl border border-minimal-border dark:border-minimal-dark-border bg-white dark:bg-minimal-dark-card">
          <h3 className="font-bold text-xl mb-3">Still stuck?</h3>
          <p className="text-minimal-muted dark:text-minimal-dark-muted mb-6">
            Our support team responds in under 4 hours on business days. We&apos;re here to help.
          </p>
          <a href="/contact" className="btn-secondary inline-flex">
            Contact Support
          </a>
        </div>
        <div className="p-8 rounded-2xl border border-minimal-border dark:border-minimal-dark-border bg-white dark:bg-minimal-dark-card">
          <h3 className="font-bold text-xl mb-3">Join the community</h3>
          <p className="text-minimal-muted dark:text-minimal-dark-muted mb-6">
            Connect with 5,000+ Nexus users. Share workflows, get tips, and learn from the best.
          </p>
          <a href="https://community.nexus.io" className="btn-secondary inline-flex" target="_blank" rel="noopener noreferrer">
            Join Community <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function DocsPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <Nav />
      </header>
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          tag="Documentation"
          title="Documentation"
          description="Everything you need to master Nexus—from first workflow to advanced automation."
        >
          <DocsSearch />
        </PageHeader>

        <QuickStartCards />
        <TopicGrid />
        <IntegrationsSection />
        <HelpSection />
      </main>
      <Footer />
    </>
  )
}
