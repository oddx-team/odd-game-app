export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online };
    case 'UPDATE_GLOBAL_CHAT':
      return { ...state, globalChat: [...state.globalChat, ...action.messages] };
    case 'UPDATE_ROOM_LIST':
      return { ...state, enRooms: action.payload.enRooms, vnRooms: action.payload.vnRooms };
    case 'SET_FULL_BANNER':
      return { ...state, fullBanner: action.fullBanner };
    default:
      return state;
  }
};
