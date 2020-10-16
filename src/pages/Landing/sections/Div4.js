import React from 'react'
import { Icon } from 'shared/components/Icon'
import './Div4.scss'

const Div4 = () => {
  return (
    <div id='div4'>
      <div className='extra'>
        <div className='blob-gray' />
        <div className='mini-odd-code' />
        <div className='double-arrow' />
        <div className='circle' />
        <a
          className='github' href='https://github.com/oddx-team/'
          target='_blank'
          rel='noopener noreferrer'
        />
      </div>

      <div className='frame'>
        <div className='contribute'>Contribute</div>
        <div className='title'>
          <h1>Open</h1>
          <h1>Source</h1>
        </div>
        <div className='desc'>
          <div className='text'>Oddx wouldn’t be there without the help of many developers. Feel free to drop your suggestions/PRs to help us improve the game in the future.</div>

          <div className='link'>
            <a
              className='source'
              href='https://github.com/oddx-team/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon type='github' size={0.65} />
              <div className='url'>
                <span>https://github.com/</span>
                <span>oddx-team/</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Div4
