import { sql } from '../../utils/database'
import { ensureAuth } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  return await sql(
    `SELECT 
      b.id, 
      b.user_id as "userId", 
      b.package_id as "packageId", 
      b.check_in as "checkIn", 
      b.check_out as "checkOut", 
      b.guests, 
      b.total_price as "totalPrice", 
      b.status, 
      b.created_at as "createdAt",
      p.name as "package_name"
     FROM bookings b 
     JOIN packages p ON b.package_id = p.id 
     WHERE b.user_id = $1 
     ORDER BY b.created_at DESC`,
    [user.id]
  )
})
