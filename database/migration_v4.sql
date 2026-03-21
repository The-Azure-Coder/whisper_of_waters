-- Migration V4: Admin User and Rooms Table
-- Purpose: Add default admin, create rooms table, and room CRUD support

-- 1. Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  features JSONB DEFAULT '[]',
  image_url TEXT,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'maintenance', 'reserved')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Insert sample rooms
INSERT INTO rooms (name, description, price, features, image_url) VALUES
('Coral Garden Room', 'Cozy room with direct access to our coral nursery.', 150.00, '["Garden View", "Queen Bed", "WiFi"]', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800'),
('Azure View Studio', 'Modern studio overlooking the azure waters.', 220.00, '["Ocean View", "King Bed", "Smart TV"]', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800')
ON CONFLICT DO NOTHING;

-- 3. Insert default admin
-- Email: admin@example.com
-- Password: admin123
INSERT INTO users (email, password_hash, first_name, last_name, role)
VALUES ('admin@example.com', '$2b$10$d3XZ9TvtJYjgrozpxt4i3.Sgzh02jx3kuTP9SFJe0BTyAHqrC93Ny', 'Island', 'Admin', 'admin')
ON CONFLICT (email) DO UPDATE SET role = 'admin';
