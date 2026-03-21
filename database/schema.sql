-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  is_local BOOLEAN DEFAULT false,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Packages table
CREATE TABLE IF NOT EXISTS packages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  features JSONB DEFAULT '[]',
  image_url TEXT
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  package_id INTEGER REFERENCES packages(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests JSONB NOT NULL,
  total_price DECIMAL(10,2),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample packages
INSERT INTO packages (name, description, price, features, image_url) VALUES
('Ocean View Suite', 'Luxurious suite with panoramic ocean views and private balcony.', 299.99, '["Free WiFi", "Ocean View", "King Bed", "Mini Bar"]', 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800'),
('Beach Villa', 'Private villa with direct beach access and a secluded garden.', 599.99, '["Private Pool", "Beach Access", "Kitchen", "Butler Service"]', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800'),
('Jungle Retreat', 'Eco-friendly bungalow tucked away in the lush tropical jungle.', 199.99, '["Mountain View", "Eco-friendly", "Outdoor Shower", "Hammock"]', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800'),
('Sunset Penthouse', 'Top-floor luxury with 360-degree views of the island and sea.', 899.99, '["Rooftop Bar", "Jacuzzi", "Floor-to-ceiling Windows", "Wine Cellar"]', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800')
ON CONFLICT DO NOTHING;
