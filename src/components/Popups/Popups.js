import React from 'react'
import { useModal } from 'hooks'
import { ModalError } from './ModalError'

export const Popups = () => {
  const { error } = useModal()

  return (
    <div>
      {error && <ModalError />}
    </div>
  )
}
