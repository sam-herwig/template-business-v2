'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  BlogCard,
  NewsletterSignup,
  FilterPills,
  BLOG_POSTS,
} from '../components'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from '../components/animations'

// ═══════════════════════════════════════════════════════════════
// Blog Page - Fitness Tips & Articles
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = [
  { id: 'Workouts', label: 'Workouts' },
  { id: 'Nutrition', label: 'Nutrition' },
  { id: 'Recovery', label: 'Recovery' },
  { id: 'Mindset', label: 'Mindset' },
] as const

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  const featuredPost = BLOG_POSTS.find((post) => post.featured)
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured)
  
  const filteredPosts = selectedCategory
    ? regularPosts.filter((post) => post.category === selectedCategory)
    : regularPosts

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Fitness Tips"
          title="BLOG & RESOURCES"
          description="Expert advice, workout guides, and nutrition tips from our team of certified trainers."
        >
          <div className="mt-8">
            <FilterPills
              options={CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </PageHero>

        {/* Featured Article */}
        {featuredPost && !selectedCategory && (
          <section className="bg-dark-900 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-6"
              >
                <span className="section-eyebrow">Featured</span>
              </motion.div>
              <BlogCard post={featuredPost} featured />
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="section-title">
                {selectedCategory ? selectedCategory.toUpperCase() : 'LATEST ARTICLES'}
              </h2>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={itemVariants}
                className="text-center py-12"
              >
                <p className="text-gray-400">No articles found in this category.</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View all articles
                </button>
              </motion.div>
            ) : (
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {filteredPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Load More Button */}
            {filteredPosts.length >= 6 && (
              <motion.div
                className="text-center mt-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <button className="btn-secondary">
                  Load More Articles
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-3xl mx-auto px-6">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
