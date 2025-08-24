'use client'

import { motion } from 'framer-motion'

interface FilterBarProps {
  types: string[]
  selectedType: string
  onTypeChange: (type: string) => void
}

export default function FilterBar({ types, selectedType, onTypeChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <motion.button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
            selectedType === type
              ? 'bg-primary-500 text-white shadow-md'
              : 'glass-morphism text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {type}
        </motion.button>
      ))}
    </div>
  )
}