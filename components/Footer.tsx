'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  currentLanguage: string
}

export default function Footer({ currentLanguage }: FooterProps) {
  const content = {
    pt: {
      copyright: '© 2025 DanielTomazDev. All rights reserved.',
      license: 'Licença MIT'
    },
    en: {
      copyright: '© 2025 DanielTomazDev. All rights reserved.',
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
            {/* TODO: Atualizar os links das redes sociais com URLs reais */}
            <div className="flex space-x-6">
              

              

              
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
