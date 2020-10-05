import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import Api from 'services'
import toast from 'shared/utils/toast'
import './Div1.scss'

const Div1 = () => {
  const history = useHistory()
  const { login } = useGameActions()
  const { spawnNewSocket } = useContext(SocketContext)
  const [username, setUsername] = useState('')
  const [input, setInput] = useState(false)

  const startGame = async () => {
    if (!username || username.length < 3) {
      toast.error('username_len_short')
      return
    }

    try {
      await Api.registerUsername(username)
      login(username)
      spawnNewSocket()
      toast.success('login_success')

      history.push('/rooms')
    } catch (err) {
      toast.error('username_picked')
    }
  }

  return (
    <section id='div1'>
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
        {!input && <a href='#'>Play now!</a>}
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
