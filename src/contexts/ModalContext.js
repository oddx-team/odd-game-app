import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext(null, null)

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return { ...state, error: action.error, confirmText: action.confirmText }
    default:
      return state
  }
}

const initialState = {
  error: null,
  confirmText: null
}

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState, undefined)

  return (
    <ModalContext.Provider value={{ stateModal: state, dispatchModal: dispatch }}>
      <div>{children}</div>
    </ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.object
}

export default ModalContextProvider
