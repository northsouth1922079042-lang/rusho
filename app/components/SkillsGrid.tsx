'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, Atom, Palette, Globe } from 'lucide-react'
import GlassCard from './GlassCard'

interface Skill {
  name: string
  icon: React.ReactNode
  description: string
  category: string
}

export default function SkillsGrid() {
  const skills: Skill[] = [
    {
      name: 'Machine Learning & AI',
      icon: <Brain className="w-8 h-8" />,
      description: 'PyTorch, TensorFlow, Deep Learning, Neural Networks',
      category: 'AI/ML'
    },
    {
      name: 'Human-Computer Interaction',
      icon: <Palette className="w-8 h-8" />,
      description: 'UX Research, Interaction Design, Usability Testing',
      category: 'HCI'
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-8 h-8" />,
      description: 'HQCI, Quantum Algorithms, Quantum-Human Interaction',
      category: 'Quantum'
    },
    {
      name: 'Data Science & Visualization',
      icon: <Database className="w-8 h-8" />,
      description: 'Python, R, Statistical Analysis, Data Mining',
      category: 'Data'
    },
    {
      name: 'Computational Materials',
      icon: <Code className="w-8 h-8" />,
      description: 'Materials Simulation, Computational Chemistry',
      category: 'Materials'
    },
    {
      name: 'Web Technologies',
      icon: <Globe className="w-8 h-8" />,
      description: 'React, WebGL, Three.js, Modern Web Stack',
      category: 'Web'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'from-blue-500 to-cyan-500'
      case 'HCI': return 'from-purple-500 to-pink-500'
      case 'Quantum': return 'from-green-500 to-teal-500'
      case 'Data': return 'from-orange-500 to-red-500'
      case 'Materials': return 'from-indigo-500 to-blue-500'
      case 'Web': return 'from-teal-500 to-green-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <GlassCard className="p-6 h-full group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div className="text-center space-y-4">
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {skill.icon}
              </motion.div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {skill.name}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(skill.category)} text-white`}>
                  {skill.category}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(20, 184, 166, 0.1), transparent)`
                }}
              />
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}