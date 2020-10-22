import { roomService, RoomService} from './room'

export interface JOdd {
  roomService: RoomService
}

export const jOdd: JOdd = {
  roomService
}
