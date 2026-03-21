<template>
  <div class="pt-24 pb-20">
    <section class="bg-gradient-to-r from-coral to-coral-light py-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Luxury Island Rooms</h1>
        <p class="text-xl max-w-2xl mx-auto drop-shadow-md">
          Wake up to the sound of waves and the warmth of the tropical sun.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="i in 2" :key="i" class="animate-pulse bg-white rounded-3xl h-96"></div>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="room in rooms" :key="room.id" 
               class="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-sand/30 flex flex-col group relative">
            
            <!-- Booking Status Badge -->
            <div class="absolute top-6 left-6 z-10">
              <UiBadge :variant="room.isBooked ? 'outline' : 'success'" class="text-sm px-4 py-2 font-bold backdrop-blur-md">
                {{ room.isBooked ? 'Currently Occupied' : 'Available for Booking' }}
              </UiBadge>
            </div>

            <div class="relative h-80 overflow-hidden">
              <img :src="room.imageUrl || 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800'" 
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Room" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div class="absolute bottom-6 right-6 text-white text-right">
                <p class="text-sm uppercase tracking-widest font-bold opacity-80">Starting from</p>
                <p class="text-3xl font-serif">${{ room.price }} <span class="text-lg opacity-80">/ night</span></p>
              </div>
            </div>
            
            <div class="p-10 flex flex-col flex-grow">
              <h3 class="text-3xl font-serif text-driftwood-dark mb-4 group-hover:text-ocean transition-colors">{{ room.name }}</h3>
              <p class="text-driftwood mb-8 text-lg leading-relaxed">{{ room.description }}</p>
              
              <div class="mt-auto flex items-center justify-between pt-6 border-t border-sand/30">
                <div class="flex flex-wrap gap-2">
                  <span v-for="feat in (room.features as any).slice(0, 3)" :key="feat" class="bg-shell text-driftwood text-xs font-bold px-3 py-1 rounded-full border border-sand">
                    ⚓ {{ feat }}
                  </span>
                </div>
                
                <NuxtLink :to="`/packages/${room.id}`">
                  <UiButton :variant="room.isBooked ? 'outline' : 'primary'" class="px-8">
                    {{ room.isBooked ? 'View Details' : 'Book Now 🌴' }}
                  </UiButton>
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
const rooms = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await $fetch('/api/rooms')
    rooms.value = data.map((r: any) => ({
      ...r,
      isBooked: r.is_booked
    }))
  } catch (e) {
    console.error('Failed to fetch rooms', e)
  } finally {
    loading.value = false
  }
})

definePageMeta({
  layout: 'default'
})
</script>
