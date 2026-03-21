export interface Room {
  id: number
  name: string
  description: string
  price: number
  features: string[]
  imageUrl: string
  status: 'available' | 'maintenance' | 'reserved'
  createdAt?: string
}
