Got it — here is your **standalone AI improvement prompt** for ONLY this new feature 👇

---

## 🚀 AI Improvement Prompt (Flexible Image Upload System with Cloudinary)

You are tasked with improving the **image handling system in the admin portal** of an existing web application. The goal is to allow administrators to **either upload an image file or provide an image URL**, with Cloudinary integration for file uploads.

---

## 🖼️ Core Requirement

The admin should be able to choose between two methods when adding or updating images:

---

### ✅ Option 1: Upload Local Image (Cloudinary)

* Provide a **file upload input**
* When a file is selected:

  * Upload the image to **Cloudinary** using provided ENV keys
  * Retrieve the hosted image URL from Cloudinary
  * Store this URL in the database
* Ensure:

  * Upload is handled asynchronously
  * Proper error handling is implemented
  * Success response returns the image URL

---

### ✅ Option 2: Use Image URL

* Provide a **text input field** for an image URL
* Validate:

  * Must be a valid URL
  * Should point to an image (basic validation)
* Save the URL directly to the database

---

## 🔀 UI/UX Requirements

* Provide a **clear toggle or selection control**:

  * “Upload Image”
  * “Use Image URL”

* Behavior:

  * Only one input method is active at a time
  * Switching methods clears the other input

---

## 👁️ Image Preview

* Show a **live preview** of the image before saving:

  * For file uploads → preview selected file
  * For URL input → preview entered URL
* If preview fails:

  * Show fallback or error message

---

## ⚙️ Backend Requirements

* Create endpoint(s) to:

  * Handle file upload to Cloudinary
  * Return uploaded image URL
* Ensure secure handling of ENV keys
* Validate inputs before saving

---

## 💾 Data Handling

* Store only the **final image URL** in the database
* Ensure consistency across:

  * Rooms
  * Packages
  * Any other image-based entities

---

## ⚠️ Error Handling

* Handle:

  * Invalid file types
  * Upload failures
  * Invalid URLs
* Provide clear feedback to the admin user

---

## ✅ Expected Outcome

* Admin can choose between:

  * Uploading a file → stored via Cloudinary
  * Pasting an image URL → stored directly
* Image preview works for both methods
* Only valid images are accepted
* Final stored value is always a usable image URL
* System is clean, intuitive, and production-ready

