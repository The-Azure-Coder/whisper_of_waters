<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean to-coral-dark"></div>
    
    <!-- Animated Ocean Waves Pattern Overlay -->
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wave-cut.png')]"></div>
    
    <div class="container mx-auto px-4 relative z-10 text-center">
      <div class="max-w-4xl mx-auto">
        <span class="inline-block text-sunset-light font-bold text-lg mb-4 tracking-widest uppercase">☀️ Limited Island Offers</span>
        <h2 class="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-lg leading-tight">
          Begin Your Tropical Escape Today
        </h2>
        <p class="text-xl md:text-2xl text-white/90 mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
          Book directly with us for exclusive rates, a complimentary sunset welcome drink, and priority room upgrades.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NuxtLink to="/packages">
            <UiButton variant="coral" class="px-12 py-5 text-xl font-bold shadow-2xl hover:bg-sunset transition-all">
              🌊 Check Availability
            </UiButton>
          </NuxtLink>
          <NuxtLink to="/gallery">
            <UiButton variant="ghost" class="px-12 py-5 text-xl font-bold text-white border-2 border-white/40 backdrop-blur-md hover:bg-white hover:text-ocean-deep shadow-xl transition-all">
              🌴 View Paradise
            </UiButton>
          </NuxtLink>
        </div>
        
        <div class="mt-16 flex justify-center items-center gap-8 text-white/80">
          <div class="flex flex-col items-center">
            <span class="text-4xl mb-2">🐚</span>
            <span class="text-sm font-medium">Best Rate Guarantee</span>
          </div>
          <div class="h-10 w-px bg-white/20"></div>
          <div class="flex flex-col items-center">
            <span class="text-4xl mb-2">🍹</span>
            <span class="text-sm font-medium">Welcome Drink</span>
          </div>
          <div class="h-10 w-px bg-white/20"></div>
          <div class="flex flex-col items-center">
            <span class="text-4xl mb-2">⚓</span>
            <span class="text-sm font-medium">Flexible Booking</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Decorations -->
    <div class="absolute -bottom-10 -left-10 text-9xl opacity-10 transform -rotate-12">🌴</div>
    <div class="absolute -top-10 -right-10 text-9xl opacity-10 transform rotate-12">🌊</div>
  </section>
</template>
