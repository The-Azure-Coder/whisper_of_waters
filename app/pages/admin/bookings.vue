<template>
  <div class="pt-32 pb-20 min-h-screen bg-sand-light/10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 class="text-4xl md:text-5xl font-serif text-driftwood-dark mb-2">Paradise Management</h1>
          <p class="text-coral font-bold tracking-widest uppercase text-sm flex items-center gap-2">
            <span>🛡️</span> Island Administrator Dashboard
          </p>
        </div>
      </div>

      <!-- Stats Preview (Simplified) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-8 rounded-3xl shadow-lg border border-sand/30">
          <p class="text-driftwood/60 uppercase text-xs font-bold tracking-widest mb-2">{{ stat.label }}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-serif text-driftwood-dark">{{ stat.value }}</span>
            <span class="text-3xl">{{ stat.icon }}</span>
          </div>
        </div>
      </div>

      <!-- Bookings List -->
      <h2 class="text-2xl font-serif text-ocean-deep mb-8 flex items-center gap-2">
        <span>⚓</span> Recent Island Bookings
      </h2>

      <div v-if="loading" class="space-y-6">
        <div v-for="i in 3" :key="i" class="animate-pulse bg-white rounded-3xl h-48 shadow-lg"></div>
      </div>

      <div v-else-if="adminBookings.length > 0" class="space-y-8">
        <BookingsBookingCard 
          v-for="booking in adminBookings" 
          :key="booking.id" 
          :booking="booking"
          :is-admin="true"
          @update-status="handleUpdateStatus"
        />
      </div>

      <div v-else class="bg-white rounded-[3rem] p-20 text-center shadow-xl border border-sand/30">
        <h2 class="text-2xl font-serif text-driftwood-dark">No Bookings Found 🐚</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, isAdmin } = useAuth()
const { adminBookings, fetchAdminBookings, updateStatus } = useBooking()
const loading = ref(true)

const stats = computed(() => {
  const total = adminBookings.value.length
  const pending = adminBookings.value.filter(b => b.status === 'pending').length
  const confirmed = adminBookings.value.filter(b => b.status === 'confirmed').length
  const totalRev = adminBookings.value.reduce((acc, b) => acc + Number(b.totalPrice), 0)

  return [
    { label: 'Total Escapes', value: total, icon: '🌴' },
    { label: 'Pending Waves', value: pending, icon: '⏳' },
    { label: 'Confirmed Guests', value: confirmed, icon: '🌊' },
    { label: 'Total Revenue', value: `$${totalRev}`, icon: '💰' }
  ]
})

onMounted(async () => {
  if (!user.value || !isAdmin.value) {
    navigateTo('/login')
    return
  }
  await fetchAdminBookings()
  loading.value = false
})

const handleUpdateStatus = async (id: number, status: string) => {
  if (confirm(`Change booking #${id} status to ${status}? 🐚`)) {
    const res = await updateStatus(id, status)
    if (!res.success) {
      alert(res.error)
    }
  }
}

definePageMeta({
  layout: 'default'
})
</script>
