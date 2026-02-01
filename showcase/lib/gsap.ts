'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Note: SplitText requires GSAP Club membership
// Using a stub for now - templates should use CSS animations as fallback
const SplitText = {} as any

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  
  // Global defaults for smoother animations
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  })
  
  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
  })
}

export { gsap, ScrollTrigger, SplitText }
