import Api from 'services'
import utils from 'utils'
import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'
import { GameContext } from 'contexts/GameContext'
import { PlayContext } from 'contexts/PlayContext'
import {
  ERROR_CREATE_ROOM,
  ERROR_FETCH_ROOMS,
  ERROR_FETCH_CARDS
} from '../constants'

export const useModal = () => {
  const { state, dispatch } = useContext(ModalContext)

  return ({
    clearError: () => dispatch({ type: 'SET_ERROR', error: null }),
    setError: (payload) => dispatch({ type: 'SET_ERROR', error: payload }),
    setMenu: (payload) => dispatch({ type: 'SET_MENU_OPEN', openMenu: payload }),
    openModal: (modalName) => dispatch({ type: 'SET_MODAL_OPEN', modalName }),
    closeModal: (modalName) => dispatch({ type: 'SET_MODAL_CLOSED', modalName }),
    closeModals: () => dispatch({ type: 'CLOSE_ALL_MODALS' }),
    ...state
  })
}

export const useGame = () => {
  const { setError } = useModal()
  const { state, dispatch } = useContext(GameContext)

  return ({
    ...state,

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
        setError(ERROR_CREATE_ROOM)
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
        setError(ERROR_FETCH_ROOMS)
      }
    },

    fetchAllCards: async () => {
      try {
        const allCards = await Api.getAllCards()
        dispatch({ type: 'UPDATE_ALL_CARDS', allCards })
      } catch (err) {
        setError(ERROR_FETCH_CARDS)
      }
    },

    getCard: (idx) => {
      const { allCards } = state
      return allCards.find((card) => card.id === idx)
    }
  })
}

export const usePlay = () => {
  const { setError } = useModal()
  const { state, dispatch } = useContext(PlayContext)

  return ({
    setMode: (mode) => dispatch({ type: 'UPDATE_MODE', mode }),
    setCollectionCards: (collectionCards) => dispatch({ type: 'SET_ERROR', collectionCards }),
    setPlayedCards: (playedCards) => dispatch({ type: 'SET_MENU_OPEN', playedCards }),
    setBlackCard: (blackCard) => dispatch({ type: 'SET_MODAL_OPEN', blackCard }),

    joinRoom: async (roomId) => {
      try {
        const data = await Api.joinRoom(utils.snakifyKeys({ operation: 'join_room', roomId }))
        const {
          mode,
          collectionCards,
          playedCards,
          blackCard
        } = data

        dispatch({ type: 'UPDATE_MODE', mode })
        dispatch({ type: 'UPDATE_COLLECTION_CARDS', collectionCards })
        dispatch({ type: 'UPDATE_PLAYED_CARDS', playedCards })
        dispatch({ type: 'UPDATE_BLACK_CARD', blackCard })
      } catch (err) {
        setError(ERROR_FETCH_CARDS)
      }
    },
    ...state
  })
}
