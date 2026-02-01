'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import {
  Nav,
  Footer,
  PageHero,
  SectionHeader,
  BlogCard,
  CategoryFilter,
  ResourceCard,
  NewsletterForm,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// BLOG PAGE DATA
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = [
  { name: 'Mindset', slug: 'mindset', count: 8 },
  { name: 'Business Strategy', slug: 'business-strategy', count: 12 },
  { name: 'Productivity', slug: 'productivity', count: 6 },
  { name: 'Behind the Scenes', slug: 'behind-the-scenes', count: 4 },
  { name: 'Client Stories', slug: 'client-stories', count: 5 },
]

const FEATURED_POST = {
  title: 'The One Mindset Shift That Changed Everything',
  excerpt: "For years, I believed that working harder was the answer. If I just put in more hours, tweaked my offer one more time, or found the perfect marketing strategy, everything would click. Spoiler: it didn't. Here's what actually changed the game.",
  category: 'Mindset',
  categorySlug: 'mindset',
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
  slug: 'mindset-shift-that-changed-everything',
  readTime: 5,
  publishedAt: '2025-01-15',
}

const BLOG_POSTS = [
  {
    title: 'How to Price Your Services (Without the Guilt)',
    excerpt: "Pricing is one of the most emotional decisions in business. Here's how to set rates that reflect your value — and actually feel good about them.",
    category: 'Business Strategy',
    categorySlug: 'business-strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    slug: 'how-to-price-your-services',
    readTime: 7,
    publishedAt: '2025-01-10',
  },
  {
    title: 'The 90-Day Focus Framework',
    excerpt: 'Stop trying to do everything at once. This simple framework helps you prioritize what actually matters and make real progress.',
    category: 'Productivity',
    categorySlug: 'productivity',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
    slug: '90-day-focus-framework',
    readTime: 4,
    publishedAt: '2025-01-05',
  },
  {
    title: 'What I Learned From My Biggest Business Failure',
    excerpt: "In 2019, I launched a program that completely flopped. Here's what went wrong and what it taught me about resilience.",
    category: 'Behind the Scenes',
    categorySlug: 'behind-the-scenes',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=250&fit=crop',
    slug: 'biggest-business-failure',
    readTime: 6,
    publishedAt: '2024-12-28',
  },
  {
    title: 'From Side Hustle to Full-Time: Amanda\'s Story',
    excerpt: 'How Amanda went from barely making ends meet to a thriving full-time coaching business in 8 months.',
    category: 'Client Stories',
    categorySlug: 'client-stories',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
    slug: 'amanda-side-hustle-to-fulltime',
    readTime: 5,
    publishedAt: '2024-12-20',
  },
  {
    title: 'Why "Balance" Is a Myth (And What to Focus on Instead)',
    excerpt: 'Stop chasing the impossible. Here\'s a more realistic approach to managing your time and energy.',
    category: 'Mindset',
    categorySlug: 'mindset',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    slug: 'balance-is-a-myth',
    readTime: 4,
    publishedAt: '2024-12-15',
  },
  {
    title: '5 Signs You Need to Raise Your Prices',
    excerpt: "Afraid you'll lose clients if you charge more? Here's how to know when it's time (and how to do it right).",
    category: 'Business Strategy',
    categorySlug: 'business-strategy',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop',
    slug: 'signs-you-need-to-raise-prices',
    readTime: 5,
    publishedAt: '2024-12-10',
  },
]

const RESOURCES = [
  { type: 'guide' as const, title: 'The 5 Shifts Guide', description: 'The exact mindset and strategy shifts that took me from burnout to $20K months.', ctaLabel: 'Download Free', ctaHref: '#' },
  { type: 'tool' as const, title: 'Pricing Calculator', description: 'Figure out what you should be charging based on your goals and lifestyle.', ctaLabel: 'Use the Tool', ctaHref: '#' },
  { type: 'podcast' as const, title: 'The Build Different Podcast', description: 'Weekly conversations about building a business that fits your life.', ctaLabel: 'Listen Now', ctaHref: '#' },
]

// ═══════════════════════════════════════════════════════════════
// BLOG PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const blogRef = useRef<HTMLElement>(null)

  const filteredPosts = activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.categorySlug === activeCategory)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.blog-card-animate', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 75%',
        },
      })
    }, blogRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <main id="main-content" className="bg-cream-100">
      <Nav />
      
      {/* Hero with Newsletter */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-cream-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-eyebrow mb-4">The Blog</p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-900 leading-tight mb-4">
            Insights for Ambitious Women
          </h1>
          <p className="text-lg text-primary-800/70 mb-8">
            Business strategy, mindset shifts, and the honest truth about building something meaningful.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm
              variant="minimal"
              buttonLabel="Subscribe"
            />
            <p className="text-sm text-primary-800/50 mt-3">
              Join 5,000+ women getting weekly insights
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream-200 border-b border-cream-300">
        <div className="max-w-6xl mx-auto px-6">
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'all' && (
        <section className="py-12 md:py-16 bg-cream-100">
          <div className="max-w-6xl mx-auto px-6">
            <BlogCard {...FEATURED_POST} featured />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section ref={blogRef} className="py-12 md:py-16 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <div key={post.slug} className="blog-card-animate">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-800/60">No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Free Resources to Get You Started"
            description="Actionable tools and guides you can use right now."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {RESOURCES.map((resource, i) => (
              <ResourceCard key={i} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-sage-400">
        <div className="max-w-xl mx-auto px-6">
          <NewsletterForm
            variant="card"
            headline="Get Weekly Insights Delivered"
            description="Join thousands of women building businesses they love. No spam, just real talk."
            buttonLabel="Subscribe"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
