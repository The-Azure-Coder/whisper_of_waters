<template>
  <section class="py-24 bg-sand-light/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">⚓ Comfort & Fun</span>
        <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-6">World-Class Facilities</h2>
        <p class="text-driftwood text-lg max-w-2xl mx-auto">
          From our elegantly appointed suites to our vibrant children's play areas, Blue Haven offers something special for every guest.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        <!-- Kids Club -->
        <div class="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/kids_room1.jpeg" alt="Kids Club and Play Area" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-8">
            <div>
              <h4 class="text-white text-2xl font-serif mb-2">Treasure Island Kids Club</h4>
              <p class="text-sky-blue/90">A world of imagination and fun for our younger explorers.</p>
            </div>
          </div>
        </div>

        <!-- Room 2 -->
        <div class="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room2.jpeg" alt="Luxury Suite Interior" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Elegant Suites</h4>
          </div>
        </div>

        <!-- Room 4 (Vertical assumption) -->
        <div class="lg:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room4.jpeg" alt="Premium Room Details" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Premium Details</h4>
          </div>
        </div>

        <!-- Room 3 -->
        <div class="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room3.jpeg" alt="Ocean View Room" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Scenic Views</h4>
          </div>
        </div>

        <!-- Room 6 (Vertical assumption) -->
        <div class="lg:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room6.jpeg" alt="Coastal Living Space" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Coastal Living</h4>
          </div>
        </div>

        <!-- Room 5 -->
        <div class="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room5.jpeg" alt="Spa and Wellness Room" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Serene Spaces</h4>
          </div>
        </div>

        <!-- Room 7 -->
        <div class="relative group overflow-hidden rounded-[2.5rem] shadow-lg">
          <img src="/images/room7.jpeg" alt="Modern Amenity Suite" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h4 class="text-white font-serif">Modern Luxury</h4>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/gallery">
          <UiButton variant="outline" class="px-12">View Full Gallery ⚓</UiButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
