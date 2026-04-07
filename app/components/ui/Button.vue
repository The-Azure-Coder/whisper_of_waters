<template>
  <component
    :is="as"
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2',
      variantClass
    ]"
    :disabled="as === 'button' ? (disabled || loading) : undefined"
  >
    <span v-if="loading" class="animate-spin text-xl">⚓</span>
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'cta' | 'ghost' | 'outline'
  disabled?: boolean
  loading?: boolean
  as?: string
}>(), {
  variant: 'primary',
  disabled: false,
  loading: false,
  as: 'button'
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary': return 'bg-gradient-to-r from-aqua to-ocean-light text-white shadow-lg shadow-aqua/20'
    case 'secondary': return 'border-2 border-deep-ocean text-deep-ocean hover:bg-sky-blue'
    case 'cta': return 'bg-sunset-gold text-white hover:bg-sunset-dark shadow-lg shadow-sunset-gold/20'
    case 'ghost': return 'bg-transparent text-driftwood hover:bg-sand-dark'
    case 'outline': return 'border-2 border-aqua text-aqua hover:bg-aqua hover:text-white'
    default: return 'bg-deep-ocean text-white hover:bg-ocean-medium'
  }
})
</script>
