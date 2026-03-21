import { sql } from '../../utils/database'
import { ensureAuth } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  const id = getRouterParam(event, 'id')

  // Check if booking belongs to user and is in a state that can be cancelled
  const [booking] = await sql('SELECT status FROM bookings WHERE id = $1 AND user_id = $2', [id, user.id])
  if (!booking) throw createError({ statusCode: 404, statusMessage: 'Booking not found' })

  if (['completed', 'cancelled'].includes(booking.status)) {
    throw createError({ statusCode: 400, statusMessage: 'Cannot cancel a completed or already cancelled booking' })
  }

  const [updated] = await sql(
    'UPDATE bookings SET status = \'cancelled\' WHERE id = $1 RETURNING *',
    [id]
  )

  return updated
})
