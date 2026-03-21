import { H3Event } from 'h3'

export const ensureAuth = (event: H3Event) => {
  if (!event.context.auth?.user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }
  return event.context.auth.user
}

export const ensureAdmin = (event: H3Event) => {
  const user = ensureAuth(event)
  if (user.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    })
  }
  return user
}
