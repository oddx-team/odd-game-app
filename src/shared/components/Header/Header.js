import React, { useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { SocketContext } from 'shared/contexts/SocketContext'

import OddLogo from 'assets/logo.png'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  MainLogo,
  ProfileContainer,
  IconBell,
  IconUser
} from './styled'

import Api from 'shared/services'
import { useGameState, useGameActions } from 'shared/contexts/GameContext'

export const Header = () => {
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const { isLoggedIn, username, points } = useGameState()
  const { login, logoutGame } = useGameActions()
  const history = useHistory()

  useEffect(() => {
    Api.getMe().then(data => {
      login(data.username)
    }).catch(() => {
      logoutGame()
    })
  }, [login, logoutGame])

  useEffect(() => {
    window.socket = socket
  }, [socket])

  const quitRoom = () => {
    (() => {
      window.socket.emit('leave-room', slug)
      history.push(isLoggedIn ? '/rooms' : '/')
    })()
  }

  return (
    <HeaderWrapper>
      <MainLogo onClick={quitRoom}>
        <img alt='logo' src={OddLogo} />
        <span>Oddx</span>
      </MainLogo>

      {isLoggedIn &&
        <div>
          <ProfileContainer>
            <IconBell><i /></IconBell>
            <IconUser alt='Avatar' src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />

            <div className='info'>
              <div className='name'>{username}</div>
              <div className='points'>Points: {points}</div>
            </div>
          </ProfileContainer>
          <HeaderMenu />
        </div>}
    </HeaderWrapper>
  )
}
