import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'your-secret-key-change-this'

export const signToken = (payload: any) => {
  return jwt.sign(payload, secret, { expiresIn: '7d' })
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }
}
