'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  icon: string
  image: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState('pt')
  const [project, setProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 0,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React e Node.js',
      longDescription: 'Uma plataforma completa de e-commerce desenvolvida com React no frontend e Node.js no backend. Inclui sistema de pagamentos integrado com Stripe, gestão de estoque em tempo real, carrinho de compras, sistema de avaliações e busca avançada. A aplicação possui painel administrativo completo para gerenciamento de produtos, pedidos e usuários.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'Redux'],
      icon: 'fas fa-shopping-cart',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 1,
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com interface intuitiva',
      longDescription: 'Aplicativo completo de gerenciamento de tarefas desenvolvido com Vue.js. Oferece interface intuitiva com drag-and-drop, colaboração em tempo real usando Socket.io, categorização de tarefas, lembretes e notificações, e sincronização em múltiplos dispositivos. Inclui dashboard analítico com métricas de produtividade.',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'TypeScript'],
      icon: 'fas fa-tasks',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Dashboard de analytics com visualizações interativas',
      longDescription: 'Dashboard avançado de analytics com visualizações interativas desenvolvido com D3.js e Chart.js. Oferece relatórios personalizáveis, gráficos em tempo real, exportação de dados em múltiplos formatos, filtros avançados e compartilhamento de dashboards. Inclui integração com diversas fontes de dados e alertas personalizados.',
      tags: ['D3.js', 'Python', 'Flask', 'Chart.js', 'React', 'PostgreSQL'],
      icon: 'fas fa-chart-line',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Rede social moderna com recursos avançados de compartilhamento',
      longDescription: 'Rede social moderna desenvolvida com React Native para mobile e React para web. Inclui recursos avançados de compartilhamento de conteúdo, stories, mensagens em tempo real, sistema de notificações push, feed personalizado com algoritmo de relevância, perfis customizáveis e sistema de moderadores.',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux', 'Node.js'],
      icon: 'fas fa-users',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicativo de clima com previsões em tempo real',
      longDescription: 'Aplicativo de clima desenvolvido com React e integração com APIs meteorológicas. Oferece previsões em tempo real, notificações personalizadas para eventos climáticos, widgets para diferentes dispositivos, histórico de dados climáticos, mapas interativos e modo offline usando Progressive Web App (PWA) technology.',
      tags: ['React', 'API', 'CSS3', 'PWA', 'Service Workers'],
      icon: 'fas fa-cloud-sun',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'AI-Powered Chat Application',
      description: 'Aplicativo de chat inteligente com IA integrada',
      longDescription: 'Aplicativo de chat inteligente desenvolvido com integração de IA usando OpenAI API. Oferece processamento de linguagem natural, respostas contextuais em tempo real, suporte multi-idiomas, histórico de conversas, exportação de conversas, modo escuro/claro e integração com sistemas de CRM. Utiliza WebSockets para comunicação em tempo real.',
      tags: ['OpenAI API', 'WebSocket', 'Node.js', 'React', 'MongoDB', 'Express'],
      icon: 'fas fa-robot',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: '#',
      liveUrl: '#'
    }
  ]

  const content = {
    pt: {
      backButton: 'Voltar',
      viewLive: 'Ver Projeto',
      viewCode: 'Ver Código',
      technologies: 'Tecnologias',
      projectDescription: 'Descrição do Projeto',
      features: 'Funcionalidades',
      notFound: 'Projeto não encontrado'
    },
    en: {
      backButton: 'Back',
      viewLive: 'View Project',
      viewCode: 'View Code',
      technologies: 'Technologies',
      projectDescription: 'Project Description',
      features: 'Features',
      notFound: 'Project not found'
    }
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage)
    }

    const projectId = parseInt(params.id as string)
    const foundProject = projects.find(p => p.id === projectId)
    setProject(foundProject || null)
  }, [params.id])

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt'
    setCurrentLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  if (!project) {
    return (
      <main className="min-h-screen bg-netflix-gray-dark text-white">
        <Header 
          currentLanguage={currentLanguage} 
          onToggleLanguage={toggleLanguage} 
        />
        <div className="container mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-primary-blue">
              {currentContent.notFound}
            </h1>
            <button
              onClick={() => router.push('/')}
              className="mt-8 bg-primary-blue hover:bg-primary-blue-dark text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {currentContent.backButton}
            </button>
          </motion.div>
        </div>
        <Footer currentLanguage={currentLanguage} />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-netflix-gray-dark text-white">
      <Header 
        currentLanguage={currentLanguage} 
        onToggleLanguage={toggleLanguage} 
      />
      
      <div className="pt-20">
        {/* Hero Section do Projeto */}
        <section className="relative min-h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-netflix-gray-dark via-netflix-gray-dark/90 to-netflix-gray-dark" />
          </div>

          <div className="relative container mx-auto px-6 py-16">
            <motion.button
              onClick={() => router.push('/#projects')}
              className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-arrow-left" />
              <span>{currentContent.backButton}</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <i className={`${project.icon} text-5xl text-primary-blue`} />
                <h1 className="text-4xl md:text-5xl font-bold">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentLanguage === 'pt' ? project.description : project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github" />
                    <span>{currentContent.viewCode}</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-blue hover:bg-primary-blue-dark text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt" />
                    <span>{currentContent.viewLive}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Descrição Longa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-blue">
                {currentContent.projectDescription}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentLanguage === 'pt' ? project.longDescription : project.longDescription}
              </p>
            </motion.div>

            {/* Tecnologias */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-blue">
                {currentContent.technologies}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-blue/20 to-accent-blue/20 text-primary-blue text-sm rounded-full border border-primary-blue/30 font-semibold"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Imagem Grande do Projeto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer currentLanguage={currentLanguage} />
    </main>
  )
}
