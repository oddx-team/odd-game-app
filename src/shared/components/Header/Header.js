import React, { Fragment, useEffect, useContext, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { usePlayActions } from 'contexts/PlayContext'
import { SocketContext } from 'contexts/SocketContext'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  NavBar,
  Text,
  ProfileContainer,
  IconBell,
  IconUser
} from './styled'
import Api from 'services'

export const Header = () => {
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const { isLoggedIn, username } = useGameState()
  const { login, logoutGame } = useGameActions()
  const { clearPlaygroundData } = usePlayActions()
  const [openMenu, setOpenMenu] = useState()
  const history = useHistory()

  const firstChar = () => {
    if (typeof username !== 'string') return ''
    return username.charAt(0).toUpperCase()
  }

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
    <HeaderWrapper show={isLoggedIn}>
      <NavBar>
        {!isLoggedIn && <div />}
        {isLoggedIn &&
          <Fragment key={0}>
            <Text onClick={quitRoom}>Game rooms</Text>
          </Fragment>}
      </NavBar>

      {isLoggedIn &&
        <div>
          <ProfileContainer>
            <IconBell type='bell' size={0.21} />
            <IconUser
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >{firstChar()}
            </IconUser>
          </ProfileContainer>
          <HeaderMenu open={openMenu} />
        </div>}
    </HeaderWrapper>
  )
}
