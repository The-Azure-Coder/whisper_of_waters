<template>
  <span :class="[
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border transition-all',
    badgeClass
  ]">
    <span v-if="icon" class="mr-1.5">{{ icon }}</span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import type { BookingStatus } from '~/../shared/types/booking'

const props = defineProps<{
  status?: BookingStatus
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'cta'
}>()

const statusIcons: Record<string, string> = {
  pending: '⏳',
  confirmed: '⚓',
  completed: '🌴',
  cancelled: '🌅'
}

const icon = computed(() => {
  if (props.status) return statusIcons[props.status]
  return null
})

const label = computed(() => {
  if (props.status) return props.status.charAt(0).toUpperCase() + props.status.slice(1)
  return ''
})

const badgeClass = computed(() => {
  if (props.status) {
    switch (props.status) {
      case 'pending': return 'bg-sunset-gold/10 text-sunset-dark border-sunset-gold/30'
      case 'confirmed': return 'bg-aqua/10 text-aqua-dark border-aqua/30'
      case 'completed': return 'bg-deep-ocean/10 text-deep-ocean border-deep-ocean/30'
      case 'cancelled': return 'bg-gray-100 text-gray-500 border-gray-200'
      default: return 'bg-gray-50 text-gray-400 border-gray-100'
    }
  }

  switch (props.variant) {
    case 'success': return 'bg-aqua text-white border-aqua'
    case 'outline': return 'bg-transparent text-deep-ocean border-deep-ocean/40'
    case 'primary': return 'bg-deep-ocean text-white border-deep-ocean'
    case 'secondary': return 'bg-aqua text-white border-aqua'
    case 'cta': return 'bg-sunset-gold text-white border-sunset-gold'
    default: return 'bg-sand-dark text-driftwood border-sand-dark'
  }
})
</script>
