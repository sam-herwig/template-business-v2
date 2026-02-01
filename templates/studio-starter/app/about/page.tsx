'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Dribbble, ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Nav, Footer, ScrollProgress } from '@/components/layout'
import { 
  SkipLink, 
  PageHero, 
  BentoTile,
  SectionHeader,
  AnimatedCounter,
  GlassButton, 
  colors, 
  useIsMobile,
  FloatingOrb
} from '@/components/shared'

const values = [
  {
    icon: '✦',
    title: 'Craft',
    description: 'Obsession with every detail. We believe excellence is found in the smallest interactions.',
    color: colors.violet,
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Together we\'re better. We work as partners, not vendors, to achieve shared goals.',
    color: colors.blue,
  },
  {
    icon: '🎯',
    title: 'Impact',
    description: 'Meaningful outcomes matter. Beautiful design that doesn\'t convert isn\'t beautiful.',
    color: colors.emerald,
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'Never stop learning. We push ourselves to explore new techniques and ideas.',
    color: colors.amber,
  },
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Creative Director',
    bio: 'Former design lead at Stripe. 12+ years crafting digital experiences.',
    image: '👩‍💼',
    socials: { twitter: '#', linkedin: '#', dribbble: '#' },
    color: colors.violet,
  },
  {
    name: 'Marcus Williams',
    role: 'Head of Engineering',
    bio: 'Full-stack architect. Previously at Vercel building the future of the web.',
    image: '👨‍💻',
    socials: { twitter: '#', linkedin: '#' },
    color: colors.blue,
  },
  {
    name: 'Aiko Tanaka',
    role: 'Design Director',
    bio: 'Brand strategist with an eye for what makes identities unforgettable.',
    image: '👩‍🎨',
    socials: { twitter: '#', dribbble: '#' },
    color: colors.pink,
  },
  {
    name: 'Jordan Lee',
    role: 'Motion Designer',
    bio: 'Animator and storyteller. Bringing static designs to vivid life.',
    image: '🧑‍🎤',
    socials: { twitter: '#', dribbble: '#' },
    color: colors.amber,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Designer',
    bio: 'User advocate with a passion for accessibility and inclusive design.',
    image: '👩‍🔬',
    socials: { linkedin: '#', dribbble: '#' },
    color: colors.emerald,
  },
  {
    name: 'David Kim',
    role: 'Frontend Developer',
    bio: 'React specialist. Performance obsessed. CSS whisperer.',
    image: '👨‍🚀',
    socials: { twitter: '#', linkedin: '#' },
    color: colors.violet,
  },
  {
    name: 'Priya Sharma',
    role: 'UX Researcher',
    bio: 'Uncovering insights that drive meaningful design decisions.',
    image: '👩‍🏫',
    socials: { linkedin: '#' },
    color: colors.blue,
  },
  {
    name: 'Alex Foster',
    role: 'Project Manager',
    bio: 'Keeping complex projects on track with clear communication.',
    image: '🧑‍💼',
    socials: { linkedin: '#' },
    color: colors.pink,
  },
]

const timeline = [
  { year: '2018', title: 'Founded', description: 'Started in a small SF apartment with big dreams' },
  { year: '2019', title: '25th Project', description: 'Milestone project with first major tech client' },
  { year: '2020', title: 'Remote First', description: 'Embraced distributed work, expanded the team globally' },
  { year: '2021', title: '100+ Projects', description: 'Crossed 100 successful project deliveries' },
  { year: '2022', title: 'Team of 12', description: 'Grew into a full-service creative studio' },
  { year: '2023', title: 'Award Season', description: '5 industry awards for design excellence' },
  { year: '2024', title: 'Global Reach', description: 'Clients across 20+ countries, 150+ projects delivered' },
]

const careers = [
  { title: 'Senior Product Designer', location: 'Remote', type: 'Full-time' },
  { title: 'Frontend Engineer', location: 'SF / Remote', type: 'Full-time' },
  { title: 'Motion Designer', location: 'Remote', type: 'Contract' },
]

const cultureImages = [
  { emoji: '🎯', label: 'Team planning session' },
  { emoji: '🎨', label: 'Design workshop' },
  { emoji: '🎉', label: 'Team celebration' },
  { emoji: '☕', label: 'Coffee & creativity' },
  { emoji: '🏔️', label: 'Team retreat' },
  { emoji: '💻', label: 'Hack day' },
]

