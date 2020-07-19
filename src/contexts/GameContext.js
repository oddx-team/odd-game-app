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
    case 'SET_FULL_BANNER':
      return { ...state, fullBanner: action.fullBanner }
    case 'SET_LOADING_STATUS':
      return { ...state, isLoading: action.isLoading }
    case 'CREATE_ROOM':
      return { ...state, activeRoom: action.room }
    case 'QUIT_ROOM':
      return { ...state, activeRoom: null }
    default:
      return state
  }
}

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    isLoggedIn: null,
    isLoading: false,
    activeRoom: null,
    username: null,
    points: 0,
    globalChat: [],
    eRooms: [],
    vRooms: [],
    online: false,
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
    createRoom: useCallback((Id, name, size, lang) => {
      dispatch({
        type: 'CREATE_ROOM',
        room: { Id, name, size, lang }
      })
    }, []),
    quitRoom: useCallback(() => {
      dispatch({ type: 'QUIT_ROOM' })
    }, []),
    setGlobalLoading: useCallback((isLoading) => {
      dispatch({ type: 'SET_LOADING_STATUS', isLoading })
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
