'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { 
  AnimatedSplitText,
  RotatingWords, 
  ScrollRevealText,
  ScrambleText,
  WaveText,
  WordByWordReveal,
  MagneticText
} from '@/components/motion'
import { team, values, awards } from '@/lib/data'

function TeamMember({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <MagneticText>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Hover overlay with social links */}
          <motion.div
            className="absolute inset-0 bg-kinetic-bg/80 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="flex gap-4">
              {member.social.map((link, i) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kinetic-muted hover:text-kinetic-accent transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </MagneticText>
      <h3 className="text-xl font-bold tracking-tight mb-1">
        <ScrambleText>{member.name}</ScrambleText>
      </h3>
      <p className="text-kinetic-accent text-sm mb-2">{member.role}</p>
      <p className="text-kinetic-muted text-sm">{member.bio}</p>
    </motion.div>
  )
}

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  return (
    <motion.div
      className="p-8 rounded-2xl border border-kinetic-border group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, borderColor: 'rgba(96, 165, 250, 0.3)' }}
    >
      <motion.span
        className="text-4xl font-extrabold text-kinetic-accent/30 block mb-4"
        whileHover={{ scale: 1.1, color: 'rgba(96, 165, 250, 0.6)' }}
      >
        {value.number}
      </motion.span>
      <h3 className="text-xl font-bold tracking-tight mb-3">
        <WaveText>{value.title}</WaveText>
      </h3>
      <p className="text-kinetic-muted text-sm leading-relaxed">{value.description}</p>
    </motion.div>
  )
}

function AwardRow({ award, index }: { award: typeof awards[0]; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-between py-6 border-b border-kinetic-border last:border-0"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center gap-6">
        <span className="text-kinetic-accent font-bold uppercase tracking-widest text-sm w-32">
          {award.org}
        </span>
        <span className="text-lg font-medium">{award.title}</span>
      </div>
      <span className="text-kinetic-muted">{award.year}</span>
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <>
      <header>
        <Nav />
      </header>
      
      <main id="main-content">
        {/* Split Hero */}
        <section ref={heroRef} className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-24">
          {/* Image Side */}
          <motion.div 
            className="relative h-[50vh] lg:h-auto overflow-hidden"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Kinetic studio workspace"
              fill
              className="object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-kinetic-bg lg:hidden" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0"
            style={{ y: textY }}
          >
            <motion.p
              className="text-kinetic-accent uppercase tracking-widest text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              About Us
            </motion.p>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                WE ARE
              </motion.span>
              <motion.span
                className="block gradient-text"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                KINETIC_
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-kinetic-muted leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              A motion design studio obsessed with making typography{' '}
              <RotatingWords words={['move', 'feel', 'dance', 'breathe']} />
            </motion.p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-32 px-4 md:px-8" style={{ background: 'rgba(250, 250, 250, 0.02)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-relaxed">
              <WordByWordReveal>
                Founded in 2014, we believed in one thing: Typography shouldn&apos;t just be read.
              </WordByWordReveal>
            </p>
            <motion.p
              className="text-[clamp(2rem,5vw,4rem)] font-extrabold mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              It should be{' '}
              <span className="gradient-text">FELT.</span>
            </motion.p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollRevealText className="mb-16">
              <span className="section-label">What we believe</span>
              <h2 className="section-title">
                <ScrambleText>Our Values</ScrambleText>
              </h2>
            </ScrollRevealText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <ValueCard key={value.number} value={value} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 md:px-8 border-t border-kinetic-border">
          <div className="max-w-6xl mx-auto">
            <ScrollRevealText className="mb-16">
              <span className="section-label">The people</span>
              <h2 className="section-title">
                <ScrambleText>Our Team</ScrambleText>
              </h2>
            </ScrollRevealText>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <TeamMember key={member.name} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24 px-4 md:px-8 border-t border-kinetic-border">
          <div className="max-w-4xl mx-auto">
            <ScrollRevealText className="mb-12">
              <span className="section-label">Achievements</span>
              <h2 className="section-title">
                <ScrambleText>Recognition</ScrambleText>
              </h2>
            </ScrollRevealText>

            <div className="border-t border-kinetic-border">
              {awards.map((award, i) => (
                <AwardRow key={`${award.org}-${award.year}`} award={award} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-4 md:px-8 border-t border-kinetic-border" style={{ background: 'rgba(96, 165, 250, 0.02)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years of craft' },
              { value: '150+', label: 'Projects delivered' },
              { value: '40+', label: 'Global clients' },
              { value: '∞', label: 'Keyframes' }
            ].map((stat, i) => (
              <ScrollRevealText key={stat.label} direction={i % 2 === 0 ? 'up' : 'down'}>
                <div className="text-center">
                  <motion.span 
                    className="block text-[clamp(3rem,6vw,5rem)] font-extrabold stat-gradient"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="block text-sm text-kinetic-muted mt-2">{stat.label}</span>
                </div>
              </ScrollRevealText>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 text-center border-t border-kinetic-border">
          <ScrollRevealText>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8 max-w-3xl mx-auto">
              <AnimatedSplitText type="words" stagger={0.08}>
                Want to join our team or work with us?
              </AnimatedSplitText>
            </h2>
          </ScrollRevealText>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact">
              <motion.span
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ scale: 1.05, backgroundColor: '#60a5fa' }}
                whileTap={{ scale: 0.95 }}
              >
                <WaveText>Start a Project</WaveText>
              </motion.span>
            </Link>
            <a href="mailto:careers@kinetic.design">
              <motion.span
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Careers
              </motion.span>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
