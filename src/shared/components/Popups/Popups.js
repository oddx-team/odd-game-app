import React from 'react'
import { useModalState } from 'contexts/ModalContext'
import { ModalError } from './ModalError'

export const Popups = () => {
  const { error } = useModalState()

  return (
    <div>
      {error && <ModalError />}
    </div>
  )
}
