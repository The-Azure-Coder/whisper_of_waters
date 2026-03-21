<template>
  <div class="pt-24 pb-20">
    <div v-if="loading" class="container mx-auto px-4 py-20 text-center">
      <div class="animate-spin text-6xl mx-auto mb-4">🌊</div>
      <p class="text-xl font-serif text-ocean-deep">Diving into package details...</p>
    </div>

    <div v-else-if="pkg" class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <!-- Package Info -->
        <div class="flex-1">
          <NuxtLink to="/packages" class="text-coral font-bold flex items-center gap-2 mb-8 hover:translate-x-[-4px] transition-transform">
            🐚 Back to Packages
          </NuxtLink>
          
          <h1 class="text-5xl md:text-6xl font-serif text-driftwood-dark mb-6">{{ pkg.name }}</h1>
          <div class="flex items-center gap-4 mb-8">
            <span class="bg-ocean text-white px-6 py-2 rounded-full font-bold shadow-lg">
              ${{ pkg.price }} / Night
            </span>
            <span class="text-driftwood font-medium">✨ All Inclusive Paradise Experience</span>
          </div>
          
          <img :src="pkg.imageUrl || 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200'" 
               class="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl mb-12 border-8 border-white" alt="Package Details" />
          
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-sand/30 mb-12">
            <h2 class="text-3xl font-serif text-ocean-deep mb-6">About This Paradise</h2>
            <p class="text-driftwood text-lg leading-relaxed mb-8">
              {{ pkg.description }}
            </p>
            
            <h3 class="text-2xl font-serif text-coral-dark mb-6">What's Included 🥥</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="feat in (pkg.features as any)" :key="feat" class="flex items-center gap-3 p-4 bg-sand-light rounded-2xl border border-sand/30">
                <span class="text-2xl">⚓</span>
                <span class="font-bold text-driftwood-dark">{{ feat }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="w-full lg:w-[400px] sticky top-32">
          <BookingsBookingForm :pkg="pkg" />
        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-serif text-coral-dark mb-4">Package Not Found</h2>
      <NuxtLink to="/packages">
        <UiButton variant="primary">Return to Packages 🌊</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { currentPackage: pkg, fetchPackageById } = usePackages()
const loading = ref(true)

onMounted(async () => {
  await fetchPackageById(route.params.id as string)
  loading.value = false
})

definePageMeta({
  layout: 'default'
})
</script>
