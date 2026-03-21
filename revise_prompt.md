Here’s your **updated improvement prompt** with schema + migration handling added 👇

---

## 🚀 AI Improvement Prompt (Enhanced with Schema & Migration Updates)

You are tasked with improving an existing full-stack web application (UI + UX + validation + database consistency). Carefully analyze the current implementation and apply the following upgrades:

---

## 🎨 1. UI/UX Enhancements

### Login Form Redesign

* Redesign the login form using a **modern glassmorphism style**:

  * Semi-transparent background (`rgba`)
  * `backdrop-filter: blur(...)`
  * Soft shadows and subtle borders
  * Rounded corners (≥ 12px)
  * Clean, minimal inputs with focus effects
* Fully responsive and centered layout

---

## 🔐 2. Authentication Flow Update

### Registration Form

Update the registration form to include ONLY:

* First Name
* Last Name
* Email
* Password
* Confirm Password

Validation rules:

* All fields required
* Email must be valid format
* Password must match confirm password
* Display clear inline error messages

---

### Login Form

* Fields:

  * Email
  * Password
* Validate against stored user credentials
* Show proper error messages for invalid login attempts

---

## 🗄️ 3. Database Schema Update (IMPORTANT)

Update the user schema to reflect the new registration fields.

### Required Schema Changes

* Remove unused fields (e.g., username if present)
* Ensure the following fields exist:

  * `first_name` (string, required)
  * `last_name` (string, required)
  * `email` (string, unique, required)
  * `password_hash` (string, required)
  * `created_at` (timestamp, default current time)

---

## 🔁 4. Migration Handling

Perform proper database migration steps:

### Steps:

1. **Generate a new migration file** reflecting schema changes

2. In the migration:

   * Add new columns (`first_name`, `last_name`)
   * Remove deprecated columns (e.g., `username`)
   * Apply constraints (unique email, not null)

3. **Down Migration (Rollback)**

   * Revert schema back to previous state:

     * Re-add removed columns if necessary
     * Drop newly added columns

4. **Apply Migration**

   * Run all migrations to update the database

5. If needed:

   * Reset database and re-run migrations cleanly

---

## 📦 5. Package UI Fixes

* Fix spacing where **tags are too close to buttons**

  * Add `margin-bottom` or padding
  * Ensure consistent spacing across cards

---

## 🖼️ 6. Image Handling Fixes

* Fix **2 broken images in the gallery**

  * Replace with valid images
  * Add fallback image handling (`onError`)

* Ensure:

  * Each package has a **unique image**
  * No duplicated visuals

---

## 📅 7. Booking System Bug Fix

* Fix **“invalid date type” error**

  * Ensure frontend sends valid date format (`YYYY-MM-DD`)
  * Validate before submission
  * Ensure backend parses correctly
  * Confirm DB column type supports date/datetime

---

## 🧪 8. General Improvements

* Improve spacing, alignment, and typography consistency
* Add proper form validation across all inputs
* Ensure accessibility (labels, focus states)
* Test full flow:

  * Register → Login → Browse → Book

---

## ✅ Expected Outcome

* Updated database schema aligned with UI
* Proper migrations with rollback support
* Clean authentication system
* Fixed UI/UX issues
* Working booking system with valid date handling
* No broken images or layout issues

---

If you want next step, I can:

* Generate the **actual migration file (Yii / SQL / Alembic / Prisma)**
* Or refactor your **auth backend + models directly**

Just tell me what stack you're using 👍
