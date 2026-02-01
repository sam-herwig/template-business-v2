'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Image from 'next/image'
import Link from 'next/link'
import {
  Nav,
  Footer,
  SectionHeader,
  BlogCard,
  ShareButtons,
  AuthorBio,
  NewsletterForm,
  CTASection,
} from '@/components'

// ═══════════════════════════════════════════════════════════════
// BLOG POST DATA (In production, this would come from Sanity CMS)
// ═══════════════════════════════════════════════════════════════

const POST = {
  title: 'The One Mindset Shift That Changed Everything',
  category: { name: 'Mindset', slug: 'mindset' },
  author: {
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    bio: 'Sarah Mitchell is a business coach who helps ambitious women build businesses that give them freedom, fulfillment, and a really good income. After burning out twice in corporate, she cracked the code on sustainable success.',
  },
  publishedAt: '2025-01-15',
  readTime: 5,
  featuredImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop',
  content: `
For years, I believed that working harder was the answer.

If I just put in more hours, tweaked my offer one more time, or found the perfect marketing strategy, everything would click. I was convinced that success was just on the other side of my next hustle.

Spoiler alert: it wasn't.

## The Hustle Trap

Like many of you, I started my business with big dreams and even bigger to-do lists. I was doing *all the things*:

- Posting on social media multiple times a day
- Creating new freebies every month
- Saying yes to every opportunity
- Working until midnight most nights

And you know what? I was exhausted. Burnt out. And honestly? Not making any more money than when I started.

> "I realized that working harder wasn't the solution — it was the problem."

## The Shift

Everything changed when I stopped asking "What else can I do?" and started asking "What can I *stop* doing?"

This was the mindset shift that changed everything for me:

**Success isn't about doing more. It's about doing less, better.**

I know, I know. It sounds almost too simple. But stay with me.

### What This Looks Like in Practice

Here's what happened when I embraced this shift:

1. **I stopped creating new offers** and focused on making my existing one irresistible
2. **I quit most social media** and doubled down on the one platform that actually worked
3. **I said no to 90% of "opportunities"** so I could say yes to the 10% that mattered
4. **I stopped working weekends** and somehow got *more* done during the week

The result? My business tripled in revenue while I worked fewer hours.

## How to Apply This to Your Business

If you're feeling stuck in the hustle trap, here's where to start:

### 1. Audit Your Activities

Make a list of everything you do in a week. Then ask yourself: "If I could only do THREE of these things, which would move the needle most?"

Those are your 3 priorities. Everything else is negotiable.

### 2. Embrace Constraints

Constraints aren't limitations — they're liberation. When you can't do everything, you're forced to do what matters.

Try this: Give yourself half the time you think you need for a project. You'll be surprised at what you can accomplish.

### 3. Measure What Matters

Stop tracking vanity metrics (followers, likes, impressions). Start tracking outcome metrics (clients signed, revenue generated, hours worked).

If an activity doesn't move those numbers, question whether it deserves your time.

## The Bottom Line

Here's the truth that took me years to learn:

You don't need to do more. You need to do less, more intentionally.

The women I work with who see the biggest results aren't the ones who work the hardest. They're the ones who work the *smartest* — who protect their energy, focus on what matters, and give themselves permission to do less.

What would change for you if you embraced this shift? I'd love to know.

---

*Want more insights like this? Join 5,000+ women getting my weekly newsletter. [Subscribe here →](/blog)*
  `,
  tags: ['mindset', 'business', 'growth', 'productivity'],
}

