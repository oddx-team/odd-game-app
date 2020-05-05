export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online };
    case 'SET_FULL_BANNER':
      return { ...state, fullBanner: action.fullBanner };
    default:
      return state;
  }
};