function StorySection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <BentoTile
          accentColor={colors.violet}
          className="min-h-[300px]"
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-xs text-white/50 uppercase tracking-widest mb-4">Our Story</h3>
            <p className="text-lg leading-relaxed text-white/80 mb-4">
              Studio Prism was founded in 2018 with a simple belief: that great design can 
              change the world. What started as two designers in a San Francisco apartment has grown 
              into a global creative studio serving clients worldwide.
            </p>
            <p className="text-white/60 leading-relaxed">
              Today, we&apos;re a team of designers, developers, and dreamers united by a passion for 
              craft and an obsession with detail. Every project is an opportunity to push boundaries 
              and create something extraordinary.
            </p>
          </div>
        </BentoTile>

        <div className="space-y-4">
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
            <BentoTile accentColor={colors.blue} gradient gradientColors={[colors.violet, colors.blue]}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-extrabold gradient-text mb-1">
                  <AnimatedCounter value={150} suffix="+" />
                </p>
                <p className="text-xs text-white/60 uppercase tracking-widest">Projects</p>
              </div>
            </BentoTile>
            <BentoTile accentColor={colors.emerald} gradient gradientColors={[colors.emerald, colors.blue]}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-extrabold gradient-text mb-1">
                  <AnimatedCounter value={12} />
                </p>
                <p className="text-xs text-white/60 uppercase tracking-widest">Team Members</p>
              </div>
            </BentoTile>
          </div>
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
            <BentoTile accentColor={colors.amber} gradient gradientColors={[colors.amber, colors.pink]}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-extrabold gradient-text mb-1">
                  <AnimatedCounter value={20} suffix="+" />
                </p>
                <p className="text-xs text-white/60 uppercase tracking-widest">Countries</p>
              </div>
            </BentoTile>
            <BentoTile accentColor={colors.pink} gradient gradientColors={[colors.pink, colors.violet]}>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="text-4xl font-extrabold gradient-text mb-1">
                  <AnimatedCounter value={6} />
                </p>
                <p className="text-xs text-white/60 uppercase tracking-widest">Years</p>
              </div>
            </BentoTile>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ Our Values"
        title="What drives us"
        description="The principles that guide everything we do"
        center
      />

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <BentoTile
              accentColor={value.color}
              className="min-h-[200px]"
            >
              <div className="h-full flex flex-col">
                <span className="text-3xl mb-4">{value.icon}</span>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
              </div>
            </BentoTile>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ Our Journey"
        title="Timeline"
        description="The milestones that shaped who we are"
        center
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-studio-violet via-studio-blue to-studio-emerald opacity-30" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-studio-violet -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-8 md:text-right md:w-1/2' : 'md:pl-8 md:w-1/2 md:ml-auto'}`}>
                <BentoTile
                  accentColor={Object.values(colors)[i % 5]}
                  className="min-h-[100px]"
                >
                  <div>
                    <span 
                      className="text-2xl font-extrabold opacity-50"
                      style={{ color: Object.values(colors)[i % 5] }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </BentoTile>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ The Team"
        title="Meet the humans behind the pixels"
        description="Designers, developers, and dreamers united by a love of craft"
        center
      />

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <BentoTile
              accentColor={member.color}
              className="min-h-[250px] group"
              hoverContent={
                <div className="text-center">
                  <p className="text-sm text-white/80 mb-4">{member.bio}</p>
                  <div className="flex gap-3 justify-center">
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="hover:text-studio-violet transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="hover:text-studio-blue transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a href={member.socials.dribbble} className="hover:text-studio-pink transition-colors">
                        <Dribbble className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              }
            >
              <div className="h-full flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4"
                  style={{ background: `${member.color}20` }}
                >
                  {member.image}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-white/60">{member.role}</p>
              </div>
            </BentoTile>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CultureSection() {
  const isMobile = useIsMobile()

  return (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeader
        tag="✦ Studio Life"
        title="Our Culture"
        description="A glimpse into life at Studio Prism"
        center
      />

      <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {cultureImages.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <BentoTile
              accentColor={Object.values(colors)[i % 5]}
              className={`min-h-[180px] ${i === 0 || i === 5 ? 'md:col-span-1' : ''}`}
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <span className="text-5xl mb-4">{item.emoji}</span>
                <p className="text-sm text-white/60">{item.label}</p>
              </div>
            </BentoTile>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CareersSection() {
  return (
    <section className="px-4 md:px-8 py-24 relative overflow-hidden">
      <FloatingOrb color={colors.violet} size={200} className="top-0 right-[10%]" />
      <FloatingOrb color={colors.emerald} size={150} delay={2} className="bottom-0 left-[20%]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          tag="✦ Careers"
          title="Join the team"
          description="We're always looking for talented individuals who share our passion"
          center
        />

        <div className="space-y-4 mb-8">
          {careers.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BentoTile
                accentColor={Object.values(colors)[i]}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 text-sm text-white/60">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="text-sm text-white/60">{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </BentoTile>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <GlassButton href="#">View All Openings</GlassButton>
        </div>
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
              Want to work together?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg">
              We&apos;re always excited to meet new people and explore potential collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlassButton primary href="/contact">Get in Touch</GlassButton>
              <GlassButton href="/work">See Our Work</GlassButton>
            </div>
          </div>
        </BentoTile>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      
      <main id="main-content">
        <PageHero
          tag="✦ About Us"
          title={<>We&apos;re <span className="gradient-text">Studio Prism</span></>}
          description="A collective of designers, developers, and dreamers united by the belief that great design can change the world."
        />

        <StorySection />
        <ValuesSection />
        <TimelineSection />
        <TeamSection />
        <CultureSection />
        <CareersSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  )
}
