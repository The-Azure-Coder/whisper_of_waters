<template>
  <div class="pt-24 pb-20">
    <!-- Header -->
    <section class="bg-gradient-to-r from-ocean to-ocean-light py-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Tropical Packages</h1>
        <p class="text-xl max-w-2xl mx-auto drop-shadow-md">
          Carefully curated island experiences designed to help you find your perfect piece of paradise.
        </p>
      </div>
    </section>

    <!-- Packages Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="i in 3" :key="i" class="animate-pulse bg-white rounded-3xl h-96"></div>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="pkg in packages" :key="pkg.id" 
               class="bg-white rounded-3xl overflow-hidden shadow-xl border border-sand/30 flex flex-col hover:-translate-y-4 transition-all duration-500 group">
            <div class="relative h-64">
              <img :src="pkg.imageUrl || 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800'" 
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Package" />
              <div class="absolute bottom-6 right-6 bg-coral px-4 py-2 rounded-xl text-white font-bold shadow-lg">
                ${{ pkg.price }} / Night
              </div>
            </div>
            
            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-2xl font-serif text-driftwood-dark mb-4 group-hover:text-ocean transition-colors">{{ pkg.name }}</h3>
              <p class="text-driftwood mb-6 line-clamp-3">{{ pkg.description }}</p>
              
              <div class="mt-auto pt-8 border-t border-sand/30">
                <div class="flex flex-wrap gap-2 mb-10">
                  <span v-for="feat in (pkg.features as any)" :key="feat" class="bg-sand-light text-driftwood-dark text-xs font-bold px-3 py-1 rounded-full border border-sand">
                    ⚓ {{ feat }}
                  </span>
                </div>
                
                <NuxtLink :to="`/packages/${pkg.id}`">
                  <UiButton variant="primary" class="w-full py-4 text-lg shadow-lg hover:shadow-xl transition-shadow">View Details 🥥</UiButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { packages, fetchPackages } = usePackages()
const loading = ref(true)

onMounted(async () => {
  await fetchPackages()
  loading.value = false
})

definePageMeta({
  layout: 'default'
})
</script>
