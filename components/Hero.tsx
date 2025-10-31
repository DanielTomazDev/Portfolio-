'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  currentLanguage: string
}

export default function Hero({ currentLanguage }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const content = {
    pt: {
      greeting: 'Transformando ideias em experiências digitais',
      name: 'DANIEL TOMAZ',
      subtitle: 'OLÁ, EU SOU',
      cta1: 'Meus Serviços',
      cta2: 'Vamos Conversar'
    },
      en: {
        greeting: 'Passionate about creating amazing digital experiences',
        name: 'DANIEL TOMAZ',
        subtitle: 'HEY, I\'M',
        cta1: 'My Services',
        cta2: 'Let\'s Talk'
      }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-netflix-gray-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-netflix-gray-dark" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-16 md:gap-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="text-center md:text-left">
             <p className="text-base md:text-lg text-gray-300 font-medium">
               {currentContent.subtitle}
             </p>
             <p className="text-base md:text-lg text-gray-300 font-medium">
               {currentContent.name}
             </p>
           </div>
           
           <h1 className="hero-title text-2xl md:text-6xl text-white text-center md:text-left">
            <span className="tipsy-title text-white">
              {currentContent.greeting}
            </span>
           </h1>
        </motion.div>

      </div>

      {/* Bottom Section - Button and Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Button */}
        <motion.button
          onClick={() => scrollToSection('projects')}
          className="bg-transparent border-2 border-primary-blue text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/30 group hover-lift"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">
            {currentContent.cta1}
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="w-6 h-10 border-2 border-primary-blue/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-primary-blue via-accent-blue to-primary-blue-light rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
