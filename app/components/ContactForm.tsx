'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import GlassCard from './GlassCard'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Since this is a static site, we'll use mailto: as fallback
      const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <GlassCard className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
          Send a Message
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Interested in collaboration or have questions about my research?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 glass-morphism rounded-lg focus-ring text-slate-700 dark:text-slate-300 placeholder-slate-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 glass-morphism rounded-lg focus-ring text-slate-700 dark:text-slate-300 placeholder-slate-500"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 glass-morphism rounded-lg focus-ring text-slate-700 dark:text-slate-300 placeholder-slate-500"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 glass-morphism rounded-lg focus-ring text-slate-700 dark:text-slate-300 placeholder-slate-500 resize-none"
            placeholder="Your message here..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Message Sent!
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle className="w-5 h-5" />
              Try Again
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-600 dark:text-green-400 text-center"
          >
            Your default email client should open with the message. If not, please email directly.
          </motion.div>
        )}
      </form>
    </GlassCard>
  )
}