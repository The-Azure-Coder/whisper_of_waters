export default defineNuxtRouteMiddleware((to, from) => {
  const { user, isAdmin } = useAuth()

  // If not logged in, redirect to login
  if (!user.value) {
    return navigateTo('/login')
  }

  // If it's an admin route, ensure user is admin
  if (to.path.startsWith('/admin') && !isAdmin.value) {
    return navigateTo('/')
  }
})
