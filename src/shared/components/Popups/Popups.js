import React from 'react'
import { useModalState } from 'contexts/ModalContext'
import { ModalError } from './ModalError'
import { ModalCreateRoom } from './ModalCreateRoom'

export const Popups = () => {
  const { error, openCreateRoom } = useModalState()

  return (
    <div>
      {error && <ModalError />}
      {openCreateRoom && <ModalCreateRoom />}
    </div>
  )
}
