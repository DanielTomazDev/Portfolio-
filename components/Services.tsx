'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ServicesProps {
  currentLanguage: string
}

export default function Services({ currentLanguage }: ServicesProps) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isAnimatingRef = useRef(false)
  const currentIndexRef = useRef(0)

  const services = [
    {
      title: currentLanguage === 'pt' ? 'Desenvolvimento Web' : 'Web Development',
      description: currentLanguage === 'pt' ? 'Sites e aplicações web modernas e responsivas' : 'Modern and responsive websites and web applications',
      tags: ['React', 'Next.js', 'TypeScript'],
      icon: 'fas fa-code',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'E-commerce',
      description: currentLanguage === 'pt' ? 'Lojas virtuais completas e otimizadas para vendas' : 'Complete online stores optimized for sales',
      tags: ['Shopify', 'WooCommerce', 'Stripe'],
      icon: 'fas fa-shopping-cart',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: currentLanguage === 'pt' ? 'Aplicativos Mobile' : 'Mobile Apps',
      description: currentLanguage === 'pt' ? 'Apps nativos e híbridos para iOS e Android' : 'Native and hybrid apps for iOS and Android',
      tags: ['React Native', 'Flutter', 'Expo'],
      icon: 'fas fa-mobile-alt',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: currentLanguage === 'pt' ? 'Consultoria Tech' : 'Tech Consulting',
      description: currentLanguage === 'pt' ? 'Orientação estratégica em tecnologia e desenvolvimento' : 'Strategic guidance in technology and development',
      tags: ['Architecture', 'Performance', 'SEO'],
      icon: 'fas fa-lightbulb',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: currentLanguage === 'pt' ? 'Manutenção' : 'Maintenance',
      description: currentLanguage === 'pt' ? 'Suporte contínuo e atualizações de sistemas' : 'Continuous support and system updates',
      tags: ['DevOps', 'Monitoring', 'Backup'],
      icon: 'fas fa-tools',
      image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const handleHireService = (serviceTitle: string) => {
    const message = currentLanguage === 'pt'
      ? `Olá, Daniel! \n\nConheci seu portfólio e me interessei pelo serviço de "${serviceTitle}". Gostaria de conversar e saber mais detalhes.`
      : `Hello, Daniel! \n\nI found your portfolio and I'm interested in the "${serviceTitle}" service. I'd love to chat and learn more details.`

    window.open(`https://wa.me/5555999650914?text=${encodeURIComponent(message)}`, '_blank')
  }


  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current
    if (container && index >= 0 && index < services.length) {
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
    if (nextIndex < services.length) {
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
      scrollToProject(services.length - 1) // Vai para o último
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
    <section id="services" className="py-20 bg-netflix-gray-dark">
      <div className="container mx-auto px-6 mb-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-6 pb-2">
            {currentLanguage === 'pt' ? 'Serviços' : 'Services'}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {currentLanguage === 'pt' ? 'O que posso fazer por você' : 'What I can do for you'}
          </p>
        </motion.div>
      </div>

      {/* Carrossel de Serviços - Full Width */}
      <div className="relative pb-8 overflow-visible">
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
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-6 overflow-visible"
            style={{ scrollSnapType: 'x mandatory', scrollSnapStop: 'always' }}
          >
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-52 sm:w-56 md:w-64 group">
                {/* Card da imagem */}
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
                  {/* Imagem do serviço com ícone à frente e reveal */}
                  <div className="h-56 relative overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                    {/* Imagem ilustrativa - aparece no hover ou quando destacado */}
                    <img 
                      src={service.image}
                      alt={service.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                        index === currentIndex 
                          ? 'opacity-100 scale-105' 
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />

                    {/* Ícone central - sempre visível, com transparência quando ativo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className={`${service.icon} text-6xl sm:text-7xl text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-2xl ${
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
                    {service.title}
                  </h3>
                  
                  <p className={`text-gray-300 mb-3 text-sm leading-relaxed line-clamp-2 transition-all duration-400 delay-300 transform ${
                    index === currentIndex 
                      ? 'translate-y-0' 
                      : 'translate-y-5 group-hover:translate-y-0'
                  }`}>
                    {service.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-400 delay-400 transform ${
                    index === currentIndex 
                      ? 'translate-y-0' 
                      : 'translate-y-5 group-hover:translate-y-0'
                  }`}>
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
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
                  
                  <button
                    onClick={() => handleHireService(service.title)}
                    className={`pointer-events-auto w-full bg-primary-blue hover:bg-primary-blue-dark text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group transform transition-all duration-400 delay-600 ${
                    index === currentIndex 
                      ? 'translate-y-0' 
                      : 'translate-y-5 group-hover:translate-y-0'
                  }`}
                  >
                    {currentLanguage === 'pt' ? 'Contratar Serviço' : 'Hire Service'}
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores removidos */}
        </div>
    </section>
  )
}
