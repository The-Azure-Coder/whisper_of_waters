# WHISPER OF WATERS - COMPLETE IMPLEMENTATION PLAN

## 📋 PROJECT OVERVIEW
A full-stack hotel booking platform with **Nuxt 4** (server-side rendering), integrated backend, PostgreSQL database, **manual booking confirmation**, and a **bright tropical beach vibe** design.

---

## 🏗️ SYSTEM ARCHITECTURE

```
[Nuxt 4 (Server-Side Rendering)]
    ├── Client (Browser) - Tropical beach UI theme
    ├── Server Engine (Nitro v3)
    │   ├── Server Routes (API endpoints)
    │   ├── Database Queries
    │   └── Business Logic
    └── [PostgreSQL Database]
```

---

## 🎨 TROPICAL BEACH COLOR SCHEME

```css
:root {
  /* Core Colors */
  --sand: #F5E6D3;        /* Warm sandy beaches */
  --sand-light: #FFF5E6;
  --sand-dark: #E6D7C3;
  
  --ocean: #4A90E2;        /* Bright tropical ocean */
  --ocean-light: #7BB4FF;
  --ocean-deep: #2C3E8F;
  
  --coral: #FF7F6B;        /* Vibrant coral reef */
  --coral-light: #FF9F8C;
  --coral-dark: #E65F4B;
  
  --palm: #2E8B57;         /* Lush palm leaves */
  --palm-light: #4CAF7A;
  --palm-dark: #1B5E3F;
  
  --sunset: #FFB347;       /* Golden sunset glow */
  --sunset-light: #FFD700;
  --sunset-dark: #F28500;
  
  --shell: #FFF0E8;        /* Seashell white */
  --driftwood: #8B7355;    /* Weathered wood */
  
  /* Gradients */
  --gradient-beach: linear-gradient(135deg, var(--sand), var(--ocean-light));
  --gradient-sunset: linear-gradient(135deg, var(--sunset), var(--coral), var(--ocean-deep));
  
  /* Status Colors */
  --status-pending: var(--sunset);
  --status-confirmed: var(--ocean);
  --status-completed: var(--palm);
  --status-cancelled: var(--coral-dark);
}
```

---

## 📁 PROJECT STRUCTURE

```
whisper-of-waters/
├── app/                       
│   ├── pages/                 # File-based routing
│   │   ├── index.vue          # Homepage with tropical carousel
│   │   ├── rooms.vue
│   │   ├── rooms/[id].vue     # Dynamic room page
│   │   ├── packages.vue
│   │   ├── packages/[id].vue
│   │   ├── gallery.vue        # Beach paradise gallery
│   │   ├── login.vue
│   │   ├── register.vue
│   │   ├── dashboard/
│   │   │   ├── index.vue      # User dashboard
│   │   │   └── bookings.vue   # User bookings with status
│   │   └── admin/
│   │       ├── index.vue       # Admin dashboard
│   │       └── bookings.vue    # Manage bookings
│   │
│   ├── components/             
│   │   ├── layout/
│   │   │   ├── Navbar.vue      # Ocean gradient navbar
│   │   │   └── Footer.vue      # Sand-colored footer
│   │   ├── home/
│   │   │   ├── HeroCarousel.vue # Tropical beach images
│   │   │   ├── ServicesSection.vue # Coral-accented cards
│   │   │   ├── RoomsPreview.vue
│   │   │   ├── StaffSection.vue
│   │   │   ├── AmenitiesSection.vue # Beach icons
│   │   │   ├── Testimonials.vue # Ocean blue background
│   │   │   └── CTASection.vue  # Sunset gradient CTA
│   │   ├── bookings/
│   │   │   ├── BookingForm.vue # Sand-colored form
│   │   │   ├── PriceCalculator.vue # Coral highlights
│   │   │   └── BookingCard.vue # Status color badges
│   │   └── ui/
│   │       ├── Badge.vue       # Tropical status colors
│   │       └── Button.vue      # Ocean/coral buttons
│   │
│   ├── composables/            
│   │   ├── useAuth.ts
│   │   ├── useBooking.ts
│   │   └── usePackages.ts
│   │
│   └── assets/
│       └── css/
│           └── tropical.css    # Color variables
│
├── server/                     
│   ├── api/                    
│   │   ├── packages/
│   │   │   ├── index.get.ts    
│   │   │   └── [id].get.ts     
│   │   ├── bookings/
│   │   │   ├── index.get.ts    # GET user bookings
│   │   │   ├── index.post.ts   # POST create booking
│   │   │   └── [id].delete.ts  # DELETE cancel booking
│   │   ├── auth/
│   │   │   ├── login.post.ts
│   │   │   └── register.post.ts
│   │   └── admin/
│   │       ├── bookings.get.ts     # GET all bookings
│   │       └── bookings/[id].put.ts # PUT update status
│   │
│   ├── middleware/             
│   │   ├── auth.ts             # JWT verification
│   │   └── admin.ts            # Admin role check
│   │
│   └── utils/                  
│       ├── database.ts         # PostgreSQL connection
│       ├── pricing.ts          # Price calculation
│       └── jwt.ts              # JWT helpers
│
├── shared/                      
│   └── types/
│       ├── booking.ts
│       └── package.ts
│
├── public/                      
│   └── images/
│       ├── hero/
│       │   ├── beach-sunset.jpg
│       │   └── ocean-view.jpg
│       └── icons/
│           ├── palm-tree.svg
│           └── wave.svg
│
├── .env
├── nuxt.config.ts               
└── package.json
```

