import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const id = getRouterParam(event, 'id')
  const { name, description, price, features, imageUrl } = await readBody(event)

  const [pkg] = await sql(
    `UPDATE packages 
     SET name = $1, description = $2, price = $3, features = $4, image_url = $5
     WHERE id = $6
     RETURNING id, name, description, price, features, image_url as "imageUrl"`,
    [name, description, price, JSON.stringify(features || []), imageUrl, id]
  )

  if (!pkg) {
    throw createError({ statusCode: 404, statusMessage: 'Package not found' })
  }

  return pkg
})
