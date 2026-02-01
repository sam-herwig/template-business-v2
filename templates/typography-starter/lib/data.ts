// ═══════════════════════════════════════════════════════════════
// PROJECT DATA
// ═══════════════════════════════════════════════════════════════
export interface Project {
  slug: string
  title: string
  category: string
  year: string
  image: string
  featured?: boolean
  wide?: boolean
  client: string
  role: string
  description: string
  videoUrl?: string
  credits: { role: string; name: string }[]
  deliverables: string[]
  gallery: { type: 'image' | 'video'; src: string; alt?: string }[]
  quote?: { text: string; author: string }
}

export const projects: Project[] = [
  {
    slug: 'nike-motion',
    title: 'Nike Motion',
    category: 'Brand Animation',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    featured: true,
    client: 'Nike',
    role: 'Motion Lead',
    description: 'Nike approached us to create a living type system for their new campaign. Words needed to feel athletic, fast, powerful—like sport itself. We developed a comprehensive motion language that transforms static typography into dynamic expressions of movement and energy.',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    credits: [
      { role: 'Creative Director', name: 'Jane Doe' },
      { role: 'Motion Lead', name: 'John Smith' },
      { role: 'Design', name: 'Sarah Chen' },
      { role: 'Sound Design', name: 'Mike Williams' }
    ],
    deliverables: ['Brand Motion System', '6 Hero Animations', 'Social Templates', 'Motion Guidelines'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&q=80', alt: 'Nike type system frame 1' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80', alt: 'Nike type system frame 2' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80', alt: 'Nike type system frame 3' },
    ],
    quote: { text: "We didn't just animate type. We made it breathe.", author: 'Creative Director' }
  },
  {
    slug: 'spotify-wrapped',
    title: 'Spotify Wrapped',
    category: 'Type System',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
    featured: true,
    client: 'Spotify',
    role: 'Type Design Lead',
    description: 'For Spotify Wrapped 2024, we created a bold typographic system that celebrates each user\'s unique listening journey. The type moves, pulses, and transforms in rhythm with the data, making statistics feel personal and alive.',
    videoUrl: 'https://player.vimeo.com/video/824804225',
    credits: [
      { role: 'Creative Director', name: 'Alex Rivera' },
      { role: 'Type Design', name: 'Emma Watson' },
      { role: 'Motion Design', name: 'Chris Park' },
      { role: 'Development', name: 'Sam Johnson' }
    ],
    deliverables: ['Custom Type Family', 'Animation System', 'Interactive Templates', 'Brand Guidelines'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=1200&q=80', alt: 'Spotify Wrapped typography' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Spotify Wrapped animation' },
    ],
    quote: { text: 'Your year, your music, your story—told through type.', author: 'Type Design Lead' }
  },
  {
    slug: 'apple-events',
    title: 'Apple Events',
    category: 'Title Sequence',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    client: 'Apple',
    role: 'Title Sequence Director',
    description: 'Apple\'s keynote events demanded typography that embodied their philosophy of simplicity and innovation. We crafted title sequences where each letter is precisely choreographed, emerging from darkness with purposeful restraint.',
    credits: [
      { role: 'Director', name: 'Maria Santos' },
      { role: 'Lead Animator', name: 'David Kim' },
      { role: 'Typography', name: 'Lisa Chen' }
    ],
    deliverables: ['Main Title Sequence', 'Segment Transitions', 'Lower Thirds System'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1200&q=80', alt: 'Apple Events title frame' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1518395285289-9e80eec1f36c?w=800&q=80', alt: 'Apple Events typography' },
    ]
  },
  {
    slug: 'tesla-ui',
    title: 'Tesla UI',
    category: 'Kinetic Interface',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    client: 'Tesla',
    role: 'Motion UI Lead',
    description: 'For Tesla\'s next-generation interface, we developed a kinetic type system that responds to vehicle state and driver attention. Typography scales, shifts, and animates based on context—urgent when needed, calm when driving.',
    credits: [
      { role: 'UI Director', name: 'James Moore' },
      { role: 'Motion Lead', name: 'Anna Berg' },
      { role: 'Prototyping', name: 'Tom Wilson' }
    ],
    deliverables: ['Kinetic Type System', 'UI Motion Library', 'Prototype Files'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80', alt: 'Tesla UI interface' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80', alt: 'Tesla dashboard typography' },
    ]
  },
  {
    slug: 'google-io',
    title: 'Google I/O 2024',
    category: 'Event Typography',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80',
    wide: true,
    client: 'Google',
    role: 'Event Graphics Lead',
    description: 'Google I/O 2024 required a typographic system that could flex across keynotes, breakout sessions, and environmental graphics. We created a playful yet technical motion language that celebrates the intersection of creativity and code.',
    credits: [
      { role: 'Creative Lead', name: 'Rachel Green' },
      { role: 'Motion Design', name: 'Kevin Cho' },
      { role: 'Environmental', name: 'Maya Patel' }
    ],
    deliverables: ['Keynote Graphics', 'Session Templates', 'Environmental Type', 'Digital Signage'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80', alt: 'Google I/O typography' },
    ]
  },
  {
    slug: 'netflix-titles',
    title: 'Netflix Originals',
    category: 'Title Sequences',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
    client: 'Netflix',
    role: 'Title Designer',
    description: 'We crafted bespoke title sequences for three Netflix original series, each with its own typographic personality. From noir drama to sci-fi thriller, every letter was designed to set the tone before a single word is spoken.',
    credits: [
      { role: 'Title Designer', name: 'Oscar Wilde' },
      { role: 'Animation', name: 'Nina Foster' },
      { role: 'Sound', name: 'Ben Harrison' }
    ],
    deliverables: ['Main Titles', 'Episode Cards', 'End Credits'],
    gallery: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80', alt: 'Netflix title sequence' },
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  return projects[(currentIndex + 1) % projects.length]
}

