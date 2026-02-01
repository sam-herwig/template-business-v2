// ═══════════════════════════════════════════════════════════════
// GYM STARTER TEMPLATE - TypeScript Interfaces
// ═══════════════════════════════════════════════════════════════

export interface GymInfo {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  heroImage: string
  bookingUrl: string
  hours: {
    memberAccess: string
    staffed: string
  }
}

export interface FitnessClass {
  name: string
  time: string
  duration: string
  instructor: string
  intensity: 'High' | 'Medium' | 'Low'
  spots: number
  image: string
}

export interface ClassType {
  id: string
  name: string
  description: string
  intensity: 'High' | 'Medium' | 'Low'
  caloriesBurned: string
  equipment: string[]
  image: string
  icon: string
}

export interface ScheduledClass {
  id: string
  classTypeId: string
  name: string
  time: string
  duration: string
  instructor: string
  studio: string
  date: string
  maxSpots: number
  bookedSpots: number
  intensity: 'High' | 'Medium' | 'Low'
}

export interface MembershipPlan {
  name: string
  price: number
  period: string
  features: string[]
  featured: boolean
  note?: string
}

export interface AddOn {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  icon: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Trainer {
  name: string
  specialty: string
  cert: string
  image: string
}

export interface TrainerExpanded extends Trainer {
  id: string
  bio: string
  quote?: string
  certifications: string[]
  specialties: string[]
  schedule?: { day: string; time: string; class: string }[]
  socialLinks?: { platform: string; url: string; handle: string }[]
  bookingUrl?: string
}

export interface Amenity {
  icon: React.ReactNode
  name: string
  desc: string
}

export interface Stat {
  value: string
  label: string
}

export interface GymValue {
  icon: string
  title: string
  description: string
}

export interface Facility {
  name: string
  image: string
}

export interface EquipmentCategory {
  name: string
  items: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: 'Workouts' | 'Nutrition' | 'Recovery' | 'Mindset'
  author: {
    name: string
    image: string
  }
  image: string
  readTime: number
  publishedAt: string
  featured?: boolean
}

export type IntensityLevel = 'high' | 'medium' | 'low'
