import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useStore } from '../store/Store'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header({ activeSection, scrollToSection }) {
  const { mobileMenuOpen, toggleMobileMenu } = useStore()
  
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Rahul Akula
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {item}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
        
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}