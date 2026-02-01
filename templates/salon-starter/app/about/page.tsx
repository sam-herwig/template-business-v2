'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Leaf, Sparkles, Award, ArrowRight } from 'lucide-react'
import { Nav, Footer } from '@/components/layout'
import { PageHero, Breadcrumbs } from '@/components/shared'

const VALUES = [
  {
    icon: Heart,
    title: "Client First",
    description: "Your satisfaction and comfort are our top priorities. We listen, consult, and deliver results that exceed expectations."
  },
  {
    icon: Sparkles,
    title: "Quality & Excellence",
    description: "We use only premium products and stay current with the latest techniques to deliver exceptional results every time."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to eco-friendly practices, from sustainable products to recycling programs in our salon."
  },
]

const TOUR_IMAGES = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&q=85", alt: "Luxe Hair Studio reception area" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop&q=85", alt: "Styling stations with natural light" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=85", alt: "Color mixing station" },
  { src: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&h=400&fit=crop&q=85", alt: "Comfortable shampoo bowls" },
]

const PRESS_LOGOS = [
  { name: "Vogue", image: "/press/vogue.svg" },
  { name: "Elle", image: "/press/elle.svg" },
  { name: "Harper's Bazaar", image: "/press/harpers.svg" },
  { name: "InStyle", image: "/press/instyle.svg" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  }
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <PageHero
          eyebrow="About Us"
          title="Our Story"
          description="Where passion for beauty meets dedication to craft"
          backgroundImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=800&fit=crop&q=80"
        />
        
        {/* Story Section */}
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={[{ label: 'About' }]} className="mb-12" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=750&fit=crop&q=85"
                    alt="Sarah Johnson, Founder of Luxe Hair Studio"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Our Beginning</span>
                <h2 className="section-title mb-6">Founded on Passion</h2>
                
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    In 2015, Sarah Johnson opened the doors to Luxe Hair Studio with a simple mission: 
                    to create a space where artistry meets relaxation, and every client leaves feeling 
                    like the best version of themselves.
                  </p>
                  <p>
                    After training in New York and Paris under master colorists and stylists, Sarah 
                    returned home with a vision for a salon that combined world-class technique with 
                    a warm, welcoming atmosphere.
                  </p>
                  <p>
                    What started as a two-chair studio has grown into a full-service salon with a team 
                    of talented artists who share Sarah's commitment to excellence and continuous learning.
                  </p>
                </div>
                
                <blockquote className="mt-8 pl-6 border-l-4 border-primary-400 italic text-neutral-700">
                  "Every person who sits in our chair deserves to feel heard, valued, and beautiful. 
                  That's not just our mission—it's our promise."
                  <footer className="mt-2 text-sm text-primary-600 font-semibold not-italic">
                    — Sarah Johnson, Founder
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">What We Believe</span>
              <h2 className="section-title">Our Values</h2>
              <div className="divider" aria-hidden="true" />
            </motion.div>
            
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {VALUES.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    className="text-center p-8 bg-white rounded-3xl shadow-sm"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-display text-xl text-neutral-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
        
        {/* Salon Tour */}
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Take a Tour</span>
              <h2 className="section-title">Our Space</h2>
              <div className="divider" aria-hidden="true" />
              <p className="section-description mx-auto">
                A thoughtfully designed space where creativity flourishes
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {TOUR_IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative rounded-2xl overflow-hidden ${
                    i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-video md:aspect-square'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Press Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-6 text-neutral-500">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Award-Winning Salon</span>
              </div>
              <p className="text-neutral-600 mb-8">As featured in</p>
              
              {/* Press logos placeholder */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
                {PRESS_LOGOS.map((logo) => (
                  <div 
                    key={logo.name}
                    className="h-8 flex items-center text-neutral-400 font-display text-2xl"
                  >
                    {logo.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Meet the Team CTA */}
        <section className="section-padding bg-primary-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
                Meet the Team
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Get to know the talented artists who bring our vision to life every day.
              </p>
              <Link 
                href="/team" 
                className="btn-primary bg-white text-primary-700 hover:bg-white/90 group"
              >
                Meet Our Stylists
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
