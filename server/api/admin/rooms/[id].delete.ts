import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const id = getRouterParam(event, 'id')

  const [room] = await sql(
    'DELETE FROM rooms WHERE id = $1 RETURNING id',
    [id]
  )

  if (!room) {
    throw createError({ statusCode: 404, statusMessage: 'Room not found' })
  }

  return { success: true }
})
