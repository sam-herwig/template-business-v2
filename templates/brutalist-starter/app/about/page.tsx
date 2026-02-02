'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Twitter, Linkedin, Dribbble } from 'lucide-react'
import { Nav, Footer, PageHero, MarqueeStrip, BrutalButton, BackToTop } from '@/components'
import { TEAM, VALUES, CLIENTS, AWARDS } from '@/lib/team'

// ═══════════════════════════════════════════════════════════════
// STORY SECTION
// ═══════════════════════════════════════════════════════════════
function StorySection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            className="relative aspect-[4/5] border-[4px] border-brutal-black dark:border-brutal-bg overflow-hidden"
            style={{ boxShadow: '12px 12px 0 #FF5CAA' }}
          >
            <Image
              src="https://picsum.photos/seed/team-story/800/1000"
              alt="SMASH team at work"
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-6">
              OUR STORY
            </h2>
            <div className="space-y-4 font-body text-brutal-black/80 dark:text-brutal-bg/80 leading-relaxed">
              <p>
                Started in a garage in 2016 with nothing but a MacBook and too much coffee. 
                Now we&apos;re Denver&apos;s most sought-after creative team.
              </p>
              <p>
                We got tired of agencies that talked big but delivered boring. So we built 
                SMASH — a place where bold ideas actually ship, where clients become friends, 
                and where we never, ever play it safe.
              </p>
              <p>
                Eight years later, we&apos;ve worked with startups, Fortune 500s, and everyone 
                in between. But our mission hasn&apos;t changed: make work that matters, 
                have fun doing it, and never settle for &ldquo;good enough.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// VALUES SECTION
// ═══════════════════════════════════════════════════════════════
function ValuesSection(): JSX.Element {
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-bg dark:text-brutal-black">
            WHAT WE STAND FOR
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="border-[3px] border-brutal-bg dark:border-brutal-black p-6"
              style={{ 
                backgroundColor: value.color,
                boxShadow: '6px 6px 0 #FFFEF5',
              }}
            >
              <h3 className="font-display font-extrabold text-xl text-brutal-black mb-3">
                {value.title}
              </h3>
              <p className="font-body text-brutal-black/80">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// TEAM SECTION
// ═══════════════════════════════════════════════════════════════
function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }): JSX.Element {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      {/* Photo */}
      <motion.div
        className="relative aspect-[4/5] border-[4px] border-brutal-black dark:border-brutal-bg overflow-hidden mb-4"
        style={{ 
          boxShadow: '6px 6px 0 #1a1a1a',
          transform: `rotate(${member.rotate}deg)`,
        }}
        animate={{ 
          rotate: hovered ? 0 : member.rotate,
          y: hovered ? -8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
        
        {/* Social overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-brutal-black/80 flex items-center justify-center gap-4"
        >
          {member.social?.twitter && (
            <a 
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brutal-bg flex items-center justify-center hover:bg-brutal-pink transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {member.social?.linkedin && (
            <a 
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brutal-bg flex items-center justify-center hover:bg-brutal-pink transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.social?.dribbble && (
            <a 
              href={member.social.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-brutal-bg flex items-center justify-center hover:bg-brutal-pink transition-colors"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </motion.div>
      
      {/* Info */}
      <h3 className="font-display font-bold text-xl text-brutal-black dark:text-brutal-bg">
        {member.name}
      </h3>
      <p className="font-body text-brutal-black/70 dark:text-brutal-bg/70 mb-2">
        {member.role}
      </p>
      <p className="font-body text-sm text-brutal-pink">
        {member.funFactEmoji} {member.funFact}
      </p>
    </motion.div>
  )
}

function TeamSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brutal-black dark:text-brutal-bg mb-4">
            THE CREW
          </h2>
          <p className="font-body text-brutal-black/70 dark:text-brutal-bg/70">
            A merry band of designers, developers, and strategists.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// CLIENTS & AWARDS
// ═══════════════════════════════════════════════════════════════
function ClientsSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section ref={ref} className="bg-brutal-bg dark:bg-brutal-black py-16 md:py-24 px-4 md:px-8 border-t-[4px] border-brutal-black dark:border-brutal-bg">
      <div className="max-w-5xl mx-auto">
        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-xl uppercase tracking-wide text-brutal-black/50 dark:text-brutal-bg/50 mb-8">
            Trusted by the Bold
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 1 }}
                className="h-12 w-32 relative grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Divider */}
        <div className="border-t-2 border-brutal-black/20 dark:border-brutal-bg/20 my-12" />
        
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-xl uppercase tracking-wide text-brutal-black/50 dark:text-brutal-bg/50 mb-8">
            Awards & Recognition
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-extrabold text-2xl text-brutal-black dark:text-brutal-bg flex items-center gap-2">
                  <span>{award.emoji}</span>
                  <span>{award.name}</span>
                  {award.count > 1 && (
                    <span className="text-brutal-pink">×{award.count}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// JOIN US SECTION
// ═══════════════════════════════════════════════════════════════
function JoinSection(): JSX.Element {
  return (
    <section 
      id="careers"
      className="bg-brutal-purple border-y-[4px] border-brutal-black py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-brutal-bg mb-6"
        >
          WANT TO JOIN <br />
          <span className="inline-block bg-brutal-yellow px-2 border-[4px] border-brutal-bg shadow-brutal -rotate-1 text-brutal-black">
            THE CHAOS?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-brutal-bg/80 mb-10"
        >
          We&apos;re always looking for talented folks who aren&apos;t afraid to push boundaries. 
          If that sounds like you, let&apos;s chat.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <BrutalButton color="#FFFEF5" shadowColor="#FFE600" size="large" href="/contact">
            View Open Roles →
          </BrutalButton>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function AboutPage(): JSX.Element {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          badge={{ text: 'Meet the Team', emoji: '👋', color: '#FF6B35' }}
          title="WE'RE"
          highlight={{ text: 'SMASH', color: '#3B82F6', rotate: -1 }}
          subtitle="A merry band of designers, developers, and strategists who live for bold work."
          shapes={[
            { color: '#FFE600', size: 90, top: '25%', left: '8%', rotate: 20 },
            { color: '#A855F7', size: 70, top: '60%', right: '10%', rotate: -15 },
          ]}
        />
        
        <StorySection />
        <ValuesSection />
        <MarqueeStrip 
          text="NO BS • BOLD ONLY • SHIP IT • HAVE FUN" 
          bgColor="#FFE600" 
          textColor="#1a1a1a"
        />
        <TeamSection />
        <ClientsSection />
        <JoinSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
