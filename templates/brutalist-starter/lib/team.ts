export interface TeamMember {
  name: string
  role: string
  photo: string
  funFact: string
  funFactEmoji: string
  social?: {
    twitter?: string
    linkedin?: string
    dribbble?: string
  }
  rotate: number
}

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    photo: 'https://picsum.photos/seed/alex/400/500',
    funFact: 'Dog dad x3',
    funFactEmoji: '🐕',
    social: {
      twitter: 'https://twitter.com/alexchen',
      dribbble: 'https://dribbble.com/alexchen',
    },
    rotate: 3,
  },
  {
    name: 'Maya Patel',
    role: 'Lead Designer',
    photo: 'https://picsum.photos/seed/maya/400/500',
    funFact: 'Bassist in a punk band',
    funFactEmoji: '🎸',
    social: {
      dribbble: 'https://dribbble.com/mayapatel',
      linkedin: 'https://linkedin.com/in/mayapatel',
    },
    rotate: -2,
  },
  {
    name: 'Jordan Lee',
    role: 'Tech Lead',
    photo: 'https://picsum.photos/seed/jordan/400/500',
    funFact: 'Speedrun record holder',
    funFactEmoji: '🎮',
    social: {
      twitter: 'https://twitter.com/jordanlee',
      linkedin: 'https://linkedin.com/in/jordanlee',
    },
    rotate: 1,
  },
  {
    name: 'Sam Rivera',
    role: 'Strategy Director',
    photo: 'https://picsum.photos/seed/sam/400/500',
    funFact: 'Amateur sommelier',
    funFactEmoji: '🍷',
    social: {
      linkedin: 'https://linkedin.com/in/samrivera',
    },
    rotate: -3,
  },
  {
    name: 'Casey Morgan',
    role: 'Motion Designer',
    photo: 'https://picsum.photos/seed/casey/400/500',
    funFact: 'Makes stop-motion shorts',
    funFactEmoji: '🎬',
    social: {
      dribbble: 'https://dribbble.com/caseymorgan',
    },
    rotate: 2,
  },
  {
    name: 'Taylor Brooks',
    role: 'Developer',
    photo: 'https://picsum.photos/seed/taylor/400/500',
    funFact: 'Bouldering enthusiast',
    funFactEmoji: '🧗',
    social: {
      twitter: 'https://twitter.com/taylorbrooks',
    },
    rotate: -1,
  },
]

export const VALUES = [
  {
    title: 'NO BS',
    description: 'We say what we mean. No agency speak, no fluffy presentations, no hiding behind jargon.',
    color: '#FFE600',
  },
  {
    title: 'BOLD ONLY',
    description: 'If it\'s not memorable, it\'s not worth making. We don\'t do safe, forgettable work.',
    color: '#FF5CAA',
  },
  {
    title: 'SHIP IT',
    description: 'Ideas are worthless until they\'re in the world. We bias toward action, always.',
    color: '#3B82F6',
  },
  {
    title: 'CLIENTS FIRST',
    description: 'Your success is our success. We\'re partners, not vendors. Your wins are our wins.',
    color: '#22C55E',
  },
  {
    title: 'ALWAYS LEARNING',
    description: 'The industry moves fast. We stay curious, experiment constantly, and share what we learn.',
    color: '#A855F7',
  },
  {
    title: 'HAVE FUN',
    description: 'Life\'s too short for boring work. We bring energy, humor, and joy to everything we do.',
    color: '#FF6B35',
  },
]

export const CLIENTS = [
  { name: 'TechCorp', logo: 'https://picsum.photos/seed/client1/200/80' },
  { name: 'StartupX', logo: 'https://picsum.photos/seed/client2/200/80' },
  { name: 'DesignCo', logo: 'https://picsum.photos/seed/client3/200/80' },
  { name: 'InnovateLab', logo: 'https://picsum.photos/seed/client4/200/80' },
  { name: 'FutureBrand', logo: 'https://picsum.photos/seed/client5/200/80' },
  { name: 'CreativeHub', logo: 'https://picsum.photos/seed/client6/200/80' },
]

export const AWARDS = [
  { name: 'Awwwards SOTD', count: 3, emoji: '🏆' },
  { name: 'CSS Design Awards', count: 5, emoji: '🏆' },
  { name: 'FWA Site of the Day', count: 2, emoji: '🏆' },
  { name: 'Webby Honoree', count: 4, emoji: '🏆' },
]
