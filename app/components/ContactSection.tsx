'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from './ContactForm'
import IconLink from './IconLink'
import { Mail, ExternalLink, MapPin, Globe } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactLinks = [
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/scientific-contributions/Maher-Ali-RUsho-2225731851',
      description: 'Research publications and academic profile'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'OSF Profile',
      href: 'https://doi.org/10.17605/OSF.IO/E23JR',
      description: 'Open Science Framework contributions'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'UAIRL Lab',
      href: 'https://www.researchgate.net/lab/Centre-for-UntieAI-Artificial-Intelligence-Research-Lab-UAIRL-Canada-Maher-Ali-Rusho',
      description: 'Unison AI Research Lab (Canada)'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Direct Email',
      href: 'mailto:contact@example.com',
      description: 'For collaboration and research inquiries'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-50/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance">
            Open to collaboration, research partnerships, and academic discussions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Research & Academic Links
              </h3>
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-morphism rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/20 transition-colors focus-ring group"
                  >
                    <div className="text-accent-500 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {link.description}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent-500 transition-colors" />
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-morphism p-6 rounded-lg"
            >
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-500" />
                Research Locations
              </h4>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>🇨🇦 Canada - UAIRL/Unison AI Lab</div>
                <div>🌍 Global - Remote collaborations</div>
                <div>🔬 OSF - Open Science Framework</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}