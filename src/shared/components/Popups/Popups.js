import React from 'react'
import { useModalContext } from 'contexts/ModalContext'
import { ModalError } from './ModalError'
import { ModalCreateRoom } from './ModalCreateRoom'

export const Popups = () => {
  const { error, openCreateRoom } = useModalContext()

  return (
    <div>
      {error && <ModalError />}
      {openCreateRoom && <ModalCreateRoom />}
    </div>
  )
}
