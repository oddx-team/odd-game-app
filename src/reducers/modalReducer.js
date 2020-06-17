export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_OPEN_MENU':
      return { ...state, openMenu: action.openMenu }
    default:
      return state
  }
}
