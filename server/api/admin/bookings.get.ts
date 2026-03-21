import { sql } from '../../utils/database'
import { ensureAdmin } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
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
      u.email as "user_email", 
      (u.first_name || ' ' || u.last_name) as "user_name" 
     FROM bookings b 
     LEFT JOIN packages p ON b.package_id = p.id 
     LEFT JOIN rooms r ON b.room_id = r.id
     JOIN users u ON b.user_id = u.id 
     ORDER BY b.created_at DESC`
  )
})
