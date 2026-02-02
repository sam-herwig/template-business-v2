'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What's included in each template?",
    answer: "Every template includes the complete source code, multiple pre-built pages (Home, About, Services, Contact, etc.), Sanity CMS configured for easy content editing, reusable components, video setup guide, detailed documentation, and screenshots. Everything you need to launch.",
  },
  {
    question: "I'm a founder, not a developer. Can I use these?",
    answer: "If you're comfortable following a step-by-step guide and have deployed a website before, yes! Our templates come with video tutorials, clear documentation, and Sanity CMS for editing content without touching code. That said, these are built with Next.js — if you've never touched code before, you may want to hire a developer for initial setup.",
  },
  {
    question: "Can I use these templates for client projects?",
    answer: "Absolutely! You can use our templates for unlimited personal and client projects. No per-project fee or additional licensing required. Build as many websites as you want — then hand clients the Sanity CMS to manage their own content.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All purchases include comprehensive docs and video tutorials. Category Pack and Bundle customers get access to our private Discord community where you can ask questions and connect with other users. Bundle customers also get email support with 48-hour response times.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase for any reason, reach out and we'll process a full refund, no questions asked.",
  },
  {
    question: "How do I get updates?",
    answer: "After purchase, you'll get access to download the templates. Bundle customers get lifetime updates — we'll notify you whenever we release improvements or new templates. Single template purchases include 1 year of updates.",
  },
  {
    question: "Do I need to credit LaunchKit?",
    answer: "Nope! Our templates are fully white-label. Remove our branding, add yours, and make it completely your own. Your clients will never know you started from a template.",
  },
  {
    question: "What tech stack do the templates use?",
    answer: "All templates are built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Sanity CMS, and Framer Motion. Some templates also include GSAP for advanced animations. Modern, well-documented, production-ready code.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg font-medium pr-8 group-hover:text-purple-400 transition-colors">
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 rotate-180' 
            : 'bg-white/10 group-hover:bg-white/20'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Everything you need to know about LaunchKit
            </motion.p>
          </div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <a
              href="mailto:support@launchkit.dev"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              support@launchkit.dev
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
