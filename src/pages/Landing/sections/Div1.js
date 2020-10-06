import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import gsap from 'gsap'
import Api from 'services'
import toast from 'shared/utils/toast'
import './Div1.scss'

const Div1 = () => {
  const history = useHistory()
  const { login } = useGameActions()
  const { createSocket } = useContext(SocketContext)
  const [username, setUsername] = useState('')
  const [input, setInput] = useState(false)

  useEffect(() => {
    gsap.to('.overlay h1', { delay: 0.8, opacity: 0, y: -60 })
    gsap.to('.overlay span', { delay: 1, opacity: 0, y: -60 })
    gsap.to('.overlay', { delay: 1.35, duration: 0.7, top: '-100%', ease: 'expo.easeInOut' })
    gsap.from('.logo', { delay: 1.8, opacity: 0, y: -100, ease: 'expo.easeInOut' })
    gsap.from('.menu-links ul li', {
      delay: 2,
      opacity: 0,
      x: -100,
      ease: 'expo.easeInOut',
      stagger: 0.08
    })
    gsap.from('.scrolldown', {
      duration: 1,
      delay: 2.2,
      opacity: 0,
      y: -100,
      ease: 'expo.easeInOut'
    })
    gsap.from('.tagline .title', {
      duration: 0.4,
      delay: 2,
      opacity: 0,
      x: 200,
      ease: 'expo.easeInOut'
    })
    gsap.from('.tagline .subtitle', {
      duration: 0.35,
      delay: 2.1,
      opacity: 0,
      x: 200,
      ease: 'expo.easeInOut'
    })
    gsap.from('.playnow', {
      duration: 0.3,
      delay: 2.2,
      opacity: 0,
      x: 200,
      ease: 'expo.easeInOut'
    })
  }, [])

  const startGame = async () => {
    if (!username || username.length < 3) {
      toast.error('username_len_short')
      return
    }

    try {
      await Api.registerUsername(username)
      login(username)
      createSocket()
      toast.success('login_success')

      history.push('/rooms')
    } catch (err) {
      toast.error('username_picked')
    }
  }

  return (
    <section id='div1'>
      <div className='overlay'>
        <h1>Oddx</h1>
        <span>A party game for the freaks</span>
      </div>

      <div className='nav'>
        <div className='logo'>
          <div>Odd</div>
          <div>Game</div>
        </div>
        <div className='menu-links'>
          <ul>
            <li>Home.</li>
            <li>Gameplay.</li>
            <li>Source.</li>
          </ul>
        </div>
        <div className='scrolldown'>scroll</div>
      </div>

      <div className='tagline'>
        <div className='title'>Oddx</div>
        <div className='subtitle'>
          A playful party board game <br /> to mess with your freaky friends.
        </div>
      </div>

      <div className='playnow' onClick={() => setInput(true)}>
        <i onClick={startGame} />
        {!input && <a href='#'>Yo, Play now!!</a>}
        {input &&
          <input
            type='text'
            placeholder='Enter username?'
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && startGame()}
          />}
      </div>
    </section>
  )
}

export default Div1
