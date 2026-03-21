<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300 py-4',
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-gradient-to-r from-ocean/20 to-ocean-light/20 backdrop-blur-sm'
  ]">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo with palm icon -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-coral rounded-full flex items-center justify-center transform hover:rotate-12 transition-all">
          <span class="text-white text-xl">🌴</span>
        </div>
        <span :class="['font-serif font-bold text-lg md:text-xl tracking-tight', isScrolled ? 'text-driftwood' : 'text-white drop-shadow-md']">
          WHISPER OF WATERS
        </span>
      </NuxtLink>

      <!-- Nav Links -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/rooms" :class="['hover:text-coral transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Rooms</NuxtLink>
        <NuxtLink to="/packages" :class="['hover:text-coral transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Packages</NuxtLink>
        <NuxtLink to="/gallery" :class="['hover:text-coral transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Gallery</NuxtLink>
        <NuxtLink to="/about" :class="['hover:text-coral transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">About</NuxtLink>
        
        <div v-if="!user" class="flex items-center gap-4">
          <NuxtLink to="/login">
            <UiButton variant="ghost" :class="isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md'">Login</UiButton>
          </NuxtLink>
          <NuxtLink to="/register">
            <UiButton variant="coral">Join 🌊</UiButton>
          </NuxtLink>
        </div>
        
        <div v-else class="flex items-center gap-4">
          <NuxtLink :to="isAdmin ? '/admin' : '/dashboard/bookings'">
            <UiButton variant="primary">
              {{ isAdmin ? '🛡️ Admin' : '🌴 My Stay' }}
            </UiButton>
          </NuxtLink>
          <button @click="logout" class="text-coral hover:text-coral-dark text-sm font-bold">Logout</button>
        </div>
      </div>
      
      <!-- Mobile menu toggle (simplified) -->
      <button class="md:hidden text-driftwood">
        <span class="text-2xl">🌊</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { user, isAdmin, logout } = useAuth()
const isScrolled = ref(false)

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}
</script>
