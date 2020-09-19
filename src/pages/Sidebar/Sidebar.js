import React from 'react'
import { useGameState } from 'contexts/GameContext'
import { useHistory } from 'react-router-dom'
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
  Divider
} from './styled'

const Sidebar = () => {
  const history = useHistory()
  const { fullSidebar, isLoggedIn } = useGameState()

  return (
    <GameSidebar open={fullSidebar} show={isLoggedIn}>
      <Header>
        <Icon type='odd' />
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

      <Footer onClick={() => history.push('/settings')}>
        <Icon type='setting' />
        <LinkText>Settings</LinkText>
      </Footer>
    </GameSidebar>
  )
}

export default Sidebar
