import type { Booking } from '~/../shared/types/booking'

export const useBooking = () => {
  const bookings = useState<Booking[]>('bookings', () => [])
  const adminBookings = useState<Booking[]>('adminBookings', () => [])

  const fetchBookings = async () => {
    try {
      const data = await $fetch<Booking[]>('/api/bookings')
      bookings.value = data
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
    }
  }

  const fetchAdminBookings = async () => {
    try {
      const data = await $fetch<Booking[]>('/api/admin/bookings')
      adminBookings.value = data
    } catch (error) {
      console.error('Failed to fetch admin bookings:', error)
    }
  }

  const createBooking = async (details: any) => {
    try {
      const data = await $fetch<Booking>('/api/bookings', {
        method: 'POST',
        body: details
      })
      bookings.value.unshift(data)
      return { success: true, booking: data }
    } catch (error: any) {
      return { success: false, error: error.data?.statusMessage || 'Failed to create booking' }
    }
  }

  const cancelBooking = async (id: number) => {
    try {
      await $fetch(`/api/bookings/${id}`, { method: 'DELETE' })
      await fetchBookings()
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.data?.statusMessage || 'Failed to cancel' }
    }
  }

  const updateStatus = async (id: number, status: string) => {
    try {
      await $fetch(`/api/admin/bookings/${id}`, {
        method: 'PUT',
        body: { status }
      })
      await fetchAdminBookings()
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.data?.statusMessage || 'Update failed' }
    }
  }

  return {
    bookings,
    adminBookings,
    fetchBookings,
    fetchAdminBookings,
    createBooking,
    cancelBooking,
    updateStatus
  }
}
