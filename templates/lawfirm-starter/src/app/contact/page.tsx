"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { officeLocations } from "@/data/mockData";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Schedule your free, confidential consultation today"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                  Request a Consultation
                </h2>
                <p className="text-charcoal-600">
                  Fill out the form below and one of our attorneys will contact
                  you within 24 hours to discuss your case. All consultations
                  are completely confidential.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8 border border-charcoal-100">
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info & Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-navy-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-4 text-lg hover:text-gold-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-navy-950"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal-400 text-sm">Call Us</p>
                      <p className="font-semibold">(555) 123-4567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@reynoldslaw.com"
                    className="flex items-center gap-4 text-lg hover:text-gold-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-navy-950"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal-400 text-sm">Email Us</p>
                      <p className="font-semibold">info@reynoldslaw.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-700">
                  <p className="text-gold-400 font-semibold mb-2">
                    Available 24/7 for Emergencies
                  </p>
                  <p className="text-charcoal-400 text-sm">
                    We understand that legal emergencies do not wait. Contact us
                    anytime for urgent matters.
                  </p>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((office) => (
                    <div
                      key={office.id}
                      className="bg-charcoal-50 rounded-lg p-6 border border-charcoal-200"
                    >
                      <h4 className="font-semibold text-navy-900 text-lg mb-2">
                        {office.name}
                      </h4>
                      <div className="space-y-2 text-charcoal-600">
                        <p>{office.address}</p>
                        <p>
                          {office.city}, {office.state} {office.zip}
                        </p>
                        <p className="text-sm">{office.hours}</p>
                        <div className="pt-2 flex gap-4">
                          <a
                            href={`tel:${office.phone.replace(/[^0-9]/g, "")}`}
                            className="text-gold-600 hover:text-gold-700 text-sm font-medium"
                          >
                            {office.phone}
                          </a>
                          <a
                            href={office.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-600 hover:text-gold-700 text-sm font-medium"
                          >
                            Get Directions →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      Your Privacy is Protected
                    </h4>
                    <p className="text-charcoal-700 text-sm">
                      All information you share with us is protected by
                      attorney-client privilege. Your consultation is completely
                      confidential, and we will never share your information
                      without your express consent.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-charcoal-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-charcoal-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-charcoal-500">
              Interactive map would be displayed here
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does a consultation cost?",
                answer:
                  "Initial consultations are completely free. We believe everyone deserves access to legal advice, and there is no obligation after your consultation.",
              },
              {
                question: "How quickly will I hear back?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, call us directly and we will prioritize your case.",
              },
              {
                question: "What should I bring to my consultation?",
                answer:
                  "Please bring any documents relevant to your case, such as police reports, medical records, contracts, or correspondence. If you do not have documents yet, that is okay—we can still discuss your situation.",
              },
              {
                question: "Do I have to pay upfront?",
                answer:
                  "For personal injury cases, we work on a contingency fee basis, meaning you pay nothing unless we win your case. For other matters, we offer flexible payment arrangements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-charcoal-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
