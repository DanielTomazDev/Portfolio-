'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillsProps {
  currentLanguage: string
}

export default function Skills({ currentLanguage }: SkillsProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const content = {
    pt: {
      title: 'Habilidades',
      subtitle: 'Tecnologias que domino',
      categories: [
        {
          title: 'Frontend',
          skills: [
            { name: 'React', level: 90 },
            { name: 'Vue.js', level: 85 },
            { name: 'TypeScript', level: 80 }
          ]
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Python', level: 85 },
            { name: 'PostgreSQL', level: 82 }
          ]
        }
      ]
    },
    en: {
      title: 'Skills',
      subtitle: 'Technologies I master',
      categories: [
        {
          title: 'Frontend',
          skills: [
            { name: 'React', level: 90 },
            { name: 'Vue.js', level: 85 },
            { name: 'TypeScript', level: 80 }
          ]
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Python', level: 85 },
            { name: 'PostgreSQL', level: 82 }
          ]
        }
      ]
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  // Lista de tecnologias
  const techs = [
    // Linha 1 — Frontend base
    { name: 'React', icon: 'fab fa-react', color: 'text-sky-400' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-emerald-400' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-300' },
    { name: 'TypeScript', svg: 'https://cdn.simpleicons.org/typescript' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-400' },
    { name: 'Tailwind CSS', svg: 'https://cdn.simpleicons.org/tailwindcss' },

    // Linha 2 — Backend e infraestrutura
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Next.js', svg: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Express', svg: 'https://cdn.simpleicons.org/express' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400' },
    { name: 'PostgreSQL', svg: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-sky-500' },

    // Linha 3 — Ferramentas e controle de versão
    { name: 'Vite', svg: 'https://cdn.simpleicons.org/vite' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-white' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-pink-500' },

    // Linha 4 — Outros
    { name: 'UX/UI', icon: 'fas fa-pen-nib', color: 'text-pink-400' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-orange-400' },
  ]

  // Layout pirâmide invertida (mais itens em cima, menos embaixo)
  const rowLayout = [7, 6, 4, 1]
  const rows: Array<typeof techs> = [] as any
  {
    let start = 0
    for (const count of rowLayout) {
      rows.push(techs.slice(start, start + count) as any)
      start += count
    }
    if (start < techs.length) rows.push(techs.slice(start) as any)
  }

  return (
    <section id="skills" className="py-24 bg-netflix-gray-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Pirâmide invertida de ícones */}
        <div className="flex flex-col items-center space-y-4">
          {rows.map((row, rIdx) => (
            <motion.div
              key={rIdx}
              className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: rIdx * 0.1 }}
            >
              {row.map((tech, idx) => (
                <motion.div
                  key={`${rIdx}-${idx}`}
                  className="rounded-xl p-2 sm:p-3 flex flex-col items-center justify-center gap-2 group"
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  {tech.svg ? (
                    <img 
                      src={tech.svg as string}
                      alt={tech.name}
                      className="h-8 sm:h-10 md:h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => { if (tech.svg) (e.currentTarget as HTMLImageElement).src = tech.svg as string }}
                    />
                  ) : tech.icon ? (
                    <i className={`${tech.icon} ${tech.color || 'text-white'} text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300`} />
                  ) : (
                    <div />
                  )}
                  <span className="text-xs sm:text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
