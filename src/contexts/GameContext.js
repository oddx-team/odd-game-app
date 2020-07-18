import React, { createContext, useContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

export const GameContext = createContext(null, null)
export const GameActionsContext = createContext()

export const useGameContext = () => useContext(GameContext)
export const useGameActionsContext = () => useContext(GameActionsContext)

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn, username: action.username }
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online }
    case 'UPDATE_GLOBAL_CHAT':
      return { ...state, globalChat: [...state.globalChat, ...action.messages] }
    case 'UPDATE_ALL_ROOMS':
      return { ...state, eRooms: action.payload.eRooms, vRooms: action.payload.vRooms }
    case 'UPDATE_ALL_CARDS':
      return { ...state, allCards: action.allCards }
    case 'SET_FULL_BANNER':
      return { ...state, fullBanner: action.fullBanner }
    case 'CREATE_ROOM':
      return { ...state, roomId: action.roomId }
    case 'QUIT_ROOM':
      return { ...state, roomId: null }
    default:
      return state
  }
}

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    allCards: [],
    isLoggedIn: null,
    username: null,
    points: 0,
    globalChat: [],
    eRooms: [],
    vRooms: [],
    online: false,
    roomId: null,
    fullBanner: true
  }, undefined)

  const actions = {
    login: useCallback((username) => {
      dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: true, username })
    }, []),
    logoutGame: useCallback(() => {
      dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: false, username: null })
    }, []),
    setBanner: useCallback((banner) => {
      dispatch({ type: 'SET_FULL_BANNER', fullBanner: banner })
    }, []),
    createRoom: useCallback(() => {
      dispatch({ type: 'CREATE_ROOM', roomId: 1 })
    }, [])
  }

  return (
    <GameContext.Provider value={{ ...state }}>
      <GameActionsContext.Provider value={{ ...actions }}>
        <div>{children}</div>
      </GameActionsContext.Provider>
    </GameContext.Provider>
  )
}

GameContextProvider.propTypes = {
  children: PropTypes.object
}

export default GameContextProvider
