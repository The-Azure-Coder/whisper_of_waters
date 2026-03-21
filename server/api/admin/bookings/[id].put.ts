import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const id = getRouterParam(event, 'id')
  const { status } = await readBody(event)

  const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled']
  if (!validStatuses.includes(status)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid status' })
  }

  const [booking] = await sql(
    'UPDATE bookings SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  )

  if (!booking) {
    throw createError({ statusCode: 404, statusMessage: 'Booking not found' })
  }

  return booking
})
