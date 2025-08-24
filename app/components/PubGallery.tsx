'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import PubCard from './PubCard'
import FilterBar from './FilterBar'

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

export default function PubGallery() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [filteredPubs, setFilteredPubs] = useState<Publication[]>([])
  const [selectedType, setSelectedType] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load publications data
    fetch('/data/publications.json')
      .then(res => res.json())
      .then(data => {
        setPublications(data)
        setFilteredPubs(data)
        setLoading(false)
      })
      .catch(() => {
        // Fallback data if file doesn't exist
        const fallbackData: Publication[] = [
          {
            title: "Quantum Frontier: The revolutionary impact of Human–Quantum Computer Interaction (HQCI) on enhancing web services",
            authors: ["Maher Ali Rusho", "Mehadi Hasan"],
            venue: "OSF (Preprint, DOI)",
            year: 2024,
            type: "Preprint",
            links: {
              doi: "https://doi.org/10.17605/OSF.IO/E23JR",
              publisher: "https://osf.io/e23jr/resources"
            },
            thumbnail: "/papers/hqci.jpg",
            featured: true,
            abstract: "Concept note introducing HQCI for scalable, individualized UX atop quantum principles."
          },
          {
            title: "Quantum Frontier (ResearchGate record)",
            authors: ["Maher Ali Rusho", "Mehadi Hasan", "Mohammad Hasibur Rahman"],
            venue: "ResearchGate",
            year: 2024,
            type: "Preprint",
            links: {
              publisher: "https://www.researchgate.net/publication/381408436_Quantum_Frontier_The_revolutionary_impact_of_Quantum_Human-Computer_Interaction_QHCI_on_enhancing_web_services"
            },
            thumbnail: "/papers/hqci-rg.jpg",
            featured: true,
            abstract: "Project page for the HQCI initiative with supplementary materials."
          },
          {
            title: "Introduction to Rusho's Transform Lakshmann and Smith Model: A Machine Learning Approach to Earthquake Detection",
            authors: ["Maher Ali Rusho"],
            venue: "International Journal of Sciences (listing)",
            year: 2023,
            type: "Journal",
            links: {
              publisher: "https://www.researchgate.net/scientific-contributions/Maher-Ali-RUsho-2225731851"
            },
            thumbnail: "/papers/earthquake.jpg",
            featured: false,
            abstract: "Listing page for earthquake ML framework; attach PDF/DOI when available."
          }
        ]
        setPublications(fallbackData)
        setFilteredPubs(fallbackData)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let filtered = publications

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(pub => pub.type === selectedType)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(query) ||
        pub.authors.some(author => author.toLowerCase().includes(query)) ||
        pub.venue.toLowerCase().includes(query)
      )
    }

    setFilteredPubs(filtered)
  }, [publications, selectedType, searchQuery])

  const types = ['All', 'Journal', 'Conference', 'Preprint']

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 glass-morphism rounded-lg focus-ring text-slate-700 dark:text-slate-300 placeholder-gray-500"
          />
        </div>

        {/* Filter Bar */}
        <FilterBar
          types={types}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      </div>

      {/* Publications Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedType}-${searchQuery}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPubs.map((pub, index) => (
            <motion.div
              key={`${pub.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PubCard publication={pub} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPubs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 mb-4">
            <Filter className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            No publications found
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}
    </div>
  )
}