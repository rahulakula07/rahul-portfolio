import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, X } from 'lucide-react'
import { useStore } from '../store/Store'

export default function MobileMenu({ activeSection, scrollToSection }) {
  const { darkMode, toggleDarkMode, mobileMenuOpen, toggleMobileMenu } = useStore()
  
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-4 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 md:hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-left p-2 rounded-md ${activeSection === item ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}