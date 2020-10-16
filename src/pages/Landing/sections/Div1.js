import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import { Icon } from 'shared/components/Icon'
import { introAnimation, pulseAnimation, startEffect, retryEffect } from './Animate'
import Api from 'services'
import toast from 'shared/utils/toast'
import utils from 'utils'
import classNames from 'classnames'
import './Div1.scss'

const Div1 = ({ scrollY }) => {
  const history = useHistory()
  const { login } = useGameActions()
  const { createSocket } = useContext(SocketContext)
  const [username, setUsername] = useState('')
  const [input, setInput] = useState(false)
  const [tab, setTab] = useState(0)

  useEffect(() => {
    introAnimation()
    pulseAnimation()
  }, [])

  const startGame = async () => {
    if (!username || username.length < 3) {
      toast.error('username_len_short')
      return
    }

    try {
      startEffect()
      await utils.delay(800)
      await Api.registerUsername(username)
      login(username)
      createSocket()

      history.push('/rooms')
      toast.success('login_success')
    } catch (err) {
      toast.error('username_picked')
      retryEffect()
    }
  }

  const liClass = (id) => {
    return classNames({ active: tab === id })
  }

  const sectionScroll = () => {
    return { backgroundPositionY: scrollY * 0.25 + 'px' }
  }

  return (
    <section id='div1' style={sectionScroll()}>
      <div className='overlay'>
        <div className='logo' />
        <span>A party game for the freaks</span>
      </div>

      <section className='nav'>
        <div className='logo'>
          <Icon type='game' size={0.9} />
          <div>Oddx</div>
        </div>
        <div className='menu-links'>
          <ul>
            <li onMouseEnter={() => setTab(0)} className={liClass(0)}>Home.</li>
            <li onMouseEnter={() => setTab(1)} className={liClass(1)}>Gameplay.</li>
            <li onMouseEnter={() => setTab(2)} className={liClass(2)}>Source.</li>
          </ul>
        </div>
      </section>

      <section className='cards'>
        <div className='card-1'>
          <h1>Genetically engineered super-soldiers.</h1>
          <div className='logo'>
            <Icon size={0.23} type='odd' />
            <span>Odd</span>
          </div>
        </div>

        <div className='card-2'>
          <div className='odd'>
            <Icon size={0.35} type='odd' />
            <span>Oddx</span>
          </div>
        </div>
      </section>

      <section className='tagline'>
        <div className='title'>Oddx</div>
        <div className='subtitle'>
          A playful party board game <br /> to mess with your "abnormal" friends.
        </div>
      </section>

      <section className='extra'>
        <div className='ellipse-container'>
          <div className='ellipse thin' />
          <div className='ellipse thick' />
          <div className='ellipse blue' />

          <button className='btn-video'>
            <div className='bubble'>
              <Icon type='play1' size={0.3} />
            </div>
            <div className='pulse' />
          </button>
        </div>
        <div className='circle' />
        <div className='mascot' />
      </section>

      <section
        className={classNames('playnow', { type: input })}
        onClick={() => setInput(true)}
      >
        <i onClick={startGame} />
        <a href='#'>Yo, Play now!!</a>
        <input
          type='text'
          placeholder='Enter username?'
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && startGame()}
        />
      </section>
    </section>
  )
}

export default Div1
