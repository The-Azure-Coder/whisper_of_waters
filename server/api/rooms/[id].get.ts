import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const today = new Date().toISOString().split('T')[0];

  const [room] = await sql(`
    SELECT 
      r.id, r.name, r.description, r.price, r.features, r.image_url as "imageUrl", r.status,
      EXISTS (
        SELECT 1 FROM bookings b 
        WHERE b.room_id = r.id 
        AND b.status = 'confirmed'
        AND b.check_in <= $2 
        AND b.check_out >= $2
      ) as "isBooked"
    FROM rooms r
    WHERE r.id = $1
  `, [id, today])

  if (!room) {
    throw createError({ statusCode: 404, statusMessage: 'Room not found' })
  }

  return room
})
