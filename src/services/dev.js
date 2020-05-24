import utils from '../utils';

export default {
  async getProfile() {
    await utils.delay(50);
    return utils.camelizeKeys({
      accountId: '123124215',
      region: 'sg',
      language: 'en',
    });
  },

  async getChats() {
    return utils.camelizeKeys(
      new Array(10).fill(null).map((_, i) => ({
        user: `Guest${i + 1}`,
        message: 'Hello World!',
        time: Date.now(),
        online: true,
      })),
    );
  },

  async getAllCards() {
    return utils.camelizeKeys([
      {
        id: 1,
        text: 'Donald Trump has nominated __ for his VP',
        color: 'black',
        gaps: 1,
      },
      {
        id: 2,
        text: '(Heavy breathing) Luke, I am ____.',
        color: 'black',
        gaps: 1,
      },
      {
        id: 3,
        text: '50% of all marriages end in ____.',
        color: 'black',
        gaps: 1,
      },
      {
        id: 4,
        text: '____ is way better in ____ mode.',
        color: 'black',
        gaps: 2,
      },
      {
        id: 5,
        text: '____ will never be the same after ____.',
        color: 'black',
        gaps: 2,
      },
      {
        id: 6,
        text: '____: Hours of fun. Easy to use. Perfect for ____!',
        color: 'black',
        gaps: 2,
      },
      {
        id: 7,
        text: 'A Japanese toaster you can fuck.',
        color: 'white',
      },
      {
        id: 8,
        text: 'A kiss on the lips.',
        color: 'white',
      },
      {
        id: 9,
        text: 'A lifetime of sadness.',
        color: 'white',
      },
      {
        id: 10,
        text: 'A kiss on the lips.',
        color: 'white',
      },
      {
        id: 11,
        text: 'A Japanese tourist who wants something very badly but cannot communicate it.',
        color: 'white',
      },
      {
        id: 12,
        text: 'A man on the brink of orgasm.',
        color: 'white',
      },
      {
        id: 13,
        text: 'A monkey smoking a cigar.',
        color: 'white',
      },
      {
        id: 14,
        text: 'A pizza guy who fucked up.',
        color: 'white',
      },
    ]);
  },

  async getEnglishRooms() {
    return utils.camelizeKeys(
      new Array(26).fill(null).map((_, i) => ({
        id: i,
        name: `Room ${utils.convertChar(i)}`,
        host: `player${(i % 3) + 1}`,
        total: 10,
        current: Math.floor(Math.random() * 10),
        viewers: Math.floor(Math.random() * 15),
        status: Math.floor(Math.random() * 3),
      })),
    );
  },

  async getVietnameseRooms() {
    return utils.camelizeKeys(
      new Array(26).fill(null).map((_, i) => ({
        id: i + 26,
        name: `Phòng ${utils.convertChar(i)}`,
        host: `player${(i % 3) + 1}`,
        total: 10,
        current: Math.floor(Math.random() * 10),
        viewers: Math.floor(Math.random() * 15),
        status: Math.floor(Math.random() * 3),
      })),
    );
  },
};
