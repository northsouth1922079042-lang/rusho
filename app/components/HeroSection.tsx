'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, Mail, User, FileText } from 'lucide-react'
import GlowButton from './GlowButton'
import IconLink from './IconLink'

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    'AI Researcher',
    'HCI Innovator',
    'Materials Scientist',
    'Quantum Frontier Visionary'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [phrases.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-slate-100/70 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-700/70" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="glass-morphism px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
              Doctor of Science (Honoris Causa)
            </div>
            <div className="glass-morphism px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
              UAIRL Founder
            </div>
            <div className="glass-morphism px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
              Quantum Frontier
            </div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-glow"
        >
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Dr. Maher Ali Rusho
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-4">
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-semibold"
            >
              {phrases[currentPhrase]}
            </motion.span>
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
            Pioneering research at the intersection of AI, Human-Computer Interaction, 
            Materials Science, and Quantum Computing
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <GlowButton href="#publications" icon={<FileText className="w-5 h-5" />}>
            View Research
          </GlowButton>
          <GlowButton href="#contact" variant="secondary" icon={<User className="w-5 h-5" />}>
            Connect with Me
          </GlowButton>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <IconLink
            href="https://www.researchgate.net/scientific-contributions/Maher-Ali-RUsho-2225731851"
            icon={<ExternalLink className="w-5 h-5" />}
            label="ResearchGate"
          />
          <IconLink
            href="https://doi.org/10.17605/OSF.IO/E23JR"
            icon={<ExternalLink className="w-5 h-5" />}
            label="OSF DOI"
          />
          <IconLink
            href="#"
            icon={<ExternalLink className="w-5 h-5" />}
            label="Google Scholar"
          />
          <IconLink
            href="mailto:your@email.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent-500 cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}