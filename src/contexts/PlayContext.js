import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const PlayContext = createContext(null, null)

const playReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MODE':
      return { ...state, mode: action.mode }
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

const initialState = {
  mode: null,
  collectionCardIds: [],
  playedCardIds: [],
  blackCardId: null
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
