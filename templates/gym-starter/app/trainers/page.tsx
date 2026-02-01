'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  TrialCTA,
  TRAINERS_EXPANDED,
} from '../components'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from '../components/animations'
import type { TrainerExpanded } from '../components/types'

// ═══════════════════════════════════════════════════════════════
// Trainers Page - Meet the Team
// ═══════════════════════════════════════════════════════════════

function TrainerCard({ trainer, onClick }: { trainer: TrainerExpanded; onClick: () => void }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="trainer-card-image mb-5">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="trainer-card-overlay" />
      </div>
      <h3 className="trainer-card-name">{trainer.name}</h3>
      <p className="trainer-card-specialty">{trainer.specialty}</p>
      <p className="trainer-card-cert">{trainer.cert}</p>
      {trainer.quote && (
        <p className="text-gray-500 text-sm mt-3 italic line-clamp-2">"{trainer.quote}"</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {trainer.specialties.slice(0, 3).map((specialty, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-dark-800 text-gray-400 text-xs font-medium rounded"
          >
            {specialty}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <button className="flex-1 py-2 rounded-lg font-bold text-xs uppercase tracking-widest bg-dark-800 text-white border border-dark-700 hover:bg-dark-700 transition-colors">
          View Schedule
        </button>
        <button className="flex-1 py-2 rounded-lg font-bold text-xs uppercase tracking-widest bg-primary-500 text-white hover:bg-primary-600 transition-colors">
          Book Session
        </button>
      </div>
    </div>
  )
}

function TrainerModal({ trainer, onClose }: { trainer: TrainerExpanded; onClose: () => void }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
      className="fixed inset-0 z-50 bg-dark-950/95 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-10 px-4">
        <button
          className="fixed top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          className="max-w-4xl mx-auto bg-dark-900 rounded-2xl overflow-hidden mt-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative aspect-[4/5]">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-3 p-6 md:p-8">
              <h2 className="font-display text-3xl text-white tracking-wider mb-1">{trainer.name}</h2>
              <p className="text-primary-400 font-medium mb-4">{trainer.specialty}</p>
              {trainer.quote && (
                <p className="text-gray-400 italic mb-6">"{trainer.quote}"</p>
              )}
              
              <div className="mb-6">
                <h3 className="font-display text-lg text-white tracking-wider mb-3">ABOUT</h3>
                <p className="text-gray-400 leading-relaxed">{trainer.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-lg text-white tracking-wider mb-3">CERTIFICATIONS</h3>
                <ul className="space-y-2">
                  {trainer.certifications.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-primary-400">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-lg text-white tracking-wider mb-3">SPECIALTIES</h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800 text-gray-300 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {trainer.schedule && trainer.schedule.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display text-lg text-white tracking-wider mb-3">SCHEDULE</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {trainer.schedule.slice(0, 6).map((s, i) => (
                      <div key={i} className="bg-dark-800 rounded-lg p-3 text-center">
                        <p className="text-gray-500 text-xs uppercase">{s.day}</p>
                        <p className="text-white text-sm font-medium">{s.time}</p>
                        <p className="text-gray-400 text-xs">{s.class}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <a
                  href={trainer.bookingUrl}
                  className="flex-1 btn-primary text-center"
                >
                  Book a Session
                </a>
                {trainer.socialLinks?.[0] && (
                  <a
                    href={trainer.socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-4 bg-dark-800 text-gray-400 hover:text-white rounded transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerExpanded | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Team"
          title="MEET OUR TRAINERS"
          description="Expert coaches dedicated to helping you reach your goals. Each trainer brings unique expertise and a passion for fitness."
        />

        {/* Trainers Grid Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {TRAINERS_EXPANDED.map((trainer) => (
                <motion.div key={trainer.id} variants={itemVariants}>
                  <TrainerCard trainer={trainer} onClick={() => setSelectedTrainer(trainer)} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="section-title mb-4">JOIN OUR TEAM</h2>
              <p className="section-description mx-auto mb-8">
                Are you a certified fitness professional looking to make a difference? We're always looking for passionate trainers to join our team.
              </p>
              <a href="/contact" className="btn-secondary">
                Apply Now
              </a>
            </motion.div>
          </div>
        </section>

        <TrialCTA />
      </main>
      <Footer />

      {/* Trainer Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <TrainerModal trainer={selectedTrainer} onClose={() => setSelectedTrainer(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
