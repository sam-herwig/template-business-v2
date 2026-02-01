// ═══════════════════════════════════════════════════════════════
// GYM STARTER TEMPLATE - Data Arrays
// ═══════════════════════════════════════════════════════════════

import type { 
  GymInfo, 
  FitnessClass, 
  MembershipPlan, 
  Trainer, 
  TrainerExpanded,
  Amenity, 
  Stat,
  ClassType,
  ScheduledClass,
  AddOn,
  FAQ,
  GymValue,
  Facility,
  EquipmentCategory,
  BlogPost,
} from './types'
import {
  WeightIcon,
  BikeIcon,
  YogaIcon,
  BoxingIcon,
  ShowerIcon,
  ParkingIcon,
} from './icons'

export const GYM: GymInfo = {
  name: "IRON ATHLETICS",
  tagline: "Transform Your Body. Elevate Your Mind.",
  description: "Denver's premier fitness community. World-class equipment, expert trainers, and 50+ weekly classes.",
  phone: "(555) 345-6789",
  email: "info@ironathletics.com",
  address: "789 Fitness Blvd",
  city: "Denver",
  state: "CO",
  zip: "80202",
  heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=90",
  bookingUrl: "#join",
  hours: {
    memberAccess: "24/7",
    staffed: "6am - 10pm Daily",
  },
}

