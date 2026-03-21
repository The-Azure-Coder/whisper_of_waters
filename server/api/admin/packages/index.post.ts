import { sql } from '../../../utils/database'
import { ensureAdmin } from '../../../utils/auth-guards'

export default defineEventHandler(async (event) => {
  ensureAdmin(event)
  const { name, description, price, features, imageUrl } = await readBody(event)

  const [pkg] = await sql(
    `INSERT INTO packages (name, description, price, features, image_url)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, description, price, features, image_url as "imageUrl"`,
    [name, description, price, JSON.stringify(features || []), imageUrl]
  )

  return pkg
})
