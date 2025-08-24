'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface IconLinkProps {
  href: string
  icon: ReactNode
  label: string
  className?: string
}

export default function IconLink({ href, icon, label, className = '' }: IconLinkProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`group flex flex-col items-center gap-2 p-3 glass-morphism rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/20 transition-all duration-200 focus-ring ${className}`}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <div className="text-accent-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
        {label}
      </span>
    </motion.a>
  )
}