const RELATED_POSTS = [
  {
    title: 'The 90-Day Focus Framework',
    excerpt: 'Stop trying to do everything at once. This simple framework helps you prioritize what actually matters.',
    category: 'Productivity',
    categorySlug: 'productivity',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
    slug: '90-day-focus-framework',
    readTime: 4,
    publishedAt: '2025-01-05',
  },
  {
    title: 'Why "Balance" Is a Myth',
    excerpt: 'Stop chasing the impossible. Here\'s a more realistic approach to managing your time and energy.',
    category: 'Mindset',
    categorySlug: 'mindset',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    slug: 'balance-is-a-myth',
    readTime: 4,
    publishedAt: '2024-12-15',
  },
  {
    title: 'How to Price Your Services',
    excerpt: 'Set rates that reflect your value — and actually feel good about them.',
    category: 'Business Strategy',
    categorySlug: 'business-strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    slug: 'how-to-price-your-services',
    readTime: 7,
    publishedAt: '2025-01-10',
  },
]

// ═══════════════════════════════════════════════════════════════
// BLOG POST PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function BlogPostPage() {
  const articleRef = useRef<HTMLElement>(null)

  const formattedDate = new Date(POST.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.article-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.article-image', {
        scale: 1.05,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      })
    }, articleRef)

    return () => ctx.revert()
  }, [])

  return (
    <main id="main-content" className="bg-cream-100">
      <Nav />
      
      <article ref={articleRef} className="pt-28 md:pt-36">
        {/* Header */}
        <header className="article-header max-w-3xl mx-auto px-6 mb-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-800/60 hover:text-primary-800 mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <Link
            href={`/blog/category/${POST.category.slug}`}
            className="text-sage-500 font-medium text-sm uppercase tracking-wide hover:text-sage-600"
          >
            {POST.category.name}
          </Link>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-900 leading-tight mt-4 mb-6">
            {POST.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-primary-800/60">
            <Image
              src={POST.author.avatar}
              alt={POST.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>{POST.author.name}</span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{POST.readTime} min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-image max-w-4xl mx-auto px-6 mb-12">
          <Image
            src={POST.featuredImage}
            alt={POST.title}
            width={1200}
            height={600}
            className="rounded-2xl w-full object-cover aspect-video"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-2xl mx-auto px-6">
          <div 
            className="prose prose-lg prose-primary max-w-none
                       prose-headings:font-display prose-headings:text-primary-900
                       prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
                       prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                       prose-p:text-primary-800/80 prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-primary-600 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary-800
                       prose-strong:text-primary-900
                       prose-blockquote:bg-sage-100 prose-blockquote:border-l-4 prose-blockquote:border-sage-400
                       prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8
                       prose-blockquote:text-primary-900 prose-blockquote:italic prose-blockquote:not-italic
                       prose-ul:text-primary-800/80 prose-ol:text-primary-800/80
                       prose-li:marker:text-sage-400"
            dangerouslySetInnerHTML={{ __html: POST.content.replace(/\n/g, '<br/>').replace(/<br\/><br\/>/g, '</p><p>') }}
          />
        </div>

        {/* Share + Tags */}
        <div className="max-w-2xl mx-auto px-6 mt-12 pt-8 border-t border-cream-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ShareButtons
              title={POST.title}
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
            <div className="flex flex-wrap gap-2">
              {POST.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-primary-800/60 bg-cream-200 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="max-w-2xl mx-auto px-6 mt-12">
          <AuthorBio
            name={POST.author.name}
            avatar={POST.author.avatar}
            bio={POST.author.bio}
            links={[
              { label: 'Work With Me', href: '/book' },
              { label: 'More Articles', href: '/blog' },
            ]}
          />
        </div>

        {/* Inline CTA */}
        <div className="max-w-2xl mx-auto px-6 mt-12">
          <div className="bg-primary-500 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-white mb-3">Ready to Go Deeper?</h3>
            <p className="text-white/80 mb-6">
              Let's work together to transform your business.
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-medium hover:bg-cream-100 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 md:py-20 mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="You Might Also Like" />
          <div className="grid md:grid-cols-3 gap-8">
            {RELATED_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-xl mx-auto px-6">
          <NewsletterForm
            variant="card"
            headline="Get More Articles Like This"
            description="Join thousands of women getting weekly insights delivered to their inbox."
            buttonLabel="Subscribe"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
