import React from 'react'
import './Div2.scss'

const Div2 = () => {
  return (
    <section id='div2'>
      <div className='extra'>
        <div className='blob-blue' />
        <div className='blob-gray' />
        <div className='frame-blue' />
        <div className='mini-odd-tree' />
      </div>

      <div className='content'>
        <div className='about'>About Odd</div>
        <div className='title'>
          <h1>What is</h1>
          <h1>Odd?</h1>
        </div>
        <div className='desc'>
          <div className='text'>
            Odd is a boardgame using cards. But unlike other board games, Odd would give you bizarre, strange, funny, ironic feeling, and at times oddly satisfied just like its creators.
          </div>
          <button className='btn-gameplay' />
        </div>
        <div className='circle' />
      </div>
    </section>
  )
}

export default Div2
