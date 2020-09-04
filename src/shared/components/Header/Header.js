import React, { useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  MainTitle,
  Arrow,
  Text,
  ProfileContainer,
  IconBell,
  IconUser
} from './styled'
import Api from 'services'

export const Header = () => {
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const { isLoggedIn, username, points, fullSidebar } = useGameState()
  const { login, logoutGame, toggleSidebar } = useGameActions()
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
      <MainTitle>
        <Arrow onClick={toggleSidebar} sidebar={fullSidebar} />
        <Text onClick={quitRoom}>Oddx</Text>
      </MainTitle>

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
