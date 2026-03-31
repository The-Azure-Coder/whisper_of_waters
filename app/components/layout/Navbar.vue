<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300 py-4',
    isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-gradient-to-r from-deep-ocean/20 to-ocean-medium/20 backdrop-blur-sm'
  ]">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3 z-50" @click="isMenuOpen = false">
        <img 
          src="/images/logo.jpeg" 
          alt="Blue Haven Hotel Logo" 
          class="h-12 w-auto object-contain rounded-lg shadow-lg hover:rotate-3 transition-all duration-300"
        />
        <span :class="['font-serif font-bold text-lg md:text-xl tracking-tight transition-colors', (isScrolled || isMenuOpen) ? 'text-deep-ocean' : 'text-white drop-shadow-md']">
          BLUE HAVEN HOTEL
        </span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/rooms" :class="['hover:text-aqua transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Rooms</NuxtLink>
        <NuxtLink to="/packages" :class="['hover:text-aqua transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Packages</NuxtLink>
        <NuxtLink to="/gallery" :class="['hover:text-aqua transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">Gallery</NuxtLink>
        <NuxtLink to="/about" :class="['hover:text-aqua transition-colors', isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md']">About</NuxtLink>
        
        <div v-if="!user" class="flex items-center gap-4 border-l border-white/20 pl-8">
          <NuxtLink to="/login">
            <UiButton variant="ghost" :class="isScrolled ? 'text-driftwood' : 'text-white font-medium drop-shadow-md'">Login</UiButton>
          </NuxtLink>
          <NuxtLink to="/register">
            <UiButton variant="cta">Book Now 🌊</UiButton>
          </NuxtLink>
        </div>
        
        <div v-else class="flex items-center gap-4 border-l border-white/20 pl-8">
          <NuxtLink :to="isAdmin ? '/admin' : '/dashboard/bookings'">
            <UiButton variant="primary">
              {{ isAdmin ? '🛡️ Admin' : '🌴 My Stay' }}
            </UiButton>
          </NuxtLink>
          <button @click="logout" :class="['hover:text-aqua-dark text-sm font-bold transition-colors', isScrolled ? 'text-deep-ocean' : 'text-white drop-shadow-md']">Logout</button>
        </div>
      </div>
      
      <!-- Mobile menu toggle -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden z-50 p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
          <span :class="['w-full h-0.5 transition-all duration-300 transform origin-left', isMenuOpen ? 'rotate-45 translate-x-1' : '', (isScrolled || isMenuOpen) ? 'bg-deep-ocean' : 'bg-white shadow-sm']"></span>
          <span :class="['w-full h-0.5 transition-all duration-300', isMenuOpen ? 'opacity-0 -translate-x-full' : '', (isScrolled || isMenuOpen) ? 'bg-deep-ocean' : 'bg-white shadow-sm']"></span>
          <span :class="['w-full h-0.5 transition-all duration-300 transform origin-left', isMenuOpen ? '-rotate-45 translate-x-1' : '', (isScrolled || isMenuOpen) ? 'bg-deep-ocean' : 'bg-white shadow-sm']"></span>
        </div>
      </button>

      <!-- Mobile Menu Overlay -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-[-10px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-10px]"
      >
        <div 
          v-if="isMenuOpen" 
          class="absolute top-0 left-0 w-full h-screen bg-sand md:hidden flex flex-col pt-24 px-6 space-y-6 overflow-y-auto"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink to="/rooms" @click="isMenuOpen = false" class="text-2xl font-serif text-deep-ocean hover:text-aqua border-b border-ocean-light/10 pb-4">Rooms</NuxtLink>
            <NuxtLink to="/packages" @click="isMenuOpen = false" class="text-2xl font-serif text-deep-ocean hover:text-aqua border-b border-ocean-light/10 pb-4">Packages</NuxtLink>
            <NuxtLink to="/gallery" @click="isMenuOpen = false" class="text-2xl font-serif text-deep-ocean hover:text-aqua border-b border-ocean-light/10 pb-4">Gallery</NuxtLink>
            <NuxtLink to="/about" @click="isMenuOpen = false" class="text-2xl font-serif text-deep-ocean hover:text-aqua border-b border-ocean-light/10 pb-4">About</NuxtLink>
          </div>

          <div v-if="!user" class="flex flex-col gap-4 pt-4">
            <NuxtLink to="/login" @click="isMenuOpen = false">
              <UiButton variant="ghost" class="w-full text-xl py-4 border-2 border-ocean-light/20">Login</UiButton>
            </NuxtLink>
            <NuxtLink to="/register" @click="isMenuOpen = false">
              <UiButton variant="cta" class="w-full text-xl py-4 shadow-lg shadow-sunset-gold/20">Book Your Stay 🌊</UiButton>
            </NuxtLink>
          </div>
          
          <div v-else class="flex flex-col gap-4 pt-4">
            <NuxtLink :to="isAdmin ? '/admin' : '/dashboard/bookings'" @click="isMenuOpen = false">
              <UiButton variant="primary" class="w-full text-xl py-4 shadow-lg shadow-deep-ocean/20">
                {{ isAdmin ? '🛡️ Admin Dashboard' : '🌴 My Stay' }}
              </UiButton>
            </NuxtLink>
            <button @click="handleLogout" class="text-aqua-dark text-lg font-bold py-4 border-2 border-aqua/10 rounded-xl bg-aqua/5">
              Logout 🐚
            </button>
          </div>

          <!-- Mobile Decorative Elements -->
          <div class="pt-12 text-center opacity-20 select-none">
            <span class="text-6xl">⚓ 🐚 🍹 🌴</span>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { user, isAdmin, logout } = useAuth()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleLogout = () => {
  isMenuOpen.value = false
  logout()
}

// Watch for screen resize to close menu if switching to desktop
if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      isMenuOpen.value = false
    }
  })

  // Prevent body scroll when menu is open
  watch(isMenuOpen, (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
}
</script>
