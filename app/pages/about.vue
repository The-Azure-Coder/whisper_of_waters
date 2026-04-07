<template>
  <div class="pt-32 pb-20 min-h-screen bg-sand">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="relative rounded-[3rem] overflow-hidden h-[50vh] shadow-2xl">
        <img 
          src="/images/hotel_image.jpeg" 
          alt="Blue Haven Hotel Montego Bay" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent flex flex-col justify-end p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">Blue Haven Hotel</h1>
          <p class="text-xl text-sky-blue max-w-2xl font-light leading-relaxed italic">
            "Don’t just pass through. Pause. Experience. Remember."
          </p>
        </div>
      </div>
    </div>

    <!-- Introduction Section -->
    <div class="container mx-auto px-4 mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-aqua font-bold tracking-widest uppercase text-sm mb-4">Welcome to Paradise</h2>
          <h3 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-8">Our Story in Montego Bay</h3>
          <p class="text-driftwood/80 text-lg leading-relaxed mb-6">
            Located at 18 Jimmy Cliff Boulevard, Montego Bay, Jamaica, Blue Haven Hotel is an all-inclusive sanctuary that seeks to bring relaxation, professionalism, and exceptional customer service to all our guests.
          </p>
          <p class="text-driftwood/80 text-lg leading-relaxed mb-6">
            With approximately 750 rooms and a dedicated team of 400 employees, we offer a unique, stress-free, and true Jamaican experience. Whether for leisure, pleasure, family time, or business, we foster a pleasant working environment where everyone is treated like family.
          </p>
          <div class="bg-white p-6 rounded-3xl border border-sand-dark shadow-sm">
            <h4 class="font-bold text-deep-ocean mb-2 italic">Our Attractions</h4>
            <p class="text-driftwood/70 text-sm">
              Beach, Kids' Area, Conference Rooms, Nightclub, Daycare, Spa, Horseback Riding, and our signature restaurant open from 8 AM to 11 PM.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="/images/room4.jpeg" alt="Luxury Suite" class="rounded-3xl shadow-lg mt-8" />
          <img src="/images/hotel_staff.jpeg" alt="Our Team" class="rounded-3xl shadow-lg" />
        </div>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="bg-white py-20 mb-20 shadow-inner">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div class="p-10 bg-sky-blue/20 rounded-[3rem] border border-sky-blue/30">
            <h3 class="text-3xl font-serif text-deep-ocean mb-6">Our Mission</h3>
            <p class="text-driftwood text-lg italic leading-relaxed">
              "To provide an unparalleled experience of luxury and personalized service, creating lasting memories for our guests through exceptional accommodations, exquisite dining, and a commitment to exceeding expectations."
            </p>
          </div>
          <div class="p-10 bg-sunset-light/10 rounded-[3rem] border border-sunset-gold/20">
            <h3 class="text-3xl font-serif text-deep-ocean mb-6">Our Vision</h3>
            <p class="text-driftwood text-lg italic leading-relaxed">
              "To become one of the best tourist destinations, where every moment feels like a celebration of paradise, and guests feel like family in our vibrant haven of comfort, culture, and endless dreams."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Values -->
    <div class="container mx-auto px-4 mb-20">
      <div class="text-center mb-16">
        <h2 class="text-aqua font-bold tracking-widest uppercase text-sm mb-4">Our DNA</h2>
        <h3 class="text-4xl font-serif text-deep-ocean">Core Values</h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div v-for="value in coreValues" :key="value.title" class="bg-white p-6 rounded-3xl border border-sand-dark hover:shadow-xl transition-all duration-300 text-center">
          <div class="text-3xl mb-4">{{ value.icon }}</div>
          <h4 class="font-bold text-deep-ocean mb-2">{{ value.title }}</h4>
          <p class="text-driftwood/60 text-xs">{{ value.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Corporate Initiatives & Sustainability -->
    <div class="container mx-auto px-4 mb-20">
      <div class="bg-deep-ocean rounded-[4rem] p-12 text-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl font-serif mb-6">Sustainability & Community</h3>
            <p class="text-sky-blue/80 mb-6 leading-relaxed">
              We are committed to "Eco-Elegance"—protecting the Jamaican coastline while providing world-class luxury. From energy-efficient LED lighting to local sourcing of seafood and mariculture integration (like oyster farming), we prioritize the environment.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <span class="text-sunset-gold">✔</span>
                <span>Beach clean-ups & recycling programs</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-sunset-gold">✔</span>
                <span>Scholarships for Hospitality & Tourism students</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-sunset-gold">✔</span>
                <span>Partnerships with local farmers & charities</span>
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center">
              <h4 class="text-2xl font-serif text-sunset-gold">LED</h4>
              <p class="text-xs">Energy Efficient</p>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center">
              <h4 class="text-2xl font-serif text-sunset-gold">Local</h4>
              <p class="text-xs">Community Sourced</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-sand-dark/30">
        <h3 class="text-3xl font-serif text-deep-ocean mb-6">Plan Your Experience</h3>
        <p class="text-driftwood/70 mb-8 italic">"Where every moment feels like a celebration."</p>
        <div class="flex flex-wrap justify-center gap-8 text-left">
          <div>
            <p class="font-bold text-aqua uppercase text-xs tracking-widest">Visit Us</p>
            <p class="text-driftwood text-lg">18 Jimmy Cliff Boulevard,<br/>Montego Bay, Jamaica</p>
          </div>
          <div>
            <p class="font-bold text-aqua uppercase text-xs tracking-widest">Call Us</p>
            <p class="text-driftwood text-lg">+1 (876) BLUE-HAVEN</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us | Blue Haven Hotel Montego Bay',
  meta: [
    { name: 'description', content: 'Blue Haven Hotel Montego Bay - An all-inclusive experience of luxury, personalized service, and true Jamaican culture.' }
  ]
})

const coreValues = [
  { title: 'Excellence', icon: '⭐', desc: 'Highest standards in all guest experiences.' },
  { title: 'Personalization', icon: '👤', desc: 'Tailoring services to individual guest needs.' },
  { title: 'Integrity', icon: '🤝', desc: 'Honesty, transparency, and ethical behavior.' },
  { title: 'Innovation', icon: '💡', desc: 'Continuous enhancement of guest experience.' },
  { title: 'Teamwork', icon: '👥', desc: 'Positive and supportive work environment.' },
  { title: 'Respect', icon: '🙏', desc: 'Treating all with dignity and consideration.' },
  { title: 'Sustainability', icon: '🌱', desc: 'Environmentally responsible operations.' },
  { title: 'Eco-Elegance', icon: '🌊', desc: 'Protecting the coastline with luxury.' },
  { title: 'Immersion', icon: '🥁', desc: 'Jamaican flavors, music, and art.' },
  { title: 'Safety', icon: '🛡️', desc: 'Partnering with JCF for guest security.' }
]
</script>
