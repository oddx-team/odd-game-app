import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

export const Loading = () => {
  const isLoading = useSelector(state => state.game.isLoading)
  return isLoading ? (
    <div className='loading-overlay' />
  ) : null
}
