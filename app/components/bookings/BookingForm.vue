<script setup lang="ts">
import type { Package } from '~/../shared/types/package'

const props = defineProps<{
  pkg?: Package
  room?: Room
}>()

const { user } = useAuth()
const { createBooking } = useBooking()
const router = useRouter()

const item = computed(() => props.pkg || props.room)

const loading = ref(false)
const error = ref('')

const form = reactive({
  checkIn: '',
  checkOut: '',
  guests: {
    adults: 2,
    children: 0
  }
})

const today = new Date().toISOString().split('T')[0]

const nights = computed(() => {
  if (!form.checkIn || !form.checkOut) return 0
  const start = new Date(form.checkIn)
  const end = new Date(form.checkOut)
  const diff = end.getTime() - start.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
})

const totalPrice = computed(() => {
  if (!item.value) return 0
  return nights.value * item.value.price
})

const handleSubmit = async () => {
  if (!item.value) return

  if (!user.value) {
    router.push('/login?redirect=' + router.currentRoute.value.fullPath)
    return
  }

  if (nights.value <= 0) {
    error.value = 'Please select valid stay dates'
    return
  }

  loading.value = true
  error.value = ''

  const res = await createBooking({
    packageId: props.pkg?.id,
    roomId: props.room?.id,
    checkIn: form.checkIn,
    checkOut: form.checkOut,
    guests: form.guests
  })

  loading.value = false

  if (res.success) {
    router.push('/dashboard/bookings')
  } else {
    error.value = res.error
  }
}
</script>

<template>
  <div class="bg-sand-light p-8 rounded-3xl border border-sand shadow-lg">
    <h3 class="text-2xl font-serif text-driftwood-dark mb-6 flex items-center gap-2">
      <span>🥥</span> Reserve Your Paradise
    </h3>
    
    <form v-if="item" @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-bold text-driftwood mb-2 uppercase tracking-wide">Check In ⚓</label>
          <input 
            v-model="form.checkIn" 
            type="date" 
            class="w-full bg-white border border-sand rounded-xl p-3 focus:ring-2 focus:ring-ocean focus:border-transparent transition-all"
            required
            :min="today"
          />
        </div>
        <div>
          <label class="block text-sm font-bold text-driftwood mb-2 uppercase tracking-wide">Check Out 🌅</label>
          <input 
            v-model="form.checkOut" 
            type="date" 
            class="w-full bg-white border border-sand rounded-xl p-3 focus:ring-2 focus:ring-ocean focus:border-transparent transition-all"
            required
            :min="form.checkIn || today"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-bold text-driftwood mb-2 uppercase tracking-wide">Adults 👨‍👩‍👦</label>
          <select v-model.number="form.guests.adults" class="w-full bg-white border border-sand rounded-xl p-3">
            <option v-for="n in 5" :key="n" :value="n">{{ n }} Adults</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-driftwood mb-2 uppercase tracking-wide">Children 🧒</label>
          <select v-model.number="form.guests.children" class="w-full bg-white border border-sand rounded-xl p-3">
            <option v-for="n in 6" :key="n-1" :value="n-1">{{ n-1 }} Children</option>
          </select>
        </div>
      </div>

      <!-- Price Breakdown -->
      <div v-if="nights > 0" class="bg-white/50 p-4 rounded-2xl border border-white/50 backdrop-blur-sm">
        <div class="flex justify-between items-center mb-2 text-driftwood">
          <span>Stay Duration</span>
          <span class="font-bold">{{ nights }} Nights</span>
        </div>
        <div class="flex justify-between items-center mb-2 text-driftwood">
          <span>Rate per Night</span>
          <span class="font-bold">${{ item.price }}</span>
        </div>
        <div class="h-px bg-sand my-3"></div>
        <div class="flex justify-between items-center text-xl">
          <span class="font-serif font-bold text-driftwood-dark">Total Price</span>
          <span class="font-serif font-bold text-ocean-deep">${{ totalPrice }}</span>
        </div>
      </div>

      <UiButton 
        type="submit" 
        variant="coral" 
        class="w-full py-4 text-lg font-bold shadow-xl"
        :loading="loading"
      >
        Book My Paradise 🌴
      </UiButton>
      
      <p v-if="error" class="text-coral-dark text-center font-medium mt-4">{{ error }}</p>
    </form>
  </div>
</template>
