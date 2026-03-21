-- Migration V5: Add Room ID to Bookings
-- Purpose: Link bookings to the rooms table as well as the packages table

-- 1. Add room_id column
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS room_id INTEGER REFERENCES rooms(id);

-- 2. Update existing bookings if needed (not applicable here as we are just adding it)

-- 3. Update status column to be more descriptive if needed
-- Actually, the status is already there.

-- 4. Create index for performance
CREATE INDEX IF NOT EXISTS idx_bookings_room_id ON bookings(room_id);
