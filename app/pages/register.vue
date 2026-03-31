<template>
  <div class="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center px-4 relative">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-deep-ocean/50 backdrop-blur-[2px]"></div>

    <div class="max-w-lg w-full relative z-10">
      <div class="bg-white/10 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
        <div class="p-12 text-center text-white border-b border-white/10">
          <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/30 p-2">
            <img src="/images/logo.jpeg" alt="Blue Haven Hotel" class="w-full h-full object-contain rounded-full" />
          </div>
          <h1 class="text-5xl font-serif drop-shadow-lg text-white">Join Blue Haven</h1>
          <p class="mt-3 text-sky-blue font-medium tracking-widest uppercase text-xs">Begin Your Coastal Journey</p>
        </div>
        
        <div class="p-12">
          <form @submit.prevent="handleRegister" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">First Name</label>
                <input 
                  v-model="form.firstName" 
                  type="text" 
                  class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Last Name</label>
                <input 
                  v-model="form.lastName" 
                  type="text" 
                  class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Email Address</label>
              <input 
                v-model="form.email" 
                type="email" 
                class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="you@bluehavenhotel.com"
                required
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Password</label>
                <input 
                  v-model="form.password" 
                  type="password" 
                  class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Confirm Password</label>
                <input 
                  v-model="form.confirmPassword" 
                  type="password" 
                  class="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-aqua focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <UiButton 
              type="submit" 
              variant="cta" 
              class="w-full py-5 text-xl font-bold shadow-2xl mt-4"
              :loading="loading"
            >
              Join the Haven ⚓
            </UiButton>
            
            <p v-if="error" class="bg-red-500/80 text-white p-4 rounded-xl text-center font-medium mt-4 backdrop-blur-md">{{ error }}</p>
            
            <div class="text-center mt-10 pt-6 border-t border-white/10">
              <p class="text-white/60">Already have an account?</p>
              <NuxtLink to="/login" class="text-aqua-light font-bold hover:text-white transition-colors text-lg">
                Return to Login ⚓
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { register } = useAuth()
const router = useRouter()

const loading = ref(false)
const error = ref('')

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match! 🥥'
    return
  }

  loading.value = true
  error.value = ''
  
  const res = await register({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password
  })
  
  loading.value = false
  
  if (res.success) {
    router.push('/dashboard/bookings')
  } else {
    error.value = res.error || 'Registration failed'
  }
}

definePageMeta({
  layout: 'auth'
})

useHead({
  title: 'Register | Blue Haven Hotel'
})
</script>
