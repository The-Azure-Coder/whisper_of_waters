import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const id = getRouterParam(event, 'id')
  const { name, description, price, features, imageUrl, status } = await readBody(event)

  const [room] = await sql(
    `UPDATE rooms 
     SET name = $1, description = $2, price = $3, features = $4, image_url = $5, status = $6
     WHERE id = $7
     RETURNING id, name, description, price, features, image_url as "imageUrl", status, created_at as "createdAt"`,
    [name, description, price, JSON.stringify(features || []), imageUrl, status, id]
  )

  if (!room) {
    throw createError({ statusCode: 404, statusMessage: 'Room not found' })
  }

  return room
})
