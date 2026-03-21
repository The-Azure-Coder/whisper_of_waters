export interface Room {
  id: number
  name: string
  description: string
  price: number
  features: string[] | string
  imageUrl: string
  status: 'available' | 'maintenance' | 'reserved'
  isBooked?: boolean
  roomStatus?: string
  createdAt?: string
}
