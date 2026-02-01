export interface WorkProject {
  slug: string
  title: string
  category: string[]
  year: string
  thumbnail: string
  heroImage: string
  accentColor: string
  featured?: boolean
  client: string
  duration: string
  description: string
  challenge: {
    text: string
    goals: string[]
  }
  approach: {
    step: string
    title: string
    description: string
  }[]
  results: {
    metrics: { value: string; label: string }[]
    testimonial: {
      quote: string
      author: string
      role: string
    }
  }
  gallery: string[]
}

export const PROJECTS: WorkProject[] = [
  {
    slug: 'crypto-chaos',
    title: 'CRYPTO CHAOS',
    category: ['Branding', 'Web'],
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/crypto/800/600',
    heroImage: 'https://picsum.photos/seed/crypto-hero/1920/1080',
    accentColor: '#A855F7',
    featured: true,
    client: 'CryptoVault Inc.',
    duration: '12 weeks',
    description: 'A complete brand overhaul for a leading crypto exchange platform.',
    challenge: {
      text: 'CryptoVault came to us with a dated brand that wasn\'t connecting with their Gen Z audience. Their platform felt sterile and corporate in a space that demands personality.',
      goals: [
        'Modernize brand identity for Gen Z appeal',
        'Create a distinctive visual language',
        'Redesign web platform for better UX',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'RESEARCH',
        description: 'Deep dive into crypto culture, competitor analysis, and user interviews to understand the space.',
      },
      {
        step: '02',
        title: 'CONCEPT',
        description: 'Developed a bold, irreverent brand direction that breaks away from typical fintech aesthetics.',
      },
      {
        step: '03',
        title: 'BUILD',
        description: 'Crafted a complete visual system and rebuilt the platform with the new design language.',
      },
    ],
    results: {
      metrics: [
        { value: '+340%', label: 'Brand Awareness' },
        { value: '+89%', label: 'User Signups' },
        { value: '2.1M', label: 'Launch Impressions' },
      ],
      testimonial: {
        quote: 'SMASH completely transformed how people see us. We went from boring to iconic overnight.',
        author: 'Alex Rivera',
        role: 'CEO, CryptoVault',
      },
    },
    gallery: [
      'https://picsum.photos/seed/crypto1/1200/800',
      'https://picsum.photos/seed/crypto2/600/800',
      'https://picsum.photos/seed/crypto3/600/600',
      'https://picsum.photos/seed/crypto4/600/600',
      'https://picsum.photos/seed/crypto5/600/800',
    ],
  },
  {
    slug: 'neon-nights',
    title: 'NEON NIGHTS',
    category: ['App', 'Motion'],
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/neon/800/600',
    heroImage: 'https://picsum.photos/seed/neon-hero/1920/1080',
    accentColor: '#FF5CAA',
    featured: false,
    client: 'NightOwl Entertainment',
    duration: '16 weeks',
    description: 'A nightlife discovery app with immersive animations and bold design.',
    challenge: {
      text: 'NightOwl wanted an app that captured the energy of nightlife - something that felt alive and exciting, not just another boring listing app.',
      goals: [
        'Create immersive, animated experience',
        'Stand out in crowded app marketplace',
        'Drive user engagement and retention',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'DISCOVER',
        description: 'Researched nightlife culture, user behavior, and motion design trends.',
      },
      {
        step: '02',
        title: 'DESIGN',
        description: 'Created a dark, neon-infused visual language with microinteractions throughout.',
      },
      {
        step: '03',
        title: 'ANIMATE',
        description: 'Built custom motion system that brings every screen to life.',
      },
    ],
    results: {
      metrics: [
        { value: '500K+', label: 'Downloads' },
        { value: '4.8★', label: 'App Store Rating' },
        { value: '+120%', label: 'Session Duration' },
      ],
      testimonial: {
        quote: 'People literally say the app feels like a party. That\'s exactly what we wanted.',
        author: 'Jordan Lee',
        role: 'Founder, NightOwl',
      },
    },
    gallery: [
      'https://picsum.photos/seed/neon1/1200/800',
      'https://picsum.photos/seed/neon2/600/800',
      'https://picsum.photos/seed/neon3/600/600',
      'https://picsum.photos/seed/neon4/600/600',
      'https://picsum.photos/seed/neon5/600/800',
    ],
  },
  {
    slug: 'organic-origins',
    title: 'ORGANIC ORIGINS',
    category: ['Branding', 'Strategy'],
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/organic/800/600',
    heroImage: 'https://picsum.photos/seed/organic-hero/1920/1080',
    accentColor: '#22C55E',
    featured: false,
    client: 'Origins Farm Co.',
    duration: '10 weeks',
    description: 'A fresh brand identity for a sustainable farm-to-table startup.',
    challenge: {
      text: 'Origins Farm needed to differentiate in the crowded organic food space while staying true to their authentic, no-nonsense farming roots.',
      goals: [
        'Establish authentic brand voice',
        'Create scalable visual system',
        'Design packaging that pops on shelves',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'IMMERSE',
        description: 'Spent time on the farm understanding their story, values, and what makes them unique.',
      },
      {
        step: '02',
        title: 'DISTILL',
        description: 'Developed a brand strategy centered on radical transparency and bold simplicity.',
      },
      {
        step: '03',
        title: 'CREATE',
        description: 'Built a visual identity that feels both premium and approachably honest.',
      },
    ],
    results: {
      metrics: [
        { value: '+200%', label: 'Retail Distribution' },
        { value: '45%', label: 'Brand Recognition' },
        { value: '$2.4M', label: 'Series A Raised' },
      ],
      testimonial: {
        quote: 'Our brand now tells our story better than we ever could. Sales speak for themselves.',
        author: 'Maria Chen',
        role: 'Co-Founder, Origins',
      },
    },
    gallery: [
      'https://picsum.photos/seed/organic1/1200/800',
      'https://picsum.photos/seed/organic2/600/800',
      'https://picsum.photos/seed/organic3/600/600',
      'https://picsum.photos/seed/organic4/600/600',
      'https://picsum.photos/seed/organic5/600/800',
    ],
  },
  {
    slug: 'retro-rewind',
    title: 'RETRO REWIND',
    category: ['Web', 'Motion'],
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/retro/800/600',
    heroImage: 'https://picsum.photos/seed/retro-hero/1920/1080',
    accentColor: '#FF6B35',
    featured: false,
    client: 'Vinyl Revival Records',
    duration: '8 weeks',
    description: 'An immersive e-commerce experience for a vintage record store.',
    challenge: {
      text: 'Vinyl Revival wanted their online store to capture the magic of browsing through dusty record crates - that serendipitous discovery feeling.',
      goals: [
        'Create immersive browsing experience',
        'Increase average order value',
        'Build community around vinyl culture',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'EXPLORE',
        description: 'Dove deep into vinyl culture, record store experiences, and collector psychology.',
      },
      {
        step: '02',
        title: 'PROTOTYPE',
        description: 'Built interactive prototypes testing novel navigation and discovery patterns.',
      },
      {
        step: '03',
        title: 'SHIP',
        description: 'Launched a buttery-smooth Shopify experience with custom 3D elements.',
      },
    ],
    results: {
      metrics: [
        { value: '+85%', label: 'Conversion Rate' },
        { value: '+$45', label: 'Avg. Order Value' },
        { value: '12min', label: 'Avg. Session Time' },
      ],
      testimonial: {
        quote: 'Our customers spend more time exploring than any other record site. That\'s gold.',
        author: 'Dave Morrison',
        role: 'Owner, Vinyl Revival',
      },
    },
    gallery: [
      'https://picsum.photos/seed/retro1/1200/800',
      'https://picsum.photos/seed/retro2/600/800',
      'https://picsum.photos/seed/retro3/600/600',
      'https://picsum.photos/seed/retro4/600/600',
      'https://picsum.photos/seed/retro5/600/800',
    ],
  },
  {
    slug: 'fitness-fusion',
    title: 'FITNESS FUSION',
    category: ['App', 'Branding'],
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/fitness/800/600',
    heroImage: 'https://picsum.photos/seed/fitness-hero/1920/1080',
    accentColor: '#3B82F6',
    featured: false,
    client: 'FusionFit',
    duration: '14 weeks',
    description: 'A gamified fitness app that makes working out addictive.',
    challenge: {
      text: 'FusionFit needed to compete with established players by offering something truly different - making fitness feel like play, not work.',
      goals: [
        'Gamify fitness without being cheesy',
        'Build habit-forming mechanics',
        'Create shareable social features',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'STUDY',
        description: 'Analyzed game mechanics, habit loops, and what makes apps addictive.',
      },
      {
        step: '02',
        title: 'DESIGN',
        description: 'Created a reward system and visual language that motivates without patronizing.',
      },
      {
        step: '03',
        title: 'ITERATE',
        description: 'Tested with real users, refined based on data, and shipped perfection.',
      },
    ],
    results: {
      metrics: [
        { value: '78%', label: '30-Day Retention' },
        { value: '1.2M', label: 'Active Users' },
        { value: '#3', label: 'Health App Store' },
      ],
      testimonial: {
        quote: 'Users are literally competing to work out more. We turned fitness into a game.',
        author: 'Sam Wright',
        role: 'CPO, FusionFit',
      },
    },
    gallery: [
      'https://picsum.photos/seed/fitness1/1200/800',
      'https://picsum.photos/seed/fitness2/600/800',
      'https://picsum.photos/seed/fitness3/600/600',
      'https://picsum.photos/seed/fitness4/600/600',
      'https://picsum.photos/seed/fitness5/600/800',
    ],
  },
  {
    slug: 'chef-collective',
    title: 'CHEF COLLECTIVE',
    category: ['Web', 'Branding', 'Strategy'],
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/chef/800/600',
    heroImage: 'https://picsum.photos/seed/chef-hero/1920/1080',
    accentColor: '#FFE600',
    featured: true,
    client: 'The Chef Collective',
    duration: '18 weeks',
    description: 'A platform connecting private chefs with food lovers for unique dining experiences.',
    challenge: {
      text: 'The Chef Collective needed to position themselves as the premium option in a market full of generic food delivery and booking platforms.',
      goals: [
        'Establish luxury positioning',
        'Create seamless booking experience',
        'Build chef and diner community',
      ],
    },
    approach: [
      {
        step: '01',
        title: 'POSITION',
        description: 'Developed a luxury brand strategy that attracts both top chefs and discerning diners.',
      },
      {
        step: '02',
        title: 'DESIGN',
        description: 'Created an elegant visual identity and intuitive booking platform.',
      },
      {
        step: '03',
        title: 'LAUNCH',
        description: 'Orchestrated a high-impact launch with chef partnerships and influencer events.',
      },
    ],
    results: {
      metrics: [
        { value: '500+', label: 'Chef Partners' },
        { value: '$450', label: 'Avg. Booking Value' },
        { value: '98%', label: 'Satisfaction Rate' },
      ],
      testimonial: {
        quote: 'SMASH helped us become the Michelin of private dining experiences.',
        author: 'Isabella Torres',
        role: 'CEO, Chef Collective',
      },
    },
    gallery: [
      'https://picsum.photos/seed/chef1/1200/800',
      'https://picsum.photos/seed/chef2/600/800',
      'https://picsum.photos/seed/chef3/600/600',
      'https://picsum.photos/seed/chef4/600/600',
      'https://picsum.photos/seed/chef5/600/800',
    ],
  },
]

export const CATEGORIES = ['All', 'Branding', 'Web', 'App', 'Motion', 'Strategy'] as const
export type Category = typeof CATEGORIES[number]

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getProjectsByCategory(category: Category): WorkProject[] {
  if (category === 'All') return PROJECTS
  return PROJECTS.filter(p => p.category.includes(category))
}

export function getAdjacentProjects(slug: string): { prev: WorkProject | null; next: WorkProject | null } {
  const index = PROJECTS.findIndex(p => p.slug === slug)
  return {
    prev: index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1],
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0],
  }
}
