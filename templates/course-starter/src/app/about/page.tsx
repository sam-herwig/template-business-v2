"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { instructor } from "@/data/mockData";

export default function AboutPage() {
  const mediaFeatures = [
    { name: "Forbes", logo: "Forbes" },
    { name: "TechCrunch", logo: "TechCrunch" },
    { name: "Fast Company", logo: "Fast Company" },
    { name: "Wired", logo: "Wired" },
    { name: "Product Hunt", logo: "Product Hunt" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 text-gray-900 mb-6">
              Meet Your Instructor
            </h1>
            <p className="text-xl text-gray-600">
              Learn from someone who&apos;s walked the path you want to take — and helped
              thousands of designers get there too.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Photo Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative sticky top-24">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 relative">
                    <Image
                      src={instructor.photo}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl -z-10 opacity-20" />

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-6">
                    {instructor.socialLinks.twitter && (
                      <a
                        href={instructor.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {instructor.socialLinks.linkedin && (
                      <a
                        href={instructor.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {instructor.socialLinks.dribbble && (
                      <a
                        href={instructor.socialLinks.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                        aria-label="Dribbble"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="heading-2 text-gray-900 mb-2">{instructor.name}</h2>
                    <p className="text-primary-600 font-medium text-lg">{instructor.title}</p>
                    <p className="text-gray-500">{instructor.company}</p>
                  </div>

                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p>{instructor.bio}</p>
                  </div>

                  {/* Credentials */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Credentials & Experience</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {instructor.credentials.map((credential, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        >
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-gray-900 mb-6 text-center">
                Why I Created This Course
              </h2>
              <div className="prose prose-lg text-gray-600 mx-auto">
                <p>
                  When I started my design career, I struggled to find resources that
                  actually prepared me for the real world. Most courses focused on
                  theory without practical application, or they taught outdated methods
                  that didn&apos;t reflect how top companies actually work.
                </p>
                <p>
                  After years of leading design teams at companies like Stripe, Airbnb,
                  and Google, I realized I had a unique perspective on what actually
                  matters in product design — and what doesn&apos;t.
                </p>
                <p>
                  I&apos;ve mentored hundreds of designers individually, watching them go
                  from struggling to land interviews to receiving offers from top tech
                  companies. I noticed the same patterns: the same gaps in knowledge,
                  the same portfolio mistakes, the same interview preparation issues.
                </p>
                <p>
                  This course is everything I wish I had when I was starting out.
                  It&apos;s the distillation of 12+ years of experience, packaged into a
                  comprehensive program that takes you from wherever you are to
                  job-ready professional.
                </p>
                <p className="font-medium text-gray-900">
                  My mission is simple: to help 10,000 designers launch successful
                  careers in product design. Will you be one of them?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-gray-500 text-sm uppercase tracking-wide font-medium">
              Featured In
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {mediaFeatures.map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors"
              >
                {media.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">12+</div>
              <div className="text-primary-100">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Designers Mentored</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">50M+</div>
              <div className="text-primary-100">Users Impacted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">3</div>
              <div className="text-primary-100">Top Tech Companies</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Learn Directly From Sarah"
        subheadline="Get access to the same frameworks and methodologies used by designers at the world's top tech companies."
        primaryCTA={{ text: "Enroll Now", href: "/pricing" }}
        secondaryCTA={{ text: "View Curriculum", href: "/curriculum" }}
        variant="default"
      />
    </>
  );
}
