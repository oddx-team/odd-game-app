import React, { useState, useEffect } from 'react'
import './style.scss'

export const PageRotation = () => {
  const [rotation, setRotation] = useState(false)

  useEffect(() => {
    const checkState = () => {
      const check = window.innerWidth < window.innerHeight
      setRotation(check)
    }
    checkState()
    window.addEventListener('resize', checkState)
  }, [])

  return (rotation &&
    <div className='page-rotation'>
      <section className='content'>
        <div className='rotation' />
        <div className='text'>
          Please rotate your device for the best browsing experience
        </div>
      </section>
    </div>
  )
}
