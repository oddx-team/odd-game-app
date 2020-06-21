import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext(null, null)

const setModalState = (modalName, isOpen) => {
  switch (modalName) {
    case 'create':
      return { openCreateRoom: isOpen }
    default:
      return {}
  }
}

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return { ...state, error: action.error, confirmText: action.confirmText }
    case 'SET_MENU_OPEN':
      return { ...state, openMenu: action.openMenu }
    case 'SET_MODAL_OPEN':
      return { ...state, ...setModalState(action.modalName, true) }
    case 'SET_MODAL_CLOSED':
      return { ...state, ...setModalState(action.modalName, false) }
    case 'CLOSE_ALL_MODALS':
      return {
        ...state,
        error: null,
        openMenu: false,
        openCreateRoom: false
      }
    default:
      return state
  }
}

const initialState = {
  error: null,
  confirmText: null,
  openMenu: false,
  openCreateRoom: false
}

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState, undefined)

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.object
}

export default ModalContextProvider
