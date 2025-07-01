import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export default function Hero({ scrollToSection }) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rahul Akula</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg mb-8 dark:text-gray-300">
                        Detail-oriented and motivated full-stack developer with expertise in building dynamic, user-centric applications using modern web technologies.
                    </p>
                    <div className="flex space-x-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                        >
                            View Projects
                        </motion.a>
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <a href="https://github.com/rahulakula07" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/akula-rahul" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                        <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-xl">
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                    src="/src/assets/images/rahul.jpg"
                                    alt="Rahul Akula"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}