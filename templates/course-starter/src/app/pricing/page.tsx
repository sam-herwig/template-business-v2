"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import { pricingTiers, faqs, courseInfo } from "@/data/mockData";

export default function PricingPage() {
  const pricingFaqs = faqs.filter(f => f.category === "pricing" || f.category === "general").slice(0, 6);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Limited Time Offer — Save Up to 50%
            </div>
            <h1 className="heading-1 text-gray-900 mb-6">
              Invest in Your Future
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your learning style and career goals.
              All plans include lifetime access and our 30-day money-back guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="heading-2 text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Try the entire course risk-free. If you&apos;re not completely satisfied
              within the first 30 days, we&apos;ll give you a full refund — no questions
              asked. That&apos;s how confident we are in this course.
            </p>
            <p className="text-sm text-gray-500">
              Simply email us at support@masterclass.com and we&apos;ll process your
              refund within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We want to make this course accessible to everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">One-Time Payment</h3>
              <p className="text-gray-600 mb-4">
                Pay once and get lifetime access to all course materials,
                updates, and bonuses. Best value option.
              </p>
              <div className="text-3xl font-bold text-gray-900">
                ${courseInfo.price}
                <span className="text-lg text-gray-400 line-through ml-2">
                  ${courseInfo.originalPrice}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3-Month Payment Plan</h3>
              <p className="text-gray-600 mb-4">
                Split your payment into 3 easy monthly installments.
                No interest, no hidden fees.
              </p>
              <div className="text-3xl font-bold text-gray-900">
                3 × ${Math.round(courseInfo.price / 3)}
                <span className="text-lg text-gray-500 ml-2">/month</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Compare Plans
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left font-semibold text-gray-900">Feature</th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`py-4 px-6 text-center font-semibold ${
                        tier.popular ? "text-primary-600" : "text-gray-900"
                      }`}
                    >
                      {tier.name}
                      {tier.popular && (
                        <span className="ml-2 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Full Course Access (40+ hours)", essential: true, pro: true, vip: true },
                  { feature: "Downloadable Resources", essential: true, pro: true, vip: true },
                  { feature: "Completion Certificate", essential: true, pro: true, vip: true },
                  { feature: "Lifetime Updates", essential: true, pro: true, vip: true },
                  { feature: "Private Slack Community", essential: false, pro: true, vip: true },
                  { feature: "Weekly Live Q&A", essential: false, pro: true, vip: true },
                  { feature: "Portfolio Reviews", essential: false, pro: "2 sessions", vip: "Unlimited" },
                  { feature: "Interview Prep Bonus", essential: false, pro: true, vip: true },
                  { feature: "Figma Template Library", essential: false, pro: true, vip: true },
                  { feature: "1-on-1 Coaching Calls", essential: false, pro: false, vip: "4 calls" },
                  { feature: "Direct Access to Sarah", essential: false, pro: false, vip: true },
                  { feature: "Job Referrals", essential: false, pro: false, vip: true },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-600">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.essential === "boolean" ? (
                        row.essential ? (
                          <svg className="w-5 h-5 text-accent-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{row.essential}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <svg className="w-5 h-5 text-accent-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.vip === "boolean" ? (
                        row.vip ? (
                          <svg className="w-5 h-5 text-accent-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-gray-600">{row.vip}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Pricing FAQ
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join {courseInfo.studentsEnrolled.toLocaleString()}+ students who have already
              transformed their careers. Start your journey today.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-primary-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Enroll Now — ${courseInfo.price}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
