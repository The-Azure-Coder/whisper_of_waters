<template>
  <div class="pt-24 pb-20">
    <div v-if="loading" class="container mx-auto px-4 py-20 text-center">
      <div class="animate-spin text-6xl mx-auto mb-4">🌊</div>
      <p class="text-xl font-serif text-ocean-deep">Diving into room details...</p>
    </div>

    <div v-else-if="error" class="container mx-auto px-4 py-20 text-center bg-white rounded-[3rem] shadow-xl border border-coral/30">
      <div class="text-6xl mb-6">🐚</div>
      <h2 class="text-3xl font-serif text-coral-dark mb-4">Room Hidden by the Tides</h2>
      <p class="text-driftwood mb-8">{{ error }}</p>
      <NuxtLink to="/rooms">
        <UiButton variant="outline">Return to Shore 🌊</UiButton>
      </NuxtLink>
    </div>

    <div v-else-if="room" class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <!-- Room Info -->
        <div class="flex-1">
          <NuxtLink to="/rooms" class="text-coral font-bold flex items-center gap-2 mb-8 hover:translate-x-[-4px] transition-transform">
            🐚 Back to Rooms
          </NuxtLink>
          
          <h1 class="text-5xl md:text-6xl font-serif text-driftwood-dark mb-6">{{ room.name }}</h1>
          <div class="flex items-center gap-4 mb-8">
            <span class="bg-ocean text-white px-6 py-2 rounded-full font-bold shadow-lg">
              ${{ room.price }} / Night
            </span>
            <span class="text-driftwood font-medium">✨ Luxury Island Stay</span>
          </div>
          
          <img :src="room.imageUrl || 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200'" 
               class="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl mb-12 border-8 border-white" 
               alt="Room Details"
               @error="handleImageError" />
          
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-sand/30 mb-12">
            <h2 class="text-3xl font-serif text-ocean-deep mb-6">About This Room</h2>
            <p class="text-driftwood text-lg leading-relaxed mb-8">
              {{ room.description }}
            </p>
            
            <h3 class="text-2xl font-serif text-coral-dark mb-6">Room Features 🥥</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="feat in (typeof room.features === 'string' ? JSON.parse(room.features) : room.features)" :key="feat" class="flex items-center gap-3 p-4 bg-sand-light rounded-2xl border border-sand/30">
                <span class="text-2xl">⚓</span>
                <span class="font-bold text-driftwood-dark">{{ feat }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="w-full lg:w-[400px] sticky top-32">
          <BookingsBookingForm :room="room" />
        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-serif text-coral-dark mb-4">Room Not Found</h2>
      <NuxtLink to="/rooms">
        <UiButton variant="primary">Return to Rooms 🌊</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { currentRoom: room, fetchRoomById, loading, error } = useRooms()

onMounted(async () => {
  await fetchRoomById(route.params.id as string)
})

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200'
}

definePageMeta({
  layout: 'default'
})
</script>
