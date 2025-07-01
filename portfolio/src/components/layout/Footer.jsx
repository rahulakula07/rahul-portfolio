import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300"
        >
          &copy; {new Date().getFullYear()} Rahul Akula. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}