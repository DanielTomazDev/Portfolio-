'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectsProps {
  currentLanguage: string
}

export default function Projects({ currentLanguage }: ProjectsProps) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isAnimatingRef = useRef(false)
  const currentIndexRef = useRef(0)

  const projects = [
    {
      title: 'E-commerce Platform',
      description: currentLanguage === 'pt' ? 'Plataforma completa de e-commerce com React e Node.js, incluindo sistema de pagamentos e gestão de estoque' : 'Complete e-commerce platform with React and Node.js, including payment system and inventory management',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: 'fas fa-shopping-cart',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Task Manager App',
      description: currentLanguage === 'pt' ? 'Aplicativo de gerenciamento de tarefas com interface intuitiva e colaboração em tempo real' : 'Task management app with intuitive interface and real-time collaboration',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      icon: 'fas fa-tasks',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Analytics Dashboard',
      description: currentLanguage === 'pt' ? 'Dashboard de analytics com visualizações interativas e relatórios personalizáveis' : 'Analytics dashboard with interactive visualizations and customizable reports',
      tags: ['D3.js', 'Python', 'Flask', 'Chart.js'],
      icon: 'fas fa-chart-line',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Social Media App',
      description: currentLanguage === 'pt' ? 'Rede social moderna com recursos avançados de compartilhamento e interação' : 'Modern social media with advanced sharing and interaction features',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      icon: 'fas fa-users',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Weather App',
      description: currentLanguage === 'pt' ? 'Aplicativo de clima com previsões em tempo real e notificações personalizadas' : 'Weather app with real-time forecasts and personalized notifications',
      tags: ['React', 'API', 'CSS3', 'PWA'],
      icon: 'fas fa-cloud-sun',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'AI-Powered Chat Application',
      description: currentLanguage === 'pt' ? 'Aplicativo de chat inteligente com IA integrada, processamento de linguagem natural e respostas contextuais em tempo real' : 'Intelligent chat application with integrated AI, natural language processing and real-time contextual responses',
      tags: ['OpenAI API', 'WebSocket', 'Node.js', 'React', 'MongoDB'],
      icon: 'fas fa-robot',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]


  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current
    if (container && index >= 0 && index < projects.length) {
      const firstChild = container.children[0] as HTMLElement | undefined
      const cardWidth = firstChild ? (firstChild as HTMLElement).offsetWidth : 288
      const styles = window.getComputedStyle(container)
      const gap = parseInt(styles.gap || '24', 10) || 24
      const itemSize = cardWidth + gap
      const scrollLeft = index * itemSize
      isAnimatingRef.current = true
      setCurrentIndex(index)
      currentIndexRef.current = index
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      window.setTimeout(() => {
        isAnimatingRef.current = false
      }, 400)
    }
  }

  const nextProject = () => {
    if (isAnimatingRef.current) return
    const nextIndex = currentIndexRef.current + 1
    if (nextIndex < projects.length) {
      scrollToProject(nextIndex)
    } else {
      scrollToProject(0) // Volta para o primeiro
    }
  }

  const prevProject = () => {
    if (isAnimatingRef.current) return
    const prevIndex = currentIndexRef.current - 1
    if (prevIndex >= 0) {
      scrollToProject(prevIndex)
    } else {
      scrollToProject(projects.length - 1) // Vai para o último
    }
  }

  // Atualizar currentIndex quando o scroll mudar
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const firstChild = container.children[0] as HTMLElement | undefined
      const cardWidth = firstChild ? (firstChild as HTMLElement).offsetWidth : 288
      const styles = window.getComputedStyle(container)
      const gap = parseInt(styles.gap || '24', 10) || 24
      const itemSize = cardWidth + gap
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / itemSize)
      setCurrentIndex(newIndex)
      currentIndexRef.current = newIndex
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className="py-0 bg-netflix-gray-dark">
      <div className="container mx-auto px-6 mb-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-6 pb-2">
            {currentLanguage === 'pt' ? 'Projetos' : 'Projects'}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {currentLanguage === 'pt' ? 'Alguns dos meus trabalhos favoritos' : 'Some of my favorite works'}
          </p>
        </motion.div>
      </div>

       {/* Carrossel de Projetos - Full Width */}
       <div className="relative pb-6 overflow-visible">
          {/* Botões de navegação */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <i className="fas fa-chevron-left text-lg sm:text-xl group-hover:text-primary-blue transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
          >
            <i className="fas fa-chevron-right text-lg sm:text-xl group-hover:text-primary-blue transition-colors duration-300" />
          </button>

          {/* Container do carrossel */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-6 overflow-visible"
            style={{ scrollSnapType: 'x mandatory', scrollSnapStop: 'always' }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-48 sm:w-56 md:w-64 group">
                {/* Card da imagem */}
                <Link href={`/project/${index}`}>
                  <motion.div
                  className={`bg-black rounded-2xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.7)] transition-all duration-300 cursor-pointer relative ${
                      index === currentIndex ? 'scale-110' : 'hover:scale-110'
                    }`}
                    style={{ scrollSnapAlign: 'start' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: index === currentIndex ? -8 : 0,
                      scale: index === currentIndex ? 1.1 : 1
                    }}
                    whileHover={{ 
                      y: index === currentIndex ? -8 : -6,
                      scale: index === currentIndex ? 1.15 : 1.05,
                      rotateY: 5,
                      boxShadow: "0 25px 50px -12px rgb(2, 2, 3)"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                  >
                    {/* Imagem do projeto */}
                    <div className="h-56 relative overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                      {/* Imagem de fundo - aparece no hover ou quando destacado */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                          index === currentIndex 
                            ? 'opacity-100 scale-105' 
                            : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />
                      
                      {/* Ícone central - sempre visível, mas com transparência quando destacado */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`${project.icon} text-6xl sm:text-7xl text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-2xl ${
                          index === currentIndex 
                            ? 'opacity-70 group-hover:opacity-90' 
                            : 'opacity-100 group-hover:opacity-90'
                        }`} />
                      </div>
                      
                      {/* Overlay gradiente */}
                      <div className={`absolute inset-0 transition-all duration-500 ${
                        index === currentIndex 
                          ? 'bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40' 
                          : 'bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60'
                      }`} />
                    </div>
                  </motion.div>
                </Link>

                {/* Informações abaixo do card - Aparecem no hover ou quando destacado */}
                <div className={`mt-4 px-2 transition-all duration-500 delay-150 pointer-events-none ${
                  index === currentIndex 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <h3 className={`text-xl font-bold mb-2 text-white transition-all duration-400 delay-200 transform ${
                    index === currentIndex 
                      ? 'text-primary-blue translate-y-0' 
                      : 'translate-y-5 group-hover:text-primary-blue group-hover:translate-y-0'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2 transition-all duration-400 delay-300 transform ${
                    index === currentIndex 
                      ? 'translate-y-0' 
                      : 'translate-y-5 group-hover:translate-y-0'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-400 delay-400 transform ${
                    index === currentIndex 
                      ? 'translate-y-0' 
                      : 'translate-y-5 group-hover:translate-y-0'
                  }`}>
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r from-primary-blue/20 to-accent-blue/20 text-primary-blue text-xs rounded-full border border-primary-blue/30 transition-all duration-300 ${
                          index === currentIndex 
                            ? 'scale-100' 
                            : 'scale-75 group-hover:scale-100'
                        }`}
                        style={{ transitionDelay: `${500 + (tagIndex * 100)}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/project/${index}`}
                    className={`w-full bg-primary-blue hover:bg-primary-blue-dark text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group transform transition-all duration-400 delay-600 flex items-center justify-center ${
                      index === currentIndex 
                        ? 'translate-y-0' 
                        : 'translate-y-5 group-hover:translate-y-0'
                    }`}
                  >
                    {currentLanguage === 'pt' ? 'Ver Projeto' : 'View Project'}
                    <i className="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores removidos */}
        </div>
    </section>
  )
}