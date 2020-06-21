import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'
import { GameContext } from 'contexts/GameContext'
import Api from 'services'

export const useModal = () => {
  const { state, dispatch } = useContext(ModalContext)

  return ({
    clearError: () => dispatch({ type: 'SET_ERROR', error: null }),
    setError: (payload) => dispatch({ type: 'SET_ERROR', error: payload }),
    setMenu: (payload) => dispatch({ type: 'SET_MENU_OPEN', openMenu: payload }),
    openModal: (modalName) => dispatch({ type: 'SET_MODAL_OPEN', modalName }),
    closeModals: () => dispatch({ type: 'CLOSE_ALL_MODALS' }),
    ...state
  })
}

export const useGame = () => {
  const { setError } = useModal()
  const { state, dispatch } = useContext(GameContext)

  return ({
    logoutGame: () => dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: false, username: null }),
    login: (username) => dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: true, username }),
    setBanner: (banner) => dispatch({ type: 'SET_FULL_BANNER', fullBanner: banner }),
    clearRoom: () => dispatch({ type: 'QUIT_ROOM' }),
    updateGlobalChat: (messages) => dispatch({ type: 'UPDATE_GLOBAL_CHAT', messages }),

    createRoom: async (name, size, language) => {
      try {
        const data = await Api.createRoom({ name, size }, language)
        dispatch({ type: 'CREATE_ROOM', roomId: data._id })
      } catch (err) {
        setError('Creating rooms failed!')
      }
    },

    fetchAllRooms: async () => {
      try {
        const [eRooms, vRooms] = await Promise.all([Api.getGlobalRooms(), Api.getVnRooms()])
        dispatch({
          type: 'UPDATE_ALL_ROOMS',
          payload: { eRooms, vRooms }
        })
      } catch (err) {
        setError('Fetching rooms failed!')
      }
    },

    ...state
  })
}
