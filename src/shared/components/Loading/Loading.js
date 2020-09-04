import React from 'react'
import { useGameState } from 'contexts/GameContext'
import './style.scss'

export const Loading = () => {
  const { isLoading } = useGameState()
  return isLoading ? (
    <div className='loading-overlay' />
  ) : null
}
