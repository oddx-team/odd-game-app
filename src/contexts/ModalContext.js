import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext(null, null)

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_OPEN_MENU':
      return { ...state, openMenu: action.openMenu }
    default:
      return state
  }
}

const initialState = {
  error: null
}

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState, undefined)

  return (
    <ModalContext.Provider value={{ modalState: state, modalDispatch: dispatch }}>
      <div>{children}</div>
    </ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.object
}

export default ModalContextProvider