// ═══════════════════════════════════════════════════════════════
// SERVICES DATA
// ═══════════════════════════════════════════════════════════════
export interface Service {
  number: string
  title: string
  description: string
  features: string[]
  startingPrice: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Kinetic Branding',
    description: 'Transform your static logo into a living brand expression. We create motion systems that capture your brand\'s essence in every frame, from logo animations to dynamic type systems.',
    features: ['Logo Animation', 'Dynamic Type Systems', 'Brand Motion Guides', 'Social Templates'],
    startingPrice: '$8,000'
  },
  {
    number: '02',
    title: 'Motion Systems',
    description: 'Comprehensive animation guidelines that bring consistency and life to every touchpoint. We build motion languages that scale from social media to stadium screens.',
    features: ['Motion Guidelines', 'Animation Libraries', 'Transition Systems', 'Interaction Patterns'],
    startingPrice: '$15,000'
  },
  {
    number: '03',
    title: 'Title Sequences',
    description: 'Cinematic opening titles that set the tone before a single word is spoken. From film to streaming, we craft title sequences that become part of the story.',
    features: ['Main Titles', 'Episode Cards', 'End Credits', 'Lower Thirds'],
    startingPrice: '$20,000'
  },
  {
    number: '04',
    title: 'Interactive Type',
    description: 'Typography that responds, morphs, and creates memorable digital moments. We design interactive type experiences for web, apps, and installations.',
    features: ['Web Typography', 'App Interfaces', 'Installations', 'Prototypes'],
    startingPrice: '$12,000'
  }
]

export const processSteps = [
  { number: '01', title: 'Discover', description: 'We start with your story—understanding your brand, audience, and objectives.' },
  { number: '02', title: 'Design', description: 'Concepts take shape through mood boards, styleframes, and type explorations.' },
  { number: '03', title: 'Animate', description: 'Frame by frame, we bring your typography to life with purpose and precision.' },
  { number: '04', title: 'Deliver', description: 'Final assets, comprehensive guidelines, and ongoing support.' }
]

export const tools = [
  'After Effects', 'Cinema 4D', 'Figma', 'Blender', 
  'Rive', 'Lottie', 'Three.js', 'Framer Motion',
  'Principle', 'Cavalry', 'Houdini', 'TouchDesigner'
]

// ═══════════════════════════════════════════════════════════════
// TEAM DATA
// ═══════════════════════════════════════════════════════════════
export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: { platform: string; url: string }[]
}

export const team: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Former Pentagram, 15 years in motion design',
    social: [
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ]
  },
  {
    name: 'John Smith',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Award-winning title designer, D&AD winner',
    social: [
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'Dribbble', url: 'https://dribbble.com' }
    ]
  },
  {
    name: 'Sarah Chen',
    role: 'Motion Lead',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    bio: 'Specialist in kinetic typography and brand motion',
    social: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ]
  },
  {
    name: 'Mike Williams',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Typography obsessive, former Google Design',
    social: [
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'Dribbble', url: 'https://dribbble.com' }
    ]
  }
]

export const values = [
  { number: '01', title: 'Craft Obsessed', description: 'Every frame matters. Every easing curve tells a story. We sweat the details others miss.' },
  { number: '02', title: 'Motion First', description: 'If it doesn\'t move, it doesn\'t move us. We believe in the power of kinetic expression.' },
  { number: '03', title: 'Client Partners', description: 'We don\'t do clients. We do collaborators. The best work comes from true partnership.' },
  { number: '04', title: 'Push Boundaries', description: 'Safe is boring. We\'re here to challenge conventions and create what\'s never been seen.' }
]

export const awards = [
  { org: 'Awwwards', title: 'Site of the Day', year: '2024' },
  { org: 'Motionographer', title: 'Featured Studio', year: '2023' },
  { org: 'D&AD', title: 'Yellow Pencil · Title Design', year: '2023' },
  { org: 'CSSDA', title: 'Agency of the Year', year: '2022' },
  { org: 'Emmy Awards', title: 'Outstanding Title Design', year: '2022' }
]

// ═══════════════════════════════════════════════════════════════
// FAQ DATA
// ═══════════════════════════════════════════════════════════════
export const faqs = [
  {
    question: 'What\'s your typical timeline?',
    answer: 'Most projects take 4-8 weeks depending on scope. Rush projects are possible with advance notice. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'Do you work with remote clients?',
    answer: 'Absolutely! We work with clients globally. Our process is designed for remote collaboration with regular video check-ins and shared workspaces.'
  },
  {
    question: 'What do you need to get started?',
    answer: 'A brief overview of your project, your timeline, and budget range. We\'ll hop on a discovery call to understand your vision and determine if we\'re a good fit.'
  },
  {
    question: 'Can you work within our existing brand?',
    answer: 'Yes! We specialize in creating motion systems that respect and extend existing brand guidelines. Your brand\'s DNA stays intact while gaining new life through motion.'
  }
]
