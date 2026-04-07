import pg from 'pg';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env file for database connection
const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(
  envFile.split('\n')
    .filter(line => line && !line.startsWith('#'))
    .map(line => line.split('=').map(part => part.trim()))
);

const databaseUrl = env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL not found in .env');
  process.exit(1);
}

const pool = new pg.Pool({ 
  connectionString: databaseUrl,
  ssl: databaseUrl.includes('localhost') ? false : { rejectUnauthorized: false }
});

const commonFeatures = [
  "Complimentary Snacks",
  "Complimentary Drinks",
  "Pool Access",
  "Buffet Access"
];

const roomsData = [
  {
    name: "Standard Twin Bedroom",
    description: "Cozy twin bedroom, perfect for friends or solo travelers. Features twin beds and a comfortable working space.",
    price: 200.00,
    features: ["Twin Beds", "En-suite Bathroom", "Air Conditioning", "WiFi"],
    image_url: "/images/room2.jpeg"
  },
  {
    name: "Standard Room",
    description: "Comfortable standard room with modern amenities, ideal for business travelers or couples.",
    price: 250.00,
    features: ["King Bed", "Work Desk", "WiFi", "Air Conditioning"],
    image_url: "/images/room3.jpeg"
  },
  {
    name: "Deluxe Suite",
    description: "Luxurious suite with a spa-inspired ensuite and a private balcony with stunning views.",
    price: 400.00,
    features: ["King Bed", "Spa-inspired ensuite", "Private Balcony", "Ocean View", "Mini Bar"],
    image_url: "/images/room4.jpeg"
  },
  {
    name: "Family Room",
    description: "Spacious room setup designed for families with children, featuring extra beds and child-friendly amenities.",
    price: 450.00,
    features: ["2 Queen Beds", "Crib Included", "Kids' Area Access", "Family-friendly Amenities"],
    image_url: "/images/kids_room1.jpeg"
  }
];

const packagesData = [
  {
    name: "Standard Package",
    description: "Stay per night with a twin bedroom and all-inclusive snacks and drinks.",
    price: 200.00,
    features: ["Twin Bedroom", ...commonFeatures],
    image_url: "/images/room2.jpeg",
    room_name: "Standard Twin Bedroom"
  },
  {
    name: "Business Package",
    description: "Standard stay plus high-speed Wi-Fi, 2 hours of private conference room use, and full hotel access.",
    price: 500.00,
    features: ["Standard Stay", "High-speed Wi-Fi", "2 hours private conference room", "Full hotel access", ...commonFeatures],
    image_url: "/images/room3.jpeg",
    room_name: "Standard Room"
  },
  {
    name: "Suites Package",
    description: "Stay in a top-tier suite with a spa-inspired ensuite and a special balcony dinner.",
    price: 400.00,
    features: ["Top-tier Suite", "Spa-inspired ensuite", "Balcony Dinner", ...commonFeatures],
    image_url: "/images/room4.jpeg",
    room_name: "Deluxe Suite"
  },
  {
    name: "Family Package",
    description: "A larger room setup with 'Kids Stay & Eat Free' (ages 0-6), plus daily entry to the Kids' Club and water feature area.",
    price: 450.00,
    features: ["Larger Room", "Kids Stay & Eat Free (0-6)", "Kids' Club Entry", "Water Feature Area", "Crib Included", ...commonFeatures],
    image_url: "/images/kids_room1.jpeg",
    room_name: "Family Room"
  },
  {
    name: "Premium Package",
    description: "All-inclusive gourmet dining, a 50-minute spa treatment, private airport transfers, and a private escort for local tours.",
    price: 750.00,
    features: ["All-inclusive gourmet dining", "50-minute spa treatment", "Private airport transfers", "Private escort for local tours", ...commonFeatures],
    image_url: "/images/hotel_image.jpeg",
    room_name: "Deluxe Suite"
  },
  {
    name: "Day Pass",
    description: "Full access to the pool, beach, and lunch from 9:00 AM to 6:00 PM. No overnight stay.",
    price: 160.00,
    features: ["Pool Access", "Beach Access", "Lunch (9AM-6PM)", "No overnight stay"],
    image_url: "/images/room7.jpeg",
    room_name: null
  }
];

async function seed() {
  const client = await pool.connect();
  try {
    console.log('Starting database seeding...');

    // Run Migration V6 just in case it wasn't run
    const migrationPath = path.join(__dirname, '../database/migration_v6.sql');
    if (fs.existsSync(migrationPath)) {
      console.log('Ensuring Migration V6 is applied...');
      // To handle unique constraints properly, let's just do it manually here if needed
      // Actually, let's just delete duplicates first
      await client.query('DELETE FROM packages WHERE id NOT IN (SELECT MIN(id) FROM packages GROUP BY name)');
      await client.query('DELETE FROM rooms WHERE id NOT IN (SELECT MIN(id) FROM rooms GROUP BY name)');
      
      const migrationSql = fs.readFileSync(migrationPath, 'utf8');
      try {
        await client.query(migrationSql);
      } catch (err) {
        console.log('Migration V6 might already be applied or had an issue:', err.message);
      }
    }

    // Clear old sample data if needed, or rely on ON CONFLICT
    // For a cleaner seeder, let's just use ON CONFLICT DO UPDATE

    console.log('Seeding rooms...');
    const roomNameToId = {};
    for (const room of roomsData) {
      const res = await client.query(`
        INSERT INTO rooms (name, description, price, features, image_url)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (name) DO UPDATE SET
          description = EXCLUDED.description,
          price = EXCLUDED.price,
          features = EXCLUDED.features,
          image_url = EXCLUDED.image_url
        RETURNING id
      `, [room.name, room.description, room.price, JSON.stringify(room.features), room.image_url]);
      
      roomNameToId[room.name] = res.rows[0].id;
    }

    console.log('Seeding packages...');
    for (const pkg of packagesData) {
      const roomId = pkg.room_name ? roomNameToId[pkg.room_name] : null;
      await client.query(`
        INSERT INTO packages (name, description, price, features, image_url, room_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (name) DO UPDATE SET
          description = EXCLUDED.description,
          price = EXCLUDED.price,
          features = EXCLUDED.features,
          image_url = EXCLUDED.image_url,
          room_id = EXCLUDED.room_id
      `, [pkg.name, pkg.description, pkg.price, JSON.stringify(pkg.features), pkg.image_url, roomId]);
    }

    console.log('Database seeding completed successfully!');
  } catch (err) {
    console.error('Error seeding database:', err.message);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
