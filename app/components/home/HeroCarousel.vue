<template>
  <div class="relative h-screen w-full overflow-hidden bg-deep-ocean">
    <!-- Slides -->
    <div v-for="(slide, index) in slides" :key="index"
         class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
         :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'">
      
      <!-- Using Unsplash for better visuals -->
      <img :src="slide.image" class="w-full h-full object-cover scale-105 transition-transform duration-[10000ms]" 
           :class="index === currentSlide ? 'scale-100' : ''" alt="Tropical paradise" />
      <div class="absolute inset-0 bg-gradient-to-b from-deep-ocean/40 via-transparent to-deep-ocean/60" />
      
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl leading-tight">
            {{ slide.title }}
          </h1>
          <p class="text-xl md:text-2xl text-sky-blue/90 mb-10 drop-shadow-md font-sans tracking-wide">
            {{ slide.subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink :to="slide.link">
              <UiButton variant="cta" class="px-10 py-4 text-lg font-bold shadow-xl shadow-sunset-gold/20">
                {{ slide.cta }} 🌊
              </UiButton>
            </NuxtLink>
            <NuxtLink to="/packages">
              <UiButton variant="ghost" class="px-10 py-4 text-lg font-bold text-white border-2 border-white/30 backdrop-blur-md hover:bg-white hover:text-deep-ocean transition-all">
                View Packages 🌴
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
      <button v-for="(_, i) in slides" :key="i"
              @click="currentSlide = i"
              :class="i === currentSlide ? 'w-10 bg-sunset-gold' : 'w-3 bg-white/50'"
              class="h-3 rounded-full transition-all duration-300" />
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce z-20">
      <span class="text-3xl">⚓</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const slides = [
  { 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000', 
    title: 'Your Haven in Paradise', 
    subtitle: 'Experience breathtaking tropical sunsets and crystal clear turquoise waters', 
    cta: 'Explore Rooms', 
    link: '/rooms' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=2000', 
    title: 'Blue Haven Coastal Luxury', 
    subtitle: 'Exclusive beach villas and world-class island hospitality await you', 
    cta: 'Book Now', 
    link: '/packages' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000', 
    title: 'Unforgettable Memories', 
    subtitle: 'Dive into adventure or relax in our award-winning oceanfront spa', 
    cta: 'View Gallery', 
    link: '/gallery' 
  }
]

const currentSlide = ref(0)
let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 6000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
