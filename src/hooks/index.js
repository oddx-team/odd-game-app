import Api from 'services'
import { useContext, useState, useEffect } from 'react'
import { useModalActionsContext } from 'contexts/ModalContext'
import { GameContext } from 'contexts/GameContext'
import {
  ERROR_CREATE_ROOM,
  ERROR_FETCH_CARDS
} from '../constants'

export const useGame = () => {
  const { setError } = useModalActionsContext()
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

export const useFetch = (fetchApi) => {
  const { setError } = useModalActionsContext()
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetchApi()
        setResponse(res)
        setIsLoading(false)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [setError, fetchApi])

  return [response, isLoading]
}
