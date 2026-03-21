<template>
  <footer class="bg-sand-light pt-16 pb-8 border-t border-sand">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Logo and About -->
        <div class="md:col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-coral rounded-full flex items-center justify-center">
              <span class="text-white">🌴</span>
            </div>
            <span class="font-serif font-bold text-xl text-driftwood tracking-tight">
              WHISPER OF WATERS
            </span>
          </NuxtLink>
          <p class="text-driftwood leading-relaxed max-w-sm">
            Experience the ultimate tropical paradise where the crystal ocean meets golden sands. Our sanctuary offers a peaceful escape into island luxury.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-serif font-bold text-lg text-ocean-deep mb-6">Explore</h4>
          <ul class="space-y-4 text-driftwood">
            <li><NuxtLink to="/rooms" class="hover:text-coral transition-colors">Ocean Suites</NuxtLink></li>
            <li><NuxtLink to="/packages" class="hover:text-coral transition-colors">Island Packages</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="hover:text-coral transition-colors">Photo Gallery</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-coral transition-colors">Our Story</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif font-bold text-lg text-ocean-deep mb-6">Paradise Awaits</h4>
          <ul class="space-y-4 text-driftwood">
            <li class="flex items-center gap-2"><span>📍</span> Coral Bay, Tropical Isle</li>
            <li class="flex items-center gap-2"><span>📞</span> +1 (555) OCEAN-WAVES</li>
            <li class="flex items-center gap-2"><span>✉️</span> stay@whisperwaters.com</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-sand pt-8 text-center text-sm text-driftwood/60">
        <p>&copy; {{ new Date().getFullYear() }} Whisper of Waters. No payments processed on this site. 🥥</p>
      </div>
    </div>
  </footer>
</template>
