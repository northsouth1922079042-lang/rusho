'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#publications', label: 'Research' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-morphism shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dr. Rusho
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors focus-ring px-3 py-2 rounded-md"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-morphism hover:bg-white/20 transition-colors focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-morphism hover:bg-white/20 transition-colors focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass-morphism hover:bg-white/20 transition-colors focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-white/10 rounded-lg transition-colors focus-ring"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}