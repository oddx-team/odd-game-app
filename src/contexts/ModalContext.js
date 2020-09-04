import React, { useContext, createContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext(null, null)
export const ModalActionsContext = createContext()

export const useModalState = () => useContext(ModalContext)
export const useModalActions = () => useContext(ModalActionsContext)

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

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    error: null,
    confirmText: null,
    openMenu: false,
    openCreateRoom: false
  }, undefined)

  const actions = {
    clearError: useCallback(() => {
      dispatch({ type: 'SET_ERROR', error: null })
    }, []),
    setError: useCallback((payload) => {
      dispatch({ type: 'SET_ERROR', error: payload })
    }, []),
    setMenu: useCallback((payload) => {
      dispatch({ type: 'SET_MENU_OPEN', openMenu: payload })
    }, []),
    openModal: useCallback((modalName) => {
      dispatch({ type: 'SET_MODAL_OPEN', modalName })
    }, []),
    closeModal: useCallback((modalName) => {
      dispatch({ type: 'SET_MODAL_CLOSED', modalName })
    }, []),
    closeModals: useCallback(() => {
      dispatch({ type: 'CLOSE_ALL_MODALS' })
    }, [])
  }

  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      <ModalActionsContext.Provider value={{ ...actions }}>
        <div>{children}</div>
      </ModalActionsContext.Provider>
    </ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.object
}

export default ModalContextProvider
