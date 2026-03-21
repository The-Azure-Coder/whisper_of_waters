<template>
  <div class="pt-32 pb-20 min-h-screen bg-sand-light/10">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="relative rounded-[3rem] overflow-hidden h-[50vh] shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200" 
          alt="Whisper of Waters Resort" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent flex flex-col justify-end p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">Whisper of Waters</h1>
          <p class="text-xl text-sand max-w-2xl font-light leading-relaxed">
            Where the rhythm of the tides dictates the pace of life. Discover your private sanctuary in the heart of paradise.
          </p>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-coral font-bold tracking-widest uppercase text-sm mb-4">Our Philosophy</h2>
          <h3 class="text-4xl md:text-5xl font-serif text-ocean-deep mb-8">Harmonizing Luxury with Tropical Serenity</h3>
          <p class="text-driftwood/80 text-lg leading-relaxed mb-6">
            Whisper of Waters was founded on the belief that true luxury isn't just about opulence; it's about connection—connection to nature, to the elements, and to oneself. Our resort is designed to blend seamlessly into the lush island landscape.
          </p>
          <p class="text-driftwood/80 text-lg leading-relaxed">
            From our eco-friendly jungle retreats to our panoramic ocean view suites, every corner of our island is dedicated to providing an immersive experience that rejuvenates the soul and inspires the spirit.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=400" alt="Resort Life" class="rounded-3xl shadow-lg mt-8" />
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=400" alt="Spa" class="rounded-3xl shadow-lg" />
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="bg-ocean-deep py-20 mb-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-sand/60 font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
        <h3 class="text-4xl font-serif text-white mb-12">Exquisite Island Experiences</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🏝️</span>
            <h4 class="text-xl font-bold mb-4">Private Villas</h4>
            <p class="text-sand/80">Hand-crafted accommodations designed for ultimate privacy and comfort.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🚤</span>
            <h4 class="text-xl font-bold mb-4">Island Excursions</h4>
            <p class="text-sand/80">Guided tours to hidden lagoons and pristine coral reefs.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
            <span class="text-4xl mb-4 block">🧘</span>
            <h4 class="text-xl font-bold mb-4">Wellness Sanctuary</h4>
            <p class="text-sand/80">Rejuvenating spa treatments and sunrise yoga sessions.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-sand/30">
        <h3 class="text-3xl font-serif text-driftwood-dark mb-6">Plan Your Escape</h3>
        <p class="text-driftwood/70 mb-8">Our island concierges are ready to help you craft your perfect getaway.</p>
        <div class="flex flex-wrap justify-center gap-8">
          <div>
            <p class="font-bold text-coral uppercase text-xs tracking-widest">Email Us</p>
            <p class="text-driftwood text-lg">hello@whisperwaters.com</p>
          </div>
          <div>
            <p class="font-bold text-coral uppercase text-xs tracking-widest">Call Us</p>
            <p class="text-driftwood text-lg">+1 (800) WHISPER</p>
          </div>
          <div>
            <p class="font-bold text-coral uppercase text-xs tracking-widest">Find Us</p>
            <p class="text-driftwood text-lg">Paradise Isle, Coral Sea</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us | Whisper of Waters',
  meta: [
    { name: 'description', content: 'Learn more about the Whisper of Waters resort and our philosophy of tropical luxury.' }
  ]
})
</script>
