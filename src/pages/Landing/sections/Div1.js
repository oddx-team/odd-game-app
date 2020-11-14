import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Icon } from 'shared/components/Icon'
import { introAnimation, pulseAnimation, startAnimation, retryAnimation } from './Animate'
import toast from 'shared/utils/toast'
import classNames from 'classnames'

import { register } from 'features/gameSlice'
import './Div1.scss'

const Div1 = () => {
  const history = useHistory()
  const dispatch = useDispatch()
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
      await startAnimation()
      dispatch(register(username))

      history.push('/rooms')
    } catch (err) {
      retryAnimation()
      toast.error(err.response?.data?.msg || 'error-message')
    }
  }

  const liClass = (id) => {
    return classNames({ active: tab === id })
  }

  return (
    <section id='div1'>
      <div className='overlay'>
        <div className='logo' />
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
        <div>Yo, Play now!!</div>
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
