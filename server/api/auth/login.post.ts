import bcrypt from 'bcryptjs'
import { signToken } from '../../utils/jwt'
import { sql } from '../../utils/database'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Email and password required' })
  }

  const [user] = await sql('SELECT * FROM users WHERE email = $1', [email])

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password' })
  }

  const token = signToken({ id: user.id, email: user.email, role: user.role })
  setCookie(event, 'auth_token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 })

  return {
    user: { 
      id: user.id, 
      email: user.email, 
      firstName: user.first_name, 
      lastName: user.last_name, 
      role: user.role,
      createdAt: user.created_at
    },
    token
  }
})
