'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border-[3px] border-brutal-black dark:border-brutal-bg bg-brutal-bg dark:bg-brutal-black overflow-hidden"
          style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 flex items-center justify-between text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="font-display font-bold text-lg text-brutal-black dark:text-brutal-bg group-hover:text-brutal-pink transition-colors pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-6 h-6 text-brutal-black dark:text-brutal-bg" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t-2 border-brutal-black/20 dark:border-brutal-bg/20 pt-4">
                    <p className="font-body text-brutal-black/80 dark:text-brutal-bg/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
