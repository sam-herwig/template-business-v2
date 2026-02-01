'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Nav, Footer, MagneticButton } from '@/app/components'
import { PageHero } from '@/app/components/shared'
import type { TeamMemberFull, Value, Award, Stat, ClientLogo } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// ABOUT PAGE
// Agency story, values, team, clients, and awards
// ═══════════════════════════════════════════════════════════════

const VALUES: Value[] = [
  {
    number: '01',
    title: 'Bold Thinking',
    description: 'We push boundaries and challenge conventions. Safe is forgettable. We create work that demands attention.',
  },
  {
    number: '02',
    title: 'Human Centered',
    description: 'Every decision starts with people. We design for real humans with real needs, not imaginary personas.',
  },
  {
    number: '03',
    title: 'Craft Obsessed',
    description: 'Details matter. We sweat the small stuff because the small stuff adds up to great work.',
  },
]

const STATS: Stat[] = [
  { value: '150', suffix: '+', label: 'Projects Delivered' },
  { value: '12', suffix: '', label: 'Years in Business' },
  { value: '40', suffix: '+', label: 'Awards Won' },
  { value: '98', suffix: '%', label: 'Client Retention' },
]

const TEAM: TeamMemberFull[] = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Alex leads our creative vision with 15+ years of experience across branding, digital, and experiential design.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Jordan Kim',
    role: 'Design Lead',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Jordan brings a meticulous eye for detail and a passion for typography to every project.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sam Okonkwo',
    role: 'Strategy Director',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    bio: 'Sam translates business objectives into creative strategies that drive measurable results.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Maya Chen',
    role: 'Tech Lead',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Maya architects scalable solutions and ensures our digital products perform flawlessly.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Johnson',
    role: 'Senior Designer',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    bio: 'Marcus specializes in motion design and creating immersive digital experiences.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Elena keeps our projects on track and our clients informed every step of the way.',
    linkedin: 'https://linkedin.com',
  },
]

const CLIENTS: ClientLogo[] = [
  { name: 'Spotify', logo: '/logos/spotify.svg' },
  { name: 'Nike', logo: '/logos/nike.svg' },
  { name: 'Airbnb', logo: '/logos/airbnb.svg' },
  { name: 'Stripe', logo: '/logos/stripe.svg' },
  { name: 'Notion', logo: '/logos/notion.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
]

const AWARDS: Award[] = [
  { name: 'Site of the Day', organization: 'Awwwards', year: '2024', project: 'Spotify Wrapped' },
  { name: 'Site of the Day', organization: 'FWA', year: '2024', project: 'Fintech Redesign' },
  { name: 'Best in Show', organization: 'Webby Awards', year: '2023', project: 'Brand Campaign' },
  { name: 'Gold', organization: 'D&AD', year: '2023', project: 'Visual Identity' },
  { name: 'Site of the Month', organization: 'CSS Design Awards', year: '2023', project: 'Portfolio' },
  { name: 'Excellence Award', organization: 'Communication Arts', year: '2022', project: 'Brand System' },
]

export default function AboutPage() {
  const pageRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Hero image reveal
      gsap.from('.hero-image', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      })

      // Story section
      if (storyRef.current) {
        const split = new SplitText(storyRef.current, { type: 'words' })
        gsap.from(split.words, {
          y: 40,
          opacity: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        })
      }

      // Values
      gsap.from('.value-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        },
      })

      // Stats counter animation
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        },
      })

      // Team cards
      gsap.from('.team-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%',
        },
      })

      // Client logos
      gsap.from('.client-logo', {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.clients-grid',
          start: 'top 85%',
        },
      })

      // Awards
      gsap.from('.award-item', {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.awards-list',
          start: 'top 80%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      <Nav />
      <PageHero
        title="About Studio"
        subtitle="Award-winning studio crafting bold brands and unforgettable digital experiences."
      />

      {/* Hero Image */}
      <section className="bg-dark-950 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hero-image relative aspect-[21/9] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
              alt="Studio team at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
                Our Story
              </span>
              <h2
                ref={storyRef}
                className="font-display text-3xl md:text-4xl font-bold mb-6"
              >
                Founded in 2012 as a two-person operation in a Brooklyn loft.
              </h2>
              <div className="text-dark-300 text-lg space-y-4">
                <p>
                  Today, we're a team of 40+ strategists, designers, and developers working with brands across the globe. Our mission remains the same: create work that matters.
                </p>
                <p>
                  We believe great design is born from deep understanding. That's why we invest time in research, strategy, and collaboration before touching a single pixel. The result? Work that doesn't just look good—it works.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Values</h2>
          </div>
          <div className="values-grid grid md:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.number}
                className="value-card bg-dark-900 p-8 border border-dark-800"
              >
                <span className="text-primary-500 font-mono text-sm mb-4 block">
                  {value.number}
                </span>
                <h3 className="font-display text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-dark-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section bg-dark-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-primary-500">{stat.suffix}</span>
                </div>
                <div className="text-dark-400 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
              The People
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">The Team</h2>
          </div>
          <div className="team-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card group">
                <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-300" />
                  {/* Social links on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-dark-950/80 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-dark-950/80 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-dark-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-dark-950 py-16 md:py-24 border-t border-dark-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
              Trusted By
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Clients</h2>
          </div>
          <div className="clients-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="client-logo text-center text-2xl font-display font-bold text-dark-600 hover:text-white transition-colors cursor-default"
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-dark-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
              Recognition
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Awards & Honors
            </h2>
          </div>
          <div className="awards-list space-y-4">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="award-item flex items-center justify-between py-4 border-b border-dark-800"
              >
                <div>
                  <span className="font-display font-bold text-white">{award.name}</span>
                  <span className="text-dark-500 mx-2">—</span>
                  <span className="text-dark-400">{award.organization}</span>
                </div>
                <div className="text-right">
                  <span className="text-dark-500 text-sm">{award.project}</span>
                  <span className="text-dark-600 mx-2">•</span>
                  <span className="text-primary-500 font-mono text-sm">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Want to join the team?
          </h2>
          <p className="text-dark-300 text-xl mb-10 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for great work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton className="btn-primary text-sm uppercase tracking-wider">
              <Link href="/contact">View Open Positions</Link>
            </MagneticButton>
            <MagneticButton className="btn-outline text-sm uppercase tracking-wider">
              <Link href="/work">See Our Work</Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
