import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const id = getRouterParam(event, 'id')

  const [pkg] = await sql(
    'DELETE FROM packages WHERE id = $1 RETURNING id',
    [id]
  )

  if (!pkg) {
    throw createError({ statusCode: 404, statusMessage: 'Package not found' })
  }

  return { success: true }
})
