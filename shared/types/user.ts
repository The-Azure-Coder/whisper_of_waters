export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: 'user' | 'admin'
  isLocal: boolean
  createdAt: string
}
