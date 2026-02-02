"use client";

import { motion } from "framer-motion";
import CourseModuleCard from "@/components/CourseModuleCard";
import CTASection from "@/components/CTASection";
import { modules, courseInfo, features } from "@/data/mockData";

export default function CurriculumPage() {
  // Calculate totals
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalVideos = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.type === "video").length,
    0
  );
  const totalProjects = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.type === "project").length,
    0
  );
  const totalExercises = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.type === "exercise").length,
    0
  );

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
              Complete Course Curriculum
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive, structured learning path designed to take you from
              beginner to job-ready product designer in 12 weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border">
                <span className="text-2xl font-bold text-gray-900">{modules.length}</span>
                <span className="text-gray-500 ml-2">Modules</span>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border">
                <span className="text-2xl font-bold text-gray-900">{totalLessons}</span>
                <span className="text-gray-500 ml-2">Lessons</span>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border">
                <span className="text-2xl font-bold text-gray-900">40+</span>
                <span className="text-gray-500 ml-2">Hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">{totalVideos}</div>
              <div className="text-gray-500 text-sm">Video Lessons</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">{totalExercises}</div>
              <div className="text-gray-500 text-sm">Hands-on Exercises</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10-1a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 001-1v-6a1 1 0 00-1-1h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
              <div className="text-gray-500 text-sm">Real Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">∞</div>
              <div className="text-gray-500 text-sm">Resources & Templates</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="heading-3 text-gray-900 mb-4">
                Complete Course Breakdown
              </h2>
              <p className="text-gray-600">
                Click on each module to see the full lesson breakdown. Each module
                builds on the previous one, creating a comprehensive learning journey.
              </p>
            </motion.div>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <CourseModuleCard
                  key={module.id}
                  moduleNumber={module.id}
                  title={module.title}
                  description={module.description}
                  lessons={module.lessons}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              What&apos;s Included
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed, all in one place.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Commitment */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-3 text-gray-900 mb-4">
                    Time Commitment
                  </h2>
                  <p className="text-gray-600 mb-6">
                    This course is designed to fit into your busy schedule. Whether
                    you have a few hours a week or want to go full-time, you can
                    adjust your pace.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Recommended: 5-10 hours/week</p>
                        <p className="text-sm text-gray-500">Complete in 10-12 weeks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Intensive: 20+ hours/week</p>
                        <p className="text-sm text-gray-500">Complete in 4-6 weeks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Lifetime Access</p>
                        <p className="text-sm text-gray-500">Go at your own pace, forever</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                  <div className="text-6xl font-bold mb-2">12</div>
                  <div className="text-primary-100 text-lg mb-6">Weeks Average</div>
                  <div className="text-sm text-primary-100">
                    Most students complete the full course in about 12 weeks,
                    dedicating 5-10 hours per week.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Start Learning?"
        subheadline="Get instant access to all 40+ hours of content, plus bonuses, community access, and lifetime updates."
        primaryCTA={{ text: `Enroll Now — $${courseInfo.price}`, href: "/pricing" }}
        secondaryCTA={{ text: "See Pricing Options", href: "/pricing" }}
      />
    </>
  );
}
