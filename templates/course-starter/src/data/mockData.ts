export const courseInfo = {
  title: "Master Modern Product Design",
  tagline: "Transform from beginner to professional product designer in 12 weeks",
  description: "Join over 5,000+ students who have transformed their careers with our comprehensive, hands-on approach to product design. Learn the exact frameworks used by designers at top tech companies.",
  price: 497,
  originalPrice: 997,
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  enrollmentOpen: true,
  studentsEnrolled: 5247,
  rating: 4.9,
  reviewCount: 1283,
};

export const modules = [
  {
    id: 1,
    title: "Foundations of Design Thinking",
    description: "Build a solid foundation with core design principles",
    lessons: [
      { id: 1, title: "Introduction to Design Thinking", duration: "15 min", type: "video" as const },
      { id: 2, title: "Understanding User Psychology", duration: "22 min", type: "video" as const },
      { id: 3, title: "The Design Process Framework", duration: "18 min", type: "video" as const },
      { id: 4, title: "Workshop: Empathy Mapping", duration: "45 min", type: "exercise" as const },
    ],
  },
  {
    id: 2,
    title: "User Research & Discovery",
    description: "Learn to uncover real user needs and pain points",
    lessons: [
      { id: 5, title: "Research Methods Overview", duration: "20 min", type: "video" as const },
      { id: 6, title: "Conducting User Interviews", duration: "28 min", type: "video" as const },
      { id: 7, title: "Survey Design Best Practices", duration: "16 min", type: "video" as const },
      { id: 8, title: "Synthesizing Research Data", duration: "25 min", type: "video" as const },
      { id: 9, title: "Project: User Research Sprint", duration: "2 hrs", type: "project" as const },
    ],
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: "From sketches to interactive prototypes",
    lessons: [
      { id: 10, title: "Sketching Fundamentals", duration: "18 min", type: "video" as const },
      { id: 11, title: "Low-Fidelity Wireframes", duration: "24 min", type: "video" as const },
      { id: 12, title: "Introduction to Figma", duration: "35 min", type: "video" as const },
      { id: 13, title: "Building Interactive Prototypes", duration: "40 min", type: "video" as const },
      { id: 14, title: "Workshop: Prototype Your First App", duration: "1.5 hrs", type: "exercise" as const },
    ],
  },
  {
    id: 4,
    title: "Visual Design Mastery",
    description: "Create stunning, professional interfaces",
    lessons: [
      { id: 15, title: "Color Theory for Digital", duration: "22 min", type: "video" as const },
      { id: 16, title: "Typography in UI Design", duration: "26 min", type: "video" as const },
      { id: 17, title: "Layout & Spacing Systems", duration: "20 min", type: "video" as const },
      { id: 18, title: "Iconography & Illustration", duration: "18 min", type: "video" as const },
      { id: 19, title: "Building a Design System", duration: "45 min", type: "video" as const },
    ],
  },
  {
    id: 5,
    title: "Design Systems & Components",
    description: "Build scalable, consistent design systems",
    lessons: [
      { id: 20, title: "What is a Design System?", duration: "15 min", type: "video" as const },
      { id: 21, title: "Component Architecture", duration: "30 min", type: "video" as const },
      { id: 22, title: "Tokens & Variables", duration: "25 min", type: "video" as const },
      { id: 23, title: "Documentation Best Practices", duration: "20 min", type: "video" as const },
      { id: 24, title: "Project: Build Your Design System", duration: "3 hrs", type: "project" as const },
    ],
  },
  {
    id: 6,
    title: "Portfolio & Career Launch",
    description: "Land your dream design role",
    lessons: [
      { id: 25, title: "Building a Standout Portfolio", duration: "35 min", type: "video" as const },
      { id: 26, title: "Case Study Framework", duration: "28 min", type: "video" as const },
      { id: 27, title: "Interview Preparation", duration: "30 min", type: "video" as const },
      { id: 28, title: "Salary Negotiation", duration: "22 min", type: "video" as const },
      { id: 29, title: "Final Project: Complete Portfolio", duration: "5 hrs", type: "project" as const },
    ],
  },
];

