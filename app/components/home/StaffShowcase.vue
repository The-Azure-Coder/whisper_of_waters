<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Hotel Overview Section -->
      <div class="mb-20">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">⚓ Coastal Luxury</span>
            <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-6">Discover Our Paradise</h2>
            <p class="text-driftwood text-lg leading-relaxed mb-8">
              Experience the breath-taking beauty of Blue Haven Hotel. From our pristine private beach to our world-class dining and infinity pools, every detail is designed for your ultimate comfort and relaxation.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-start gap-3">
                <span class="text-2xl">🏖️</span>
                <div>
                  <h4 class="font-bold text-deep-ocean">Private Beach</h4>
                  <p class="text-sm text-driftwood">Crystal clear waters</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">🏊</span>
                <div>
                  <h4 class="font-bold text-deep-ocean">Infinity Pool</h4>
                  <p class="text-sm text-driftwood">Ocean-side relaxation</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 order-1 lg:order-2">
            <div class="relative group">
              <img 
                src="/images/hotel_image.jpeg" 
                alt="Blue Haven Hotel Resort Overview" 
                class="rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sunset-gold rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff Section -->
      <div class="pt-20 border-t border-sand-dark/20">
        <div class="text-center mb-16">
          <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">👋 Warm Hospitality</span>
          <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-6">Meet Our Dedicated Team</h2>
          <p class="text-driftwood text-lg max-w-2xl mx-auto">
            Our exceptional staff is at the heart of the Blue Haven experience, committed to making your stay unforgettable with personalized service and a warm smile.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="relative group overflow-hidden rounded-[2rem] shadow-xl">
            <img 
              src="/images/hotel_staff.jpeg" 
              alt="Our Professional Front Desk Team" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <div>
                <h4 class="text-white text-2xl font-serif mb-2">Concierge Excellence</h4>
                <p class="text-sky-blue">Ready to assist with your every need, day or night.</p>
              </div>
            </div>
          </div>
          <div class="relative group overflow-hidden rounded-[2rem] shadow-xl">
            <img 
              src="/images/hotel_staff2.jpeg" 
              alt="Our Hospitality Service Staff" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <div>
                <h4 class="text-white text-2xl font-serif mb-2">Guest Relations Team</h4>
                <p class="text-sky-blue">Committed to providing a seamless and personalized island experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
