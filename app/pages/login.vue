<template>
  <div class="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center px-4 relative">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-deep-ocean/60 backdrop-blur-[2px]"></div>

    <div class="max-w-lg w-full relative z-10">
      <div class="bg-white/10 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
        <div class="p-12 text-center text-white border-b border-white/10">
          <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/30 p-2">
            <img src="/images/logo.jpeg" alt="Blue Haven Hotel" class="w-full h-full object-contain rounded-full" />
          </div>
          <h1 class="text-5xl font-serif drop-shadow-lg text-white">Welcome Back</h1>
          <p class="mt-3 text-sky-blue font-medium tracking-widest uppercase text-xs">Return to Blue Haven</p>
        </div>
        
        <div class="p-12">
          <form @submit.prevent="handleLogin" class="space-y-8">
            <div>
              <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Registered Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="you@bluehavenhotel.com"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Password</label>
              <input 
                v-model="form.password" 
                type="password" 
                class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="Your secure password"
                required
              />
            </div>
            
            <UiButton 
              type="submit" 
              variant="cta" 
              class="w-full py-5 text-xl font-bold shadow-2xl mt-4"
              :loading="loading"
            >
              Enter the Haven ⚓
            </UiButton>
            
            <p v-if="error" class="bg-red-500/80 text-white p-4 rounded-xl text-center font-medium mt-4 backdrop-blur-md">{{ error }}</p>
            
            <div class="text-center mt-10 pt-6 border-t border-white/10">
              <p class="text-white/60">New to our shores?</p>
              <NuxtLink to="/register" class="text-aqua-light font-bold hover:text-white transition-colors text-lg">
                Join our Community 🌊
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { login } = useAuth()
const router = useRouter()
const route = useRoute()

const loading = ref(false)
const error = ref('')

const form = reactive({
  email: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  const res = await login(form)
  
  loading.value = false
  
  if (res.success) {
    const redirect = route.query.redirect as string || '/dashboard/bookings'
    router.push(redirect)
  } else {
    error.value = res.error || 'Invalid credentials'
  }
}

definePageMeta({
  layout: 'auth'
})

useHead({
  title: 'Login | Blue Haven Hotel'
})
</script>