export const instructor = {
  name: "Sarah Chen",
  photo: "/instructor.jpg",
  title: "Principal Product Designer",
  company: "Former Design Lead @ Stripe",
  bio: "With over 12 years of experience in product design, I've led design teams at Stripe, Airbnb, and Google. I've helped scale design systems used by millions and mentored hundreds of designers who now work at top tech companies. My approach combines practical, real-world experience with the latest design methodologies.",
  shortBio: "Principal Product Designer with 12+ years at Stripe, Airbnb, and Google. Passionate about teaching the next generation of designers.",
  credentials: [
    "12+ years in product design",
    "Led design teams at Stripe, Airbnb, Google",
    "Built design systems serving 50M+ users",
    "Featured in Forbes 30 Under 30",
    "Speaker at Config, Figma's annual conference",
    "Mentored 500+ designers",
  ],
  socialLinks: {
    twitter: "https://twitter.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
    dribbble: "https://dribbble.com/sarahchen",
  },
  mediaFeatures: [
    { name: "Forbes", logo: "/logos/forbes.svg" },
    { name: "TechCrunch", logo: "/logos/techcrunch.svg" },
    { name: "Fast Company", logo: "/logos/fastcompany.svg" },
    { name: "Wired", logo: "/logos/wired.svg" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    photo: "/testimonials/alex.jpg",
    role: "Product Designer @ Spotify",
    quote: "This course completely changed my career trajectory. Within 3 months of completing it, I landed my dream job at Spotify. Sarah's teaching style makes complex concepts easy to understand.",
    result: "Landed dream job at Spotify",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/example1",
    featured: true,
  },
  {
    id: 2,
    name: "Jessica Park",
    photo: "/testimonials/jessica.jpg",
    role: "Senior UX Designer @ Meta",
    quote: "The portfolio module alone was worth the entire price. I went from struggling to get interviews to having multiple offers within weeks. The ROI on this course is incredible.",
    result: "3x salary increase",
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Marcus Thompson",
    photo: "/testimonials/marcus.jpg",
    role: "Design Lead @ Notion",
    quote: "I've taken dozens of design courses, and this is by far the most comprehensive and practical. The design system module taught me things I wish I'd learned years ago.",
    result: "Promoted to Design Lead",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/example2",
    featured: true,
  },
  {
    id: 4,
    name: "Emily Watson",
    photo: "/testimonials/emily.jpg",
    role: "Freelance Product Designer",
    quote: "As a self-taught designer, I always felt like I had gaps in my knowledge. This course filled every single one. I'm now charging 2x what I used to and have a waitlist of clients.",
    result: "Doubled freelance rates",
    rating: 5,
  },
  {
    id: 5,
    name: "David Kim",
    photo: "/testimonials/david.jpg",
    role: "UX Designer @ Figma",
    quote: "The community aspect is underrated. I've made genuine connections with other designers who've become collaborators and friends. Plus the content is top-tier.",
    result: "Built network of 50+ designers",
    rating: 5,
  },
  {
    id: 6,
    name: "Priya Sharma",
    photo: "/testimonials/priya.jpg",
    role: "Product Designer @ Stripe",
    quote: "I transitioned from graphic design to product design using this course. Sarah breaks down the UX process in a way that finally made it click for me.",
    result: "Career transition success",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/example3",
  },
];

export const pricingTiers = [
  {
    id: "basic",
    name: "Essential",
    price: 197,
    originalPrice: 397,
    description: "Perfect for self-starters who want core skills",
    features: [
      "Full course access (40+ hours)",
      "Downloadable resources",
      "Course completion certificate",
      "30-day money-back guarantee",
      "Lifetime access to updates",
    ],
    notIncluded: [
      "Private community access",
      "Live Q&A sessions",
      "Portfolio reviews",
      "1-on-1 coaching calls",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Professional",
    price: 497,
    originalPrice: 997,
    description: "Most popular choice for serious designers",
    features: [
      "Everything in Essential",
      "Private Slack community",
      "Weekly live Q&A sessions",
      "2 portfolio review sessions",
      "Bonus: Interview prep module",
      "Bonus: Figma template library",
      "Priority email support",
    ],
    notIncluded: [
      "1-on-1 coaching calls",
    ],
    popular: true,
    cta: "Enroll Now",
  },
  {
    id: "vip",
    name: "VIP Mentorship",
    price: 997,
    originalPrice: 1997,
    description: "For those who want personal guidance",
    features: [
      "Everything in Professional",
      "4x 1-on-1 coaching calls with Sarah",
      "Unlimited portfolio reviews",
      "Direct Slack access to Sarah",
      "Job referrals to partner companies",
      "Exclusive mastermind group",
      "Early access to new content",
    ],
    notIncluded: [],
    popular: false,
    cta: "Apply Now",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Is this course suitable for complete beginners?",
    answer: "Absolutely! The course is designed to take you from zero to job-ready. We start with foundational concepts and progressively build up to advanced topics. Many of our most successful students started with no design experience.",
    category: "general",
  },
  {
    id: 2,
    question: "How long do I have access to the course?",
    answer: "You get lifetime access to all course materials, including any future updates. Once you enroll, the content is yours forever. We regularly update the curriculum to keep it current with industry trends.",
    category: "general",
  },
  {
    id: 3,
    question: "What software do I need?",
    answer: "You'll need Figma (free) for most exercises. We also recommend having access to Notion for note-taking and Slack for the community. All other tools mentioned in the course offer free trials or free tiers.",
    category: "technical",
  },
  {
    id: 4,
    question: "How much time should I dedicate per week?",
    answer: "We recommend 5-10 hours per week for optimal progress. At this pace, most students complete the course in 10-12 weeks. However, you can go at your own pace — there's no deadline.",
    category: "general",
  },
  {
    id: 5,
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee, no questions asked. If you're not satisfied with the course for any reason, just email us within 30 days of purchase for a full refund.",
    category: "pricing",
  },
  {
    id: 6,
    question: "Do you offer payment plans?",
    answer: "Yes! We offer a 3-month payment plan for the Professional and VIP tiers. You can split your payment into 3 equal monthly installments with no additional fees or interest.",
    category: "pricing",
  },
  {
    id: 7,
    question: "Will this help me get a job?",
    answer: "Our curriculum is specifically designed to make you job-ready. The portfolio module teaches you exactly how to present your work, and our interview prep covers common design challenges. Over 85% of our graduates land a design role within 6 months.",
    category: "career",
  },
  {
    id: 8,
    question: "Is there a community or support?",
    answer: "Professional and VIP members get access to our private Slack community with 3,000+ designers. We also host weekly live Q&A sessions where you can ask questions directly. Essential members can reach us via email support.",
    category: "general",
  },
  {
    id: 9,
    question: "Can I get a certificate?",
    answer: "Yes, all students receive a verified certificate of completion that you can add to your LinkedIn profile and resume. The certificate includes your name, completion date, and a unique verification code.",
    category: "general",
  },
  {
    id: 10,
    question: "What makes this different from other courses?",
    answer: "Three things: 1) Real-world projects based on actual design challenges from top companies, 2) A focus on portfolio-building so you graduate with work to show, and 3) A thriving community of designers who support each other.",
    category: "general",
  },
];

export const stats = [
  { value: "5,247+", label: "Students Enrolled" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "85%", label: "Land Jobs in 6 Months" },
  { value: "40+", label: "Hours of Content" },
];

export const features = [
  {
    icon: "video",
    title: "40+ Hours of Video",
    description: "Comprehensive video lessons covering every aspect of modern product design",
  },
  {
    icon: "download",
    title: "Downloadable Resources",
    description: "Templates, checklists, and design files you can use in your own projects",
  },
  {
    icon: "community",
    title: "Private Community",
    description: "Connect with 3,000+ designers in our active Slack community",
  },
  {
    icon: "certificate",
    title: "Certificate",
    description: "Earn a verified certificate to showcase your new skills",
  },
  {
    icon: "updates",
    title: "Lifetime Updates",
    description: "Get access to all future course updates at no extra cost",
  },
  {
    icon: "support",
    title: "Expert Support",
    description: "Get your questions answered by Sarah and her team of mentors",
  },
];

export const targetAudience = [
  {
    title: "Career Changers",
    description: "Looking to break into tech and start a fulfilling career in design",
    icon: "switch",
  },
  {
    title: "Self-Taught Designers",
    description: "Want to fill knowledge gaps and build a stronger foundation",
    icon: "book",
  },
  {
    title: "Junior Designers",
    description: "Ready to level up your skills and advance your career",
    icon: "rocket",
  },
  {
    title: "Developers",
    description: "Want to add design skills to become a more well-rounded builder",
    icon: "code",
  },
];
