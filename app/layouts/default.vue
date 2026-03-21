<template>
  <div class="min-h-screen flex flex-col font-sans bg-shell/50">
    <LayoutNavbar />
    <main class="flex-grow pt-0">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Initializing auth state from cookie if it exists
const { user } = useAuth()
const token = useCookie('auth_token')

// If we have a token but no user state, we should ideally fetch the user profile
// For this prototype, the middleware on the server handles the JWT validation
// and the useAuth composable manages the local state.
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
