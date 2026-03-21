<template>
  <div class="min-h-screen flex flex-col font-sans bg-shell/50">
    <main class="flex-grow pt-0">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Auth layout without Navbar and Footer
</script>

<style>
/* Global page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
