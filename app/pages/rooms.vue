<script setup lang="ts">
const { rooms, fetchRooms, loading, error } = useRooms()

onMounted(async () => {
  await fetchRooms()
})

const parseFeatures = (features: any) => {
  if (typeof features === 'string') return JSON.parse(features)
  return features || []
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800'
}

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Luxury Rooms | Blue Haven Hotel'
})
</script>

<template>
  <div class="pt-24 pb-20 bg-sand">
    <section class="bg-gradient-to-r from-deep-ocean to-ocean-medium py-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Luxury Coastal Rooms</h1>
        <p class="text-xl max-w-2xl mx-auto drop-shadow-md text-sky-blue">
          Wake up to the gentle rhythm of the tides and the warmth of the golden sun.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="i in 2" :key="i" class="animate-pulse bg-white rounded-3xl h-96 shadow-lg"></div>
        </div>
        
        <div v-else-if="error" class="text-center py-20 bg-white rounded-[3rem] shadow-xl border border-deep-ocean/10">
          <div class="text-6xl mb-6">⚓</div>
          <h2 class="text-3xl font-serif text-deep-ocean mb-4">Connection Lost</h2>
          <p class="text-driftwood mb-8">{{ error }}</p>
          <UiButton variant="primary" @click="fetchRooms">Retry Connection ⚓</UiButton>
        </div>
        
        <div v-else-if="rooms.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="room in rooms" :key="room.id" 
               class="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-sand-dark/20 flex flex-col group relative">
            
            <!-- Booking Status Badge -->
            <div class="absolute top-6 left-6 z-10">
              <UiBadge 
                :status="room.status === 'available' && !room.isBooked ? 'confirmed' : undefined"
                :variant="room.status !== 'available' ? 'outline' : (room.isBooked ? 'outline' : 'success')" 
                class="text-sm px-4 py-2 font-bold backdrop-blur-md"
              >
                {{ 
                  room.status === 'maintenance' ? 'Under Renovation' : 
                  room.status === 'reserved' ? 'Private Reservation' :
                  room.isBooked ? 'Currently Occupied' : 
                  'Available' 
                }}
              </UiBadge>
            </div>

            <div class="relative h-80 overflow-hidden">
              <img :src="room.imageUrl || 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800'" 
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                   alt="Room"
                   @error="handleImageError" />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/40 to-transparent"></div>
              <div class="absolute bottom-6 right-6 text-white text-right">
                <p class="text-sm uppercase tracking-widest font-bold opacity-80">Starting from</p>
                <p class="text-3xl font-serif text-white">${{ room.price }} <span class="text-lg opacity-80">/ night</span></p>
              </div>
            </div>
            
            <div class="p-10 flex flex-col flex-grow">
              <h3 class="text-3xl font-serif text-deep-ocean mb-4 group-hover:text-aqua transition-colors">{{ room.name }}</h3>
              <p class="text-driftwood mb-8 text-lg leading-relaxed line-clamp-3">{{ room.description }}</p>
              
              <div class="mt-auto flex items-center justify-between pt-6 border-t border-sand-dark/20">
                <div class="flex flex-wrap gap-2">
                  <span v-for="feat in parseFeatures(room.features).slice(0, 3)" :key="feat" class="bg-sand text-deep-ocean text-xs font-bold px-3 py-1 rounded-full border border-sand-dark/20">
                    ⚓ {{ feat }}
                  </span>
                </div>
                
                <NuxtLink :to="`/rooms/${room.id}`">
                  <UiButton :variant="room.status !== 'available' || room.isBooked ? 'outline' : 'primary'" class="px-8">
                    {{ room.status !== 'available' || room.isBooked ? 'View Details' : 'Book Now ⚓' }}
                  </UiButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-20 bg-white rounded-[3rem] shadow-xl border border-sand-dark/20">
          <h2 class="text-3xl font-serif text-deep-ocean mb-4">No Rooms Available Currently ⚓</h2>
          <p class="text-driftwood mb-8">Our hotel is currently at full capacity. Please check back soon.</p>
          <NuxtLink to="/packages">
            <UiButton variant="primary">Explore Packages ⚓</UiButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
