import bcrypt from 'bcryptjs'
import { signToken } from '../../utils/jwt'
import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  const { email, password, firstName, lastName } = await readBody(event)

  if (!email || !password || !firstName || !lastName) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required' })
  }

  const passwordHash = await bcrypt.hash(password, 10)

  try {
    const [user] = await sql(
      'INSERT INTO users (email, password_hash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id, email, first_name as "firstName", last_name as "lastName", role, created_at as "createdAt"',
      [email, passwordHash, firstName, lastName]
    )

    const token = signToken({ id: user.id, email: user.email, role: user.role })
    setCookie(event, 'auth_token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 })

    return { user, token }
  } catch (error: any) {
    if (error.code === '23505') {
      throw createError({ statusCode: 400, statusMessage: 'Email already exists' })
    }
    throw error
  }
})
