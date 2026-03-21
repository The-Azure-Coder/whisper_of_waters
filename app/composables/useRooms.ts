export const useRooms = () => {
  const rooms = useState<Room[]>('rooms', () => [])
  const currentRoom = useState<Room | null>('currentRoom', () => null)
  const loading = useState('roomsLoading', () => false)
  const error = useState<string | null>('roomsError', () => null)

  const fetchRooms = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await $fetch<Room[]>('/api/rooms')
      rooms.value = data
    } catch (err: any) {
      console.error('Failed to fetch rooms:', err)
      error.value = err.data?.statusMessage || 'Failed to dive for room details'
    } finally {
      loading.value = false
    }
  }

  const fetchRoomById = async (id: string | number) => {
    loading.value = true
    error.value = null
    try {
      const data = await $fetch<Room>(`/api/rooms/${id}`)
      currentRoom.value = data
    } catch (err: any) {
      console.error('Failed to fetch room by id:', err)
      error.value = err.data?.statusMessage || 'Room disappeared into the depths'
      currentRoom.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    rooms,
    currentRoom,
    loading,
    error,
    fetchRooms,
    fetchRoomById
  }
}
