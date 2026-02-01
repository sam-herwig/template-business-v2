import { Palette, Code, Smartphone, Rocket, TrendingUp, Sparkles } from 'lucide-react'

export interface Service {
  id: string
  icon: typeof Palette
  title: string
  tagline: string
  description: string
  deliverables: string[]
  accentColor: string
  startingPrice: string
}

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    icon: Palette,
    title: 'Brand Identity',
    tagline: 'Make competitors sweat',
    description: 'We craft visual identities that stick in minds and refuse to be forgotten. Strategy-first, always.',
    deliverables: [
      'Logo System',
      'Typography',
      'Color Palette',
      'Brand Guidelines',
      'Visual Language',
      'Asset Library',
    ],
    accentColor: '#FFE600',
    startingPrice: '$15,000',
  },
  {
    id: 'web-design',
    icon: Code,
    title: 'Web Design & Development',
    tagline: 'Websites that actually convert',
    description: 'Beautiful websites that work as hard as they look. Built for speed, accessibility, and results.',
    deliverables: [
      'UX Strategy',
      'UI Design',
      'Responsive Development',
      'CMS Integration',
      'Performance Optimization',
      'Analytics Setup',
    ],
    accentColor: '#FF5CAA',
    startingPrice: '$25,000',
  },
  {
    id: 'app-design',
    icon: Smartphone,
    title: 'App Design',
    tagline: 'Experiences worth the screen time',
    description: 'Mobile and web apps that users actually want to use. Human-centered design meets technical excellence.',
    deliverables: [
      'User Research',
      'UX/UI Design',
      'Prototyping',
      'Design System',
      'User Testing',
      'Developer Handoff',
    ],
    accentColor: '#3B82F6',
    startingPrice: '$30,000',
  },
  {
    id: 'development',
    icon: Rocket,
    title: 'Development',
    tagline: 'Code that ships and scales',
    description: 'We build fast, we build clean, we build things that work. Modern stack, no technical debt.',
    deliverables: [
      'Frontend Development',
      'Backend Systems',
      'API Integration',
      'Database Design',
      'DevOps Setup',
      'Ongoing Support',
    ],
    accentColor: '#22C55E',
    startingPrice: '$20,000',
  },
  {
    id: 'strategy',
    icon: TrendingUp,
    title: 'Strategy',
    tagline: 'Direction before decoration',
    description: 'Research and planning that makes everything else easier. We find the insight that unlocks growth.',
    deliverables: [
      'Market Research',
      'Competitive Analysis',
      'User Interviews',
      'Brand Strategy',
      'Content Strategy',
      'Go-to-Market Plan',
    ],
    accentColor: '#A855F7',
    startingPrice: '$10,000',
  },
  {
    id: 'motion-design',
    icon: Sparkles,
    title: 'Motion Design',
    tagline: 'Animation that tells stories',
    description: 'From microinteractions to full brand films. Motion that brings your brand to life.',
    deliverables: [
      'Animation System',
      'UI Microinteractions',
      'Explainer Videos',
      'Social Content',
      'Logo Animation',
      'Brand Films',
    ],
    accentColor: '#FF6B35',
    startingPrice: '$8,000',
  },
]

export const PROCESS_STEPS = [
  {
    number: '1',
    title: 'DISCOVER',
    duration: '1-2 weeks',
    description: 'We dig deep into your business, users, and market. Research isn\'t sexy, but it\'s what separates good work from great.',
  },
  {
    number: '2',
    title: 'DEFINE',
    duration: '2-3 weeks',
    description: 'Strategy, positioning, and creative direction. We align on exactly what we\'re building and why it matters.',
  },
  {
    number: '3',
    title: 'DESIGN',
    duration: '4-8 weeks',
    description: 'This is where the magic happens. Concepts, iterations, refinement until it\'s absolutely right.',
  },
  {
    number: '4',
    title: 'DELIVER',
    duration: '2-4 weeks',
    description: 'Production, development, and handoff. We don\'t just design pretty pictures — we ship real products.',
  },
]

export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$10K–25K',
    description: 'Perfect for focused projects',
    includes: [
      'Single service focus',
      'Defined deliverables',
      '4-8 week timeline',
      '2 revision rounds',
    ],
    color: '#FFE600',
  },
  {
    name: 'Growth',
    price: '$25K–75K',
    description: 'For brands ready to level up',
    includes: [
      'Multi-service packages',
      'Strategy included',
      '8-16 week timeline',
      'Unlimited revisions',
    ],
    color: '#FF5CAA',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$75K+',
    description: 'Full transformation programs',
    includes: [
      'Complete brand overhaul',
      'Platform development',
      'Ongoing partnership',
      'Dedicated team',
    ],
    color: '#3B82F6',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on scope, but most projects run 8-16 weeks from kickoff to delivery. We\'ll give you a detailed timeline during our initial conversations. Rush projects are possible for an additional fee.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups that have big ambitions and value design. We have flexible engagement models that can work with early-stage budgets while still delivering world-class work.',
  },
  {
    question: 'What\'s your revision policy?',
    answer: 'Our Starter packages include 2 rounds of revisions. Growth and Scale packages include unlimited revisions within scope. We\'re collaborative throughout, so major reworks are rare.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! Many clients continue working with us on retainer for ongoing design support, development updates, and new initiatives. We become an extension of your team.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We\'re not trying to be everything to everyone. We specialize in bold, memorable work for brands that want to stand out. No safe, committee-designed work. Just honest, impactful design.',
  },
  {
    question: 'How do we get started?',
    answer: 'Drop us a line through our contact form or email. We\'ll schedule a discovery call to learn about your project, then follow up with a proposal. No commitment until you\'re ready.',
  },
]
