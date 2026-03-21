import { sql } from '../../utils/database'
import { ensureAdmin } from '../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  return await sql(
    `SELECT id, name, description, price, features, image_url as "imageUrl", status, created_at as "createdAt"
     FROM rooms 
     ORDER BY created_at DESC`
  )
})
