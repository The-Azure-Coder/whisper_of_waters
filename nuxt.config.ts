// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      title: 'Whisper of Waters | Luxury Tropical Resort',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience paradise at Whisper of Waters. Luxury beachfront suites, tropical dining, and unforgettable island adventures.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
            sand: '#F5E6D3',
            'sand-light': '#FFF5E6',
            'sand-dark': '#E6D7C3',
            ocean: '#4A90E2',
            'ocean-light': '#7BB4FF',
            'ocean-deep': '#2C3E8F',
            coral: '#FF7F6B',
            'coral-light': '#FF9F8C',
            'coral-dark': '#E65F4B',
            palm: '#2E8B57',
            'palm-light': '#4CAF7A',
            'palm-dark': '#1B5E3F',
            sunset: '#FFB347',
            'sunset-light': '#FFD700',
            'sunset-dark': '#F28500',
            shell: '#FFF0E8',
            driftwood: '#8B7355',
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
