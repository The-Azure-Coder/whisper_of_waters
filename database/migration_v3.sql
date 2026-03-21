-- Migration V3: Unique Images and Extra Package Info
-- Purpose: Update images for packages and add extra metadata

UPDATE packages 
SET image_url = 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800' 
WHERE name = 'Ocean View Suite';

UPDATE packages 
SET image_url = 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800' 
WHERE name = 'Beach Villa';

UPDATE packages 
SET image_url = 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800' 
WHERE name = 'Jungle Retreat';

UPDATE packages 
SET image_url = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
WHERE name = 'Sunset Penthouse';

-- Ensure we have some variety if more are added
-- Or just manually add more sample data if needed.
