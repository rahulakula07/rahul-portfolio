import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { toast } from 'react-toastify'
import { useStore } from './components/store/Store'

import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  const { darkMode, mobileMenuOpen, toggleMobileMenu } = useStore()
  const [showConfetti, setShowConfetti] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully!')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      toggleMobileMenu()
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <MobileMenu 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <main className="pt-20">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Education />
        <Contact handleContactSubmit={handleContactSubmit} />
      </main>

      <Footer />
    </div>
  )
}

export default App