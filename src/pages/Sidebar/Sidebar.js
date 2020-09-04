import React from 'react'

import { GameSidebar, Header, LinkItem, LinkText, Divider, OddLogo } from './styled'
import { Icon } from 'shared/components/Icon'
import Logo from 'assets/logo.png'

const Sidebar = () => {
  return (
    <GameSidebar>
      <Header>
        <OddLogo alt='logo' src={Logo} />
        <LinkText>ODD Card Game</LinkText>
      </Header>
      <Divider />

      <LinkItem>
        <Icon type='calendar' />
        <LinkText>Rooms</LinkText>
      </LinkItem>
      <LinkItem>
        <Icon type='settings' />
        <LinkText>Game Settings</LinkText>
      </LinkItem>
    </GameSidebar>
  )
}

export default Sidebar
