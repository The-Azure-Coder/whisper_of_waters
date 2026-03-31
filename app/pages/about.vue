<template>
  <div class="pt-32 pb-20 min-h-screen bg-sand">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="relative rounded-[3rem] overflow-hidden h-[50vh] shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200" 
          alt="Blue Haven Hotel Resort" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent flex flex-col justify-end p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">Blue Haven Hotel</h1>
          <p class="text-xl text-sky-blue max-w-2xl font-light leading-relaxed">
            Where the rhythm of the tides dictates the pace of life. Discover your private coastal sanctuary.
          </p>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-aqua font-bold tracking-widest uppercase text-sm mb-4">Our Philosophy</h2>
          <h3 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-8">Harmonizing Luxury with Coastal Serenity</h3>
          <p class="text-driftwood/80 text-lg leading-relaxed mb-6">
            Blue Haven Hotel was founded on the belief that true luxury isn't just about opulence; it's about connection—connection to nature, to the ocean, and to oneself. Our resort is designed to blend seamlessly into the pristine coastal landscape.
          </p>
          <p class="text-driftwood/80 text-lg leading-relaxed">
            From our eco-conscious beachfront suites to our panoramic ocean view villas, every corner of Blue Haven is dedicated to providing an immersive experience that rejuvenates the soul and inspires the spirit.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=400" alt="Resort Life" class="rounded-3xl shadow-lg mt-8" />
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=400" alt="Spa" class="rounded-3xl shadow-lg" />
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="bg-deep-ocean py-20 mb-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-sky-blue/60 font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
        <h3 class="text-4xl font-serif text-white mb-12">Exquisite Coastal Experiences</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🏝️</span>
            <h4 class="text-xl font-bold mb-4">Luxury Suites</h4>
            <p class="text-sky-blue/80">Elegantly appointed accommodations designed for ultimate privacy and coastal comfort.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🚤</span>
            <h4 class="text-xl font-bold mb-4">Ocean Adventures</h4>
            <p class="text-sky-blue/80">Guided tours to hidden coastal gems and vibrant marine sanctuaries.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🧖</span>
            <h4 class="text-xl font-bold mb-4">Coastal Spa</h4>
            <p class="text-sky-blue/80">Rejuvenating ocean-inspired treatments and sunrise meditation sessions.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-sand-dark/30">
        <h3 class="text-3xl font-serif text-deep-ocean mb-6">Plan Your Escape</h3>
        <p class="text-driftwood/70 mb-8">Our coastal concierges are ready to help you craft your perfect getaway.</p>
        <div class="flex flex-wrap justify-center gap-8">
          <div>
            <p class="font-bold text-aqua uppercase text-xs tracking-widest">Email Us</p>
            <p class="text-driftwood text-lg">stay@bluehavenhotel.com</p>
          </div>
          <div>
            <p class="font-bold text-aqua uppercase text-xs tracking-widest">Call Us</p>
            <p class="text-driftwood text-lg">+1 (800) BLUE-HAVEN</p>
          </div>
          <div>
            <p class="font-bold text-aqua uppercase text-xs tracking-widest">Find Us</p>
            <p class="text-driftwood text-lg">Blue Haven Bay, Tropical Isle</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us | Blue Haven Hotel',
  meta: [
    { name: 'description', content: 'Learn more about the Blue Haven Hotel resort and our philosophy of tropical coastal luxury.' }
  ]
})
</script>
