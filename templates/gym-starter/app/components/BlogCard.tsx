'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { BlogPost } from './types'
import { fadeInUp, fadeInUpReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Blog Components - Cards and Featured Article
// ═══════════════════════════════════════════════════════════════

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

const CATEGORY_COLORS: Record<string, string> = {
  Workouts: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  Nutrition: 'bg-accent-lime/20 text-accent-lime border-accent-lime/30',
  Recovery: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
  Mindset: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
}

export function BlogCard({ post, featured }: BlogCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const variants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  if (featured) {
    return (
      <motion.article
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants}
        className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-colors group"
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span
                className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-4 ${
                  CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Workouts
                }`}
              >
                {post.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-white tracking-wider mb-4 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-6 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{post.author.name}</p>
                  <p className="text-gray-500 text-xs">
                    {post.readTime} min read · {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-colors group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${
              CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Workouts
            }`}
          >
            {post.category}
          </span>
          <h3 className="font-display text-lg text-white tracking-wider mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {post.author.name} · {post.readTime} min
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

// Newsletter Signup Component
export function NewsletterSignup() {
  const prefersReducedMotion = useReducedMotion()
  const variants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      className="bg-dark-800 rounded-2xl p-8 text-center border border-dark-700"
    >
      <div className="text-4xl mb-4">📧</div>
      <h3 className="font-display text-2xl text-white tracking-wider mb-2">
        Get Fitness Tips in Your Inbox
      </h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        Weekly workouts, nutrition tips, and exclusive member content. No spam, unsubscribe anytime.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          Subscribe
        </button>
      </form>
    </motion.div>
  )
}
