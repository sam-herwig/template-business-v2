import { Photographer, Project, Service, Client } from '@/types';

export const photographer: Photographer = {
  name: "Elena Voss",
  title: "Fine Art & Editorial Photographer",
  bio: "Capturing moments that transcend time through the lens of emotion and light.",
  longBio: `With over a decade of experience in fine art and editorial photography, I have dedicated my craft to capturing the extraordinary in the ordinary. My work has been featured in Vogue, Harper's Bazaar, and numerous international galleries.

I believe that every photograph tells a story—a fleeting moment frozen in time, waiting to be discovered. My approach combines technical precision with an intuitive understanding of light, composition, and human emotion.

Based in New York City, I work with clients worldwide, bringing a distinctive aesthetic that blends timeless elegance with contemporary vision. Whether it's an intimate portrait session, a grand wedding celebration, or a high-fashion editorial, I approach each project with the same passion and attention to detail.`,
  portrait: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  equipment: [
    "Canon EOS R5",
    "Canon RF 50mm f/1.2L",
    "Canon RF 85mm f/1.2L",
    "Profoto B10 Plus",
    "Phase One XT"
  ],
  awards: [
    "International Photography Awards 2023 - Gold",
    "Hasselblad Masters Finalist 2022",
    "Communication Arts Photography Annual",
    "PDN Photo Annual Winner"
  ],
  socialLinks: {
    instagram: "https://instagram.com/elenavoss",
    twitter: "https://twitter.com/elenavoss",
    linkedin: "https://linkedin.com/in/elenavoss",
    behance: "https://behance.net/elenavoss"
  },
  location: "New York City, NY",
  email: "hello@elenavoss.com",
  phone: "+1 (212) 555-0147"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Ethereal Dawn",
    slug: "ethereal-dawn",
    category: "editorial",
    coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80"
    ],
    description: "An editorial series exploring the interplay of light and shadow at the break of dawn. Shot entirely during the golden hour, this collection captures the ephemeral beauty of morning light.",
    client: "Vogue Italia",
    date: "2024-01",
    featured: true
  },
  {
    id: "2",
    title: "Sarah & James",
    slug: "sarah-james-wedding",
    category: "weddings",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80"
    ],
    description: "An intimate autumn wedding at a historic Hudson Valley estate. The couple wanted their day to feel like a page from a timeless love story—romantic, elegant, and deeply personal.",
    date: "2023-10",
    featured: true
  },
  {
    id: "3",
    title: "Noir Collection",
    slug: "noir-collection",
    category: "commercial",
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80"
    ],
    description: "A dramatic black and white campaign for a luxury jewelry brand. The brief called for images that would feel at home in both a high-end gallery and a fashion magazine.",
    client: "Cartier",
    date: "2023-12",
    featured: true
  },
  {
    id: "4",
    title: "Urban Souls",
    slug: "urban-souls",
    category: "portraits",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80"
    ],
    description: "A personal project documenting the diverse faces and stories of New York City. Each portrait captures a moment of genuine connection and vulnerability.",
    date: "2023-08",
    featured: false
  },
  {
    id: "5",
    title: "Wanderlust",
    slug: "wanderlust",
    category: "travel",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80"
    ],
    description: "A visual journey through the landscapes of Iceland, Norway, and the Swiss Alps. This series explores the raw, untamed beauty of nature and our place within it.",
    date: "2023-06",
    featured: true
  },
  {
    id: "6",
    title: "Emma & Oliver",
    slug: "emma-oliver-wedding",
    category: "weddings",
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1200&q=80"
    ],
    description: "A sun-drenched summer wedding in the Tuscan countryside. The celebration was a perfect blend of Italian elegance and heartfelt moments.",
    date: "2023-07",
    featured: false
  },
  {
    id: "7",
    title: "Luminance",
    slug: "luminance",
    category: "editorial",
    coverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
    ],
    description: "A study in natural light and minimalist fashion. This editorial explores how simple garments can become extraordinary through the artful use of illumination.",
    client: "Harper's Bazaar",
    date: "2023-09",
    featured: false
  },
  {
    id: "8",
    title: "Heritage Brand Campaign",
    slug: "heritage-brand",
    category: "commercial",
    coverImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80"
    ],
    description: "A campaign celebrating timeless craftsmanship and modern elegance for a heritage fashion house. Shot on location at a 19th-century Parisian atelier.",
    client: "Hermès",
    date: "2023-11",
    featured: false
  }
];

export const services: Service[] = [
  {
    id: "1",
    name: "Portrait Session",
    description: "An intimate portrait experience designed to capture your authentic self. Perfect for personal branding, actors, or anyone wanting stunning portraits.",
    startingPrice: 750,
    includes: [
      "Pre-session consultation",
      "2-hour photography session",
      "Professional hair & makeup artist",
      "Wardrobe styling guidance",
      "30 retouched digital images",
      "Private online gallery",
      "Print release included"
    ],
    popular: false,
    duration: "2 hours"
  },
  {
    id: "2",
    name: "Wedding Coverage",
    description: "Comprehensive documentation of your love story. From the quiet moments of preparation to the joyous celebration, every emotion captured with artistry.",
    startingPrice: 5500,
    includes: [
      "Engagement session included",
      "Up to 10 hours of coverage",
      "Second photographer",
      "500+ edited images",
      "Custom wedding album",
      "Private online gallery",
      "Timeline planning assistance",
      "Print release included"
    ],
    popular: true,
    duration: "Full day"
  },
  {
    id: "3",
    name: "Commercial & Editorial",
    description: "High-impact imagery for brands, publications, and campaigns. From product photography to lifestyle shoots, elevate your visual presence.",
    startingPrice: 3000,
    includes: [
      "Creative concept development",
      "Full-day production",
      "Professional lighting setup",
      "Post-production & retouching",
      "Commercial usage rights",
      "Quick turnaround available",
      "Art direction collaboration"
    ],
    popular: false,
    duration: "Per day"
  },
  {
    id: "4",
    name: "Intimate Wedding",
    description: "For couples choosing a smaller celebration. All the artistry and attention of our full wedding coverage, scaled for elopements and micro-weddings.",
    startingPrice: 2800,
    includes: [
      "Up to 4 hours of coverage",
      "200+ edited images",
      "Private online gallery",
      "Location scouting assistance",
      "Print release included"
    ],
    popular: false,
    duration: "4 hours"
  }
];

export const clients: Client[] = [
  { name: "Vogue", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Vogue_wordmark.svg/200px-Vogue_wordmark.svg.png" },
  { name: "Harper's Bazaar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Harper%27s_Bazaar_Logo.svg/200px-Harper%27s_Bazaar_Logo.svg.png" },
  { name: "Cartier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cartier_Logo.svg/200px-Cartier_Logo.svg.png" },
  { name: "Hermès", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Herm%C3%A8s_logo.svg/200px-Herm%C3%A8s_logo.svg.png" },
  { name: "Dior", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/200px-Dior_Logo.svg.png" }
];

export const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'weddings', name: 'Weddings' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'travel', name: 'Travel' }
];
