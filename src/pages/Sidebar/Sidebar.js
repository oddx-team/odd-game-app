import React from 'react'
import { useGameState } from 'contexts/GameContext'
import { GameSidebar, Header, Footer, LinkItem, LinkText, Divider, OddLogo } from './styled'
import { Icon } from 'shared/components/Icon'
import Logo from 'assets/logo.png'

const Sidebar = () => {
  const { fullSidebar } = useGameState()
  return (
    <GameSidebar open={fullSidebar}>
      <Header>
        <OddLogo alt='logo' src={Logo} />
        <LinkText>ODD Card Game</LinkText>
      </Header>
      <Divider />

      <LinkItem>
        <Icon type='search' />
        <LinkText>Search</LinkText>
      </LinkItem>
      <LinkItem>
        <Icon type='calendar' />
        <LinkText>Rooms</LinkText>
      </LinkItem>

      <Footer>
        <Icon type='settings' />
        <LinkText>Settings</LinkText>
      </Footer>
    </GameSidebar>
  )
}

export default Sidebar
