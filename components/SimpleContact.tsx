'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface SimpleContactProps {
  currentLanguage: string
}

export default function SimpleContact({ currentLanguage }: SimpleContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: currentLanguage === 'pt' ? 'Olá! Como posso te ajudar?' : 'Hello! How can I help you?',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ])

  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert(currentLanguage === 'pt' ? 'Por favor, preencha todos os campos!' : 'Please fill in all fields!')
      return
    }
    
    // Adicionar mensagem do usuário
    const userMessage = {
      id: messages.length + 1,
      text: formData.message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)
    
    // Simular resposta automática
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: currentLanguage === 'pt' 
          ? `✅ Obrigado pela mensagem, ${formData.name}! Recebi no email danieltomazdev@gmail.com. Vou responder em breve! 📧`
          : `✅ Thanks for your message, ${formData.name}! I received it at danieltomazdev@gmail.com. I'll reply soon! 📧`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  const openWhatsApp = () => {
    const message = currentLanguage === 'pt' 
      ? `Olá, Daniel! \n\nEncontrei seu portfólio e fiquei interessado em conversar sobre um projeto.`
      : `Hello, Daniel! \n\nI found your portfolio and I'm interested in discussing a project.`
    
    const whatsappUrl = `https://wa.me/5555999650914?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-netflix-gray-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {currentLanguage === 'pt' ? 'Vamos Conversar?' : 'Let\'s Talk?'}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === 'pt' ? 'Chame no WhatsApp ou envie uma mensagem' : 'Call on WhatsApp or send a message'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-envelope text-3xl text-primary-blue"></i>
              <div>
                <h4 className="text-xl font-bold text-white">Email</h4>
                <p className="text-gray-300">danieltomazdev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-phone text-3xl text-primary-blue"></i>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {currentLanguage === 'pt' ? 'Telefone' : 'Phone'}
                </h4>
                <p className="text-gray-300">+55 (55) 99965-0914</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-map-marker-alt text-3xl text-primary-blue"></i>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {currentLanguage === 'pt' ? 'Localização' : 'Location'}
                </h4>
                <p className="text-gray-300">
                  {currentLanguage === 'pt' ? 'Brasil' : 'Brazil'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Header do Chat */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Daniel Tomaz</h3>
                  <p className="text-green-100 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {currentLanguage === 'pt' ? 'Online' : 'Online'}
                  </p>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                {currentLanguage === 'pt' ? 'Chamar no WhatsApp' : 'Call on WhatsApp'}
              </button>
            </div>

            {/* Área de Mensagens */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-green-500 text-white rounded-br-md'
                        : 'bg-gray-700 text-gray-100 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Indicador de digitação */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Formulário de Envio */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex space-x-4 mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={currentLanguage === 'pt' ? 'Seu nome' : 'Your name'}
                  required
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none text-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={currentLanguage === 'pt' ? 'Seu email' : 'Your email'}
                  required
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none text-sm"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={currentLanguage === 'pt' ? 'Digite sua mensagem...' : 'Type your message...'}
                  required
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
