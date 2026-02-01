// ═══════════════════════════════════════════════════════════════
// TYPESCRIPT INTERFACES
// Types for agency data structures (Sanity-compatible)
// ═══════════════════════════════════════════════════════════════

export interface HeroContent {
  headline: string[]
  subheadline: string
  cta: string
  clients: string[]
}

export interface CaseStudy {
  id: number
  slug: string
  title: string
  category: string
  tags: string[]
  image: string
  description: string
  link: string
}

export interface CaseStudyFull extends CaseStudy {
  client: string
  timeline: string
  industry?: string
  year?: string
  heroImage: string
  challenge: string
  solution: string
  results: CaseStudyResult[]
  gallery: CaseStudyImage[]
  testimonial?: CaseStudyTestimonial
  services: string[]
}

export interface CaseStudyResult {
  value: string
  suffix?: string
  label: string
}

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudyTestimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export interface Service {
  number: string
  name: string
  description: string
  deliverables: string[]
}

export interface ServiceFull extends Service {
  slug: string
  fullDescription: string
  includes: string[]
  caseStudies?: CaseStudy[]
  pricing?: {
    type: 'starting' | 'range' | 'custom'
    startingFrom?: number
    range?: { min: number; max: number }
  }
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface TeamMemberFull extends TeamMember {
  bio?: string
  linkedin?: string
  twitter?: string
}

export interface Stat {
  value: string
  suffix: string
  label: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface Value {
  number: string
  title: string
  description: string
  icon?: string
}

export interface ClientLogo {
  name: string
  logo: string
  url?: string
}

export interface Award {
  name: string
  organization: string
  project?: string
  year: string
  link?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: number
  featuredImage: string
  content?: string
  author?: {
    name: string
    image: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  budget?: string
  projectTypes: string[]
  message: string
}

export interface ContactInfo {
  email: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
    country?: string
  }
  socials?: {
    platform: string
    url: string
    icon: string
  }[]
}

// Sanity document types (for future CMS integration)
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanityCaseStudy extends SanityDocument {
  _type: 'caseStudy'
  title: string
  slug: { current: string }
  category: string
  tags: string[]
  mainImage: {
    asset: { _ref: string; _type: 'reference' }
    alt?: string
  }
  description: string
}

export interface SanityTeamMember extends SanityDocument {
  _type: 'teamMember'
  name: string
  role: string
  photo: {
    asset: { _ref: string; _type: 'reference' }
    alt?: string
  }
  bio?: string
}

export interface SanityService extends SanityDocument {
  _type: 'service'
  number: string
  name: string
  description: string
  deliverables: string[]
}

export interface SanityBlogPost extends SanityDocument {
  _type: 'blogPost'
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  publishedAt: string
  readTime: number
  mainImage: {
    asset: { _ref: string; _type: 'reference' }
    alt?: string
  }
  author?: {
    name: string
    image: {
      asset: { _ref: string; _type: 'reference' }
    }
  }
  body: any[] // Portable Text
}
