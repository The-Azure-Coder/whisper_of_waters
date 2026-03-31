# Blue Haven Hotel - Nuxt 4 (No Payments)

A premium coastal hotel booking platform built with Nuxt 4, featuring a manual booking confirmation flow and a vibrant "Blue Haven" coastal aesthetic.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 15+

### Environment Setup
1. **Clone the repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Setup Database**:
   Create a database named `blue_haven_hotel` and run the schema:
   ```bash
   psql -d blue_haven_hotel -f database/schema.sql
   ```
4. **Environment Variables**:
   Create a `.env` file in the root:
   ```bash
   DATABASE_URL=postgresql://user:pass@localhost:5432/blue_haven_hotel
   JWT_SECRET=your-secret-key-change-this
   ```

### Development
```bash
# Start development server
npm run dev

# Run type checking
npm run typecheck
```

## 🔄 Booking Status Flow
```
User creates booking → [PENDING] (⏳)
                           ↓
                    Admin confirms → [CONFIRMED] (⚓) → Stay occurs → [COMPLETED] (🌴)
                           ↓
                    Admin rejects  → [CANCELLED] (🌅)
                    OR user cancels → [CANCELLED] (🌅)
```

## 📁 Project Structure
```
app/           # Frontend (pages, components, layouts, composables)
server/        # Backend (API routes, middleware, utils)
shared/        # Shared types and constants
public/        # Static assets
database/      # SQL schema and seed data
```

## 📊 API Documentation
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/packages` | Public | List all packages |
| POST | `/api/auth/register`| Public | Register new account |
| POST | `/api/auth/login` | Public | Login and get cookie |
| POST | `/api/bookings` | User | Create a pending booking |
| GET | `/api/bookings` | User | List my bookings |
| DELETE| `/api/bookings/:id`| User | Cancel a booking |
| GET | `/api/admin/bookings`| Admin | List all bookings |
| PUT | `/api/admin/bookings/:id`| Admin | Update booking status |

---
*Note: No real payments are processed. This is a prototype for booking management.*
