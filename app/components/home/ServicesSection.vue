<template>
  <section class="py-24 bg-gradient-to-b from-sand-light/50 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="text-coral font-bold tracking-widest uppercase text-sm block mb-4">🌴 Paradise Awaits</span>
        <h2 class="text-4xl md:text-5xl font-serif text-driftwood-dark mb-6">Exquisite Island Services</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-ocean to-coral mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
             class="bg-white p-8 rounded-3xl shadow-lg shadow-sand-dark/20 hover:shadow-2xl hover:shadow-ocean/10 transition-all duration-500 border border-sand/30 group hover:-translate-y-2">
          <div class="w-20 h-20 bg-sand-light rounded-2xl flex items-center justify-center mb-6
                      group-hover:bg-ocean group-hover:scale-110 transition-all duration-500 shadow-inner">
            <span class="text-4xl group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">{{ service.icon }}</span>
          </div>
          <h3 class="text-2xl font-serif text-driftwood-dark mb-4 group-hover:text-ocean transition-colors">{{ service.title }}</h3>
          <p class="text-driftwood leading-relaxed">{{ service.description }}</p>
          <div class="mt-6 flex items-center text-coral font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Learn More <span class="ml-2">🐚</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { icon: '🏖️', title: 'Private Beach', description: 'Access to exclusive powdery white sands with full cabana and beverage service at your fingertips.' },
  { icon: '🏊', title: 'Infinity Pool', description: 'A temperature-controlled saltwater infinity pool that blends seamlessly into the turquoise horizon.' },
  { icon: '🧖', title: 'Coral Spa', description: 'Traditional island healing treatments using organic marine minerals and locally sourced tropical botanicals.' },
  { icon: '🍽️', title: 'Beachfront Dining', description: 'Five-star culinary experiences with fresh daily catches served directly on the sand under the stars.' },
  { icon: '🍹', title: 'Sunset Bar', description: 'Expertly crafted signature cocktails featuring exotic local fruits and world-class spirits with live island music.' },
  { icon: '🏄', title: 'Water Sports', description: 'Complimentary use of snorkeling gear, kayaks, and paddleboards to explore our vibrant house reef.' }
]
</script>
