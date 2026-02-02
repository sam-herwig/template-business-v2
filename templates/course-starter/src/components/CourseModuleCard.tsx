"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: "video" | "exercise" | "project";
}

interface ModuleProps {
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
  defaultOpen?: boolean;
}

export default function CourseModuleCard({
  moduleNumber,
  title,
  description,
  lessons,
  defaultOpen = false,
}: ModuleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const totalDuration = lessons.reduce((acc, lesson) => {
    const match = lesson.duration.match(/(\d+)/);
    return acc + (match ? parseInt(match[0]) : 0);
  }, 0);

  const getTypeIcon = (type: Lesson["type"]) => {
    switch (type) {
      case "video":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        );
      case "exercise":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
          </svg>
        );
      case "project":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10-1a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 001-1v-6a1 1 0 00-1-1h-3z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getTypeBadgeColor = (type: Lesson["type"]) => {
    switch (type) {
      case "video":
        return "bg-primary-100 text-primary-700";
      case "exercise":
        return "bg-accent-100 text-accent-700";
      case "project":
        return "bg-orange-100 text-orange-700";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
      >
        {/* Module Number */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/20">
          {moduleNumber}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-2">{description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {lessons.length} lessons
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              ~{totalDuration} min
            </span>
          </div>
        </div>

        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray-400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Lessons List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
              <ul className="space-y-3">
                {lessons.map((lesson, index) => (
                  <li
                    key={lesson.id}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-6 h-6 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500 font-medium">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-gray-700 text-sm">{lesson.title}</span>
                    <span className={`flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(lesson.type)}`}>
                      {getTypeIcon(lesson.type)}
                      {lesson.type}
                    </span>
                    <span className="flex-shrink-0 text-gray-400 text-sm">{lesson.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
