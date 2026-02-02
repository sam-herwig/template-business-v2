"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  photo: string;
  role: string;
  quote: string;
  result: string;
  rating: number;
  videoUrl?: string;
  featured?: boolean;
}

export default function TestimonialCard({
  name,
  photo,
  role,
  quote,
  result,
  rating,
  videoUrl,
  featured = false,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`card p-6 lg:p-8 h-full flex flex-col ${
        featured ? "border-primary-200 bg-primary-50/30" : ""
      }`}
    >
      {/* Video Badge */}
      {videoUrl && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Video Testimonial
          </span>
        </div>
      )}

      {/* Quote */}
      <div className="flex-1">
        <svg
          className="w-8 h-8 text-primary-200 mb-4"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          &quot;{quote}&quot;
        </p>
      </div>

      {/* Result Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {result}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500 truncate">{role}</p>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
