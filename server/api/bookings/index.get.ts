import { sql } from '../../utils/database'
import { ensureAuth } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  return await sql(
    `SELECT 
      b.id, 
      b.user_id as "userId", 
      b.package_id as "packageId", 
      b.room_id as "roomId",
      b.check_in as "checkIn", 
      b.check_out as "checkOut", 
      b.guests, 
      b.total_price as "totalPrice", 
      b.status, 
      b.created_at as "createdAt",
      COALESCE(p.name, r.name) as "itemName",
      COALESCE(p.image_url, r.image_url) as "itemImage"
     FROM bookings b 
     LEFT JOIN packages p ON b.package_id = p.id 
     LEFT JOIN rooms r ON b.room_id = r.id
     WHERE b.user_id = $1 
     ORDER BY b.created_at DESC`,
    [user.id]
  )
})
