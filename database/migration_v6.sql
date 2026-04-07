-- Migration V6: Package to Room Relationship and Unique Constraints
-- Purpose: Link packages to rooms and add unique constraints to prevent duplicates

-- 1. Add unique constraint to rooms and packages name
ALTER TABLE rooms ADD CONSTRAINT unique_room_name UNIQUE (name);
ALTER TABLE packages ADD CONSTRAINT unique_package_name UNIQUE (name);

-- 2. Add room_id to packages
ALTER TABLE packages ADD COLUMN IF NOT EXISTS room_id INTEGER REFERENCES rooms(id);

-- 3. Create index for performance
CREATE INDEX IF NOT EXISTS idx_packages_room_id ON packages(room_id);
