'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, ExternalLink, Calendar } from 'lucide-react'
import GlassCard from './GlassCard'

interface TimelineItem {
  id: string
  year: number
  title: string
  organization: string
  description: string
  details?: string[]
  link?: string
  type: 'research' | 'leadership' | 'award' | 'project'
}

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])

  useEffect(() => {
    // Default timeline data
    const defaultData: TimelineItem[] = [
      {
        id: 'quantum-frontier-2024',
        year: 2024,
        title: 'Quantum Frontier Initiative Launch',
        organization: 'OSF & ResearchGate',
        description: 'Launched groundbreaking HQCI research project with OSF DOI backing',
        details: [
          'Introduced Human-Quantum Computer Interaction (HQCI) framework',
          'Published concept note with DOI: 10.17605/OSF.IO/E23JR',
          'Collaborative research with international team',
          'Focus on scalable, individualized quantum UX'
        ],
        link: 'https://doi.org/10.17605/OSF.IO/E23JR',
        type: 'project'
      },
      {
        id: 'honoris-causa-2023',
        year: 2023,
        title: 'Doctor of Science (Honoris Causa)',
        organization: 'QAHE & AUBSS',
        description: 'Joint doctorate recognition for contributions to AI and technology',
        details: [
          'Recognized for pioneering work in AI and machine learning',
          'Joint award from QAHE and American University of Business and Social Sciences',
          'Acknowledgment of academic and research excellence',
          'Leadership in alternative education pathways'
        ],
        link: 'https://www.qahe.org/we-are-thrilled-to-announce-that-dr-maher-ali-rusho-has-been-jointly-awarded-a-doctor-of-science-honoris-causa-by-the-qahe-and-the-american-university-of-business-and-social-sciences-aubss/',
        type: 'award'
      },
      {
        id: 'uairl-founding',
        year: 2022,
        title: 'UAIRL Foundation & Leadership',
        organization: 'UntieAI → Unison AI Lab (Canada)',
        description: 'Founded and led the Centre for UntieAI Artificial Intelligence Research Lab',
        details: [
          'Established research lab focusing on AI innovation',
          'Led interdisciplinary research team',
          'Renamed to Unison AI Lab in 2025',
          'International collaboration hub for AI research'
        ],
        link: 'https://www.researchgate.net/lab/Centre-for-UntieAI-Artificial-Intelligence-Research-Lab-UAIRL-Canada-Maher-Ali-Rusho',
        type: 'leadership'
      },
      {
        id: 'hci-research',
        year: 2021,
        title: 'HCI Research Associate',
        organization: 'Industry & Academic Partnerships',
        description: 'Advanced research in Human-Computer Interaction and AI systems',
        details: [
          'Research associate roles in HCI and AI domains',
          'Industry partnerships and academic collaborations',
          'Focus on user experience and interaction design',
          'Published research in computational methods'
        ],
        type: 'research'
      }
    ]
    setTimelineData(defaultData)
  }, [])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award': return '🏆'
      case 'leadership': return '👑'
      case 'project': return '🚀'
      case 'research': return '🔬'
      default: return '📋'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'from-yellow-500 to-orange-500'
      case 'leadership': return 'from-purple-500 to-indigo-500'
      case 'project': return 'from-green-500 to-teal-500'
      case 'research': return 'from-blue-500 to-cyan-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10">
              <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg`}>
                <span className="text-lg">{getTypeIcon(item.type)}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <GlassCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent-500" />
                      <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-3">
                      {item.organization}
                    </p>
                  </div>
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 p-2 hover:bg-white/10 rounded-lg transition-colors focus-ring"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.details && (
                  <>
                    <motion.button
                      onClick={() => toggleExpanded(item.id)}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors focus-ring rounded-md px-2 py-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm font-medium">
                        {expandedItems.includes(item.id) ? 'Show Less' : 'Show More'}
                      </span>
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </motion.button>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedItems.includes(item.id) ? 'auto' : 0,
                        opacity: expandedItems.includes(item.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/20 dark:border-slate-700/50 mt-4">
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </>
                )}
              </GlassCard>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}