import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const GameContext = createContext(null, null)

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn, username: action.username }
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online }
    case 'UPDATE_GLOBAL_CHAT':
      return { ...state, globalChat: [...state.globalChat, ...action.messages] }
    case 'UPDATE_ROOM_LIST':
      return { ...state, enRooms: action.payload.enRooms, vnRooms: action.payload.vnRooms }
    case 'SET_FULL_BANNER':
      return { ...state, fullBanner: action.fullBanner }
    default:
      return state
  }
}

const initialState = {
  isLoggedIn: null,
  username: null,
  points: 0,
  globalChat: [],
  enRooms: [],
  vnRooms: [],
  cards: [],
  online: false,
  fullBanner: true
}

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState, undefined)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </GameContext.Provider>
  )
}

GameContextProvider.propTypes = {
  children: PropTypes.object
}

export default GameContextProvider
