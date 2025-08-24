'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Trophy } from 'lucide-react'
import GlassCard from './GlassCard'

interface Award {
  title: string
  org: string
  year: number
  link?: string
  badge?: string
}

export default function AwardsCarousel() {
  const [awards, setAwards] = useState<Award[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    // Default awards data
    const defaultData: Award[] = [
      {
        title: "Doctor of Science (Honoris Causa)",
        org: "QAHE & AUBSS",
        year: 2023,
        link: "https://www.qahe.org/we-are-thrilled-to-announce-that-dr-maher-ali-rusho-has-been-jointly-awarded-a-doctor-of-science-honoris-causa-by-the-qahe-and-the-american-university-of-business-and-social-sciences-aubss/"
      },
      {
        title: "UAIRL Foundation & Leadership",
        org: "Unison AI Lab (Canada)",
        year: 2022,
        link: "https://www.researchgate.net/lab/Centre-for-UntieAI-Artificial-Intelligence-Research-Lab-UAIRL-Canada-Maher-Ali-Rusho"
      },
      {
        title: "Research Excellence Recognition",
        org: "Industry & Academic Partners",
        year: 2024
      }
    ]
    setAwards(defaultData)
  }, [])

  useEffect(() => {
    if (!isAutoplay || awards.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay, awards.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length)
  }

  if (awards.length === 0) {
    return (
      <div className="flex justify-center">
        <div className="w-16 h-16 border-4 border-accent-200 border-t-accent-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                {awards[currentIndex].badge ? (
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <img
                      src={awards[currentIndex].badge}
                      alt={awards[currentIndex].title}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <Trophy className="w-12 h-12 text-white hidden" />
                  </div>
                ) : (
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 text-balance">
                  {awards[currentIndex].title}
                </h3>
                <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold">
                  {awards[currentIndex].org}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {awards[currentIndex].year}
                </p>

                {awards[currentIndex].link && (
                  <motion.a
                    href={awards[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors focus-ring px-4 py-2 rounded-lg hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </motion.a>
                )}
              </motion.div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {awards.length > 1 && (
          <>
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-morphism p-3 rounded-full hover:bg-white/20 transition-colors focus-ring text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous award"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-morphism p-3 rounded-full hover:bg-white/20 transition-colors focus-ring text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next award"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {awards.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {awards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus-ring ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}