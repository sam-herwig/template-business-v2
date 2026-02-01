'use client'

import { useRef } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Nav, Footer } from '@/app/components'
import { Breadcrumbs, BlogCard, NewsletterSignup } from '@/app/components/shared'
import type { BlogPost } from '@/app/types'

// ═══════════════════════════════════════════════════════════════
// BLOG POST PAGE
// Full article with related posts and newsletter signup
// ═══════════════════════════════════════════════════════════════

const BLOG_POSTS: Record<string, BlogPost & { content: string }> = {
  'future-of-brand-design-ai-era': {
    slug: 'future-of-brand-design-ai-era',
    title: 'The Future of Brand Design in the AI Era',
    excerpt: 'How artificial intelligence is reshaping creative workflows and what it means for designers who want to stay ahead.',
    category: 'Design',
    publishedAt: '2025-01-28',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop',
    author: { name: 'Alex Rivera', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    content: `
      <p>The creative industry is experiencing its most significant transformation since the advent of digital design tools. Artificial intelligence isn't just another tool in our toolkit—it's fundamentally changing how we approach the creative process.</p>

      <h2>The Changing Landscape</h2>
      <p>When Adobe integrated AI features into Creative Cloud, it marked a turning point. Suddenly, tasks that once took hours could be accomplished in minutes. But this efficiency gain raises important questions: What does it mean to be a designer in an age when AI can generate images, write copy, and even suggest entire brand systems?</p>
      
      <p>The answer, we believe, lies in understanding what AI can and cannot do. While AI excels at pattern recognition and generating variations, it lacks the ability to truly understand human emotion, cultural context, and strategic intent. These remain firmly in the domain of human creativity.</p>

      <h2>Embracing AI as a Creative Partner</h2>
      <p>At Studio, we've begun integrating AI tools into our workflow—not as a replacement for human creativity, but as an accelerant. Here's how we're thinking about it:</p>
      
      <ul>
        <li><strong>Research and Discovery:</strong> AI helps us analyze competitor landscapes and identify trends faster than ever.</li>
        <li><strong>Ideation:</strong> We use AI to generate initial concepts that serve as jumping-off points for exploration.</li>
        <li><strong>Iteration:</strong> AI allows us to test more variations in less time, leading to more refined outcomes.</li>
        <li><strong>Production:</strong> Routine tasks like image resizing and format conversion are increasingly automated.</li>
      </ul>

      <h2>The Human Element</h2>
      <p>Despite these advances, the most valuable aspects of design work remain deeply human. Strategy, empathy, and the ability to understand what a brand truly needs—these skills are more valuable than ever. As AI handles the mundane, designers are freed to focus on what matters most: creating meaningful connections between brands and people.</p>

      <h2>Looking Ahead</h2>
      <p>The designers who thrive in the coming years won't be those who resist AI, nor those who rely on it entirely. They'll be the ones who learn to dance with it—using AI to amplify their creativity while maintaining the human judgment that makes great design possible.</p>
      
      <p>The future of brand design isn't human vs. machine. It's human and machine, working together to create experiences that neither could achieve alone.</p>
    `,
  },
  'designing-for-emotional-connection': {
    slug: 'designing-for-emotional-connection',
    title: 'Designing for Emotional Connection',
    excerpt: 'Why the best brands don\'t just look good—they make you feel something.',
    category: 'Strategy',
    publishedAt: '2025-01-21',
    readTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=1080&fit=crop',
    author: { name: 'Jordan Kim', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    content: `
      <p>Think about the brands you love. Really love. Chances are, your connection to them goes beyond their products or services. You feel something when you interact with them. That feeling is the result of intentional emotional design.</p>

      <h2>The Science of Emotion</h2>
      <p>Neuroscience tells us that emotions drive decisions. When we encounter a brand, our limbic system—the emotional center of the brain—responds before our rational mind even gets involved. This is why emotional design isn't just nice to have; it's essential.</p>

      <h2>Building Emotional Resonance</h2>
      <p>Creating emotional connections requires understanding your audience at a deep level. What are their aspirations? Their fears? Their values? The brands that resonate most are those that tap into these fundamental human truths.</p>

      <p>Here's our framework for emotional design:</p>
      
      <ul>
        <li><strong>Identify the core emotion:</strong> What do you want people to feel when they encounter your brand?</li>
        <li><strong>Map the journey:</strong> How does that emotion evolve across different touchpoints?</li>
        <li><strong>Design for consistency:</strong> Every element should reinforce the intended emotion.</li>
        <li><strong>Test and refine:</strong> Emotional responses can be measured. Use data to iterate.</li>
      </ul>

      <h2>Authenticity Is Non-Negotiable</h2>
      <p>Here's the catch: emotional design only works when it's authentic. Audiences can spot manufactured emotion from a mile away. The brands that create genuine connections are those that start with genuine values.</p>
    `,
  },
}

const RELATED_POSTS: BlogPost[] = [
  {
    slug: 'typography-trends-2025',
    title: 'Typography Trends to Watch in 2025',
    excerpt: 'From variable fonts to kinetic type, explore the typographic innovations shaping visual communication.',
    category: 'Design',
    publishedAt: '2025-01-07',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
  },
  {
    slug: 'our-design-process-revealed',
    title: 'Our Design Process, Revealed',
    excerpt: 'A behind-the-scenes look at how we approach projects from brief to launch.',
    category: 'Process',
    publishedAt: '2025-01-14',
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop',
  },
  {
    slug: 'brand-strategy-startups',
    title: 'Brand Strategy for Startups',
    excerpt: 'How early-stage companies can build great brands without massive budgets.',
    category: 'Strategy',
    publishedAt: '2024-12-15',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop',
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = BLOG_POSTS[slug]
  
  const pageRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: 'words' })
        gsap.from(split.words, {
          y: 50,
          opacity: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        })
      }

      // Featured image
      gsap.from('.post-image', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4,
      })

      // Content
      gsap.from('.post-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.post-content',
          start: 'top 85%',
        },
      })

      // Related posts
      gsap.from('.related-post', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.related-section',
          start: 'top 80%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [slug])

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <main ref={pageRef}>
      <Nav />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <article className="bg-dark-950 pt-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-primary-500 text-sm uppercase tracking-wider font-medium mb-4 block">
              {post.category}
            </span>
            <h1
              ref={titleRef}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-dark-400">
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Author */}
          {post.author && (
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-dark-800">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="text-dark-500 text-sm">Written by</span>
                <p className="font-medium text-white">{post.author.name}</p>
              </div>
            </div>
          )}
        </div>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="post-image relative aspect-[21/9] overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="post-content prose prose-lg prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & Back */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-dark-800">
            <div className="flex items-center gap-4">
              <span className="text-dark-500 text-sm uppercase tracking-wider">Share</span>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://studio.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-dark-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://studio.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-dark-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-dark-400 hover:text-white transition-colors text-sm uppercase tracking-wider flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="related-section bg-dark-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-12">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((relatedPost) => (
              <div key={relatedPost.slug} className="related-post">
                <BlogCard post={relatedPost} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </main>
  )
}
