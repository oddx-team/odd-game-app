import axios from 'axios'
import utils from 'utils'

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
  getRoomChat (slug) {
    return api('get', `rooms/${slug}/chat`)
  },
  async getAllCards () {
    return api('get', 'cards/en')
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
      room_info: {
        _id: 1,
        slug: 'room-a'
      },
      mode: 1,
      collection_cards: [
        '5f146b9f73aa53974b1dafc7',
        '5f146b9f73aa53974b1dafc8',
        '5f146b9f73aa53974b1dafc2',
        '5f146b9f73aa53974b1dafca',
        '5f146b9f73aa53974b1dafc1',
        '5f146b9f73aa53974b1dafcb',
        '5f146b9f73aa53974b1dafce',
        '5f146b9f73aa53974b1dafd1'],
      black_card: '5f146b9f73aa53974b1dafc9',
      played_cards: [
        {
          _id: '5f146b9f73aa53974b1dafc4', // BATMAN
          vote: 0
        },
        {
          _id: '5f146b9f73aa53974b1dafc6', // Punching congressman
          vote: 0
        }
      ]
    })
  }
}
