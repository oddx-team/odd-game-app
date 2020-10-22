import { axiosInstance } from '../commons/axiosInstance'
import { Room, RoomService } from './index'

interface CreateRoomResponse {
  message: string
}

export const roomServiceProd: RoomService = {
  async createRoom(name, country, size) {
    const response = await axiosInstance.post(`/rooms/${country}`, {
      name,
      size
    })
    const data: CreateRoomResponse = response.data
    return data.message
  },
  async getRooms(country) {
    const response = await axiosInstance.post(`/rooms/${country}`)
    return response.data as Room[]
  },
  async getRoom(id) {
    const response = await axiosInstance.post(`/rooms/id/${id}`)
    return response.data as Room
  }
}
