import React from 'react'
import { useModal } from 'hooks'
import { ModalError } from './ModalError'
import { ModalCreateRoom } from './ModalCreateRoom'

export const Popups = () => {
  const { error, openCreateRoom } = useModal()

  return (
    <div>
      {error && <ModalError />}
      {openCreateRoom && <ModalCreateRoom />}
    </div>
  )
}
