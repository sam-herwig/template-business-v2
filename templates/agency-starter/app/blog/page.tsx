'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Nav, Footer } from '@/app/components'
import { PageHero, FilterTabs, BlogCard, NewsletterSignup } from '@/app/components/shared'
import type { BlogPost } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// BLOG/INSIGHTS PAGE
// Featured posts with category filtering and newsletter signup
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = ['All', 'Design', 'Strategy', 'Process', 'Industry']

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-brand-design-ai-era',
    title: 'The Future of Brand Design in the AI Era',
    excerpt: 'How artificial intelligence is reshaping creative workflows and what it means for designers who want to stay ahead.',
    category: 'Design',
    publishedAt: '2025-01-28',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
    author: { name: 'Alex Rivera', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  },
  {
    slug: 'designing-for-emotional-connection',
    title: 'Designing for Emotional Connection',
    excerpt: 'Why the best brands don\'t just look good—they make you feel something. A deep dive into emotional design principles.',
    category: 'Strategy',
    publishedAt: '2025-01-21',
    readTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
    author: { name: 'Jordan Kim', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  },
  {
    slug: 'our-design-process-revealed',
    title: 'Our Design Process, Revealed',
    excerpt: 'A behind-the-scenes look at how we approach projects from brief to launch. Frameworks, tools, and lessons learned.',
    category: 'Process',
    publishedAt: '2025-01-14',
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop',
    author: { name: 'Maya Chen', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  },
  {
    slug: 'typography-trends-2025',
    title: 'Typography Trends to Watch in 2025',
    excerpt: 'From variable fonts to kinetic type, explore the typographic innovations shaping visual communication this year.',
    category: 'Design',
    publishedAt: '2025-01-07',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    author: { name: 'Jordan Kim', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  },
  {
    slug: 'building-design-systems-scale',
    title: 'Building Design Systems That Scale',
    excerpt: 'Lessons from creating design systems for enterprise clients. How to balance flexibility with consistency.',
    category: 'Process',
    publishedAt: '2024-12-28',
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=800&fit=crop',
    author: { name: 'Maya Chen', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  },
  {
    slug: 'state-of-creative-industry',
    title: 'The State of the Creative Industry',
    excerpt: 'Our annual review of trends, challenges, and opportunities in the design and branding space.',
    category: 'Industry',
    publishedAt: '2024-12-20',
    readTime: 10,
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    author: { name: 'Sam Okonkwo', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
  },
  {
    slug: 'brand-strategy-startups',
    title: 'Brand Strategy for Startups: Where to Begin',
    excerpt: 'You don\'t need a massive budget to build a great brand. Here\'s how early-stage companies can punch above their weight.',
    category: 'Strategy',
    publishedAt: '2024-12-15',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop',
    author: { name: 'Sam Okonkwo', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredPosts =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory)

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.featured-post', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.blog-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.2,
      })
    }, gridRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <main>
      <Nav />
      <PageHero
        title="Insights"
        subtitle="Thoughts on design, strategy, and building brands that last."
      />

      {/* Filter Section */}
      <section className="bg-dark-950 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <FilterTabs
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-dark-950 py-12 md:py-20" ref={gridRef}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post */}
          {featuredPost && (
            <div className="featured-post mb-12">
              <BlogCard post={featuredPost} variant="featured" />
            </div>
          )}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingPosts.map((post) => (
              <div key={post.slug} className="blog-card">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Load More */}
          {remainingPosts.length >= 6 && (
            <div className="text-center mt-12">
              <button className="btn-outline text-sm uppercase tracking-wider">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </main>
  )
}
