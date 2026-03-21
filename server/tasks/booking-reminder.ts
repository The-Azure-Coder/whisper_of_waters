import { sql } from '../utils/database'

export default defineTask({
  async run({ payload, context }: { payload: any, context: any }) {
    console.log('🌴 Running Island Booking Reminders...')
    
    // Find bookings starting tomorrow
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dateStr = tomorrow.toISOString().split('T')[0]

    const upcomingBookings = await sql(
      `SELECT b.id, b.user_id, u.email, u.first_name, u.last_name 
       FROM bookings b 
       JOIN users u ON b.user_id = u.id 
       WHERE b.check_in = $1 AND b.status = 'confirmed'`,
      [dateStr]
    )

    console.log(`🌊 Found ${upcomingBookings.length} upcoming escapes for tomorrow.`)

    for (const booking of upcomingBookings) {
      console.log(`✉️ Sending reminder to ${booking.first_name} ${booking.last_name} (${booking.email}) for Booking #${booking.id}`)
      // In a real app, we'd use an email service here
    }

    return { result: 'Reminders processed successfully 🥥' }
  }
})
