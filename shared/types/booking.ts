export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export interface Guests {
  adults: number
  children: number
}

export interface Booking {
  id: number
  userId: number
  packageId: number
  checkIn: string
  checkOut: string
  guests: Guests
  totalPrice: number
  status: BookingStatus
  createdAt: string
}
