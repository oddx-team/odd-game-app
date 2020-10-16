import React from 'react'
import './Div3.scss'

const Div3 = () => {
  return (
    <section id='div3'>
      <div className='extra'>
        <div className='black-card' />
        <div className='white-card' />
        <div className='blue-card' />
        <div className='rectangle' />
        <div className='blob-blue' />
        <div className='gameplay-decor' />
      </div>

      <div className='container'>
        <div className='title'>
          <h1>Game</h1>
          <h1>Play</h1>
        </div>

        <div className='card card-1' />
        <div className='card card-2' />
        <div className='card card-3' />
        <button className='btn-rules'>View rules</button>
      </div>
    </section>
  )
}

export default Div3
