import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'

export const useModal = () => {
  const { state, dispatch } = useContext(ModalContext)

  return ({
    setError: (payload) => dispatch({ type: 'UPDATE_ERROR', error: payload }),
    clearError: () => dispatch({ type: 'UPDATE_ERROR', error: null }),
    error: state.error,
    confirmText: state.confirmText
  })
}