---

## 🧩 KEY UI COMPONENT SNIPPETS

### Navbar (`app/components/layout/Navbar.vue`)
```vue
<template>
  <nav :class="[
    'fixed w-full z-50 transition-all',
    isScrolled ? 'bg-white/90 backdrop-blur-md py-2' : 'bg-gradient-to-r from-ocean to-ocean-light py-4'
  ]">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo with palm icon -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-coral rounded-full flex items-center justify-center">
          <span class="text-white">🌴</span>
        </div>
        <span :class="['font-serif font-bold', isScrolled ? 'text-driftwood' : 'text-white']">
          WHISPER OF WATERS
        </span>
      </NuxtLink>

      <!-- Nav Links -->
      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/rooms" :class="['hover:text-coral', isScrolled ? 'text-driftwood' : 'text-white']">Rooms</NuxtLink>
        <NuxtLink to="/packages" :class="['hover:text-coral', isScrolled ? 'text-driftwood' : 'text-white']">Packages</NuxtLink>
        <NuxtLink to="/gallery" :class="['hover:text-coral', isScrolled ? 'text-driftwood' : 'text-white']">Gallery</NuxtLink>
        
        <NuxtLink v-if="!user" to="/login" class="bg-coral text-white px-4 py-2 rounded-lg hover:bg-coral-dark">
          🌊 Login
        </NuxtLink>
        <NuxtLink v-else to="/dashboard" class="bg-ocean text-white px-4 py-2 rounded-lg hover:bg-ocean-deep">
          🌴 Dashboard
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
```

