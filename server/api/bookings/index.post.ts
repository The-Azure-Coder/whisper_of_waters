import { sql } from '../../utils/database'
import { ensureAuth } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  const body = await readBody(event)

  const { packageId, roomId, checkIn, checkOut, guests } = body

  if ((!packageId && !roomId) || !checkIn || !checkOut || !guests) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required booking information' })
  }

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid date format provided' })
  }

  // Calculate price
  const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
  if (nights <= 0) throw createError({ statusCode: 400, statusMessage: 'Check-out must be after check-in' })

  let price = 0
  let finalRoomId = roomId || null

  if (packageId) {
    const [pkg] = await sql('SELECT price, room_id as "roomId" FROM packages WHERE id = $1', [packageId])
    if (!pkg) throw createError({ statusCode: 404, statusMessage: 'Package not found' })
    price = pkg.price
    if (!finalRoomId && pkg.roomId) {
      finalRoomId = pkg.roomId
    }
  } else if (roomId) {
    const [room] = await sql('SELECT price FROM rooms WHERE id = $1', [roomId])
    if (!room) throw createError({ statusCode: 404, statusMessage: 'Room not found' })
    price = room.price
  }

  const total = nights * price

  const [booking] = await sql(
    `INSERT INTO bookings (user_id, package_id, room_id, check_in, check_out, guests, total_price, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
     RETURNING id, user_id as "userId", package_id as "packageId", room_id as "roomId", check_in as "checkIn", check_out as "checkOut", guests, total_price as "totalPrice", status, created_at as "createdAt"`,
    [user.id, packageId || null, finalRoomId, checkIn, checkOut, JSON.stringify(guests), total]
  )

  return booking
})
