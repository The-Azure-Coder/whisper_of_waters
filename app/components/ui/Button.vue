<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2',
      variantClass
    ]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="animate-spin text-xl">🌊</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'coral' | 'ghost' | 'outline'
  disabled?: boolean
  loading?: boolean
}>(), {
  variant: 'primary',
  disabled: false,
  loading: false
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary': return 'bg-ocean text-white hover:bg-ocean-deep'
    case 'secondary': return 'bg-palm text-white hover:bg-palm-dark'
    case 'coral': return 'bg-coral text-white hover:bg-coral-dark'
    case 'ghost': return 'bg-transparent text-driftwood hover:bg-sand-light'
    case 'outline': return 'border-2 border-coral text-coral hover:bg-coral hover:text-white'
    default: return 'bg-ocean text-white hover:bg-ocean-deep'
  }
})
</script>