### Hero Carousel (`app/components/home/HeroCarousel.vue`)
```vue
<template>
  <div class="relative h-screen w-full overflow-hidden">
    <div v-for="(slide, index) in slides" :key="index"
         class="absolute inset-0 transition-opacity duration-1000"
         :class="index === currentSlide ? 'opacity-100' : 'opacity-0'">
      
      <NuxtImg :src="slide.image" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-ocean-deep/30 to-coral/30" />
      
      <div class="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 class="text-5xl md:text-7xl font-serif mb-4">{{ slide.title }}</h1>
          <p class="text-xl mb-8">{{ slide.subtitle }}</p>
          <NuxtLink :to="slide.link" 
                    class="bg-coral px-8 py-3 rounded-lg hover:bg-coral-dark transition-all transform hover:scale-105">
            {{ slide.cta }} 🌊
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Shell navigation dots -->
    <div class="absolute bottom-8 left-1/2 flex space-x-2">
      <button v-for="(_, i) in slides" :key="i"
              @click="currentSlide = i"
              :class="i === currentSlide ? 'w-8 bg-coral' : 'w-3 bg-white/50'"
              class="h-3 rounded-full transition-all" />
    </div>
  </div>
</template>

<script setup>
const slides = [
  { image: '/images/hero/beach-sunset.jpg', title: 'Where the Ocean Meets Paradise', subtitle: 'Experience tropical sunsets', cta: 'Explore', link: '/rooms' },
  { image: '/images/hero/ocean-view.jpg', title: 'Crystal Clear Waters', subtitle: 'Swim in turquoise seas', cta: 'View', link: '/amenities' }
]
const currentSlide = ref(0)
useIntervalFn(() => currentSlide.value = (currentSlide.value + 1) % slides.length, 5000)
</script>
```

### Services Section (`app/components/home/ServicesSection.vue`)
```vue
<template>
  <section class="py-20 bg-gradient-to-b from-sand-light to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <span class="text-coral block mb-2">🌴 Paradise Awaits</span>
        <h2 class="text-4xl font-serif text-driftwood-dark mb-4">Island Services</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
             class="bg-shell p-8 rounded-2xl shadow-sand hover:shadow-ocean transition-all border border-sand-light group">
          <div class="w-16 h-16 bg-ocean-light/20 rounded-full flex items-center justify-center mb-4
                      group-hover:bg-ocean group-hover:scale-110 transition-all">
            <span class="text-3xl">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold text-driftwood-dark mb-2">{{ service.title }}</h3>
          <p class="text-driftwood">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '🏖️', title: 'Private Beach', description: 'Exclusive sand with cabana service' },
  { icon: '🏊', title: 'Infinity Pool', description: 'Overlooking the ocean' },
  { icon: '🧖', title: 'Coral Spa', description: 'Traditional island treatments' },
  { icon: '🍽️', title: 'Beachfront Dining', description: 'Fresh seafood in the sand' },
  { icon: '🍹', title: 'Sunset Bar', description: 'Signature cocktails' },
  { icon: '🏄', title: 'Water Sports', description: 'Snorkeling, kayaking, paddleboarding' }
]
</script>
```

### Status Badge (`app/components/ui/Badge.vue`)
```vue
<template>
  <span :class="[
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
    status === 'pending' && 'bg-sunset/20 text-sunset-dark border border-sunset/30',
    status === 'confirmed' && 'bg-ocean/20 text-ocean-deep border border-ocean/30',
    status === 'completed' && 'bg-palm/20 text-palm-dark border border-palm/30',
    status === 'cancelled' && 'bg-coral/20 text-coral-dark border border-coral/30'
  ]">
    <span class="mr-1">{{ statusIcons[status] }}</span>
    {{ status }}
  </span>
</template>

<script setup>
defineProps({ status: String })
const statusIcons = { pending: '⏳', confirmed: '🌊', completed: '🌴', cancelled: '🌅' }
</script>
```

### Booking Card (`app/components/bookings/BookingCard.vue`)
```vue
<template>
  <div class="bg-shell rounded-xl shadow-sand border border-sand-light overflow-hidden">
    <div class="h-2" :class="statusColors[booking.status]" />
    
    <div class="p-6">
      <div class="flex justify-between">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-xl font-semibold text-driftwood-dark">Booking #{{ booking.id }}</h3>
            <Badge :status="booking.status" />
          </div>
          <p class="text-driftwood">📅 {{ booking.checkIn }} to {{ booking.checkOut }}</p>
          <p class="text-2xl font-bold text-palm-dark mt-3">${{ booking.totalPrice }}</p>
        </div>
        
        <button v-if="canCancel" @click="$emit('cancel', booking.id)"
                class="text-coral-dark hover:text-coral text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ booking: Object })
defineEmits(['cancel'])
const canCancel = computed(() => ['pending', 'confirmed'].includes(booking.status))
const statusColors = {
  pending: 'bg-gradient-to-r from-sunset to-coral',
  confirmed: 'bg-gradient-to-r from-ocean to-ocean-light',
  completed: 'bg-gradient-to-r from-palm to-palm-light',
  cancelled: 'bg-gradient-to-r from-coral-dark to-coral'
}
</script>
```

