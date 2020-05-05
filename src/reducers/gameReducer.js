export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online };
    default:
      return state;
  }
};
