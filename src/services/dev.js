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
    await utils.delay(50);
    return utils.camelizeKeys(
      new Array(10).fill(null).map((_, i) => ({
        user: `Guest${i + 1}`,
        message: 'Hello World!',
        time: Date.now(),
        online: false,
      })),
    );
  },
};
