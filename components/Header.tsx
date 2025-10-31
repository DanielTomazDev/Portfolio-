'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderProps {
  currentLanguage: string
  onToggleLanguage: () => void
}

export default function Header({ currentLanguage, onToggleLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', pt: 'Início', en: 'Home' },
    { id: 'services', pt: 'Serviços', en: 'Services' },
    { id: 'projects', pt: 'Projetos', en: 'Projects' },
    { id: 'about', pt: 'Sobre', en: 'About' },
    { id: 'skills', pt: 'Habilidades', en: 'Skills' },
    { id: 'contact', pt: 'Contato', en: 'Contact' },
  ]

  const handleLanguageToggle = () => {
    onToggleLanguage()
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
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
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed z-50 top-0 left-0 right-0 w-full px-4 md:px-8 py-3 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
      initial={{ y: -50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="flex justify-end">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col space-y-1 p-3 rounded-full bg-primary-blue/80 shadow-lg"
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <motion.div
        className={`fixed top-20 right-4 sm:right-8 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
      >
        <div className="px-5 pt-6 pb-12 space-y-4 bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-xl w-full max-w-md max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Image
              src="/icons/logo-dt.png"
              alt="Daniel Tomaz"
              width={220}
              height={110}
              className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_16px_36px_rgba(59,130,246,0.35)]"
              priority
            />
            <motion.button
              onClick={handleLanguageToggle}
              className="language-toggle self-start md:self-center md:justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-globe" />
              <span className="font-semibold">{currentLanguage.toUpperCase()}</span>
            </motion.button>
          </div>

          <div className="space-y-4 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 bg-white/5 rounded-lg text-gray-200 hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                {currentLanguage === 'pt' ? item.pt : item.en}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
