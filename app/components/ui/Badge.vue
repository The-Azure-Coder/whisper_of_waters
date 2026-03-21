<template>
  <span :class="[
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
    badgeClass
  ]">
    <span v-if="icon" class="mr-1">{{ icon }}</span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import type { BookingStatus } from '~/../shared/types/booking'

const props = defineProps<{
  status?: BookingStatus
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'coral'
}>()

const statusIcons: Record<string, string> = {
  pending: '⏳',
  confirmed: '🌊',
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
      case 'pending': return 'bg-sunset/20 text-sunset-dark border-sunset/30'
      case 'confirmed': return 'bg-ocean/20 text-ocean-deep border-ocean/30'
      case 'completed': return 'bg-palm/20 text-palm-dark border-palm/30'
      case 'cancelled': return 'bg-coral/20 text-coral-dark border-coral/30'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  switch (props.variant) {
    case 'success': return 'bg-palm text-white border-palm'
    case 'outline': return 'bg-white/10 text-white border-white/40'
    case 'primary': return 'bg-ocean text-white border-ocean'
    case 'secondary': return 'bg-sunset text-white border-sunset'
    case 'coral': return 'bg-coral text-white border-coral'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
})
</script>
