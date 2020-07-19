import React, { createContext, useReducer, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

export const PlayContext = createContext(null, null)
export const PlayActionsContext = createContext()

export const usePlayContext = () => useContext(PlayContext)
export const usePlayActionsContext = () => useContext(PlayActionsContext)

const playReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MODE':
      return { ...state, mode: action.mode }
    case 'UPDATE_ALL_CARDS':
      return { ...state, allCards: action.allCards }
    case 'UPDATE_COLLECTION_CARDS':
      return { ...state, collectionCardIds: action.collectionCardIds }
    case 'UPDATE_PLAYED_CARDS':
      return { ...state, playedCardIds: action.playedCardIds }
    case 'UPDATE_BLACK_CARD':
      return { ...state, blackCardId: action.blackCardId }
    default:
      return state
  }
}

const PlayContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playReducer, {
    mode: null,
    allCards: [],
    collectionCardIds: [],
    playedCardIds: [],
    blackCardId: null
  }, undefined)

  const actions = {
    setMode: useCallback((mode) => {
      dispatch({ type: 'UPDATE_MODE', mode })
    }, []),
    setAllCards: useCallback((allCards) => {
      dispatch({ type: 'UPDATE_ALL_CARDS', allCards })
    }, []),
    setPlayedCardIds: useCallback((playedCardIds) => {
      dispatch({ type: 'UPDATE_PLAYED_CARDS', playedCardIds })
    }, []),
    setBlackCardId: useCallback((blackCardId) => {
      dispatch({ type: 'UPDATE_BLACK_CARD', blackCardId })
    }, []),
    setCollectionCardIds: useCallback((collectionCardIds) => {
      dispatch({ type: 'UPDATE_COLLECTION_CARDS', collectionCardIds })
    }, []),

    setPlaygroundData: useCallback((mode, collectionCardIds, playedCardIds, blackCardId) => {
      dispatch({ type: 'UPDATE_MODE', mode })
      dispatch({ type: 'UPDATE_COLLECTION_CARDS', collectionCardIds })
      dispatch({ type: 'UPDATE_PLAYED_CARDS', playedCardIds })
      dispatch({ type: 'UPDATE_BLACK_CARD', blackCardId })
    }, []),

    getCardById: useCallback((id) => {
      return state.allCards
        ? state.allCards.find((card) => card.id === id)
        : null
    }, [state.allCards]),

    confirmDealCard: useCallback((cardId) => {
      dispatch({
        type: 'UPDATE_COLLECTION_CARDS',
        collectionCardIds: state.collectionCardIds.filter(id => id !== cardId)
      })
      dispatch({
        type: 'UPDATE_PLAYED_CARDS',
        playedCardIds: [...state.playedCardIds, { id: cardId, vote: 0 }]
      })
    }, [state.collectionCardIds, state.playedCardIds])
  }

  return (
    <PlayContext.Provider value={{ ...state }}>
      <PlayActionsContext.Provider value={{ ...actions }}>
        <div>{children}</div>
      </PlayActionsContext.Provider>
    </PlayContext.Provider>
  )
}

PlayContextProvider.propTypes = {
  children: PropTypes.object
}

export default PlayContextProvider
