-- Migration V2: Update User Schema
-- Purpose: Add first_name and last_name, remove name, and add created_at

-- 1. Add new columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_name TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW();

-- 2. Migrate data (try to split name if it exists)
UPDATE users 
SET 
  first_name = split_part(name, ' ', 1),
  last_name = CASE 
                WHEN position(' ' in name) > 0 THEN substring(name from position(' ' in name) + 1)
                ELSE ''
              END
WHERE first_name IS NULL;

-- 3. Apply constraints
ALTER TABLE users ALTER COLUMN first_name SET NOT NULL;
ALTER TABLE users ALTER COLUMN last_name SET NOT NULL;

-- 4. Remove deprecated column
ALTER TABLE users DROP COLUMN IF EXISTS name;

-- Down Migration (Rollback)
/*
ALTER TABLE users ADD COLUMN name TEXT;
UPDATE users SET name = first_name || ' ' || last_name;
ALTER TABLE users DROP COLUMN first_name;
ALTER TABLE users DROP COLUMN last_name;
ALTER TABLE users DROP COLUMN created_at;
*/
