"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient" | "dark";
}

export default function CTASection({
  headline = "Ready to Transform Your Career?",
  subheadline = "Join 5,000+ students who have already started their journey to becoming professional product designers.",
  primaryCTA = { text: "Enroll Now", href: "/pricing" },
  secondaryCTA = { text: "View Curriculum", href: "/curriculum" },
  variant = "gradient",
}: CTASectionProps) {
  const bgClasses = {
    default: "bg-gray-50",
    gradient: "bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800",
    dark: "bg-gray-900",
  };

  const textClasses = {
    default: "text-gray-900",
    gradient: "text-white",
    dark: "text-white",
  };

  const subtextClasses = {
    default: "text-gray-600",
    gradient: "text-primary-100",
    dark: "text-gray-400",
  };

  return (
    <section className={`section-padding relative overflow-hidden ${bgClasses[variant]}`}>
      {/* Decorative elements */}
      {variant === "gradient" && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </>
      )}

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className={`heading-2 mb-4 ${textClasses[variant]}`}>
            {headline}
          </h2>
          <p className={`text-lg mb-8 ${subtextClasses[variant]}`}>
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${
                variant === "gradient"
                  ? "bg-white text-primary-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  : "bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-500/25 hover:-translate-y-0.5"
              }`}
            >
              {primaryCTA.text}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryCTA.href}
              className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${
                variant === "gradient"
                  ? "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20"
                  : "bg-transparent text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {secondaryCTA.text}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 ${subtextClasses[variant]}`}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.9/5 from 1,200+ reviews</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm">5,000+ students enrolled</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
