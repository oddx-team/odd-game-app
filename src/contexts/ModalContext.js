import React, { createContext, useReducer } from 'react'
import { modalReducer } from 'reducers/modalReducer'
import PropTypes from 'prop-types'

export const ModalContext = createContext(null, null)

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
