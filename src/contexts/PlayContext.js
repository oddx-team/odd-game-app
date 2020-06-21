import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const PlayContext = createContext(null, null)

const playReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MODE':
      return { ...state, mode: action.mode }
    case 'UPDATE_COLLECTION_CARDS':
      return { ...state, collectionCards: action.collectionCards }
    case 'UPDATE_PLAYED_CARDS':
      return { ...state, playedCards: action.playedCards }
    case 'UPDATE_BLACK_CARD':
      return { ...state, blackCard: action.blackCard }
    default:
      return state
  }
}

const initialState = {
  mode: null,
  collectionCards: [],
  playedCards: [],
  blackCard: null
}

const PlayContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playReducer, initialState, undefined)

  return (
    <PlayContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </PlayContext.Provider>
  )
}

PlayContextProvider.propTypes = {
  children: PropTypes.object
}

export default PlayContextProvider
