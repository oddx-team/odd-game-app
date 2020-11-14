import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  NavBar,
  Text,
  ProfileContainer,
  IconBell,
  IconUser
} from './styled'

import { selectHeaderInfo, playerUpdated, logoutGame } from 'features/gameSlice'
import Api from 'services'

export const Header = () => {
  const dispatch = useDispatch()
  const { username, headerTitle, isLoggedIn } = useSelector(selectHeaderInfo)
  const [openMenu, setOpenMenu] = useState()
  const history = useHistory()

  const firstChar = () => {
    if (typeof username !== 'string') return ''
    return username.charAt(0).toUpperCase()
  }

  useEffect(() => {
    Api.getMe().then(data => {
      dispatch(playerUpdated(data.username))
    }).catch(() => {
      dispatch(logoutGame())
    })
  }, [dispatch])

  const quitRoom = () => {
    (() => {
      history.push(isLoggedIn ? '/rooms' : '/')
    })()
  }

  return (
    <HeaderWrapper show={isLoggedIn}>
      <NavBar>
        {!isLoggedIn && <div />}
        {isLoggedIn &&
          <Fragment key={0}>
            <Text onClick={quitRoom}>{headerTitle}</Text>
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
