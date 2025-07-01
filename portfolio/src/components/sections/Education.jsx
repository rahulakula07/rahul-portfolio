import { motion } from 'framer-motion'
import { EducationItem } from '../ui/EducationItem'
import { education } from '../data/educationData'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <EducationItem 
              key={index} 
              edu={edu} 
              index={index} 
              isLast={index === education.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}