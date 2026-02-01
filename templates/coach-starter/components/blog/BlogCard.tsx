'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  categorySlug: string
  image: string
  slug: string
  readTime: number
  publishedAt: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  category,
  categorySlug,
  image,
  slug,
  readTime,
  publishedAt,
  featured = false,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="group block bg-white rounded-3xl overflow-hidden border border-cream-300 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sage-500 font-medium text-sm uppercase tracking-wide">
                {category}
              </span>
              <span className="text-primary-800/40">·</span>
              <span className="text-primary-800/60 text-sm">{readTime} min read</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
              {title}
            </h3>
            <p className="text-primary-800/70 leading-relaxed mb-6 line-clamp-3">{excerpt}</p>
            <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              Read Article →
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-primary-200 transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sage-500 font-medium text-sm uppercase tracking-wide">{category}</span>
          <span className="text-primary-800/40">·</span>
          <span className="text-primary-800/60 text-sm">{readTime} min</span>
        </div>
        <h3 className="font-display text-xl text-primary-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-primary-800/70 text-sm line-clamp-3 mb-4">{excerpt}</p>
        <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
          Read More →
        </span>
      </div>
    </Link>
  )
}

export default BlogCard
