'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Heart, Zap, Users, Target, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

const stats = [
  { value: '10K+', label: 'Teams worldwide' },
  { value: '50M+', label: 'Tasks completed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2020', label: 'Founded' },
]

const values = [
  {
    icon: Zap,
    title: 'Move with urgency',
    description: 'Speed is a feature. We ship weekly, iterate constantly, and never let perfection be the enemy of progress.',
  },
  {
    icon: Heart,
    title: 'Obsess over customers',
    description: 'Every feature, every fix, every decision starts with one question: does this make our customers more successful?',
  },
  {
    icon: Users,
    title: 'Win as a team',
    description: 'The best ideas come from collaboration. We debate openly, decide quickly, and commit fully.',
  },
  {
    icon: Target,
    title: 'Raise the bar',
    description: 'Good enough never is. We set ambitious goals, measure relentlessly, and celebrate outcomes—not effort.',
  },
]

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co-founder', gradient: 'from-pink-500 to-rose-500' },
  { name: 'Sarah Chen', role: 'Chief Product Officer', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Marcus Johnson', role: 'Chief Technology Officer', gradient: 'from-purple-500 to-violet-500' },
  { name: 'Emily Park', role: 'VP of Engineering', gradient: 'from-green-500 to-emerald-500' },
  { name: 'David Kim', role: 'VP of Design', gradient: 'from-orange-500 to-amber-500' },
  { name: 'Lisa Wang', role: 'VP of Marketing', gradient: 'from-indigo-500 to-blue-500' },
  { name: 'James Wilson', role: 'VP of Sales', gradient: 'from-red-500 to-pink-500' },
  { name: 'Ana Martinez', role: 'VP of Customer Success', gradient: 'from-teal-500 to-cyan-500' },
]

function StatsBar() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 30,
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
    <section ref={ref} className="py-12 px-4 md:px-16 border-y border-minimal-border dark:border-minimal-dark-border bg-white dark:bg-minimal-dark-card">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="block font-display text-4xl md:text-5xl font-bold gradient-text">
              {stat.value}
            </span>
            <span className="text-minimal-muted dark:text-minimal-dark-muted text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function StorySection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.story-image', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      })

      gsap.from('.story-content', {
        x: 50,
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

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="story-image aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-8xl">◆</div>
        </div>

        <div className="story-content">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-6">Our Story</h2>
          <div className="space-y-4 text-minimal-muted dark:text-minimal-dark-muted leading-relaxed">
            <p>
              Nexus started in 2020 when our founders noticed something broken: teams were drowning in tools 
              but starving for clarity. Slack, Jira, Notion, email—information was everywhere and nowhere.
            </p>
            <p>
              We built the product we wished existed. A single platform that connects everything, 
              automates the mundane, and gives teams superpowers to focus on work that actually matters.
            </p>
            <p>
              Today, over 10,000 teams trust Nexus to run their operations—from 5-person startups to 
              Fortune 500 enterprises. We&apos;ve processed 50+ million tasks and saved our customers 
              an estimated 2 million hours of busywork. And we&apos;re just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.value-card', {
        y: 40,
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
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 bg-white dark:bg-minimal-dark-card border-y border-minimal-border dark:border-minimal-dark-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-4">What drives us</h2>
        <p className="text-center text-minimal-muted dark:text-minimal-dark-muted mb-12 max-w-2xl mx-auto">
          These aren&apos;t values we hang on a wall. They&apos;re how we make decisions every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <article key={value.title} className="value-card p-8 rounded-2xl border border-minimal-border dark:border-minimal-dark-border bg-minimal-bg dark:bg-minimal-dark-bg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#7928ca]" />
              </div>
              <h3 className="font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-minimal-muted dark:text-minimal-dark-muted leading-relaxed">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
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
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-16 max-w-6xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-center mb-4">Leadership team</h2>
      <p className="text-center text-minimal-muted dark:text-minimal-dark-muted mb-12 max-w-2xl mx-auto">
        Operators who&apos;ve scaled companies from zero to billions, united by a mission to make teams unstoppable.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <article key={member.name} className="team-card text-center">
            <div className={`w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br ${member.gradient}`}>
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-minimal-muted dark:text-minimal-dark-muted text-sm">{member.role}</p>
            <div className="flex justify-center gap-3 mt-3">
              <a href="#" className="text-minimal-muted dark:text-minimal-dark-muted hover:text-[#0070f3] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-minimal-muted dark:text-minimal-dark-muted hover:text-[#0070f3] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CareersCTA() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.careers-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
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
    <section ref={ref} id="careers" className="py-16 md:py-24 px-4 md:px-16">
      <div className="careers-content max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-minimal-border dark:border-minimal-dark-border">
        <h2 className="font-display text-3xl font-bold mb-4">Join a team that moves fast</h2>
        <p className="text-minimal-muted dark:text-minimal-dark-muted mb-8 max-w-2xl mx-auto">
          We&apos;re hiring exceptional engineers, designers, and operators who want to build something 
          people love. Remote-first, competitive equity, and the chance to shape a product used by thousands.
        </p>
        <a href="/careers" className="btn-primary inline-flex">
          View Open Roles <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <Nav />
      </header>
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          tag="About"
          title="We're on a mission to eliminate busywork"
          description="So teams can focus on the work that actually moves the needle."
        />

        <StatsBar />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <CareersCTA />
      </main>
      <Footer />
    </>
  )
}
