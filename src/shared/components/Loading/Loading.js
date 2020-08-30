import React from 'react'
import { useGameContext } from 'shared/contexts/GameContext'
import './style.scss'

export const Loading = () => {
  const { isLoading } = useGameContext()
  return isLoading ? (
    <div className='loading-overlay' />
  ) : null
}
