export interface Photographer {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  portrait: string;
  equipment: string[];
  awards: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    behance?: string;
  };
  location: string;
  email: string;
  phone: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'weddings' | 'portraits' | 'commercial' | 'editorial' | 'travel';
  coverImage: string;
  images: string[];
  description: string;
  client?: string;
  date: string;
  featured: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  includes: string[];
  popular: boolean;
  duration?: string;
}

export interface Client {
  name: string;
  logo: string;
}
