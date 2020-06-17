import React, { useContext } from 'react'
import { ModalError } from './ModalError'
import { ModalContext } from 'contexts/ModalContext'

export const Popups = () => {
  const { stateModal } = useContext(ModalContext)
  const { error } = stateModal

  return (
    <div>
      {error && <ModalError />}
    </div>
  )
}
