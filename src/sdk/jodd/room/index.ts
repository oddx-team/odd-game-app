import { isDev } from '../commons/config'
import { BaseModel } from '../commons/baseModel'
import { roomServiceMock } from './mock'
import { roomServiceProd } from './prod'

export interface RoomService {
  createRoom(name: string, country: string, size: number): Promise<string>
  getRooms(country: string): Promise<Room[]>
  getRoom(id: string): Promise<Room>
}

export const roomService: RoomService = isDev ? roomServiceMock : roomServiceProd

export interface Room extends BaseModel {
  name: string
  host: string
  size: number
  guess: number
  status: Status
  country: string
}

export enum Status {
  NOT_STARTED,
  PLAYING
}
