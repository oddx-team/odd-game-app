import utils from 'utils'

export default {
  async registerUsername () {
    await utils.delay(100)
    return utils.camelizeKeys({
      token: 'sampleToken'
    })
    // throw Error('username is picked already')
  },

  async logout () {
    await utils.delay(100)
  },

  async getMe () {
    await utils.delay(100)
    return utils.camelizeKeys({
      username: 'Test'
    })
    // return null
  },

  async getChats () {
    return utils.camelizeKeys(
      new Array(10).fill(null).map((_, i) => ({
        username: `Guest${i + 1}`,
        message: 'Hello World!',
        time: Date.now(),
        online: true
      }))
    )
  },

  async getAllCards () {
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

  async getGlobalRooms () {
    await utils.delay(100)
    return utils.camelizeKeys(
      new Array(26).fill(null).map((_, i) => ({
        id: i,
        name: `Room ${utils.convertChar(i)}`,
        host: `Player${(i % 3) + 1}`,
        total: 10,
        current: Math.floor(Math.random() * 10),
        guest: Math.floor(Math.random() * 15),
        status: i % 2 === 0 ? 'Not started' : 'Playing'
      }))
    )
  },

  async getVnRooms () {
    await utils.delay(100)
    return utils.camelizeKeys(
      new Array(26).fill(null).map((_, i) => ({
        id: i + 26,
        name: `Phòng ${utils.convertChar(i)}`,
        host: `Player${(i % 3) + 1}`,
        total: 10,
        current: Math.floor(Math.random() * 10),
        guest: Math.floor(Math.random() * 15),
        status: i % 2 === 0 ? 'Not started' : 'Playing'
      }))
    )
  },

  async createRoom (payload, language) {
    // payload format
    // {
    //   name: 'abc',
    //   size: 10
    // }
    await utils.delay(100)
    return { _id: 'room_id_123' }
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
      main_card: 1,
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
