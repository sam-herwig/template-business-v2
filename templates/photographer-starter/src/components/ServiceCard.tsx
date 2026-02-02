'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`relative bg-neutral-900 border border-neutral-800 p-8 md:p-10 ${
        service.popular ? 'ring-1 ring-white/20' : ''
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-8 px-4 py-1 bg-white text-black text-xs tracking-widest uppercase">
          Most Popular
        </div>
      )}

      <h3 className="font-serif text-2xl text-white mb-2">{service.name}</h3>
      
      {service.duration && (
        <p className="text-neutral-500 text-sm mb-4">{service.duration}</p>
      )}

      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="mb-8">
        <span className="text-neutral-500 text-sm">Starting at</span>
        <p className="font-serif text-3xl text-white">
          ${service.startingPrice.toLocaleString()}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {service.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
            <svg className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`block w-full py-4 text-center text-sm tracking-widest uppercase transition-colors ${
          service.popular
            ? 'bg-white text-black hover:bg-neutral-200'
            : 'border border-neutral-700 text-white hover:bg-neutral-800'
        }`}
      >
        Book Now
      </Link>
    </motion.div>
  );
}
