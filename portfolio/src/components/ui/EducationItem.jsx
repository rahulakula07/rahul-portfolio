import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export const EducationItem = ({ edu, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md ${!isLast ? 'relative pb-10' : ''}`}
  >
    {!isLast && (
      <div className="absolute left-8 top-full h-8 w-0.5 bg-blue-400 dark:bg-blue-600"></div>
    )}
    <div className="flex items-start">
      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
        <GraduationCap className="text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{edu.institution}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</span>
          <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
            {edu.grade}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
)