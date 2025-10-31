'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  currentLanguage: string
}

export default function Footer({ currentLanguage }: FooterProps) {
  const content = {
    pt: {
      copyright: '© 2025 Daniel Tomaz. Feito com paciência e muito café ☕',
      license: 'Licença MIT'
    },
    en: {
      copyright: '© 2025 Daniel Tomaz. Crafted with patience and lots of coffee ☕',
      license: 'MIT License'
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <footer className="bg-netflix-gray-dark border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">
            {currentContent.copyright}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:bg-netflix-red hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl" />
              </motion.a>

              <motion.a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:bg-netflix-red hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl" />
              </motion.a>

              <motion.a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:bg-netflix-red hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl" />
              </motion.a>
            </div>

            <motion.a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-balance-scale" />
              {currentContent.license}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
