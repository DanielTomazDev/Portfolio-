'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutProps {
  currentLanguage: string
}

type LanguageKey = 'pt' | 'en'

type AboutContent = {
  title: string
  heading: ReactNode
  paragraphs: ReactNode[]
  badges: {
    top: string
    bottom: string
    side: string
  }
}

const content: Record<LanguageKey, AboutContent> = {
  pt: {
    title: 'Sobre Mim',
    heading: (
      <>
        
      </>
    ),
    paragraphs: [
      <>
        Olá, eu sou o <span className="text-white font-semibold">Daniel Tomaz</span> — Desenvolvedor Frontend brasileiro apaixonado por criar experiências digitais que realmente conectam pessoas e ideias.
      </>,
      <>
        Especializado em <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span> e <span className="text-white font-semibold">Design Systems</span>, transformo interfaces complexas em produtos envolventes, unindo criatividade, lógica e atenção aos detalhes para gerar impacto real.
      </>,
      <>
        Acompanho todo o ciclo do produto, da ideação ao deploy, sempre atento a <span className="text-white font-semibold">Acessibilidade</span> e <span className="text-white font-semibold">Performance</span> que encantam usuários e aumentam resultados.
      </>,
      <>
        Pronto para tirar sua ideia do papel e construir algo verdadeiramente memorável juntos?
      </>
    ],
    badges: {
      top: 'Criatividade',
      bottom: 'Performance',
      side: 'Inovação'
    }
  },
  en: {
    title: 'About Me',
    heading: (
      <>

      </>
    ),
    paragraphs: [
      <>
        Hey, I’m <span className="text-white font-semibold">Daniel Tomaz</span> — a Brazilian Frontend Developer passionate about crafting digital experiences that truly connect people and ideas.
      </>,
      <>
        Specialized in <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span> and <span className="text-white font-semibold">Design Systems</span>, I turn complex interfaces into engaging products by blending creativity, logic and attention to detail to generate real impact.
      </>,
      <>
        I follow the entire product journey, from ideation to deployment, always focusing on <span className="text-white font-semibold">Accessibility</span> and <span className="text-white font-semibold">Performance</span> to delight users and drive results.
      </>,
      <>
        Ready to take your idea off the ground and build something truly memorable together?
      </>
    ],
    badges: {
      top: 'Creativity',
      bottom: 'Performance',
      side: 'Innovation'
    }
  }
}

export default function About({ currentLanguage }: AboutProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const currentContent = content[currentLanguage as LanguageKey]

  return (
    <section id="about" className="py-24 bg-netflix-gray-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="mb-16 text-left md:text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title mb-3">
            {currentContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative max-w-xs sm:max-w-sm mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="absolute -top-8 right-1 text-white/70 text-[0.65rem] tracking-[0.4em] uppercase">
              {currentContent.badges.top}
            </span>
            <span className="absolute bottom-6 -left-9 text-white/70 text-[0.65rem] tracking-[0.4em] uppercase rotate-90 origin-left">
              {currentContent.badges.bottom}
            </span>
            <span className="absolute top-1/2 -right-10 -translate-y-1/2 text-white/70 text-[0.65rem] tracking-[0.4em] uppercase">
              {currentContent.badges.side}
            </span>

            <div className="relative bg-primary-blue rounded-[2rem] p-6 sm:p-7 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.75)] overflow-hidden">
              <div className="absolute inset-0 opacity-50 mix-blend-soft-light bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_55%)]" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -top-10 right-2 w-24 h-24 rounded-full bg-white/20 blur-3xl" />

              <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white/40 shadow-2xl">
                <img
                  src="/daniel-tomaz.jpg"
                  alt="Daniel Tomaz"
                  className="w-full object-cover"
                  style={{ aspectRatio: '3 / 4' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-reveal-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              {currentContent.heading}
            </h3>
            <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed">
              {currentContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
