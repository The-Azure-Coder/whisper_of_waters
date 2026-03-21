import { verifyToken } from '../utils/jwt'

export default defineEventHandler((event) => {
  const authHeader = getHeader(event, 'authorization')
  const token = authHeader?.split(' ')[1] || getCookie(event, 'auth_token')

  if (token) {
    const user = verifyToken(token)
    if (user) {
      event.context.auth = { user }
    }
  }
})
