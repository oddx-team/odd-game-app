import React, { Fragment, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { usePlayActions } from 'contexts/PlayContext'
import { SocketContext } from 'contexts/SocketContext'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  NavBar,
  Arrow,
  Logo,
  Text,
  MainText,
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
  const { clearPlaygroundData } = usePlayActions()
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
      clearPlaygroundData()
      window.socket.emit('leave-room', slug)
      history.push(isLoggedIn ? '/rooms' : '/')
    })()
  }

  return (
    <HeaderWrapper>
      <NavBar>
        {!isLoggedIn &&
          <div>
            <Logo />
            <MainText>Oddx</MainText>
          </div>}
        {isLoggedIn &&
          <Fragment key={0}>
            <Arrow onClick={toggleSidebar} sidebar={fullSidebar} />
            <MainText>Oddx</MainText>
            <Text onClick={quitRoom}>Rooms</Text>
            <Text onClick={() => history.push('/view-cards')}>View Cards</Text>
          </Fragment>}
      </NavBar>

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
