<template>
  <div class="pt-32 pb-20 min-h-screen bg-shell/30">
    <div class="container mx-auto px-4">
      <!-- Dashboard Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 class="text-4xl md:text-5xl font-serif text-driftwood-dark mb-2">My Tropical Stays</h1>
          <p class="text-driftwood font-medium">Welcome back, <span class="text-ocean-deep font-bold">{{ user?.firstName || 'Traveler' }}</span> 🌴</p>
        </div>
        <NuxtLink to="/packages">
          <UiButton variant="coral">Book New Escape 🌊</UiButton>
        </NuxtLink>
      </div>

      <!-- Bookings List -->
      <div v-if="loading" class="space-y-6">
        <div v-for="i in 3" :key="i" class="animate-pulse bg-white rounded-3xl h-48 w-full shadow-lg"></div>
      </div>

      <div v-else-if="bookings.length > 0" class="space-y-8">
        <BookingsBookingCard 
          v-for="booking in bookings" 
          :key="booking.id" 
          :booking="booking"
          @cancel="handleCancel"
        />
      </div>

      <div v-else class="bg-white rounded-[3rem] p-20 text-center shadow-xl border border-sand/30">
        <div class="text-8xl mb-8">🐚</div>
        <h2 class="text-3xl font-serif text-driftwood-dark mb-4">No Island Memories Yet</h2>
        <p class="text-driftwood text-lg mb-10 max-w-md mx-auto">
          Your tropical adventure hasn't started. Explore our luxury packages and find your perfect shore.
        </p>
        <NuxtLink to="/packages">
          <UiButton variant="primary" class="px-10 py-4 text-lg">Explore Packages 🌴</UiButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuth()
const { bookings, fetchBookings, cancelBooking } = useBooking()
const loading = ref(true)

onMounted(async () => {
  if (!user.value) {
    navigateTo('/login')
    return
  }
  await fetchBookings()
  loading.value = false
})

const handleCancel = async (id: number) => {
  if (confirm('Are you sure you want to cancel this paradise escape? 🌅')) {
    const res = await cancelBooking(id)
    if (!res.success) {
      alert(res.error)
    }
  }
}

definePageMeta({
  layout: 'default'
})
</script>
