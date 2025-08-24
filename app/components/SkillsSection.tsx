'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SkillsGrid from './SkillsGrid'

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
            Comprehensive expertise across AI, HCI, and cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SkillsGrid />
        </motion.div>
      </div>
    </section>
  )
}