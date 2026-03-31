<template>
  <footer class="bg-deep-ocean text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Logo and About -->
        <div class="md:col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-3 mb-6">
            <img 
              src="/images/logo.jpeg" 
              alt="Blue Haven Hotel Logo" 
              class="h-12 w-auto object-contain rounded-lg bg-white p-1 shadow-lg"
            />
            <span class="font-serif font-bold text-xl text-white tracking-tight">
              BLUE HAVEN HOTEL
            </span>
          </NuxtLink>
          <p class="text-sky-blue/80 leading-relaxed max-w-sm">
            Experience the pinnacle of coastal luxury at Blue Haven Hotel. From pristine beaches to world-class dining, your perfect escape awaits in our tropical sanctuary.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-serif font-bold text-lg text-aqua-light mb-6">Explore</h4>
          <ul class="space-y-4 text-sky-blue/70">
            <li><NuxtLink to="/rooms" class="hover:text-aqua transition-colors">Luxury Rooms</NuxtLink></li>
            <li><NuxtLink to="/packages" class="hover:text-aqua transition-colors">Exclusive Packages</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="hover:text-aqua transition-colors">Photo Gallery</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-aqua transition-colors">Our Story</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif font-bold text-lg text-aqua-light mb-6">Paradise Awaits</h4>
          <ul class="space-y-4 text-sky-blue/70">
            <li class="flex items-center gap-2"><span>📍</span> Blue Haven Bay, Tropical Isle</li>
            <li class="flex items-center gap-2"><span>📞</span> +1 (555) BLUE-HAVEN</li>
            <li class="flex items-center gap-2"><span>✉️</span> stay@bluehavenhotel.com</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-sm text-sky-blue/40">
        <p>&copy; {{ new Date().getFullYear() }} Blue Haven Hotel. No payments processed on this site. 🥥</p>
      </div>
    </div>
  </footer>
</template>
