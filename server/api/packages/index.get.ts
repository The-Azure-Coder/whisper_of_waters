import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  return await sql('SELECT id, name, description, price, features, image_url as "imageUrl", room_id as "roomId" FROM packages ORDER BY price ASC')
})
