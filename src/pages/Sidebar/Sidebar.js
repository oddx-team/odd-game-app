import React from 'react'

import { GameSidebar, LinkItem, LinkText } from './styled'
import { Icon } from 'shared/components/Icon'

const Sidebar = () => {
  return (
    <GameSidebar>
      <LinkItem>
        <Icon type='component' />
        <LinkText>Regions</LinkText>
      </LinkItem>
      <LinkItem>
        <Icon type='settings' />
        <LinkText>Game settings</LinkText>
      </LinkItem>
    </GameSidebar>
  )
}

export default Sidebar
