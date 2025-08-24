'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, FileText, Quote, Star } from 'lucide-react'
import GlassCard from './GlassCard'

interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'Journal' | 'Conference' | 'Preprint'
  links: {
    doi?: string
    pdf?: string
    publisher?: string
  }
  thumbnail: string
  featured: boolean
  abstract: string
}

interface PubCardProps {
  publication: Publication
}

export default function PubCard({ publication }: PubCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Journal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Conference': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Preprint': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <motion.div
      className="group relative h-80 perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Face */}
        <GlassCard className={`absolute inset-0 p-0 overflow-hidden backface-hidden ${publication.featured ? 'ring-2 ring-accent-400 shadow-glow' : ''}`}>
          {publication.featured && (
            <div className="absolute top-3 right-3 z-10">
              <div className="bg-accent-500 text-white p-1 rounded-full">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          )}
          
          <div className="h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 relative overflow-hidden">
            {!imageError ? (
              <img
                src={publication.thumbnail}
                alt={`${publication.title} thumbnail`}
                className="w-full h-full object-cover"
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
            )}
          </div>
          
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(publication.type)}`}>
                {publication.type}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {publication.year}
              </span>
            </div>
            
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-3 leading-tight">
              {publication.title}
            </h3>
            
            <div className="space-y-1">
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {publication.authors.join(', ')}
              </p>
              <p className="text-xs text-accent-600 dark:text-accent-400 font-medium">
                {publication.venue}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Back Face */}
        <GlassCard className="absolute inset-0 p-4 backface-hidden rotate-y-180 flex flex-col">
          <div className="flex-1 space-y-4">
            <div className="flex items-start gap-2">
              <Quote className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                {publication.abstract}
              </p>
            </div>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-white/20 dark:border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {publication.links.doi && (
                <motion.a
                  href={publication.links.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-md transition-colors focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-3 h-3" />
                  DOI
                </motion.a>
              )}
              
              {publication.links.pdf && (
                <motion.a
                  href={publication.links.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-md transition-colors focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-3 h-3" />
                  PDF
                </motion.a>
              )}
              
              {publication.links.publisher && (
                <motion.a
                  href={publication.links.publisher}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-accent-100 hover:bg-accent-200 dark:bg-accent-900 dark:hover:bg-accent-800 text-accent-700 dark:text-accent-300 px-2 py-1 rounded-md transition-colors focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-3 h-3" />
                  View
                </motion.a>
              )}
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md transition-colors focus-ring">
                Read
              </button>
              <button className="flex-1 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md transition-colors focus-ring">
                Cite
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}