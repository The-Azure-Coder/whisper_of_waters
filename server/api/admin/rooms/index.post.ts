import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const { name, description, price, features, imageUrl, status } = await readBody(event)

  const [room] = await sql(
    `INSERT INTO rooms (name, description, price, features, image_url, status)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, description, price, features, image_url as "imageUrl", status, created_at as "createdAt"`,
    [name, description, price, JSON.stringify(features || []), imageUrl, status || 'available']
  )

  return room
})
