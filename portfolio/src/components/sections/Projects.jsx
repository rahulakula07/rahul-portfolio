import { motion } from 'framer-motion'
import { projects } from '../data/ProjectsData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition"
            >
              {/* Clickable image redirecting to demoLink */}
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 150 }}
                className="md:w-1/2 w-full rounded-xl overflow-hidden block"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-md cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              <motion.div
                className="md:w-1/2 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 whitespace-pre-line leading-relaxed">
                  {project.description.trim()}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    GitHub
                  </motion.a>
                  {/* <motion.a
                    href={project.demoLink}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Live Demo
                  </motion.a> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
