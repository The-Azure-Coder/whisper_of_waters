```markdown
# 🤖 AI DEVELOPMENT GUIDELINES (Nuxt 4 - No Payments)

## 📋 AFTER EVERY GENERATION, YOU MUST PROVIDE:

```yaml
implementation_summary:
  files_created:
    - list each file path created/modified (app/ or server/ or shared/)
    - brief description of its purpose
  
  features_implemented:
    - list each feature completed
    - current status (working/partial/pending)
    - location in app (page/component/api)
  
  server_routes_added:
    - method + route + description (e.g., GET /api/packages)
    - file location (server/api/packages/index.get.ts)
    - tested: yes/no
    - request/response types defined
    - auth required: yes/no
    - role required: user/admin/none
  
  ui_components_added:
    - component name
    - location (app/components/)
    - functionality
    - props/emits defined with types
    - uses which composables
  
  database_changes:
    - new tables/columns
    - migrations if any
    - indexes added
    - sample data inserted

  shared_types_added:
    - type name
    - location (shared/types/)
    - used by (client/server/both)
    - fields defined

  scheduled_tasks_added:
    - task name
    - cron schedule
    - purpose
    - file location (server/tasks/)

  dependencies_added:
    - package name
    - version
    - purpose

  booking_status_flow:
    - statuses affected
    - transitions implemented
    - validation rules
```

---

## 🚦 APPLICATION MUST BE SERVEABLE AT ALL TIMES

### After every change, verify:
```bash
# Development server must start
npm run dev
# Visit http://localhost:3000 - Page must load without errors
# Visit http://localhost:3000/api/packages - API must respond

# Type checking must pass
npm run typecheck

# Build must work (if major feature complete)
npm run build

# Test booking flow manually:
# 1. Create booking as user
# 2. Check status in dashboard
# 3. Confirm as admin
# 4. Verify status updated
```

---

## 📖 README REQUIREMENTS

### README.md MUST include:
````markdown
# Whisper of Waters - Nuxt 4 (No Payments)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 15+

### Environment Setup
```bash
# Clone repository
git clone <repo>
cd whisper-of-waters

# Install dependencies
npm install

# Setup database
createdb whisper_of_waters
psql -d whisper_of_waters -f database/schema.sql

# Create .env file (see .env.example)
cp .env.example .env
# Edit .env with your values
```

### Development
```bash
# Start development server
npm run dev

# Run type checking
npm run typecheck

# Run tests
npm run test

# Run scheduled tasks manually
npm run task booking-reminder
```

### Environment Variables
```bash
# Required
DATABASE_URL=postgresql://user:pass@localhost:5432/whisper_of_waters
JWT_SECRET=your-secret-key-change-this

# Optional (for email notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Booking Status Flow
```
User creates booking → [PENDING] 
                           ↓
                    Admin confirms → [CONFIRMED] → Stay occurs → [COMPLETED]
                           ↓
                    Admin rejects  → [CANCELLED]
                    OR user cancels → [CANCELLED]
```

### Project Structure
```
app/           # Frontend (pages, components)
server/        # Backend (API, middleware, tasks)
shared/        # Shared types and utilities
public/        # Static assets
```

### API Documentation
- Base URL: `http://localhost:3000/api`
- Public endpoints: `/api/packages`, `/api/testimonials`
- User endpoints: `/api/bookings` (auth required)
- Admin endpoints: `/api/admin/*` (admin role required)

### Testing the Booking Flow
```bash
# 1. Register a user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@test.com","password":"password","name":"Test User"}'

# 2. Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@test.com","password":"password"}' \
  -c cookies.txt

# 3. Create booking
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"packageId":1,"checkIn":"2024-08-01","checkOut":"2024-08-05","guests":{"adults":2,"children":1}}'

# 4. View user bookings
curl http://localhost:3000/api/bookings -b cookies.txt
```
````

---

## 🧪 TESTING REQUIREMENTS (Booking Flow Specific)

### Before marking generation COMPLETE:

