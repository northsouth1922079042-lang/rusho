'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AwardsCarousel from './AwardsCarousel'

export default function AwardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="awards" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Honors & Recognition
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
            Recognition for contributions to AI research and academic excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AwardsCarousel />
        </motion.div>
      </div>
    </section>
  )
}