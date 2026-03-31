<template>
  <div class="bg-white rounded-3xl shadow-xl shadow-sand-dark/10 border border-sand-dark/20 overflow-hidden hover:shadow-2xl hover:shadow-deep-ocean/10 transition-all duration-300 group">
    <!-- Status Stripe -->
    <div class="h-3" :class="statusStripeColor" />
    
    <div class="p-8">
      <div class="flex flex-col md:flex-row justify-between items-start gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-4 mb-3">
            <h3 class="text-2xl font-serif text-deep-ocean">Booking #{{ booking.id }}</h3>
            <UiBadge :status="booking.status" />
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div class="flex items-center gap-3 text-driftwood">
              <span class="text-2xl">📅</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-driftwood/40 mb-1">Stay Dates</p>
                <p class="font-medium text-sm">{{ formatDate(booking.checkIn) }} - {{ formatDate(booking.checkOut) }}</p>
              </div>
            </div>
            
            <div class="flex items-center gap-3 text-driftwood">
              <span class="text-2xl">👨‍👩‍👧‍👦</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-driftwood/40 mb-1">Guests</p>
                <p class="font-medium text-sm">{{ guestsText }}</p>
              </div>
            </div>
            
            <div class="flex items-center gap-3 text-driftwood">
              <span class="text-2xl">⚓</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-driftwood/40 mb-1">Selection</p>
                <p class="font-medium text-sm">{{ (booking as any).itemName || (booking as any).package_name || 'Blue Haven Package' }}</p>
              </div>
            </div>

            <!-- User Info for Admins -->
            <div v-if="isAdmin && (booking as any).user_email" class="flex items-center gap-3 text-driftwood">
              <span class="text-2xl">👤</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-driftwood/40 mb-1">Guest Info</p>
                <p class="font-medium text-sm">{{ (booking as any).user_name }} ({{ (booking as any).user_email }})</p>
              </div>
            </div>
            
            <div class="flex items-center gap-3 text-driftwood col-span-1 sm:col-span-2 lg:col-span-1">
              <span class="text-2xl">💰</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-driftwood/40 mb-1">Total Price</p>
                <p class="text-2xl font-bold text-deep-ocean">${{ booking.totalPrice }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col gap-3 w-full md:w-auto">
          <UiButton 
            v-if="canCancel" 
            variant="ghost" 
            class="text-aqua-dark hover:text-white hover:bg-aqua-dark font-bold text-sm w-full"
            @click="$emit('cancel', booking.id)"
          >
            Cancel Stay 🌅
          </UiButton>
          
          <!-- Admin Actions -->
          <template v-if="isAdmin">
            <UiButton 
              v-if="booking.status === 'pending'" 
              variant="primary" 
              class="w-full text-sm font-bold"
              @click="$emit('update-status', booking.id, 'confirmed')"
            >
              Confirm Stay 🌊
            </UiButton>
            <UiButton 
              v-if="booking.status === 'confirmed'" 
              variant="cta" 
              class="w-full text-sm font-bold"
              @click="$emit('update-status', booking.id, 'completed')"
            >
              Complete Stay 🌴
            </UiButton>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Booking } from '~/../shared/types/booking'

const props = defineProps<{
  booking: Booking
  isAdmin?: boolean
}>()

defineEmits(['cancel', 'update-status'])

const canCancel = computed(() => ['pending', 'confirmed'].includes(props.booking.status))

const statusStripeColor = computed(() => {
  switch (props.booking.status) {
    case 'pending': return 'bg-gradient-to-r from-sunset-gold to-sunset-light'
    case 'confirmed': return 'bg-gradient-to-r from-aqua to-aqua-light'
    case 'completed': return 'bg-gradient-to-r from-deep-ocean to-ocean-medium'
    case 'cancelled': return 'bg-gradient-to-r from-gray-400 to-gray-200'
    default: return 'bg-gray-200'
  }
})

const guestsText = computed(() => {
  const g = props.booking.guests as any
  return `${g.adults} Adults, ${g.children} Children`
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>