### CTA Section (`app/components/home/CTASection.vue`)
```vue
<template>
  <section class="relative py-24 bg-gradient-to-br from-ocean-deep via-ocean to-coral text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-5xl font-serif mb-6">Begin Your Tropical Escape</h2>
      <p class="text-xl mb-8">Book directly for best rates + welcome drink</p>
      
      <div class="flex gap-4 justify-center">
        <NuxtLink to="/booking" 
                  class="bg-sunset px-8 py-4 rounded-lg hover:bg-sunset-dark transform hover:scale-105 transition-all">
          🌊 Check Availability
        </NuxtLink>
        <NuxtLink to="/packages" 
                  class="bg-white/20 backdrop-blur px-8 py-4 rounded-lg hover:bg-white/30 border border-white/50">
          🌴 View Offers
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
```

---

## 🔧 SERVER ROUTE SNIPPETS

### Create Booking (`server/api/bookings/index.post.ts`)
```typescript
export default defineEventHandler(async (event) => {
  const user = event.context.auth?.user
  if (!user) throw createError({ statusCode: 401 })
  
  const body = await readBody(event)
  
  // Calculate price
  const nights = Math.ceil((new Date(body.checkOut) - new Date(body.checkIn)) / (1000*60*60*24))
  const total = nights * body.price * (user.isLocal ? 0.9 : 1)
  
  // Create booking with 'pending' status
  const [booking] = await sql`
    INSERT INTO bookings (user_id, package_id, check_in, check_out, guests, total_price, status)
    VALUES (${user.id}, ${body.packageId}, ${body.checkIn}, ${body.checkOut}, 
            ${body.guests}, ${total}, 'pending')
    RETURNING *
  `
  return booking
})
```

### Update Booking Status (Admin) (`server/api/admin/bookings/[id].put.ts`)
```typescript
export default defineEventHandler(async (event) => {
  const user = event.context.auth?.user
  if (!user || user.role !== 'admin') throw createError({ statusCode: 403 })
  
  const id = getRouterParam(event, 'id')
  const { status } = await readBody(event)
  
  const [booking] = await sql`
    UPDATE bookings SET status = ${status}, updated_at = NOW()
    WHERE id = ${id} RETURNING *
  `
  return booking
})
```

### Get User Bookings (`server/api/bookings/index.get.ts`)
```typescript
export default defineEventHandler(async (event) => {
  const user = event.context.auth?.user
  if (!user) throw createError({ statusCode: 401 })
  
  return await sql`
    SELECT * FROM bookings WHERE user_id = ${user.id} ORDER BY created_at DESC
  `
})
```

---

## 💾 DATABASE SCHEMA

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  is_local BOOLEAN DEFAULT false,
  role TEXT DEFAULT 'user'
);

-- Packages table
CREATE TABLE packages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  features JSONB,
  image_url TEXT
);

