import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Maher Ali Rusho - AI Researcher • HCI Innovator • Materials & Quantum Frontier Visionary',
  description: 'Portfolio of Dr. Maher Ali Rusho - Leading research in AI, Human-Computer Interaction, Materials Science, and Quantum Computing.',
  keywords: 'AI Research, HCI, Human-Computer Interaction, Quantum Computing, Materials Science, Machine Learning',
  authors: [{ name: 'Dr. Maher Ali Rusho' }],
  openGraph: {
    title: 'Dr. Maher Ali Rusho - AI Researcher & HCI Innovator',
    description: 'Pioneering research in AI, HCI, and Quantum-Human Computer Interaction',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-500`}>
        <ThemeProvider>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a>
          <main id="main-content" className="relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}