```typescript
// TypeScript checks
✅ No TypeScript errors (npm run typecheck)
✅ Shared types used correctly
✅ Booking status union type used ('pending'|'confirmed'|'completed'|'cancelled')
✅ Props/emits typed in components

// Server routes tests
✅ POST /api/bookings creates record with status='pending'
✅ GET /api/bookings returns only user's own bookings
✅ GET /api/admin/bookings returns all bookings (admin only)
✅ PUT /api/admin/bookings/[id] updates status correctly
✅ DELETE /api/bookings/[id] cancels pending/confirmed bookings
✅ Auth middleware blocks unauthenticated requests
✅ Admin middleware blocks non-admin users

// Status transition validation
✅ PENDING → CONFIRMED (admin only)
✅ PENDING → CANCELLED (admin or user)
✅ CONFIRMED → COMPLETED (admin only)
✅ CONFIRMED → CANCELLED (admin or user)
❌ COMPLETED → anything (blocked)
❌ CANCELLED → anything (blocked)

// UI component tests
✅ BookingForm shows price calculation
✅ BookingForm redirects to login if not authenticated
✅ Dashboard shows correct status badges with colors
✅ Admin table shows all bookings with action buttons
✅ Cancel button only shows for pending/confirmed
✅ Confirm button only shows for pending (admin)

// Database tests
✅ Bookings table has status column with check constraint
✅ Status values are limited to valid options
✅ user_id foreign key references users
✅ Indexes on status and user_id for performance
```

### API Testing Commands
```bash
# Test packages endpoint (public)
curl http://localhost:3000/api/packages

# Test booking creation (needs auth)
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"packageId":1,"checkIn":"2024-08-01","checkOut":"2024-08-05","guests":{"adults":2,"children":0}}'

# Test admin endpoint (needs admin cookie)
curl http://localhost:3000/api/admin/bookings -b admin-cookies.txt

# Test status update (admin)
curl -X PUT http://localhost:3000/api/admin/bookings/1 \
  -H "Content-Type: application/json" \
  -b admin-cookies.txt \
  -d '{"status":"confirmed"}'

# Test cancellation (user)
curl -X DELETE http://localhost:3000/api/bookings/1 -b cookies.txt
```

---

## 🚫 NO COMMIT OR PUSH TO BRANCHES

### NEVER execute:
```bash
git add .
git commit -m "message"
git push
```

### Instead:
- Keep all changes local
- Generate code only
- Provide implementation summary only

---

## ❌ NO HALLUCINATIONS RULE

### Do NOT generate:
- ❌ Fake payment-related code (Stripe, PayPal, etc.)
- ❌ Imaginary Nuxt 4 features that don't exist
- ❌ Made-up packages/libraries
- ❌ Files in wrong directories
- ❌ Components without proper Vue 3 syntax
- ❌ Types without proper imports
- ❌ Booking statuses outside ['pending','confirmed','completed','cancelled']

### Always verify:
- ✅ Nuxt 4 features exist (check migration guide)
- ✅ Package names exist on npm
- ✅ Import paths follow Nuxt 4 conventions
- ✅ Component names match actual files
- ✅ API routes follow Nitro conventions
- ✅ Booking status transitions are valid

### Nuxt 4 Specific Rules:
- ✅ Pages go in `app/pages/` NOT root `pages/`
- ✅ Components go in `app/components/`
- ✅ Composables go in `app/composables/`
- ✅ Server routes use `getRouterParam()` NOT `event.context.params`
- ✅ Use `defineNuxtComponent` for options API (if needed)
- ✅ Use `<script setup lang="ts">` for composition API

### Booking Status Rules:
- ✅ Only use: 'pending', 'confirmed', 'completed', 'cancelled'
- ✅ Never invent new statuses
- ✅ Validate status transitions in API
- ✅ Show correct UI based on status
- ✅ Prevent invalid operations per status

---

## ✅ COMPLETION CHECKLIST (Nuxt 4 - No Payments)

Before stating generation is complete:

```
📁 Structure
[ ] All files follow Nuxt 4 app directory structure
[ ] No payment-related files present
[ ] Shared types in shared/types/
[ ] Booking status type defined as union

📦 Dependencies
[ ] No payment packages (stripe, etc.) in package.json
[ ] All packages compatible with Nuxt 4
[ ] package.json updated correctly

🔧 Configuration
[ ] nuxt.config.ts has future: { compatibilityVersion: 4 }
[ ] TypeScript strict mode enabled
[ ] No payment-related env vars required
[ ] Route rules defined appropriately

🖥️ Server
[ ] All API routes use defineEventHandler
[ ] Booking POST sets status='pending'
[ ] Status update endpoints validate transitions
[ ] Auth middleware protects user bookings
[ ] Admin middleware protects admin routes
[ ] Database queries use parameterized SQL
[ ] Scheduled tasks in server/tasks/ (if needed)

🎨 Frontend
[ ] Pages use useFetch/useAsyncData correctly
[ ] Loading and error states implemented
[ ] Booking status badges with correct colors
[ ] Cancel button only for pending/confirmed
[ ] Admin actions only visible to admins
[ ] SEO meta tags added to pages

📚 Documentation
[ ] README updated with setup instructions
[ ] Booking flow documented
[ ] API endpoints listed with auth requirements
[ ] Testing commands provided

🧪 Testing
[ ] Type checking passes
[ ] Dev server starts
[ ] Build completes
[ ] All booking status transitions tested
[ ] Sample data works
[ ] Admin vs user permissions tested
```

