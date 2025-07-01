import { Sun, Moon } from 'lucide-react'
import { useStore } from '../store/Store'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useStore()
  
  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}