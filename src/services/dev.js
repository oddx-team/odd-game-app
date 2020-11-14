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
      username: 'Lam'
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
    await utils.delay(500)
    return utils.camelizeKeys([
      {
        color: 'black',
        gaps: 2,
        language: 'en',
        text: 'For my next trick, I will pull ____ out of ____.',
        _id: '5f146b9f73aa53974b1dafc3'
      },
      {
        color: 'white',
        language: 'en',
        text: 'BATMAN!',
        _id: '5f146b9f73aa53974b1dafc4'
      },
      {
        color: 'white',
        language: 'en',
        text: 'Punching a congressman in the face.',
        _id: '5f146b9f73aa53974b1dafc6'
      },
      {
        _id: '5f146b9f73aa53974b1dafc7',
        color: 'white',
        language: 'en',
        text: 'J.D. Power and his associates.'
      },
      {
        _id: '5f146b9f73aa53974b1dafc8',
        color: 'white',
        language: 'en',
        text: 'Dick fingers.'
      },
      {
        _id: '5f146b9f73aa53974b1dafc5',
        color: 'black',
        language: 'en',
        text: "Dude, <i>do not</i> go in that bathroom. There's ____ in there.",
        gaps: 1
      },
      {
        _id: '5f146b9f73aa53974b1dafc2',
        color: 'white',
        language: 'en',
        text: 'Auschwitz.'
      },
      {
        _id: '5f146b9f73aa53974b1dafca',
        color: 'white',
        language: 'en',
        text: 'Some god damn peace and quiet.'
      },
      {
        _id: '5f146b9f73aa53974b1dafc9',
        color: 'black',
        language: 'en',
        text: "____. Betcha can't have just one!",
        gaps: 1
      },
      {
        _id: '5f146b9f73aa53974b1dafc1',
        color: 'white',
        language: 'en',
        text: 'Being marginalized.'
      },
      {
        _id: '5f146b9f73aa53974b1dafcb',
        color: 'white',
        language: 'en',
        text: 'Preteens.'
      },
      {
        _id: '5f146b9f73aa53974b1dafcc',
        color: 'white',
        language: 'en',
        text: 'Getting so angry that you pop a boner.'
      },
      {
        _id: '5f146b9f73aa53974b1dafce',
        color: 'white',
        language: 'en',
        text: 'My Uber driver, Pavel.'
      },
      {
        _id: '5f146b9f73aa53974b1dafd1',
        color: 'white',
        language: 'en',
        text: 'A mating display.'
      },
      {
        _id: '5f146b9f73aa53974b1dafcf',
        color: 'white',
        language: 'en',
        text: 'Seven dead and three in critical condition.'
      }
    ])
  },

  async getAllRooms (language) {
    await utils.delay(100)
    if (language === 'en') {
      return utils.camelizeKeys(
        new Array(26).fill(null).map((_, i) => ({
          _id: `room-${i + 26}`,
          name: `Room ${utils.convertChar(i)}`,
          slug: utils.slugifyStr(`room-${utils.convertChar(i)}`),
          host: `Player${(i % 3) + 1}`,
          total: 10,
          current: Math.floor(Math.random() * 10),
          guest: Math.floor(Math.random() * 15),
          status: i % 2 === 0 ? 'Not started' : 'Playing'
        }))
      )
    } else {
      return utils.camelizeKeys(
        new Array(26).fill(null).map((_, i) => ({
          _id: `phong-${i + 26}`,
          name: `Phòng ${utils.convertChar(i)}`,
          slug: utils.slugifyStr(`phong-${utils.convertChar(i)}`),
          host: `Player${(i % 3) + 1}`,
          total: 10,
          current: Math.floor(Math.random() * 10),
          guest: Math.floor(Math.random() * 15),
          status: i % 2 === 0 ? 'Not started' : 'Playing'
        }))
      )
    }
  },

  async getRoomChat (slug) {
    return utils.camelizeKeys(
      new Array(10).fill(null).map((_, i) => ({
        username: `Guest${i + 1}`,
        message: 'Hello World!',
        time: Date.now(),
        online: true
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
    return { _id: 'room_id_123', name: utils.slugifyStr(payload.name) }
  },

  async joinRoom (payload) {
    // payload format
    // {
    //   operation: 'join_room',
    //   slug: room-abc
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
