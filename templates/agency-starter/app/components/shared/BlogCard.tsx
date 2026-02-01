'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/app/types'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured'

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${isFeatured ? 'col-span-full' : ''}`}
    >
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'aspect-[21/9]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={isFeatured ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-primary-400 text-sm uppercase tracking-wider font-medium mb-2 block">
            {post.category}
          </span>
          <h3
            className={`font-display font-bold text-white group-hover:text-primary-400 transition-colors duration-300 ${
              isFeatured ? 'text-3xl md:text-4xl' : 'text-xl'
            }`}
          >
            {post.title}
          </h3>
          <div className="flex items-center gap-2 mt-3 text-dark-400 text-sm">
            <span>{post.readTime} min read</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          {isFeatured && (
            <p className="text-dark-300 mt-3 max-w-2xl">{post.excerpt}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
