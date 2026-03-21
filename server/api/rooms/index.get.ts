import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  // We'll consider a "room" (package) booked if there is a confirmed booking
  // where today is between check_in and check_out.
  const today = new Date().toISOString().split('T')[0];
  
  const query = `
    SELECT 
      p.id, p.name, p.description, p.price, p.features, p.image_url as "imageUrl",
      EXISTS (
        SELECT 1 FROM bookings b 
        WHERE b.package_id = p.id 
        AND b.status = 'confirmed'
        AND b.check_in <= $1 
        AND b.check_out >= $1
      ) as is_booked
    FROM packages p
    ORDER BY p.price ASC
  `;
  
  return await sql(query, [today]);
})
