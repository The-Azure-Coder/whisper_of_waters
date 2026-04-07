# 🗄️ Database Seeder: Rooms & Packages (Blue Haven Hotel)

---

## 🎯 Scope

This update introduces:

- Structured ingestion of uploaded hotel data (rooms + packages)
- Automatic creation of a **database seeder**
- Clean, normalized data structure for:
  - Room types
  - Pricing
  - Packages
  - Features

---

# 📥 DATA SOURCE (UPLOADED DOCUMENT)

## Instruction

- A document will be provided containing:
  - Room types
  - Package offerings
  - Pricing details
  - Descriptions
  - Features / amenities

---

## Parsing Requirements

- Extract and normalize:
  - Room names
  - Package names
  - Prices
  - Descriptions
  - Included features

---

## Data Integrity

- Ensure:
  - No duplicates
  - Clean formatting
  - Consistent naming

---

# 🏨 ROOM DATA STRUCTURE

## Required Fields

Each room must include:

- Name
- Description
- Price (per night)
- Capacity (if available)
- Amenities (array/list)
- Image reference (from assets if applicable)

---

## Behavior

- Rooms must:
  - Be uniquely identifiable
  - Be easily queryable
  - Support filtering (price, type, amenities)

---

# 📦 PACKAGE DATA STRUCTURE

## Required Fields

Each package must include:

- Name
- Description
- Price
- Duration (if applicable)
- Included services
- مرتبط room type (if linked to a room)

---

## Behavior

- Packages may:
  - Bundle services (installation, premium service, etc.)
  - Include perks (priority queue, faster service, etc.)

---

# 🌱 SEEDER GENERATION

## Requirement

- Create a **database seeder** that:

  - Inserts all parsed rooms
  - Inserts all parsed packages
  - Maintains relationships (if applicable)

---

## Seeder Behavior

- Must be:
  - Idempotent (safe to run multiple times)
  - Cleanly structured
  - Easy to extend

---

## Execution

- Seeder should:
  - Populate database on initialization
  - Be callable manually for testing

---

# 🔗 RELATIONSHIPS

## Optional Linking

- If packages relate to rooms:
  - Establish relationships (e.g., foreign keys)

---

## Example

- Deluxe Package → Deluxe Room
- Premium Package → Suite

---

# 🖼️ ASSET INTEGRATION

## Rule

- Use images from assets folder where applicable

---

## Behavior

- Match:
  - Room → Room image
  - Package → Relevant visual

- Asset names are semantic → use accordingly

---

# 🧪 TESTING REQUIREMENTS

## Data Validation

- [ ] All rooms are inserted correctly
- [ ] All packages are inserted correctly
- [ ] Prices are accurate
- [ ] No duplicate entries

---

## Relationships

- [ ] Packages correctly linked (if applicable)
- [ ] Queries return expected results

---

## Seeder Execution

- [ ] Seeder runs without errors
- [ ] Can be run multiple times safely
- [ ] Data remains consistent

---

# ⚠️ FINAL INSTRUCTION

- Do NOT hardcode unclear or ambiguous values
- Ensure all data comes directly from the uploaded document
- Maintain clean structure and scalability