import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'
import { GameContext } from 'contexts/GameContext'

export const useModal = () => {
  const { state, dispatch } = useContext(ModalContext)

  return ({
    clearError: () => dispatch({ type: 'UPDATE_ERROR', error: null }),
    setError: (payload) => dispatch({ type: 'UPDATE_ERROR', error: payload }),
    setMenu: (payload) => dispatch({ type: 'UPDATE_MENU', openMenu: payload }),
    ...state
  })
}

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext)

  return ({
    logoutGame: () => dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: false, username: null }),
    login: (username) => dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: true, username }),
    setBanner: (banner) => dispatch({ type: 'SET_FULL_BANNER', fullBanner: banner }),
    updateRooms: (payload) => dispatch({ type: 'UPDATE_ROOM_LIST', payload }),
    updateGlobalChat: (messages) => dispatch({ type: 'UPDATE_GLOBAL_CHAT', messages }),
    ...state
  })
}
