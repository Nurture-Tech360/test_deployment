// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },

  css: [
    '/assets/css/tailwind.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'MacroHub LCC',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      description: 'MacroHub LCC is a software development company that specializes in building web applications, mobile applications, and websites.',
    }
  },
  modules: ['@nuxthub/core'],
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})