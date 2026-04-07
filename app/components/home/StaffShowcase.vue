<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Hotel Overview Section -->
      <div class="mb-20">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">⚓ Jamaican Hospitality</span>
            <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-6">Experience Blue Haven</h2>
            <p class="text-driftwood text-lg leading-relaxed mb-8">
              With 750 rooms and a dedicated team of 400 professionals, we are a cornerstone of luxury in Montego Bay. Our all-inclusive model ensures that every guest enjoys a unique, stress-free experience from check-in to check-out.
            </p>
            <div class="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 class="text-3xl font-serif text-deep-ocean mb-2">750+</h4>
                <p class="text-driftwood/60 uppercase text-xs font-bold tracking-widest">Premium Rooms</p>
              </div>
              <div>
                <h4 class="text-3xl font-serif text-sunset-gold mb-2">400</h4>
                <p class="text-driftwood/60 uppercase text-xs font-bold tracking-widest">Expert Staff</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-start gap-3">
                <span class="text-2xl">🍽️</span>
                <div>
                  <h4 class="font-bold text-deep-ocean">Gourmet Dining</h4>
                  <p class="text-sm text-driftwood">8 AM - 11 PM daily</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">🐎</span>
                <div>
                  <h4 class="font-bold text-deep-ocean">Horseback Riding</h4>
                  <p class="text-sm text-driftwood">Coastal adventures</p>
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
          <span class="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">👋 Our Leadership</span>
          <h2 class="text-4xl md:text-5xl font-serif text-deep-ocean mb-6">The Heart of Our Service</h2>
          <p class="text-driftwood text-lg max-w-2xl mx-auto">
            Led by experts from the University of the Commonwealth Caribbean and industry veterans, our management team ensures every detail of your stay exceeds expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Finance Manager -->
          <div class="bg-sand-light p-8 rounded-[2rem] shadow-lg border border-sand-dark/30 hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 bg-deep-ocean rounded-2xl mb-6 flex items-center justify-center text-white text-3xl">💼</div>
            <h4 class="text-xl font-serif text-deep-ocean mb-1">Mr. Dacarthy Brown</h4>
            <p class="text-aqua text-sm font-bold uppercase mb-4 tracking-wider">Finance Manager</p>
            <p class="text-driftwood/70 text-sm leading-relaxed">
              Master's in Accounting and Finance (UCC). Oversees financial planning to ensure sustainable growth and profitability.
            </p>
          </div>

          <!-- HR Manager -->
          <div class="bg-sand-light p-8 rounded-[2rem] shadow-lg border border-sand-dark/30 hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 bg-sunset-gold rounded-2xl mb-6 flex items-center justify-center text-white text-3xl">👥</div>
            <h4 class="text-xl font-serif text-deep-ocean mb-1">Tyrese Morgan</h4>
            <p class="text-aqua text-sm font-bold uppercase mb-4 tracking-wider">HR Manager</p>
            <p class="text-driftwood/70 text-sm leading-relaxed">
              Fosters a positive work environment, overseeing talent acquisition and staff development for our 400 team members.
            </p>
          </div>

          <!-- Marketing Manager -->
          <div class="bg-sand-light p-8 rounded-[2rem] shadow-lg border border-sand-dark/30 hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 bg-aqua rounded-2xl mb-6 flex items-center justify-center text-white text-3xl">📱</div>
            <h4 class="text-xl font-serif text-deep-ocean mb-1">Mahalia Drummond</h4>
            <p class="text-aqua text-sm font-bold uppercase mb-4 tracking-wider">Marketing Manager</p>
            <p class="text-driftwood/70 text-sm leading-relaxed">
              Former influencer turned UCC graduate, she implements digital strategies to showcase our unique Jamaican experience.
            </p>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-driftwood/50 text-sm italic">
            Part of a leadership team of 11 dedicated department heads including Siria & Syara Chambers, Stephan Green, and Alissa Fryers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