---

## 📝 GENERATION FORMAT TEMPLATE

At the end of EVERY response:

````markdown
---
## ✅ IMPLEMENTATION SUMMARY (Nuxt 4 - No Payments)

### Files Created/Modified
- `server/api/bookings/index.post.ts` - POST /api/bookings endpoint
- `app/pages/dashboard/bookings.vue` - User bookings dashboard page
- `shared/types/booking.ts` - Booking type definitions
- `app/components/bookings/BookingCard.vue` - Reusable booking card component
- `server/middleware/auth.ts` - Auth middleware for protected routes

### Features Implemented
- [x] Create booking API with status='pending' (server/api/bookings/index.post.ts)
- [x] User dashboard to view bookings (app/pages/dashboard/bookings.vue)
- [x] BookingCard component with status badges (app/components/bookings/BookingCard.vue)
- [x] Cancel booking functionality (DELETE /api/bookings/[id])
- [x] Loading skeleton states
- [x] Error handling with user-friendly messages

### Server Routes Added
- `POST /api/bookings` - Create new booking (status=pending) - Auth required (tested ✅)
- `GET /api/bookings` - Get user's bookings - Auth required (tested ✅)
- `DELETE /api/bookings/[id]` - Cancel booking - Auth required (tested ✅)

### UI Components Added
- `BookingCard` - Displays booking details with status badge
- Location: `app/components/bookings/BookingCard.vue`
- Props: `booking: Booking` (typed)
- Emits: `cancelled` (when user cancels)

### Shared Types Added
- `Booking` interface in `shared/types/booking.ts`
- `BookingStatus` union type: 'pending'|'confirmed'|'completed'|'cancelled'
- Used by: server API and client components

### Database Changes
- Added `status` column to `bookings` table with CHECK constraint
- Added index: `idx_bookings_status` for performance
- Added index: `idx_bookings_user_id` for faster user queries

### Booking Status Flow Implemented
- [x] New bookings start as 'pending'
- [x] Users can cancel 'pending' bookings
- [x] Users CANNOT cancel 'confirmed' (will add later)
- [x] Status validation in API

### How to Test
```bash
# 1. Start dev server
npm run dev

# 2. Login/register first
# Visit http://localhost:3000/register

# 3. Create a booking
# Visit any package page and use booking form

# 4. View your bookings
# Visit http://localhost:3000/dashboard/bookings

# 5. Test cancellation
# Click cancel on a pending booking

# 6. Run type check
npm run typecheck
```

### Verification
✅ TypeScript passes
✅ API returns expected data
✅ Booking status defaults to 'pending'
✅ Dashboard renders correctly
✅ Cancel button works
✅ Mobile responsive
✅ Build succeeds
---
````

---

## 🚨 NUXT 4 SPECIFIC VIOLATIONS TO AVOID

```
⛔ Placing pages in root/pages/ (should be app/pages/)
⛔ Using event.context.params (use getRouterParam())
⛔ Missing loading states in useFetch
⛔ Not handling API errors
⛔ Using any type instead of shared types
⛔ Forgetting to set future: { compatibilityVersion: 4 }
⛔ Manual importing of auto-imported composables
⛔ Not using <script setup> for components
⛔ Missing error boundaries
```

### Booking Status Violations to Avoid

```
⛔ Creating bookings with status other than 'pending'
⛔ Allowing users to confirm their own bookings
⛔ Allowing status changes without validation
⛔ Using string literals instead of union type
⛔ Forgetting to check permissions before status update
⛔ Allowing updates to completed/cancelled bookings
⛔ Not showing status in UI
⛔ Using wrong badge colors for status
```

---

## 🎯 SUMMARY

### Every generation MUST:
1. **Follow Nuxt 4 structure** - app/ directory, server/ routes
2. **Be serveable** - `npm run dev` works
3. **Be type-safe** - strict TypeScript passes
4. **Be tested** - endpoints verified with curl
5. **Be documented** - README updated
6. **Be complete** - all requested features done
7. **Be honest** - no hallucinations
8. **Handle booking status correctly** - pending → confirmed/completed/cancelled flow
9. **Respect permissions** - users vs admin actions
10. **Have no payment code** - no Stripe or payment processing

### And MUST NOT:
- Commit or push code
- Use deprecated Nuxt 3 patterns
- Leave app in broken state
- Generate untested code
- Omit implementation summary
- Forget auto-imports
- Include payment processing code
- Allow invalid status transitions
- Mix up user and admin permissions
```