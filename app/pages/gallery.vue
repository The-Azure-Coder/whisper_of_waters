<template>
  <div class="pt-24 pb-20 bg-sand">
    <section class="bg-gradient-to-br from-deep-ocean via-ocean-medium to-aqua py-28 text-white overflow-hidden relative">
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-6xl md:text-8xl font-serif mb-8 drop-shadow-2xl tracking-tight italic">Haven in Frames</h1>
        <p class="text-2xl max-w-3xl mx-auto drop-shadow-lg font-sans tracking-widest uppercase opacity-90 text-sky-blue">
          Capture the essence of Blue Haven Hotel.
        </p>
      </div>
      <div class="absolute -bottom-10 -left-10 text-9xl opacity-20 transform -rotate-12 animate-pulse">🌴</div>
      <div class="absolute -top-10 -right-10 text-9xl opacity-20 transform rotate-12 animate-bounce">⚓</div>
    </section>

    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          <div v-for="(img, i) in galleryImages" :key="i" 
               class="break-inside-avoid rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group relative hover:shadow-aqua/20 transition-all duration-500">
            <img 
              :src="img.url" 
              @error="handleImageError"
              class="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" 
              :alt="img.alt" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p class="text-white font-serif text-2xl mb-2 italic">{{ img.alt }}</p>
                <div class="w-12 h-1 bg-aqua rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-24 text-center">
          <h3 class="text-4xl font-serif text-deep-ocean mb-10 italic">"Paradise is not a place, it's a feeling captured in time."</h3>
          <NuxtLink to="/packages">
            <UiButton variant="cta" class="px-16 py-6 text-2xl font-bold rounded-full shadow-2xl shadow-sunset-gold/20 hover:scale-105 transition-transform">
              Find Your Escape ⚓
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', alt: 'Golden Sunset Shore' },
  { url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800', alt: 'Turquoise Waters' },
  { url: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800', alt: 'Tropical Hammock' },
  { url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=800', alt: 'Coral Reef Exploration' },
  { url: 'https://images.unsplash.com/photo-1506929194205-f62f797b291d?auto=format&fit=crop&q=80&w=800', alt: 'Beachfront Dining' },
  { url: 'https://images.unsplash.com/photo-1520483601560-389dff434f1b?auto=format&fit=crop&q=80&w=800', alt: 'Infinity Pool View' },
  { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800', alt: 'Private Palm Cabana' },
  { url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800', alt: 'Secluded Lagoon' },
  { url: 'https://images.unsplash.com/photo-1545562086-a733792f3970?auto=format&fit=crop&q=80&w=800', alt: 'Mountain Peak View' },
  { url: 'https://images.unsplash.com/photo-1516815231560-8581bb63041c?auto=format&fit=crop&q=80&w=800', alt: 'Overwater Bungalows' }
]

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
}

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Gallery | Blue Haven Hotel'
})
</script>
