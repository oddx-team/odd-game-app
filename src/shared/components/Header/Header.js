import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHeaderInfo } from 'features/gameSlice'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  NavBar,
  Text,
  ProfileContainer,
  IconBell,
  IconUser
} from './styled'
import utils from 'utils'

export const Header = () => {
  const { username, headerTitle } = useSelector(selectHeaderInfo)
  const [openMenu, setOpenMenu] = useState()

  return (
    <HeaderWrapper>
      <NavBar>
        <Text>{headerTitle}</Text>
      </NavBar>

      <ProfileContainer>
        <IconBell type='bell' size={0.21} />
        <IconUser
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          {utils.firstChar(username)}
        </IconUser>
      </ProfileContainer>
      <HeaderMenu open={openMenu} />
    </HeaderWrapper>
  )
}
