import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'

export const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
  >
    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <Code size={64} className="text-white opacity-30" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Github size={16} className="mr-1" /> Code
        </a>
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ExternalLink size={16} className="mr-1" /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
)