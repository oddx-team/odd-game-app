import { Room, RoomService, Status } from './index'

export const roomServiceMock: RoomService = {
  async createRoom(name, country, size) {
    return 'randomRoomId'
  },
  async getRooms(country) {
    const rooms: Room[] = [
      {
        name: 'Room One',
        host: 'boss',
        size: 5,
        guess: 0,
        status: Status.NOT_STARTED,
        country: 'en',
        _id: '5f8987eec443d12094f1b398'
      },
      {
        name: 'Room Two',
        host: 'guess',
        size: 5,
        guess: 0,
        status: Status.PLAYING,
        country: 'en',
        _id: '5f8987eec443d12094f1b398'
      }
    ]
    return rooms
  },
  async getRoom(id) {
    const room: Room = {
      name: 'Room Two',
      host: 'guess',
      size: 5,
      guess: 0,
      status: Status.PLAYING,
      country: 'en',
      _id: '5f8987eec443d12094f1b398'
    }
    return room
  }
}
