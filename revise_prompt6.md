Here’s your **standalone AI improvement prompt** focused ONLY on fixing the dynamic room listing 👇

---

## 🚀 AI Improvement Prompt (Dynamic Room Listing from Database)

You are tasked with fixing the **room listing on the user-facing website**. Currently, the rooms displayed are **static/hardcoded**, which is incorrect. This must be replaced with **dynamic data fetched from the database**.

---

## ❗ Core Problem

* Rooms shown on the frontend are **static**
* Rooms created via the **admin dashboard are not reflected**
* This creates a disconnect between backend data and UI

---

## 🎯 Objective

* Remove all static room data
* Fetch and display **real room data from the database**
* Ensure rooms created in the dashboard appear on the frontend automatically

---

## 🗄️ 1. Backend Requirements

### Create / Verify API Endpoint

* Ensure there is an endpoint such as:

  * `GET /rooms`

### Behavior:

* Fetch all rooms from the database
* Return structured JSON including:

  * `id`
  * `name`
  * `description`
  * `price`
  * `image_url`
  * `availability` (if applicable)

---

## 🌐 2. Frontend Integration

### Replace Static Data

* Remove any hardcoded room arrays or mock data

### Fetch Data from API

* On page load:

  * Call `GET /rooms`
  * Store response in state

### Render Dynamically

* Loop through fetched data and display:

  * Room image
  * Name
  * Description
  * Price

---

## 🔄 3. Real-Time Consistency

* Ensure:

  * When admin adds a new room → it appears on frontend
  * When admin edits a room → changes reflect immediately
  * When a room is deleted → it disappears from frontend

---

## 🖼️ 4. Image Handling

* Use `image_url` from database
* Ensure:

  * Images render correctly
  * Fallback image is used if missing or broken

---

## ⚠️ 5. Error Handling

* Handle:

  * API request failures
  * Empty room list
* Display:

  * Loading state
  * “No rooms available” message if needed

---

## 🧪 6. Testing

* Add a room from dashboard → confirm it appears on frontend
* Edit a room → confirm update reflects
* Delete a room → confirm removal

---

## ✅ Expected Outcome

* No static room data anywhere in the frontend
* Rooms fully driven by database
* Admin dashboard and frontend are synchronized
* Dynamic, accurate, and up-to-date room listings

---

If you want next, I can:

* Write the **API endpoint (FastAPI / Node)**
* Refactor your **frontend component**
* Or debug why your current fetch isn’t working

Just tell me 👍
