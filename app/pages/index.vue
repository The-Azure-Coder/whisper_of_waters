<template>
  <div>
    <HomeHeroCarousel />
    
    <!-- Quick Intro -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="flex-1">
            <div class="relative">
              <img src="/images/hotel_image.jpeg" 
                   class="rounded-3xl shadow-2xl relative z-10" alt="Blue Haven Hotel Resort" />
              <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-sand-dark/20 rounded-3xl -z-10 transform rotate-6"></div>
            </div>
          </div>
          <div class="flex-1">
            <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">⚓ Your Sanctuary</span>
            <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-8 leading-tight">
              A Haven by the Ocean, <br/>A Touch of Pure Gold
            </h2>
            <p class="text-driftwood text-lg mb-8 leading-relaxed">
              Nestled on the edge of the world, Blue Haven Hotel offers a unique blend of untamed nature and refined luxury. Here, every sunrise brings a new adventure and every sunset promises peace in our coastal paradise.
            </p>
            <div class="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 class="text-3xl font-serif text-deep-ocean mb-2">150+</h4>
                <p class="text-driftwood/60 uppercase text-xs font-bold tracking-widest">Beachfront Suites</p>
              </div>
              <div>
                <h4 class="text-3xl font-serif text-sunset-gold mb-2">5</h4>
                <p class="text-driftwood/60 uppercase text-xs font-bold tracking-widest">World-Class Dining</p>
              </div>
            </div>
            <NuxtLink to="/about">
              <UiButton variant="outline">Learn Our Story ⚓</UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <HomeServicesSection />
    
    <HomeStaffShowcase />
    
    <HomeFacilitiesShowcase />
    
    <!-- Testimonials Preview (Simplified) -->
    <section class="py-24 bg-sky-blue/30 overflow-hidden relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif text-deep-ocean">Guest Experiences</h2>
          <p class="text-driftwood/70 mt-4">What our guests say about Blue Haven</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-white p-8 rounded-3xl shadow-lg border border-sand-dark/30">
            <div class="flex text-sunset-gold mb-4">
              <span v-for="s in 5" :key="s">★</span>
            </div>
            <p class="italic text-driftwood mb-6">"An absolute slice of heaven. The service was impeccable and the views were unlike anything I've ever seen."</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-sand"></div>
              <div>
                <p class="font-bold text-deep-ocean">Island Traveler</p>
                <p class="text-xs text-driftwood/50">Stayed in Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeCTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
