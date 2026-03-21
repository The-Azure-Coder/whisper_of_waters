Here’s your **updated AI prompt**, with ONLY the admin dashboard requirements + the new **About page addition** included 👇

---

## 🚀 AI Improvement Prompt (Admin Dashboard + About Page)

You are tasked with implementing a **fully functional admin dashboard** and adding a new **About page** to an existing full-stack web application. The current dashboard route returns a **404 error**, and this must be fixed while introducing proper admin controls and a public informational page.

---

## ❗ 1. Fix Dashboard Route

* The route `/admin/dashboard` currently returns a 404
* Implement a working route and page
* Ensure routing works correctly on both frontend and backend

---

## 🔐 2. Admin Authentication & Access Control

* Introduce **admin-only access**
* Add a `role` field to users if it does not already exist:

  * `"admin"`
  * `"user"` (default)

### Requirements:

* Only users with `role = "admin"` can access `/admin/dashboard`
* Redirect non-admin users appropriately
* Protect all admin routes and endpoints

---

## 🧑‍💼 3. Admin Dashboard (Core Features)

Create a **centralized admin interface** to manage the system.

---

### 📅 Booking Management

* View all bookings
* Approve bookings
* Reject bookings
* Create bookings manually

Display:

* User info
* Room or package
* Start & end dates
* Status (`pending`, `approved`, `rejected`)

---

### 🏨 Room Management

* Add rooms
* Edit rooms
* Delete rooms
* View all rooms

---

### 📦 Package Management

* Add packages
* Edit packages
* Delete packages
* View all packages

---

### 🖼️ Image Management

* Upload and update images for:

  * Rooms
  * Packages
* Use ENV keys (to be provided) for image upload integration
* Ensure persistence and correct linking

---

## 🗄️ 4. Database Updates (If Needed)

Ensure support for:

* `role` field in users
* `status` field in bookings
* Image fields in rooms/packages

If missing:

* Create migrations with **up and down methods**

---

## 🧪 5. Admin Test Account

Create a default admin user:

* Email: `admin@example.com`
* Password: `admin123`

Requirements:

* Password must be hashed
* Admin can log in and access dashboard immediately

---

## 🖥️ 6. Admin UI Requirements

* Clean, professional interface
* Layout:

  * Sidebar or tab-based navigation

Sections:

* Bookings
* Rooms
* Packages

Features:

* Tables or cards for listings
* Action buttons:

  * Edit
  * Delete
  * Approve / Reject

---

## ℹ️ 7. About Page (NEW)

### Route

* Create a public route: `/about`

### Purpose

* Provide general information about the hotel website

### Content Suggestions:

* Brief description of the hotel/platform
* Services offered (rooms, packages, bookings)
* Mission or experience focus
* Optional:

  * Hero section with image
  * Contact or location info

### UI Requirements:

* Clean, modern design
* Consistent with rest of application styling
* Responsive layout
* Use proper spacing and typography

---

## ✅ Expected Outcome

* Working `/admin/dashboard` (no 404)
* Secure admin-only access
* Full admin functionality:

  * Manage bookings, rooms, packages
* Image upload system integrated via ENV
* Test admin account available
* New `/about` page live and accessible
* Clean and professional UI across admin and public pages

