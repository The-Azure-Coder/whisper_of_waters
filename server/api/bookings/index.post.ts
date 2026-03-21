import { sql } from '../../utils/database'
import { ensureAuth } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  const body = await readBody(event)

  const { packageId, checkIn, checkOut, guests } = body

  if (!packageId || !checkIn || !checkOut || !guests) {
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

  const [pkg] = await sql('SELECT price FROM packages WHERE id = $1', [packageId])
  if (!pkg) throw createError({ statusCode: 404, statusMessage: 'Package not found' })

  const total = nights * pkg.price

  const [booking] = await sql(
    `INSERT INTO bookings (user_id, package_id, check_in, check_out, guests, total_price, status)
     VALUES ($1, $2, $3, $4, $5, $6, 'pending')
     RETURNING id, user_id as "userId", package_id as "packageId", check_in as "checkIn", check_out as "checkOut", guests, total_price as "totalPrice", status, created_at as "createdAt"`,
    [user.id, packageId, checkIn, checkOut, JSON.stringify(guests), total]
  )

  return booking
})
