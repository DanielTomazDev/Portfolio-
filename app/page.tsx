'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('pt')
  const { scrollY } = useScroll()

  // Efeito parallax no hero
  const heroY = useTransform(scrollY, [0, 500], [0, -150])

  // Carregar idioma salvo
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Salvar idioma
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt'
    setCurrentLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
  }

  return (
    <main className="min-h-screen bg-netflix-gray-dark text-white">
      <Header 
        currentLanguage={currentLanguage} 
        onToggleLanguage={toggleLanguage} 
      />
      
      <motion.div style={{ y: heroY }}>
        <Hero currentLanguage={currentLanguage} />
      </motion.div>
      
      <Services currentLanguage={currentLanguage} />
      <Projects currentLanguage={currentLanguage} />
      <About currentLanguage={currentLanguage} />
      <Skills currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
    </main>
  )
}
