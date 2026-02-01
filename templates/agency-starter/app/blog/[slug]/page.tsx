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
  'our-design-process-revealed': {
    slug: 'our-design-process-revealed',
    title: 'Our Design Process, Revealed',
    excerpt: 'A behind-the-scenes look at how we approach projects from brief to launch. Frameworks, tools, and lessons learned.',
    category: 'Process',
    publishedAt: '2025-01-14',
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&h=1080&fit=crop',
    author: { name: 'Maya Chen', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    content: `
      <p>After 12 years of refining our approach, we've developed a process that consistently delivers exceptional results. Today, we're pulling back the curtain to share exactly how we work.</p>

      <h2>Phase 1: Discovery</h2>
      <p>Every project begins with deep listening. We don't just take briefs at face value—we dig deeper to understand the real problem we're solving. This phase typically takes 1-2 weeks and includes:</p>
      
      <ul>
        <li><strong>Stakeholder interviews:</strong> Conversations with key decision-makers to understand goals and constraints.</li>
        <li><strong>Competitive analysis:</strong> Understanding the landscape and identifying opportunities for differentiation.</li>
        <li><strong>Audience research:</strong> Getting to know the people we're designing for through surveys, interviews, and data analysis.</li>
        <li><strong>Technical assessment:</strong> Evaluating existing systems and infrastructure requirements.</li>
      </ul>

      <h2>Phase 2: Strategy</h2>
      <p>Armed with insights from discovery, we develop a strategic foundation that guides all creative decisions. This is where we define the "why" behind the work.</p>
      
      <p>Deliverables include brand positioning, messaging frameworks, and experience principles. We present these as a "Strategy Playbook" that becomes the north star for the project.</p>

      <h2>Phase 3: Exploration</h2>
      <p>This is where creativity meets strategy. Our team generates multiple directions, each rooted in the strategic foundation but exploring different creative expressions.</p>
      
      <p>We believe in showing work early and often. Clients see rough concepts before we've fallen in love with any particular direction. This keeps the process collaborative and efficient.</p>

      <h2>Phase 4: Refinement</h2>
      <p>Once a direction is selected, we go deep. Every detail is considered, from color values to micro-interactions. This is where good work becomes great work.</p>

      <h2>Phase 5: Delivery</h2>
      <p>We don't just hand over files—we ensure successful implementation. This includes comprehensive documentation, developer handoffs, and launch support.</p>

      <h2>The Secret Ingredient</h2>
      <p>If there's one thing that makes our process work, it's communication. We maintain constant dialogue with clients, sharing progress and gathering feedback at every stage. No surprises, no last-minute changes—just steady progress toward a shared vision.</p>
    `,
  },
  'typography-trends-2025': {
    slug: 'typography-trends-2025',
    title: 'Typography Trends to Watch in 2025',
    excerpt: 'From variable fonts to kinetic type, explore the typographic innovations shaping visual communication this year.',
    category: 'Design',
    publishedAt: '2025-01-07',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop',
    author: { name: 'Jordan Kim', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    content: `
      <p>Typography has always been the backbone of great design. But in 2025, we're seeing type take center stage in ways that feel genuinely new. Here are the trends we're most excited about.</p>

      <h2>Variable Fonts Go Mainstream</h2>
      <p>Variable fonts have been around since 2016, but 2025 is the year they truly hit their stride. Designers are using the technology not just for performance benefits, but for creative expression—creating fluid typography that responds to user interaction and scrolling.</p>
      
      <p>We're particularly excited about variable fonts that include multiple axes, allowing for real-time adjustment of weight, width, slant, and optical size.</p>

      <h2>Kinetic Typography</h2>
      <p>Static text is becoming the exception. From subtle micro-animations to full-screen typographic experiences, motion is being used to guide attention and create emotional impact.</p>
      
      <ul>
        <li><strong>Scroll-triggered animations:</strong> Text that reveals, transforms, or reacts as users scroll.</li>
        <li><strong>Responsive kinetics:</strong> Typography that responds to cursor movement or device orientation.</li>
        <li><strong>Narrative type:</strong> Animated text that tells a story through motion.</li>
      </ul>

      <h2>Neo-Brutalist Type</h2>
      <p>The brutalist web design movement has evolved into something more refined. We're seeing bold, heavy typefaces used in ways that feel intentional rather than aggressive. Think Helvetica Now at 900 weight, set tight, in all caps.</p>

      <h2>Custom Typefaces</h2>
      <p>Brands are increasingly investing in custom typefaces as a way to stand out. A unique typeface is something competitors can't copy—it becomes a distinctive asset that compounds over time.</p>

      <h2>Accessibility-First Typography</h2>
      <p>The best designers are now considering accessibility from the start, not as an afterthought. This means generous line heights, appropriate contrast ratios, and typefaces designed for readability at all sizes.</p>

      <h2>Our Prediction</h2>
      <p>Typography in 2025 will be more dynamic, more expressive, and more personal than ever. The brands that invest in thoughtful type choices will have a significant advantage in capturing attention and building recognition.</p>
    `,
  },
  'building-design-systems-scale': {
    slug: 'building-design-systems-scale',
    title: 'Building Design Systems That Scale',
    excerpt: 'Lessons from creating design systems for enterprise clients. How to balance flexibility with consistency.',
    category: 'Process',
    publishedAt: '2024-12-28',
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1920&h=1080&fit=crop',
    author: { name: 'Maya Chen', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    content: `
      <p>A design system is like a living organism. Build it too rigid, and it breaks under pressure. Build it too loose, and chaos ensues. After creating systems for companies ranging from startups to Fortune 500s, here's what we've learned.</p>

      <h2>Start With Principles, Not Components</h2>
      <p>The most common mistake we see is jumping straight into component design. Instead, start by establishing the principles that will guide decisions when the system doesn't have an answer.</p>
      
      <p>Good principles are specific enough to be useful but flexible enough to allow creativity. "Use consistent spacing" is too vague. "Maintain an 8px spacing grid with exceptions allowed for optical adjustments" is actionable.</p>

      <h2>Design for the Edges</h2>
      <p>Your system will be judged not by how it handles common cases, but by how gracefully it handles edge cases. Consider:</p>
      
      <ul>
        <li>What happens when text is unexpectedly long?</li>
        <li>How do components behave at extreme viewport sizes?</li>
        <li>What if a user has high contrast mode enabled?</li>
        <li>How does the system accommodate content in different languages?</li>
      </ul>

      <h2>Documentation Is the Product</h2>
      <p>A design system without good documentation is just a component library. The documentation is what transforms raw materials into a usable tool.</p>
      
      <p>We recommend documenting not just the "what" but the "why." When people understand the reasoning behind decisions, they make better choices when the documentation doesn't cover their exact situation.</p>

      <h2>Plan for Evolution</h2>
      <p>The best design systems have built-in processes for change. This includes clear governance (who can propose changes?), versioning strategies, and deprecation policies.</p>

      <h2>Measure Adoption, Not Completeness</h2>
      <p>A 100-component system used by 10% of teams is less valuable than a 20-component system used by everyone. Focus on adoption metrics: How many teams are using the system? How often are they reaching for external solutions?</p>

      <h2>The Investment Pays Off</h2>
      <p>Design systems require significant upfront investment, but the returns compound over time. Teams ship faster, products are more consistent, and onboarding new designers becomes dramatically easier.</p>
    `,
  },
  'state-of-creative-industry': {
    slug: 'state-of-creative-industry',
    title: 'The State of the Creative Industry',
    excerpt: 'Our annual review of trends, challenges, and opportunities in the design and branding space.',
    category: 'Industry',
    publishedAt: '2024-12-20',
    readTime: 10,
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
    author: { name: 'Sam Okonkwo', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
    content: `
      <p>As we close out another year, it's worth stepping back to assess the state of our industry. Where are we now, and where are we headed?</p>

      <h2>The Macro Picture</h2>
      <p>The creative industry continues to grow, but the nature of that growth is changing. We're seeing consolidation at the top, with major agencies acquiring specialized studios. At the same time, the barrier to entry has never been lower, creating a vibrant ecosystem of independent practitioners.</p>
      
      <p>Client expectations have evolved significantly. The demand isn't just for beautiful work—it's for work that performs, that can be measured, and that delivers ROI.</p>

      <h2>Key Trends We're Tracking</h2>
      
      <h3>AI Integration</h3>
      <p>The conversation has shifted from "Will AI replace designers?" to "How do we work alongside AI?" The agencies that figure out the right balance will have a significant competitive advantage.</p>
      
      <h3>Sustainability in Design</h3>
      <p>Clients are increasingly asking about the environmental impact of their brand decisions. From sustainable packaging to carbon-conscious digital design, sustainability is becoming a core consideration.</p>
      
      <h3>Global-Local Tension</h3>
      <p>Brands need to work globally but feel local. This is driving demand for culturally nuanced design work that respects regional differences while maintaining brand coherence.</p>

      <h2>Challenges Ahead</h2>
      <p>The biggest challenge facing the industry is talent. Finding and retaining skilled designers is harder than ever. Remote work has expanded the talent pool geographically but created new challenges around culture and collaboration.</p>
      
      <p>Economic uncertainty is also impacting client budgets, leading to longer sales cycles and more competitive pitches.</p>

      <h2>Opportunities</h2>
      <p>Despite the challenges, we're optimistic. The companies that invest in brand during uncertain times emerge stronger when conditions improve. Smart clients understand this, creating opportunity for agencies that can demonstrate clear value.</p>

      <h2>Our Outlook</h2>
      <p>The next year will reward agencies that combine strategic thinking with execution excellence. Pure aesthetics aren't enough—clients want partners who understand their business and can connect creative work to business outcomes.</p>
    `,
  },
  'brand-strategy-startups': {
    slug: 'brand-strategy-startups',
    title: 'Brand Strategy for Startups: Where to Begin',
    excerpt: 'You don\'t need a massive budget to build a great brand. Here\'s how early-stage companies can punch above their weight.',
    category: 'Strategy',
    publishedAt: '2024-12-15',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop',
    author: { name: 'Sam Okonkwo', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
    content: `
      <p>Startups often think brand is something you worry about later—after you've found product-market fit, after you've raised your Series A. This is a mistake. Brand isn't a luxury; it's leverage.</p>

      <h2>Start With Why (Seriously)</h2>
      <p>Yes, Simon Sinek's advice has become cliché, but that's because it's true. Before you design anything, articulate why your company exists beyond making money. This becomes the foundation everything else builds on.</p>
      
      <p>The best startup brands have a clear, compelling reason for being. It doesn't need to be world-changing, but it needs to be genuine.</p>

      <h2>Find Your Edge</h2>
      <p>What can you credibly say that your competitors can't? This is your brand's edge. It might be your founder's unique background, your technical approach, or your business model. Whatever it is, lean into it.</p>
      
      <ul>
        <li>What's the story only you can tell?</li>
        <li>What perspective do you bring that's genuinely different?</li>
        <li>What customer truth have you uncovered that others have missed?</li>
      </ul>

      <h2>Invest in the Fundamentals</h2>
      <p>You don't need a comprehensive brand system at the start. Focus on getting these three things right:</p>
      
      <ul>
        <li><strong>Name:</strong> Choose something memorable, easy to spell, and available as a domain.</li>
        <li><strong>Logo:</strong> Simple and versatile beats complex and beautiful. You'll use it everywhere.</li>
        <li><strong>Voice:</strong> Define how you communicate. Formal or casual? Technical or accessible? Consistent voice builds recognition over time.</li>
      </ul>

      <h2>Be Consistent, Even When It's Hard</h2>
      <p>The power of brand comes from repetition. Every inconsistency dilutes your message. Use templates, create guidelines (even simple ones), and resist the urge to reinvent your look for every campaign.</p>

      <h2>Punch Above Your Weight</h2>
      <p>Great brand work can make a 10-person startup feel like a much larger company. This isn't about deception—it's about projecting confidence and professionalism that earns trust.</p>
      
      <p>Focus your brand investment where it matters most: your website, your pitch deck, and your product experience. These are the moments that make or break perception.</p>

      <h2>Plan to Evolve</h2>
      <p>Your first brand won't be your last. That's okay. Build something that works for now, with the understanding that you'll refine it as you grow. The goal isn't perfection—it's progress.</p>
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
