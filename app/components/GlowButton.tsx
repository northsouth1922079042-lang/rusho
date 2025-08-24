'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  className?: string
}

export default function GlowButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  icon,
  className = '' 
}: GlowButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 focus-ring ${className}`
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/25',
    secondary: 'glass-morphism text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700/20'
  }

  const Component = href ? 'a' : 'button'
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </Component>
    </motion.div>
  )
}