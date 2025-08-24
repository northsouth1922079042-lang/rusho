'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import GlassCard from './GlassCard'
import { Award, Brain, Atom, Zap } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Doctor of Science (Honoris Causa)"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "UAIRL Founder & Head"
    },
    {
      icon: <Atom className="w-6 h-6" />,
      text: "Quantum Frontier Initiative"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "OSF DOI Research"
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
            Driving innovation through interdisciplinary research and academic excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <div className="aspect-square w-full max-w-sm mx-auto mb-8 relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">DR</span>
                  </div>
                </div>
                {/* Replace with actual profile image */}
                {/* <img
                  src="/profile.jpg"
                  alt="Dr. Maher Ali Rusho"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Research Philosophy
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I champion performance-based and alternative-path learning methodologies, 
                focusing on interdisciplinary research that bridges the gap between theoretical 
                frameworks and practical applications in AI, HCI, and quantum computing.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My work spans computational materials science, sustainability research, 
                and the revolutionary field of Human-Quantum Computer Interaction (HQCI), 
                pushing the boundaries of how humans interact with quantum systems.
              </p>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <GlassCard className="p-4 text-center hover:scale-105 transition-transform duration-200">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-accent-500">
                        {highlight.icon}
                      </div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-balance">
                        {highlight.text}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}