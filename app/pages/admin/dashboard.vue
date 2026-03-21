<template>
  <div class="pt-32 pb-20 min-h-screen bg-sand-light/10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 class="text-4xl md:text-5xl font-serif text-driftwood-dark mb-2">Island Command Center</h1>
          <p class="text-coral font-bold tracking-widest uppercase text-sm flex items-center gap-2">
            <span>🛡️</span> Administrator Dashboard
          </p>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-driftwood/60 italic">Welcome back, {{ user?.firstName }} 🥥</p>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-4 mb-12">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-lg border"
          :class="activeTab === tab.id 
            ? 'bg-ocean-deep text-white border-ocean-deep scale-105' 
            : 'bg-white text-driftwood border-sand/30 hover:border-coral/50'"
        >
          {{ tab.icon }} {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="space-y-12">
        <!-- Bookings Section -->
        <section v-if="activeTab === 'bookings'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-serif text-ocean-deep">Guest Arrivals ⚓</h2>
          </div>
          <div v-if="loading" class="grid gap-6">
            <div v-for="i in 3" :key="i" class="h-48 bg-white rounded-3xl animate-pulse shadow-md"></div>
          </div>
          <div v-else-if="adminBookings.length > 0" class="space-y-6">
            <BookingsBookingCard 
              v-for="booking in adminBookings" 
              :key="booking.id" 
              :booking="booking"
              :is-admin="true"
              @update-status="handleUpdateBookingStatus"
            />
          </div>
          <div v-else class="bg-white p-20 rounded-[3rem] text-center shadow-lg border border-sand/30">
            <p class="text-xl text-driftwood/60 font-serif">The seas are quiet... No bookings found. 🐚</p>
          </div>
        </section>

        <!-- Rooms Section -->
        <section v-if="activeTab === 'rooms'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-serif text-ocean-deep">Island Accommodations 🛖</h2>
            <button @click="openAddRoomModal" class="bg-coral text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-coral-dark transition-colors shadow-lg">
              + New Room
            </button>
          </div>
          <div v-if="roomsLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="h-80 bg-white rounded-3xl animate-pulse shadow-md"></div>
          </div>
          <div v-else-if="rooms.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="room in rooms" :key="room.id" class="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sand/30 hover:shadow-2xl transition-all group">
              <div class="relative h-48">
                <img :src="room.imageUrl || 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-4 right-4">
                  <span class="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md bg-white/80 shadow-sm"
                    :class="room.status === 'available' ? 'text-green-600' : 'text-amber-600'">
                    {{ room.status }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-serif text-driftwood-dark mb-2">{{ room.name }}</h3>
                <p class="text-driftwood/60 text-sm mb-4 line-clamp-2">{{ room.description }}</p>
                <div class="flex justify-between items-center pt-4 border-t border-sand/30">
                  <span class="text-ocean-deep font-bold font-serif">${{ room.price }}<span class="text-xs font-sans text-driftwood/40">/night</span></span>
                  <div class="flex gap-2">
                    <button @click="editRoom(room)" class="p-2 text-ocean-deep hover:bg-ocean-deep/5 rounded-lg transition-colors">✏️</button>
                    <button @click="deleteRoom(room.id)" class="p-2 text-coral hover:bg-coral/5 rounded-lg transition-colors">🗑️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="bg-white p-20 rounded-[3rem] text-center shadow-lg border border-sand/30">
            <p class="text-xl text-driftwood/60 font-serif">No rooms managed yet. 🏗️</p>
          </div>
        </section>

        <!-- Packages Section -->
        <section v-if="activeTab === 'packages'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-serif text-ocean-deep">Curated Experiences 📦</h2>
            <button @click="openAddPackageModal" class="bg-coral text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-coral-dark transition-colors shadow-lg">
              + New Package
            </button>
          </div>
          <div v-if="packagesLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="i in 3" :key="i" class="h-80 bg-white rounded-3xl animate-pulse shadow-md"></div>
          </div>
          <div v-else-if="packages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="pkg in packages" :key="pkg.id" class="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sand/30 hover:shadow-2xl transition-all group">
              <div class="relative h-48">
                <img :src="pkg.imageUrl" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-serif text-driftwood-dark mb-2">{{ pkg.name }}</h3>
                <p class="text-driftwood/60 text-sm mb-4 line-clamp-2">{{ pkg.description }}</p>
                <div class="flex justify-between items-center pt-4 border-t border-sand/30">
                  <span class="text-ocean-deep font-bold font-serif">${{ pkg.price }}</span>
                  <div class="flex gap-2">
                    <button @click="editPackage(pkg)" class="p-2 text-ocean-deep hover:bg-ocean-deep/5 rounded-lg transition-colors">✏️</button>
                    <button @click="deletePackage(pkg.id)" class="p-2 text-coral hover:bg-coral/5 rounded-lg transition-colors">🗑️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Modals would go here (simplified for now) -->
    <div v-if="showModal" class="fixed inset-0 bg-ocean-deep/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-[3rem] w-full max-w-2xl p-12 shadow-2xl overflow-y-auto max-h-[90vh]">
        <h3 class="text-3xl font-serif text-ocean-deep mb-8">{{ editingId ? 'Edit' : 'Add New' }} {{ activeTab === 'rooms' ? 'Room' : 'Package' }}</h3>
        
        <form @submit.prevent="saveForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-driftwood/60">Name</label>
              <input v-model="form.name" type="text" required class="w-full px-6 py-4 rounded-2xl bg-sand/10 border border-sand/20 focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-driftwood/60">Price ($)</label>
              <input v-model="form.price" type="number" step="0.01" required class="w-full px-6 py-4 rounded-2xl bg-sand/10 border border-sand/20 focus:outline-none focus:border-coral transition-colors" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-driftwood/60">Description</label>
            <textarea v-model="form.description" rows="3" class="w-full px-6 py-4 rounded-2xl bg-sand/10 border border-sand/20 focus:outline-none focus:border-coral transition-colors"></textarea>
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <label class="text-xs font-bold uppercase tracking-widest text-driftwood/60">Island Visuals 🏝️</label>
              <div class="flex bg-sand/10 p-1 rounded-xl border border-sand/20">
                <button 
                  type="button"
                  @click="imageSource = 'upload'"
                  class="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all"
                  :class="imageSource === 'upload' ? 'bg-ocean-deep text-white shadow-sm' : 'text-driftwood/60 hover:text-driftwood'"
                >
                  Upload
                </button>
                <button 
                  type="button"
                  @click="imageSource = 'url'"
                  class="px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all"
                  :class="imageSource === 'url' ? 'bg-ocean-deep text-white shadow-sm' : 'text-driftwood/60 hover:text-driftwood'"
                >
                  URL
                </button>
              </div>
            </div>

            <!-- Upload Method -->
            <div v-if="imageSource === 'upload'" class="space-y-4">
              <div 
                @click="fileInput?.click()"
                class="relative group cursor-pointer border-2 border-dashed border-sand/30 rounded-3xl p-8 text-center hover:border-coral/50 transition-all bg-sand/5"
              >
                <input 
                  ref="fileInput"
                  type="file" 
                  accept="image/*" 
                  class="hidden" 
                  @change="handleFileChange"
                />
                <div v-if="!imagePreview" class="space-y-2">
                  <div class="text-4xl mb-2">📸</div>
                  <p class="text-sm font-bold text-driftwood-dark">Capture the Essence</p>
                  <p class="text-[10px] text-driftwood/40 uppercase tracking-widest">Click to upload or drag & drop</p>
                </div>
                <div v-else class="relative h-48 w-full">
                  <img :src="imagePreview" class="w-full h-full object-cover rounded-2xl shadow-inner" />
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition-opacity">
                    <span class="text-white text-xs font-bold uppercase tracking-widest">Change Image</span>
                  </div>
                </div>
                <div v-if="uploading" class="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-3xl">
                  <div class="flex flex-col items-center gap-2">
                    <div class="w-8 h-8 border-4 border-coral border-t-transparent rounded-full animate-spin"></div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-coral">Uploading to the Cloud...</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- URL Method -->
            <div v-else class="space-y-4">
              <input 
                v-model="form.imageUrl" 
                type="text" 
                placeholder="https://example.com/tropical-paradise.jpg"
                class="w-full px-6 py-4 rounded-2xl bg-sand/10 border border-sand/20 focus:outline-none focus:border-coral transition-colors" 
              />
              <div v-if="form.imageUrl" class="h-48 rounded-2xl overflow-hidden border border-sand/30 shadow-inner">
                <img :src="form.imageUrl" class="w-full h-full object-cover" @error="handleImageError" />
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'rooms'" class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-driftwood/60">Status</label>
            <select v-model="form.status" class="w-full px-6 py-4 rounded-2xl bg-sand/10 border border-sand/20 focus:outline-none focus:border-coral transition-colors">
              <option value="available">Available</option>
              <option value="maintenance">Maintenance</option>
              <option value="reserved">Reserved</option>
            </select>
          </div>

          <div class="flex gap-4 pt-6">
            <button type="submit" class="flex-1 bg-ocean-deep text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-ocean-deep/90 transition-all shadow-lg">
              Save changes
            </button>
            <button @click="showModal = false" type="button" class="px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-driftwood hover:bg-sand/10 transition-all">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, isAdmin } = useAuth()
const { adminBookings, fetchAdminBookings, updateStatus } = useBooking()
const { packages, fetchPackages } = usePackages()

const activeTab = ref('bookings')
const loading = ref(true)
const roomsLoading = ref(true)
const packagesLoading = ref(true)
const rooms = ref<any[]>([])

const tabs = [
  { id: 'bookings', label: 'Bookings', icon: '⚓' },
  { id: 'rooms', label: 'Rooms', icon: '🛖' },
  { id: 'packages', label: 'Packages', icon: '📦' }
]

const showModal = ref(false)
const editingId = ref(null)
const imageSource = ref<'upload' | 'url'>('url')
const imagePreview = ref('')
const uploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const form = ref({
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  status: 'available',
  features: []
})

onMounted(async () => {
  if (!user.value || !isAdmin.value) {
    navigateTo('/login')
    return
  }
  await Promise.all([
    fetchAdminBookings(),
    fetchRooms(),
    fetchPackages()
  ])
  loading.value = false
  roomsLoading.value = false
  packagesLoading.value = false
})

async function fetchRooms() {
  roomsLoading.value = true
  try {
    rooms.value = await $fetch<any[]>('/api/admin/rooms')
  } catch (err) {
    console.error('Failed to fetch rooms:', err)
  } finally {
    roomsLoading.value = false
  }
}

async function handleUpdateBookingStatus(id: number, status: string) {
  if (confirm(`Change booking #${id} status to ${status}? 🐚`)) {
    const res = await updateStatus(id, status)
    if (!res.success) alert(res.error)
  }
}

async function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  // Show local preview
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)

  // Upload to Cloudinary
  uploading.value = true
  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await $fetch<{ url: string }>('/api/admin/upload', {
      method: 'POST',
      body: formData
    })
    form.value.imageUrl = res.url
  } catch (err: any) {
    alert(err.data?.statusMessage || 'Upload failed')
    imagePreview.value = ''
  } finally {
    uploading.value = false
  }
}

