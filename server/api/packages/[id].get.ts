import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const [pkg] = await sql('SELECT id, name, description, price, features, image_url as "imageUrl", room_id as "roomId" FROM packages WHERE id = $1', [id])

  if (!pkg) {
    throw createError({ statusCode: 404, statusMessage: 'Package not found' })
  }

  return pkg
})
