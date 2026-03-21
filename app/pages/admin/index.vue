<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
onMounted(() => {
  navigateTo('/admin/dashboard')
})
</script>
