'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-morphism rounded-xl ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(31, 38, 135, 0.15)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}