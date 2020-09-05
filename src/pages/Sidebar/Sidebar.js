import React from 'react'
import { useGameState } from 'contexts/GameContext'
import { Icon } from 'shared/components/Icon'
import {
  GameSidebar,
  Header,
  Footer,
  Section,
  LinkItem,
  LinkSubItem,
  LinkText,
  Character,
  Divider,
  OddLogo
} from './styled'

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

      <Section>
        <LinkItem className='children'>
          <Icon type='story' />
          <LinkText>Rooms</LinkText>
        </LinkItem>
        <LinkSubItem>
          <Character>G</Character>
          <LinkText>Global</LinkText>
        </LinkSubItem>
        <LinkSubItem>
          <Character>V</Character>
          <LinkText>Vietnam</LinkText>
        </LinkSubItem>
      </Section>

      <Footer>
        <Icon type='settings' />
        <LinkText>Settings</LinkText>
      </Footer>
    </GameSidebar>
  )
}

export default Sidebar
