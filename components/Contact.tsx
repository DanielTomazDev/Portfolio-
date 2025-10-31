"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ContactProps {
  currentLanguage: string
}

export default function Contact({ currentLanguage }: ContactProps) {
  const content = {
    pt: {
      title: 'Vamos fazer magia acontecer!',
      desc: 'Do conceito ao produto final, busco excelência em cada projeto. Vamos criar algo incrível juntos. Me chama e vamos começar!',
      cta: 'Entrar em contato'
    },
    en: {
      title: "Let's make magic happen!",
      desc: "From initial concept to final product, I strive for excellence in every project. Let's make something great together. Hit me up and let's kick off your project now!",
      cta: 'Get in touch'
    }
  }

  const t = content[currentLanguage as keyof typeof content]

  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  const nameLetters = 'Daniel Tomaz'.split('')

  const openWhatsApp = () => {
    const msg = currentLanguage === 'pt'
      ? 'Olá, Daniel! 😊\n\nEncontrei seu portfólio e fiquei interessado em conversar sobre um projeto.'
      : "Hello, Daniel! 😊\n\nI found your portfolio and I'm interested in discussing a project."
    window.open(`https://wa.me/5555999650914?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="py-28 bg-netflix-gray-dark">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex justify-center items-center mb-12 h-32">
            <AnimatePresence mode="wait">
              {!showLogo ? (
                <motion.div
                  key="name"
                  className="flex text-3xl md:text-4xl font-semibold text-white tracking-wide"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
                    exit: { opacity: 0, transition: { duration: 0.4 } }
                  }}
                >
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: index % 2 === 0 ? -40 : 40
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.45,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }
                        }
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'mirror',
                      duration: 4,
                      ease: 'easeInOut'
                    }}
                  >
                    <Image
                      src="/icons/logo-dt.png"
                      alt="Daniel Tomaz"
                      width={280}
                      height={130}
                      className="drop-shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
                      priority
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            {t.desc}
          </p>
          <button onClick={openWhatsApp} className="bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-blue/80 transition inline-flex items-center gap-2">
            {t.cta}
            <i className="fas fa-arrow-up-right-from-square text-sm" />
          </button>
          <div className="flex items-center gap-6 mt-8 text-gray-300">
            <a href="https://www.linkedin.com/in/daniel-tomaz-7665421ab" aria-label="LinkedIn" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-xl" /></a>
            <a href="https://github.com/DanielTomazDev" aria-label="GitHub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-xl" /></a>
            <a href="https://www.instagram.com/joaodanieltj?igsh=MTUzZ201dXh5Y21pag==" aria-label="Instagram" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-xl" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
