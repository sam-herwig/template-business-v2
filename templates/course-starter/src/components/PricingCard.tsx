"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  cta: string;
}

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const savings = tier.originalPrice - tier.price;
  const savingsPercent = Math.round((savings / tier.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl h-full flex flex-col ${
        tier.popular
          ? "bg-gradient-to-b from-primary-600 to-primary-700 text-white shadow-2xl shadow-primary-500/30 scale-105 z-10"
          : "bg-white border border-gray-200"
      }`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className={`text-xl font-bold mb-2 ${tier.popular ? "text-white" : "text-gray-900"}`}>
            {tier.name}
          </h3>
          <p className={`text-sm ${tier.popular ? "text-primary-100" : "text-gray-500"}`}>
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className={`text-lg line-through ${tier.popular ? "text-primary-200" : "text-gray-400"}`}>
              ${tier.originalPrice}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              tier.popular ? "bg-white/20 text-white" : "bg-accent-100 text-accent-700"
            }`}>
              Save {savingsPercent}%
            </span>
          </div>
          <div className="flex items-baseline justify-center">
            <span className={`text-5xl font-extrabold ${tier.popular ? "text-white" : "text-gray-900"}`}>
              ${tier.price}
            </span>
            <span className={`ml-2 ${tier.popular ? "text-primary-100" : "text-gray-500"}`}>
              one-time
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/pricing"
          className={`block w-full py-3 px-6 text-center font-semibold rounded-xl transition-all duration-200 mb-8 ${
            tier.popular
              ? "bg-white text-primary-600 hover:bg-gray-50 shadow-lg"
              : "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25"
          }`}
        >
          {tier.cta}
        </Link>

        {/* Features */}
        <div className="flex-1">
          <p className={`text-xs font-semibold uppercase tracking-wide mb-4 ${
            tier.popular ? "text-primary-100" : "text-gray-400"
          }`}>
            What&apos;s included
          </p>
          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-accent-300" : "text-accent-500"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={`text-sm ${tier.popular ? "text-white" : "text-gray-600"}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {tier.notIncluded.length > 0 && (
            <>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-4 ${
                tier.popular ? "text-primary-200" : "text-gray-400"
              }`}>
                Not included
              </p>
              <ul className="space-y-3">
                {tier.notIncluded.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-primary-300" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${tier.popular ? "text-primary-200" : "text-gray-400"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