function handleImageError() {
  if (form.value.imageUrl) {
    alert('Failed to load image from URL. Please check if it is a valid image link.')
  }
}

function openAddRoomModal() {
  editingId.value = null
  imageSource.value = 'url'
  imagePreview.value = ''
  form.value = { name: '', description: '', price: 0, imageUrl: '', status: 'available', features: [] }
  showModal.value = true
}

function openAddPackageModal() {
  editingId.value = null
  imageSource.value = 'url'
  imagePreview.value = ''
  form.value = { name: '', description: '', price: 0, imageUrl: '', status: 'available', features: [] }
  showModal.value = true
}

function editRoom(room: any) {
  activeTab.value = 'rooms'
  editingId.value = room.id
  imageSource.value = 'url'
  imagePreview.value = room.imageUrl
  form.value = { ...room, imageUrl: room.imageUrl }
  showModal.value = true
}

function editPackage(pkg: any) {
  activeTab.value = 'packages'
  editingId.value = pkg.id
  imageSource.value = 'url'
  imagePreview.value = pkg.imageUrl
  form.value = { ...pkg, imageUrl: pkg.imageUrl }
  showModal.value = true
}

async function saveForm() {
  const endpoint = activeTab.value === 'rooms' ? '/api/admin/rooms' : '/api/admin/packages'
  const method = editingId.value ? 'PUT' : 'POST'
  const url = editingId.value ? `${endpoint}/${editingId.value}` : endpoint

  try {
    await $fetch(url, {
      method,
      body: form.value
    })
    showModal.value = false
    if (activeTab.value === 'rooms') await fetchRooms()
    else await fetchPackages()
  } catch (err: any) {
    alert(err.data?.statusMessage || 'Failed to save')
  }
}

async function deleteRoom(id: number) {
  if (confirm('Are you sure you want to remove this accommodation from our island inventory? 🌊')) {
    try {
      await $fetch(`/api/admin/rooms/${id}`, { method: 'DELETE' })
      await fetchRooms()
    } catch (err: any) {
      alert(err.data?.statusMessage || 'Failed to delete')
    }
  }
}

async function deletePackage(id: number) {
  if (confirm('Remove this curated experience from our offerings? 📦')) {
    try {
      await $fetch(`/api/admin/packages/${id}`, { method: 'DELETE' })
      await fetchPackages()
    } catch (err: any) {
      alert(err.data?.statusMessage || 'Failed to delete')
    }
  }
}

definePageMeta({
  layout: 'default',
  middleware: 'auth'
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
