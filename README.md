# 🎬 Portfolio Netflix-Style com Next.js

Um portfólio moderno e responsivo inspirado na Netflix, construído com Next.js 14, React 18, TypeScript e Tailwind CSS.

## ✨ Características

- 🎨 **Design Netflix-style** - Interface minimalista e elegante
- 📱 **Totalmente responsivo** - Funciona perfeitamente em todos os dispositivos
- 🌐 **Multilíngue** - Suporte para Português e Inglês
- 🎭 **Animações suaves** - Framer Motion para transições fluidas
- 🎯 **Scroll animations** - Elementos aparecem conforme você rola
- 📦 **Caixas arredondadas** - Containers com bordas arredondadas e efeitos de hover
- 🚀 **Performance otimizada** - Next.js 14 com App Router
- 💻 **TypeScript** - Tipagem estática para maior confiabilidade

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd nextjs-version
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto:**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## 🎨 Personalização

### Alterar informações pessoais

1. **Edite os componentes** em `components/`
2. **Modifique as cores** em `tailwind.config.js`
3. **Adicione suas imagens** na pasta `public/`

### Adicionar mais idiomas

1. **Crie um objeto de tradução** em cada componente
2. **Adicione o idioma** no estado do Header
3. **Implemente a lógica** de troca de idioma

## 📁 Estrutura do Projeto

```
nextjs-version/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Hero.tsx             # Seção hero
│   ├── About.tsx            # Seção sobre
│   ├── Projects.tsx         # Seção projetos
│   ├── Skills.tsx           # Seção habilidades
│   ├── Contact.tsx          # Seção contato
│   └── Footer.tsx           # Rodapé
├── public/                  # Imagens e assets
├── tailwind.config.js       # Configuração do Tailwind
├── next.config.js          # Configuração do Next.js
└── package.json            # Dependências
```

## 🎭 Funcionalidades Implementadas

### ✅ Header
- Logo personalizada
- Navegação responsiva
- Botão de tradução
- Menu hambúrguer para mobile
- Efeito de scroll (transparente → opaco)

### ✅ Hero Section
- Texto animado
- Botões de ação
- Efeito parallax
- Indicador de scroll

### ✅ Seções de Conteúdo
- Animações de entrada
- Caixas arredondadas com hover
- Responsividade completa
- Suporte multilíngue

### ✅ Animações
- Scroll reveal
- Hover effects
- Transições suaves
- Efeitos de escala

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **React Intersection Observer** - Scroll animations
- **Font Awesome** - Ícones

## 📱 Responsividade

- **Mobile First** - Design otimizado para mobile
- **Breakpoints** - 640px, 768px, 1024px, 1280px
- **Grid responsivo** - Layout que se adapta
- **Menu mobile** - Navegação otimizada para touch

## 🎯 Próximos Passos

- [ ] Adicionar mais seções (blog, certificados)
- [ ] Implementar modo escuro/claro
- [ ] Adicionar PWA
- [ ] Otimizar SEO
- [ ] Adicionar testes
- [ ] Implementar CMS

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ e muito café ☕**
