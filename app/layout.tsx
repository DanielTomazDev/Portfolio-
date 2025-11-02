import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Cabin, Share_Tech } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const cabin = Cabin({ 
  subsets: ['latin'],
  variable: '--font-cabin',
  display: 'swap',
})

const shareTech = Share_Tech({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daniel Tomaz - Portfolio',
  description: 'Portfolio de Daniel Tomaz - Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis',
  keywords: 'desenvolvedor, frontend, full stack, portfolio, programação, web development, react, nextjs, typescript',
  authors: [{ name: 'Daniel Tomaz' }],
  openGraph: {
    title: 'Daniel Tomaz - Portfolio',
    description: 'Desenvolvedor Frontend apaixonado por criar experiências digitais incríveis',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetBrainsMono.variable} ${cabin.variable} ${shareTech.variable}`}>
      <head>
        {/* Font Awesome CDN - carregado de forma assíncrona */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Font Awesome Script - alternativa otimizada */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
