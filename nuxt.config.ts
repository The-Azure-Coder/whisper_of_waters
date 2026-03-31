// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      title: 'Blue Haven Hotel | Luxury Tropical Resort',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience paradise at Blue Haven Hotel. Luxury beachfront suites, tropical dining, and unforgettable island adventures.' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpeg' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tropical.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'deep-ocean': '#1A365D',
            'ocean-medium': '#2C5282',
            'ocean-light': '#4299E1',
            'aqua': '#38B2AC',
            'aqua-light': '#81E6D9',
            'aqua-dark': '#2C7A7B',
            'sunset-gold': '#D69E2E',
            'sunset-light': '#F6E05E',
            'sunset-dark': '#B7791F',
            'sand': '#FDF6E3',
            'sand-light': '#FFFAF0',
            'sand-dark': '#EDF2F7',
            'white': '#FFFFFF',
            'sky-blue': '#EBF8FF',
            'driftwood': '#4A5568',
          },
          fontFamily: {
            serif: ['Playfair Display', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  }
})
