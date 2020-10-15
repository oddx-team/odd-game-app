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
        Odd là một boardgame sử dụng thẻ bài. Nhưng khác với các trò boardgame khác, Odd cho bạn một trải nghiệm bựa, lạ, hài hước, châm biếm và lắm lúc kì quặc như những người tạo ra nó vậy.
        </div>
        <div className='circle' />
      </div>
    </section>
  )
}

export default Div2
