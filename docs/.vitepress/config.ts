import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vite',
  description: 'Next Generation Frontend Tooling',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    // Algolia DocSearch with SRI
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
      integrity: 'sha384-797G9Z6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W',
      crossorigin: 'anonymous',
      async: ''
    }],
    // OpenCollective Widget with SRI
    ['script', {
      src: 'https://opencollective.com/vite/banner.js',
      integrity: 'sha384-L6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS8W6vMvS',
      crossorigin: 'anonymous',
      defer: ''
    }]
  ],
  themeConfig: {
    // ... existing theme config
  }
})