-- Bookings table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  package_id INTEGER REFERENCES packages(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests JSONB NOT NULL,
  total_price DECIMAL(10,2),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample packages
INSERT INTO packages (name, description, price, image_url) VALUES
('Ocean View Suite', 'Luxurious suite with ocean views', 299.99, '/images/ocean-suite.jpg'),
('Beach Villa', 'Private villa with beach access', 599.99, '/images/beach-villa.jpg');
```

---

## 📁 SHARED TYPES (`shared/types/booking.ts`)

```typescript
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export interface Guests {
  adults: number
  children: number
}

export interface Booking {
  id: number
  userId: number
  packageId: number
  checkIn: string
  checkOut: string
  guests: Guests
  totalPrice: number
  status: BookingStatus
  createdAt: string
}
```

---

## 🚀 QUICK START

```bash
# Install
npm install

# Setup database
createdb whisper_of_waters
psql -d whisper_of_waters -f database/schema.sql

# Environment variables (.env)
DATABASE_URL=postgresql://user:pass@localhost/whisper_of_waters
JWT_SECRET=your-secret-key

# Run dev
npm run dev

# Access
# Frontend: http://localhost:3000
# API: http://localhost:3000/api/packages
```

---

## 📝 ENVIRONMENT VARIABLES

```bash
# Required
DATABASE_URL=postgresql://user:pass@localhost:5432/whisper_of_waters
JWT_SECRET=your-secret-key-change-this
```

---

## 🔄 BOOKING STATUS FLOW

```
User creates booking → [PENDING] 
                           ↓
                    Admin confirms → [CONFIRMED] → Stay occurs → [COMPLETED]
                           ↓
                    Admin rejects  → [CANCELLED]
                    OR user cancels → [CANCELLED]
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Week 1: Setup
- [ ] Nuxt 4 project with app directory
- [ ] PostgreSQL database
- [ ] Tropical color scheme CSS

### Week 2: Server
- [ ] Packages API (GET)
- [ ] Auth API (login/register)
- [ ] Bookings API (POST, GET, DELETE)
- [ ] Admin API (PUT status)

### Week 3: UI Components
- [ ] Navbar with ocean gradient
- [ ] Hero carousel with beach images
- [ ] Services section with coral cards
- [ ] Status badges with tropical colors
- [ ] Booking form with price calculator
- [ ] User dashboard
- [ ] Admin panel

### Week 4: Integration
- [ ] Connect frontend to API
- [ ] Test booking flow
- [ ] Deploy to production

---

## 📊 API ENDPOINTS SUMMARY

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/packages` | List packages | Public |
| GET | `/api/packages/[id]` | Package details | Public |
| POST | `/api/auth/register` | Register | Public |
| POST | `/api/auth/login` | Login | Public |
| POST | `/api/bookings` | Create booking | User |
| GET | `/api/bookings` | User's bookings | User |
| DELETE | `/api/bookings/[id]` | Cancel booking | User |
| GET | `/api/admin/bookings` | All bookings | Admin |
| PUT | `/api/admin/bookings/[id]` | Update status | Admin |

---

## 🎨 TROPICAL DESIGN SUMMARY

| Element | Implementation |
|---------|----------------|
| **Colors** | Sand, ocean, coral, palm, sunset, shell |
| **Navbar** | Ocean gradient when transparent, white when scrolled |
| **Buttons** | Coral primary, ocean secondary |
| **Cards** | Shell white with sandy shadows |
| **Badges** | Colored by status (sunset, ocean, palm, coral) |
| **Gradients** | Beach, sunset, reef gradients |
| **Icons** | Palm trees, waves, shells |
| **Imagery** | Beach sunsets, ocean views, palm trees |

---

## 🎯 SUCCESS CRITERIA

### User Can:
- [ ] Browse homepage with tropical beach carousel
- [ ] View rooms and packages
- [ ] Register and login
- [ ] Make a booking (status = pending)
- [ ] See real-time price calculation
- [ ] View bookings in dashboard with color-coded status
- [ ] Cancel pending/confirmed bookings

### Admin Can:
- [ ] View all bookings in management table
- [ ] Update booking status (confirm, complete, cancel)

### Technical:
- [ ] All API endpoints tested
- [ ] TypeScript strict mode passes
- [ ] Mobile responsive with tropical theme
- [ ] Booking status flow works correctly
- [ ] No payment processing required