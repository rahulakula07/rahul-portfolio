import { motion } from 'framer-motion';
import { Mail, Phone, Home, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const handleContactSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0sydkfq',    
      'template_fguk4x8',    
      e.target,
      '7ZZj3WYkI2K93M3TA'        
    ).then(
      () => {
        toast.success('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        toast.error('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:rahulgoudakula@gmail.com" className="text-gray-600 dark:text-gray-300 hover:underline">
                    rahulgoudakula@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919392970058" className="text-gray-600 dark:text-gray-300 hover:underline">
                    +91 9392970058
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Home className="mr-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/akula-rahul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                >
                  <Linkedin className="text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href="https://github.com/rahulakula07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                >
                  <Github className="text-blue-600 dark:text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
