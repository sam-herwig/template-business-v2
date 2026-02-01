'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ScheduledClass, ClassType } from './types'
import { fadeInUp, fadeInUpReduced, staggerContainer, staggerContainerReduced, useVariant } from './animations'

// ═══════════════════════════════════════════════════════════════
// Schedule Grid Component - Class schedule display
// ═══════════════════════════════════════════════════════════════

interface ScheduleGridProps {
  schedule: ScheduledClass[]
  classTypes: ClassType[]
  selectedDay: string
  selectedType: string | null
}

function ClassCard({ cls, classType }: { cls: ScheduledClass; classType?: ClassType }) {
  const spotsLeft = cls.maxSpots - cls.bookedSpots
  const isLowSpots = spotsLeft <= 3

  return (
    <div className="class-card">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-2xl mr-2">{classType?.icon || '🏋️'}</span>
            <h4 className="font-display text-lg text-white tracking-wider inline">{cls.name}</h4>
          </div>
          <span className={`intensity-badge intensity-${cls.intensity.toLowerCase()}`}>
            {cls.intensity}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-1">{cls.instructor}</p>
        <p className="text-gray-500 text-sm mb-4">{cls.duration} · {cls.studio}</p>
        <div className="flex items-center justify-between">
          <span className={`text-sm ${isLowSpots ? 'text-primary-400' : 'text-gray-500'}`}>
            {spotsLeft} spots left
          </span>
          <button className="px-4 py-2 bg-dark-700 hover:bg-primary-500 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors">
            Book
          </button>
        </div>
      </div>
    </div>
  )
}

export function ScheduleGrid({ schedule, classTypes, selectedDay, selectedType }: ScheduleGridProps) {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants = useVariant(fadeInUp, fadeInUpReduced, prefersReducedMotion)
  const containerVariants = useVariant(staggerContainer, staggerContainerReduced, prefersReducedMotion)

  // Filter classes by day and type
  const filteredClasses = schedule.filter((cls) => {
    const dayMatch = cls.date === selectedDay
    const typeMatch = !selectedType || cls.classTypeId === selectedType
    return dayMatch && typeMatch
  })

  // Group by time
  const groupedByTime = filteredClasses.reduce((acc, cls) => {
    if (!acc[cls.time]) acc[cls.time] = []
    acc[cls.time].push(cls)
    return acc
  }, {} as Record<string, ScheduledClass[]>)

  // Sort times
  const sortedTimes = Object.keys(groupedByTime).sort((a, b) => {
    const timeA = new Date(`1970/01/01 ${a}`).getTime()
    const timeB = new Date(`1970/01/01 ${b}`).getTime()
    return timeA - timeB
  })

  if (filteredClasses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No classes found for the selected filters.</p>
      </div>
    )
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="space-y-8"
    >
      {sortedTimes.map((time) => (
        <motion.div key={time} variants={itemVariants}>
          <h3 className="text-xl font-display text-primary-500 tracking-wider mb-4">{time}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedByTime[time].map((cls) => (
              <ClassCard
                key={cls.id}
                cls={cls}
                classType={classTypes.find((t) => t.id === cls.classTypeId)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Filter Pills Component
interface FilterPillsProps {
  options: { id: string; label: string }[]
  selected: string | null
  onSelect: (id: string | null) => void
}

export function FilterPills({ options, selected, onSelect }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
          selected === null
            ? 'bg-primary-500 text-white'
            : 'bg-dark-800 text-gray-400 hover:text-white'
        }`}
      >
        All
      </button>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
            selected === option.id
              ? 'bg-primary-500 text-white'
              : 'bg-dark-800 text-gray-400 hover:text-white'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

// Day Selector Component
interface DaySelectorProps {
  days: readonly string[]
  selected: string
  onSelect: (day: string) => void
}

export function DaySelector({ days, selected, onSelect }: DaySelectorProps) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => onSelect(day)}
          className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
            selected === day
              ? 'bg-primary-500 text-white'
              : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  )
}
