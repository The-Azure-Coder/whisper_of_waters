<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Blue Haven Hotel` : 'Blue Haven Hotel - Tropical Paradise'
  },
  meta: [
    { name: 'description', content: 'Luxury hotel booking in a tropical paradise. Experience the ocean breeze and golden sands.' }
  ],
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpeg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap' }
  ]
})
</script>
