import axios from 'axios'
import utils from '../utils'

const API = '/api'

function api (method, svc, data = {}) {
  const url = `${API}/${svc}`

  const params = {
    method,
    url,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios(params).then(resp => utils.camelizeKeys(resp.data))
}

export default {
  registerUsername (username) {
    return api('post', 'authenticate/register', { username })
  },
  logout () {
    return api('post', 'authenticate/logout')
  },
  getMe () {
    return api('get', 'authenticate/me')
  },
  getChats () {
    return api('get', 'chat')
  },
  async getAllCards () {
    await utils.delay(100)
    return utils.camelizeKeys([
      {
        id: 1,
        text: 'Donald Trump has nominated __ for his VP',
        color: 'black',
        gaps: 1
      },
      {
        id: 2,
        text: '(Heavy breathing) Luke, I am ____.',
        color: 'black',
        gaps: 1
      },
      {
        id: 3,
        text: '50% of all marriages end in ____.',
        color: 'black',
        gaps: 1
      },
      {
        id: 4,
        text: '____ is way better in ____ mode.',
        color: 'black',
        gaps: 2
      },
      {
        id: 5,
        text: '____ will never be the same after ____.',
        color: 'black',
        gaps: 2
      },
      {
        id: 6,
        text: '____: Hours of fun. Easy to use. Perfect for ____!',
        color: 'black',
        gaps: 2
      },
      {
        id: 7,
        text: 'A Japanese toaster you can fuck.',
        color: 'white'
      },
      {
        id: 8,
        text: 'A kiss on the lips.',
        color: 'white'
      },
      {
        id: 9,
        text: 'A lifetime of sadness.',
        color: 'white'
      },
      {
        id: 10,
        text: 'A kiss on the lips.',
        color: 'white'
      },
      {
        id: 11,
        text: 'A Japanese tourist who wants something very badly but cannot communicate it.',
        color: 'white'
      },
      {
        id: 12,
        text: 'A man on the brink of orgasm.',
        color: 'white'
      },
      {
        id: 13,
        text: 'A monkey smoking a cigar.',
        color: 'white'
      },
      {
        id: 14,
        text: 'A pizza guy who fucked up.',
        color: 'white'
      }
    ])
  },
  getGlobalRooms () {
    return api('get', 'rooms/en')
  },
  getVnRooms () {
    return api('get', 'rooms/vi')
  },
  createRoom (payload, language) {
    return api('post', `rooms/${language}`, payload)
  },
  async joinRoom (payload) {
    // payload format
    // {
    //   operation: 'join_room',
    //   room_id: 1
    // }
    await utils.delay(100)
    return utils.camelizeKeys({
      joined: true,
      room_id: 1,
      mode: 1,
      collection_cards: [7, 8, 9, 10, 11],
      black_card: 1,
      played_cards: [
        {
          id: 12,
          vote: 0
        },
        {
          id: 13,
          vote: 0
        }
      ]
    })
  }
}