export const CLASSES: FitnessClass[] = [
  { name: "HIIT", time: "6:00 AM", duration: "45 min", instructor: "Mike", intensity: "High", spots: 3, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=85" },
  { name: "Yoga Flow", time: "7:00 AM", duration: "60 min", instructor: "Sarah", intensity: "Low", spots: 12, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=85" },
  { name: "Spin", time: "8:00 AM", duration: "45 min", instructor: "Carlos", intensity: "High", spots: 5, image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop&q=85" },
  { name: "Strength", time: "12:00 PM", duration: "60 min", instructor: "Alex", intensity: "Medium", spots: 10, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=400&fit=crop&q=85" },
  { name: "Boxing", time: "5:30 PM", duration: "60 min", instructor: "Maria", intensity: "High", spots: 6, image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&q=85" },
  { name: "Pilates", time: "6:30 PM", duration: "50 min", instructor: "Emma", intensity: "Medium", spots: 15, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=85" },
]

export const CLASS_TYPES: ClassType[] = [
  {
    id: 'hiit',
    name: 'HIIT',
    description: 'High-intensity interval training that torches calories and builds endurance. 30-45 minutes of all-out effort with recovery periods.',
    intensity: 'High',
    caloriesBurned: '500-700',
    equipment: ['Bodyweight', 'Kettlebells', 'Boxes'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=85',
    icon: '🔥',
  },
  {
    id: 'yoga',
    name: 'Yoga Flow',
    description: 'Flowing sequences that build strength, flexibility, and mindfulness. Perfect for recovery days or as a complement to high-intensity training.',
    intensity: 'Low',
    caloriesBurned: '200-400',
    equipment: ['Mat', 'Blocks', 'Straps'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=85',
    icon: '🧘',
  },
  {
    id: 'spin',
    name: 'Spin',
    description: 'Indoor cycling that combines rhythm, resistance, and motivation. Burn calories while building leg strength and cardiovascular endurance.',
    intensity: 'High',
    caloriesBurned: '400-600',
    equipment: ['Spin Bike'],
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=600&fit=crop&q=85',
    icon: '🚴',
  },
  {
    id: 'strength',
    name: 'Strength',
    description: 'Foundational strength training using free weights and machines. Build muscle, increase bone density, and boost your metabolism.',
    intensity: 'Medium',
    caloriesBurned: '300-500',
    equipment: ['Barbells', 'Dumbbells', 'Machines'],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&h=600&fit=crop&q=85',
    icon: '🏋️',
  },
  {
    id: 'boxing',
    name: 'Boxing',
    description: 'Learn proper technique while getting an incredible full-body workout. Improve coordination, power, and mental focus.',
    intensity: 'High',
    caloriesBurned: '500-800',
    equipment: ['Gloves', 'Heavy Bags', 'Speed Bags'],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop&q=85',
    icon: '🥊',
  },
  {
    id: 'pilates',
    name: 'Pilates',
    description: 'Core-focused exercises that improve posture, flexibility, and body awareness. Low-impact but highly effective.',
    intensity: 'Medium',
    caloriesBurned: '200-400',
    equipment: ['Mat', 'Reformer', 'Magic Circle'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=85',
    icon: '✨',
  },
]

export const WEEKLY_SCHEDULE: ScheduledClass[] = [
  // Monday
  { id: 'm1', classTypeId: 'hiit', name: 'HIIT', time: '6:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Monday', maxSpots: 20, bookedSpots: 17, intensity: 'High' },
  { id: 'm2', classTypeId: 'yoga', name: 'Yoga Flow', time: '7:00 AM', duration: '60 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Monday', maxSpots: 25, bookedSpots: 13, intensity: 'Low' },
  { id: 'm3', classTypeId: 'spin', name: 'Spin', time: '8:00 AM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Monday', maxSpots: 30, bookedSpots: 25, intensity: 'High' },
  { id: 'm4', classTypeId: 'strength', name: 'Strength', time: '12:00 PM', duration: '60 min', instructor: 'Alex Thompson', studio: 'Weight Room', date: 'Monday', maxSpots: 15, bookedSpots: 5, intensity: 'Medium' },
  { id: 'm5', classTypeId: 'boxing', name: 'Boxing', time: '5:30 PM', duration: '60 min', instructor: 'Mike Johnson', studio: 'Boxing Area', date: 'Monday', maxSpots: 16, bookedSpots: 10, intensity: 'High' },
  { id: 'm6', classTypeId: 'pilates', name: 'Pilates', time: '6:30 PM', duration: '50 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Monday', maxSpots: 20, bookedSpots: 5, intensity: 'Medium' },
  // Tuesday
  { id: 't1', classTypeId: 'spin', name: 'Spin', time: '6:00 AM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Tuesday', maxSpots: 30, bookedSpots: 22, intensity: 'High' },
  { id: 't2', classTypeId: 'hiit', name: 'HIIT', time: '7:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Tuesday', maxSpots: 20, bookedSpots: 18, intensity: 'High' },
  { id: 't3', classTypeId: 'yoga', name: 'Power Yoga', time: '12:00 PM', duration: '60 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Tuesday', maxSpots: 25, bookedSpots: 10, intensity: 'Medium' },
  { id: 't4', classTypeId: 'strength', name: 'Strength', time: '5:30 PM', duration: '60 min', instructor: 'Alex Thompson', studio: 'Weight Room', date: 'Tuesday', maxSpots: 15, bookedSpots: 12, intensity: 'Medium' },
  { id: 't5', classTypeId: 'boxing', name: 'Boxing Basics', time: '6:30 PM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Boxing Area', date: 'Tuesday', maxSpots: 16, bookedSpots: 8, intensity: 'Medium' },
  // Wednesday
  { id: 'w1', classTypeId: 'hiit', name: 'HIIT', time: '6:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Wednesday', maxSpots: 20, bookedSpots: 15, intensity: 'High' },
  { id: 'w2', classTypeId: 'yoga', name: 'Yoga Flow', time: '7:00 AM', duration: '60 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Wednesday', maxSpots: 25, bookedSpots: 20, intensity: 'Low' },
  { id: 'w3', classTypeId: 'pilates', name: 'Pilates', time: '12:00 PM', duration: '50 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Wednesday', maxSpots: 20, bookedSpots: 8, intensity: 'Medium' },
  { id: 'w4', classTypeId: 'spin', name: 'Spin', time: '5:30 PM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Wednesday', maxSpots: 30, bookedSpots: 28, intensity: 'High' },
  { id: 'w5', classTypeId: 'strength', name: 'Strength', time: '6:30 PM', duration: '60 min', instructor: 'Alex Thompson', studio: 'Weight Room', date: 'Wednesday', maxSpots: 15, bookedSpots: 10, intensity: 'Medium' },
  // Thursday
  { id: 'th1', classTypeId: 'yoga', name: 'Yoga Flow', time: '6:00 AM', duration: '60 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Thursday', maxSpots: 25, bookedSpots: 12, intensity: 'Low' },
  { id: 'th2', classTypeId: 'hiit', name: 'HIIT', time: '7:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Thursday', maxSpots: 20, bookedSpots: 19, intensity: 'High' },
  { id: 'th3', classTypeId: 'boxing', name: 'Boxing', time: '12:00 PM', duration: '60 min', instructor: 'Mike Johnson', studio: 'Boxing Area', date: 'Thursday', maxSpots: 16, bookedSpots: 6, intensity: 'High' },
  { id: 'th4', classTypeId: 'spin', name: 'Spin', time: '5:30 PM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Thursday', maxSpots: 30, bookedSpots: 25, intensity: 'High' },
  { id: 'th5', classTypeId: 'pilates', name: 'Pilates', time: '6:30 PM', duration: '50 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Thursday', maxSpots: 20, bookedSpots: 15, intensity: 'Medium' },
  // Friday
  { id: 'f1', classTypeId: 'hiit', name: 'HIIT', time: '6:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Friday', maxSpots: 20, bookedSpots: 14, intensity: 'High' },
  { id: 'f2', classTypeId: 'yoga', name: 'Yoga Flow', time: '7:00 AM', duration: '60 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Friday', maxSpots: 25, bookedSpots: 18, intensity: 'Low' },
  { id: 'f3', classTypeId: 'strength', name: 'Strength', time: '12:00 PM', duration: '60 min', instructor: 'Alex Thompson', studio: 'Weight Room', date: 'Friday', maxSpots: 15, bookedSpots: 8, intensity: 'Medium' },
  { id: 'f4', classTypeId: 'spin', name: 'Spin', time: '5:30 PM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Friday', maxSpots: 30, bookedSpots: 20, intensity: 'High' },
  // Saturday
  { id: 's1', classTypeId: 'hiit', name: 'Weekend HIIT', time: '8:00 AM', duration: '45 min', instructor: 'Mike Johnson', studio: 'Studio A', date: 'Saturday', maxSpots: 20, bookedSpots: 16, intensity: 'High' },
  { id: 's2', classTypeId: 'yoga', name: 'Yoga Flow', time: '9:00 AM', duration: '75 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Saturday', maxSpots: 25, bookedSpots: 22, intensity: 'Low' },
  { id: 's3', classTypeId: 'spin', name: 'Spin', time: '10:00 AM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Saturday', maxSpots: 30, bookedSpots: 18, intensity: 'High' },
  { id: 's4', classTypeId: 'boxing', name: 'Boxing', time: '11:00 AM', duration: '60 min', instructor: 'Mike Johnson', studio: 'Boxing Area', date: 'Saturday', maxSpots: 16, bookedSpots: 12, intensity: 'High' },
  // Sunday
  { id: 'su1', classTypeId: 'yoga', name: 'Restorative Yoga', time: '9:00 AM', duration: '75 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Sunday', maxSpots: 25, bookedSpots: 15, intensity: 'Low' },
  { id: 'su2', classTypeId: 'spin', name: 'Easy Spin', time: '10:00 AM', duration: '45 min', instructor: 'Carlos Rivera', studio: 'Spin Room', date: 'Sunday', maxSpots: 30, bookedSpots: 12, intensity: 'Medium' },
  { id: 'su3', classTypeId: 'pilates', name: 'Pilates', time: '11:00 AM', duration: '50 min', instructor: 'Sarah Chen', studio: 'Studio B', date: 'Sunday', maxSpots: 20, bookedSpots: 10, intensity: 'Medium' },
]

export const MEMBERSHIP: MembershipPlan[] = [
  {
    name: "Day Pass",
    price: 25,
    period: "per visit",
    features: ["Full gym access", "All classes included", "Locker room access", "Free parking"],
    featured: false,
  },
  {
    name: "Monthly",
    price: 79,
    period: "/month",
    features: ["Unlimited gym access", "All classes included", "1 PT session/month", "Free parking", "Towel service", "Guest pass (1/month)"],
    featured: true,
  },
  {
    name: "Annual",
    price: 59,
    period: "/month",
    features: ["Everything in Monthly", "2 PT sessions/month", "Guest passes (2/month)", "Nutrition consultation", "Merchandise discount", "Priority booking"],
    featured: false,
    note: "Billed annually ($708/year) — Save $240",
  },
]

export const COMPARISON_FEATURES = [
  { name: 'Gym Access', dayPass: true, monthly: true, annual: true },
  { name: 'All Classes', dayPass: true, monthly: true, annual: true },
  { name: 'Locker Room', dayPass: true, monthly: true, annual: true },
  { name: 'Free Parking', dayPass: true, monthly: true, annual: true },
  { name: 'Towel Service', dayPass: false, monthly: true, annual: true },
  { name: 'Guest Passes', dayPass: false, monthly: '1/mo', annual: '2/mo' },
  { name: 'PT Sessions', dayPass: false, monthly: '1/mo', annual: '2/mo' },
  { name: 'Nutrition Consult', dayPass: false, monthly: false, annual: true },
  { name: 'Priority Booking', dayPass: false, monthly: false, annual: true },
  { name: 'Merch Discount', dayPass: false, monthly: false, annual: '10%' },
]

export const ADDONS: AddOn[] = [
  {
    id: 'personal-training',
    name: 'Personal Training',
    price: 199,
    period: '/month',
    description: 'One-on-one sessions with certified trainers',
    features: ['4 sessions per month', 'Custom workout program', 'Progress tracking', 'Nutrition guidance'],
    icon: '🏋️',
  },
  {
    id: 'nutrition-coaching',
    name: 'Nutrition Coaching',
    price: 99,
    period: '/month',
    description: 'Expert guidance on your diet and nutrition',
    features: ['Weekly check-ins', 'Custom meal plans', 'Macro tracking', 'Recipe library access'],
    icon: '🥗',
  },
  {
    id: 'locker-rental',
    name: 'Premium Locker',
    price: 25,
    period: '/month',
    description: 'Your own dedicated locker space',
    features: ['Full-size locker', 'Keep your gear here', 'Built-in charging', 'Prime location'],
    icon: '🔐',
  },
]

export const MEMBERSHIP_FAQS: FAQ[] = [
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year at no additional cost. Simply visit the front desk or contact us to request a freeze.',
  },
  {
    question: "What's included in the free trial?",
    answer: 'Our 7-day free trial includes full gym access, all classes, locker room access, and free parking. No credit card required to start.',
  },
  {
    question: 'How do I cancel my membership?',
    answer: "You can cancel anytime with 30 days notice. Visit the front desk or email us at info@ironathletics.com. There are no cancellation fees.",
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can change your membership tier at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do you offer corporate rates?',
    answer: 'Yes, we offer special corporate rates for companies with 5+ employees. Contact us for a custom quote and team discount.',
  },
  {
    question: "What's your refund policy?",
    answer: 'We offer a full refund within the first 7 days of a new membership if you decide the gym is not right for you.',
  },
]

export const TRAINERS: Trainer[] = [
  { name: "Mike Johnson", specialty: "HIIT & Conditioning", cert: "NASM-CPT", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=600&fit=crop&q=85" },
  { name: "Sarah Chen", specialty: "Yoga & Mobility", cert: "RYT-500", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop&q=85" },
  { name: "Carlos Rivera", specialty: "Cycling & Cardio", cert: "ACE-CPT", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop&q=85" },
  { name: "Alex Thompson", specialty: "Strength & Power", cert: "CSCS", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&q=85" },
]

export const TRAINERS_EXPANDED: TrainerExpanded[] = [
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    specialty: 'HIIT & Conditioning',
    cert: 'NASM-CPT',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=600&fit=crop&q=85',
    bio: 'Mike has been transforming lives through fitness for over 10 years. A former college athlete turned fitness coach, he specializes in high-intensity training that builds both strength and endurance.',
    quote: 'I believe everyone has an athlete inside them waiting to be unleashed.',
    certifications: ['NASM Certified Personal Trainer', 'CrossFit Level 2', 'TRX Suspension Training', 'Precision Nutrition L1'],
    specialties: ['HIIT', 'Conditioning', 'Weight Loss', 'Athletic Performance'],
    schedule: [
      { day: 'Monday', time: '6:00 AM', class: 'HIIT' },
      { day: 'Monday', time: '5:30 PM', class: 'Boxing' },
      { day: 'Tuesday', time: '7:00 AM', class: 'HIIT' },
      { day: 'Wednesday', time: '6:00 AM', class: 'HIIT' },
      { day: 'Thursday', time: '7:00 AM', class: 'HIIT' },
      { day: 'Friday', time: '6:00 AM', class: 'HIIT' },
      { day: 'Saturday', time: '8:00 AM', class: 'Weekend HIIT' },
    ],
    socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com/mikefitness', handle: '@mikefitness' }],
    bookingUrl: '#book-mike',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    specialty: 'Yoga & Mobility',
    cert: 'RYT-500',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop&q=85',
    bio: "Sarah's yoga journey began 15 years ago and has taken her around the world studying various traditions. She brings a holistic approach to fitness, combining movement, breathwork, and mindfulness.",
    quote: 'Strength without flexibility is incomplete. True fitness encompasses both body and mind.',
    certifications: ['RYT-500 Registered Yoga Teacher', 'Yoga Alliance E-RYT', 'Pilates Mat Certification', 'Meditation Teacher Training'],
    specialties: ['Yoga Flow', 'Mobility', 'Recovery', 'Mindfulness'],
    schedule: [
      { day: 'Monday', time: '7:00 AM', class: 'Yoga Flow' },
      { day: 'Monday', time: '6:30 PM', class: 'Pilates' },
      { day: 'Tuesday', time: '12:00 PM', class: 'Power Yoga' },
      { day: 'Wednesday', time: '7:00 AM', class: 'Yoga Flow' },
      { day: 'Thursday', time: '6:00 AM', class: 'Yoga Flow' },
      { day: 'Friday', time: '7:00 AM', class: 'Yoga Flow' },
      { day: 'Saturday', time: '9:00 AM', class: 'Yoga Flow' },
      { day: 'Sunday', time: '9:00 AM', class: 'Restorative Yoga' },
    ],
    socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com/sarahyogaflow', handle: '@sarahyogaflow' }],
    bookingUrl: '#book-sarah',
  },
  {
    id: 'carlos-rivera',
    name: 'Carlos Rivera',
    specialty: 'Cycling & Cardio',
    cert: 'ACE-CPT',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop&q=85',
    bio: "Carlos's energy is contagious. A former competitive cyclist, he brings that same intensity to every spin class. His classes are known for killer playlists and motivation that pushes you past your limits.",
    quote: "The bike doesn't lie. Every drop of sweat is a step toward your goals.",
    certifications: ['ACE Certified Personal Trainer', 'Spinning® Master Instructor', 'Heart Rate Performance Specialist'],
    specialties: ['Indoor Cycling', 'Cardio Training', 'Endurance', 'Heart Rate Training'],
    schedule: [
      { day: 'Monday', time: '8:00 AM', class: 'Spin' },
      { day: 'Tuesday', time: '6:00 AM', class: 'Spin' },
      { day: 'Wednesday', time: '5:30 PM', class: 'Spin' },
      { day: 'Thursday', time: '5:30 PM', class: 'Spin' },
      { day: 'Friday', time: '5:30 PM', class: 'Spin' },
      { day: 'Saturday', time: '10:00 AM', class: 'Spin' },
      { day: 'Sunday', time: '10:00 AM', class: 'Easy Spin' },
    ],
    socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com/carlosspins', handle: '@carlosspins' }],
    bookingUrl: '#book-carlos',
  },
  {
    id: 'alex-thompson',
    name: 'Alex Thompson',
    specialty: 'Strength & Power',
    cert: 'CSCS',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&q=85',
    bio: 'Alex holds a degree in Exercise Science and has worked with athletes from high school to professional levels. His methodical approach to strength training produces consistent, measurable results.',
    quote: 'Progressive overload is the key to all gains. Train smart, lift heavy, recover well.',
    certifications: ['NSCA Certified Strength & Conditioning Specialist', 'USA Weightlifting L2', 'FMS Certified', 'Sports Nutrition Specialist'],
    specialties: ['Strength Training', 'Powerlifting', 'Athletic Performance', 'Muscle Building'],
    schedule: [
      { day: 'Monday', time: '12:00 PM', class: 'Strength' },
      { day: 'Tuesday', time: '5:30 PM', class: 'Strength' },
      { day: 'Wednesday', time: '6:30 PM', class: 'Strength' },
      { day: 'Friday', time: '12:00 PM', class: 'Strength' },
    ],
    socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com/alexlifts', handle: '@alexlifts' }],
    bookingUrl: '#book-alex',
  },
]

export const AMENITIES: Amenity[] = [
  { icon: <WeightIcon className="w-8 h-8" />, name: "Weight Room", desc: "10,000 sq ft of free weights & machines" },
  { icon: <BikeIcon className="w-8 h-8" />, name: "Spin Studio", desc: "30 bikes with immersive screens" },
  { icon: <YogaIcon className="w-8 h-8" />, name: "Yoga Studio", desc: "Heated studio for hot yoga" },
  { icon: <BoxingIcon className="w-8 h-8" />, name: "Boxing Area", desc: "Heavy bags & speed bags" },
  { icon: <ShowerIcon className="w-8 h-8" />, name: "Locker Rooms", desc: "Luxury amenities & sauna" },
  { icon: <ParkingIcon className="w-8 h-8" />, name: "Free Parking", desc: "Convenient lot parking" },
]

export const STATS: Stat[] = [
  { value: "10K+", label: "Members" },
  { value: "50+", label: "Classes/Week" },
  { value: "15", label: "Trainers" },
  { value: "24/7", label: "Access" },
]

export const GYM_VALUES: GymValue[] = [
  {
    icon: '💪',
    title: 'Strength',
    description: 'Push beyond your limits. Every rep, every set, every day.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Train together, grow together. You\'re never alone here.',
  },
  {
    icon: '🎯',
    title: 'Results',
    description: 'Science-backed programming that delivers real outcomes.',
  },
  {
    icon: '🔥',
    title: 'Passion',
    description: 'We live and breathe fitness. It\'s not just a job, it\'s who we are.',
  },
]

export const FACILITIES: Facility[] = [
  { name: 'Weight Room', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=85' },
  { name: 'Spin Studio', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop&q=85' },
  { name: 'Yoga Studio', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop&q=85' },
  { name: 'Boxing Area', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&q=85' },
  { name: 'Locker Room', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=85' },
  { name: 'Lounge', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=85' },
]

export const EQUIPMENT: EquipmentCategory[] = [
  {
    name: 'Free Weights',
    items: ['Dumbbells 5-120 lbs', 'Olympic platforms (6)', 'Power racks (8)', 'Barbells & bumper plates'],
  },
  {
    name: 'Cardio',
    items: ['30 Peloton bikes', '20 treadmills', '15 ellipticals', '10 rowers'],
  },
  {
    name: 'Machines',
    items: ['Full Hammer Strength line', 'Cable machines (12)', 'Leg press, hack squat', 'Smith machines (4)'],
  },
  {
    name: 'Functional',
    items: ['TRX stations (10)', 'Battle ropes', 'Plyo boxes', 'Kettlebells 10-100 lbs'],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Pre-Workout Nutrition',
    slug: 'pre-workout-nutrition-guide',
    excerpt: 'What you eat before training can make or break your workout. Here\'s the science-backed guide to fueling your sessions.',
    category: 'Nutrition',
    author: { name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=85',
    readTime: 5,
    publishedAt: '2025-01-15',
    featured: true,
  },
  {
    id: '2',
    title: '5 HIIT Workouts You Can Do Anywhere',
    slug: 'hiit-workouts-anywhere',
    excerpt: 'No gym? No problem. These high-intensity workouts require zero equipment and can be done in any space.',
    category: 'Workouts',
    author: { name: 'Mike Johnson', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=85',
    readTime: 4,
    publishedAt: '2025-01-12',
  },
  {
    id: '3',
    title: 'Sleep & Muscle Recovery: What Science Says',
    slug: 'sleep-muscle-recovery',
    excerpt: 'Your gains happen while you sleep. Discover how quality rest impacts your fitness progress.',
    category: 'Recovery',
    author: { name: 'Alex Thompson', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop&q=85',
    readTime: 6,
    publishedAt: '2025-01-10',
  },
  {
    id: '4',
    title: 'Protein Myths Debunked',
    slug: 'protein-myths-debunked',
    excerpt: 'Separate fact from fiction when it comes to protein intake, timing, and supplementation.',
    category: 'Nutrition',
    author: { name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=600&fit=crop&q=85',
    readTime: 5,
    publishedAt: '2025-01-08',
  },
  {
    id: '5',
    title: "Beginner's Guide to Strength Training",
    slug: 'beginners-strength-training',
    excerpt: 'New to lifting? This comprehensive guide covers everything you need to start building strength safely.',
    category: 'Workouts',
    author: { name: 'Alex Thompson', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&h=600&fit=crop&q=85',
    readTime: 8,
    publishedAt: '2025-01-05',
  },
  {
    id: '6',
    title: 'The Mental Game: Mindset for Fitness Success',
    slug: 'mental-game-fitness',
    excerpt: 'Your mind is your most powerful muscle. Learn the mental strategies elite athletes use.',
    category: 'Mindset',
    author: { name: 'Mike Johnson', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=100&h=100&fit=crop&q=85' },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=85',
    readTime: 5,
    publishedAt: '2025-01-02',
  },
]

export const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const
