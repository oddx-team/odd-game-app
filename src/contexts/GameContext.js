import React, { createContext, useContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'
import utils from 'utils'

export const GameContext = createContext(null, null)
export const GameActionsContext = createContext()

export const useGameState = () => useContext(GameContext)
export const useGameActions = () => useContext(GameActionsContext)

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn, username: action.username }
    case 'UPDATE_ONLINE_STATUS':
      return { ...state, online: !state.online }
    case 'UPDATE_GLOBAL_CHAT':
      return { ...state, globalChat: [...state.globalChat, ...action.messages] }
    case 'SET_LOADING_STATUS':
      return { ...state, isLoading: action.isLoading }
    case 'SET_ACTIVE_ROOM':
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
    username: null,
    points: 0,
    globalChat: [],
    online: false
  }, undefined)

  const actions = {
    login: useCallback((username) => {
      dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: true, username })
    }, []),
    logoutGame: useCallback(() => {
      dispatch({ type: 'UPDATE_LOGIN', isLoggedIn: false, username: null })
    }, []),
    setActiveRoom: useCallback((room) => {
      dispatch({ type: 'SET_ACTIVE_ROOM', room })
    }, []),
    createRoom: useCallback((Id, name, size, lang) => {
      dispatch({
        type: 'CREATE_ROOM',
        room: {
          Id,
          name,
          size,
          lang,
          slug: utils.slugifyStr(name)
        }
      })
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
