import Api from './api';
export const getRooms = async (page, roomsPerPage) => {
  let result = [];
  try {
    const rooms = await Api.get('http://www.json-generator.com/api/json/get/bPfPGdvkzm?indent=2' /* api/v1/rooms */);
    result = rooms.data;
  } catch (err) {
    console.log(err);
  }
  return result;
};
