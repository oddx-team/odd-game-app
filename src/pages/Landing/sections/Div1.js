import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import { Icon } from 'shared/components/Icon'
import gsap, { Elastic, Back } from 'gsap'
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
    // Intro effects
    gsap.to('.overlay h1', { delay: 0.8, opacity: 0, y: -60 })
    gsap.to('.overlay span', { delay: 1, opacity: 0, y: -60 })
    gsap.to('.overlay', { delay: 1.35, duration: 0.7, top: '-100%', ease: 'expo.easeInOut' })
    gsap.from('.ellipse-container', { delay: 1.65, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })
    gsap.from('.card-1', { delay: 1.75, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })
    gsap.from('.card-2', { delay: 1.75, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })

    gsap.from('.nav .logo', { delay: 1.8, opacity: 0, y: -100, ease: 'expo.easeInOut' })
    gsap.from('.menu-links li', { delay: 2, opacity: 0, x: -100, stagger: 0.08 })
    gsap.from('.scrolldown', { duration: 1, delay: 2.2, opacity: 0, y: -100, ease: 'expo.easeInOut' })
    gsap.from('.title', { duration: 0.4, delay: 2, opacity: 0, x: 200, ease: 'expo.easeInOut' })
    gsap.from('.subtitle', { duration: 0.35, delay: 2.1, opacity: 0, x: 200, ease: 'expo.easeInOut' })
    gsap.from('.playnow', { duration: 0.3, delay: 2.2, opacity: 0, x: 200, ease: 'expo.easeInOut' })
    gsap.from('.btn-video', { duration: 0.3, delay: 2.2, opacity: 0, y: -20, ease: 'expo.easeInOut' })

    // button video
    const tl = gsap.timeline({ repeat: -1, delay: 0.5 })
    tl.to('.bubble', { duration: 0.4, scale: 0.8, rotation: 16, ease: Back.easeOut.config(1.7) })
    tl.to('.pulse', { duration: 0.5, scale: 0.9, opacity: 1, ease: 'back.easeOut' }, '-=0.4')
    tl.to('.bubble', { duration: 1.2, scale: 1, rotation: '-=16', ease: Elastic.easeOut.config(2.5, 0.5) })
    tl.to('.pulse', { duration: 1, scale: 2, opacity: 0, ease: 'expo.easeOut' }, '-=1.2')
  }, [])

  useEffect(() => {
    // parallax effect
    const parallax = document.getElementById('div1')
    const offset = scrollY

    if (parallax) {
      parallax.style.backgroundPositionY = offset * 0.25 + 'px'
    }
  }, [scrollY])

  const startEffect = () => {
    gsap.to('.playnow', { x: '-0.5rem', duration: 0.3, ease: 'expo.easeInOut' })
    gsap.to('.playnow', { x: '5rem', duration: 0.5, ease: 'expo.easeInOut', delay: 0.3 })
  }

  const retryEffect = () => {
    gsap.to('.playnow', { x: 0, duration: 0.5, ease: 'expo.easeInOut', delay: 0.3 })
  }

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

  return (
    <section id='div1'>
      <div className='overlay'>
        <h1>Oddx</h1>
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
          A playful party board game <br /> to mess with your freaky friends.
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
        <div className='circle' id='scene' />
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
