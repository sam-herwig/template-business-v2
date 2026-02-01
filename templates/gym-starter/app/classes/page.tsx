'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Nav,
  Footer,
  PageHero,
  ScheduleGrid,
  FilterPills,
  DaySelector,
  TrialCTA,
  CLASS_TYPES,
  WEEKLY_SCHEDULE,
  DAYS_OF_WEEK,
} from '../components'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from '../components/animations'

// ═══════════════════════════════════════════════════════════════
// Classes Page - Schedule & Class Types
// ═══════════════════════════════════════════════════════════════

function ClassTypeCard({ classType }: { classType: typeof CLASS_TYPES[number] }) {
  const intensityBars = classType.intensity === 'High' ? 4 : classType.intensity === 'Medium' ? 3 : 2

  return (
    <div className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={classType.image}
          alt={classType.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-3xl mr-2">{classType.icon}</span>
          <span className="font-display text-2xl text-white tracking-wider">{classType.name}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-4 line-clamp-3">{classType.description}</p>
        <div className="space-y-3 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Intensity</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-2 rounded-sm ${
                    i <= intensityBars ? 'bg-primary-500' : 'bg-dark-700'
                  }`}
                />
              ))}
              <span className="text-gray-400 text-sm ml-2">{classType.intensity}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Calories</span>
            <span className="text-gray-400 text-sm">~{classType.caloriesBurned}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Equipment</span>
            <span className="text-gray-400 text-sm">{classType.equipment.slice(0, 2).join(', ')}</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-widest bg-dark-700 text-white border border-dark-600 hover:bg-primary-500 hover:border-primary-500 transition-colors">
          View Schedule
        </button>
      </div>
    </div>
  )
}

export default function ClassesPage() {
  const [selectedDay, setSelectedDay] = useState('Monday')
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  const filterOptions = CLASS_TYPES.map((ct) => ({ id: ct.id, label: ct.name }))

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-dark-950">
        <PageHero
          eyebrow="Schedule"
          title="CLASS SCHEDULE"
          description="50+ classes weekly across HIIT, Yoga, Spin, Strength, Boxing, and more. Find your fit."
        >
          <div className="mt-8 space-y-4">
            <FilterPills
              options={filterOptions}
              selected={selectedType}
              onSelect={setSelectedType}
            />
            <DaySelector
              days={DAYS_OF_WEEK}
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </div>
        </PageHero>

        {/* Schedule Grid Section */}
        <section className="section-padding bg-dark-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="font-display text-2xl text-white tracking-wider">
                {selectedDay.toUpperCase()}
              </h2>
            </div>
            <ScheduleGrid
              schedule={WEEKLY_SCHEDULE}
              classTypes={CLASS_TYPES}
              selectedDay={selectedDay}
              selectedType={selectedType}
            />
          </div>
        </section>

        {/* Class Types Section */}
        <section className="section-padding bg-dark-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="section-eyebrow">Programs</span>
              <h2 className="section-title">OUR CLASS TYPES</h2>
              <p className="section-description mx-auto">
                From high-intensity cardio to restorative yoga, we have a class for every fitness level and goal.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {CLASS_TYPES.map((classType) => (
                <motion.div key={classType.id} variants={itemVariants}>
                  <ClassTypeCard classType={classType} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <TrialCTA />
      </main>
      <Footer />
    </>
  )
}
