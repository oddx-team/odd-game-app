import React, { useContext } from 'react'
import { useHistory, NavLink, useRouteMatch } from 'react-router-dom'

import { Icon } from 'shared/components/Icon'
import { useGameActions } from 'shared/contexts/GameContext'
import { useModalActions } from 'shared/contexts/ModalContext'
import { SocketContext } from 'shared/contexts/SocketContext'
import {
  StyledMenu,
  ButtonHamburger,
  MenuContent,
  LinkItem,
  LinkText
} from './styled'
import Api from 'shared/services'

export const HeaderMenu = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const { closeSocket } = useContext(SocketContext)
  const { logoutGame } = useGameActions()
  const { setError } = useModalActions()

  const logout = async () => {
    try {
      await Api.logout()
      history.push('/')
      logoutGame()
      closeSocket()
    } catch (err) {
      setError('Something went wrong!')
    }
  }

  return (
    <StyledMenu>
      <ButtonHamburger />

      <MenuContent>
        {renderLinkItem(match, 'Profile', 'task')}
        {renderLinkItem(match, 'View all cards', 'link', '/view-cards')}
        {renderLinkItem(match, 'View rooms', 'attach', '/rooms')}
        <LinkItem onClick={logout}>
          <Icon type='close' />
          <LinkText>Logout</LinkText>
        </LinkItem>
      </MenuContent>
    </StyledMenu>
  )
}

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path
  const matchPath = match.path !== '/' ? match.path : ''

  const linkItemProps = isImplemented
    ? { as: NavLink, exact: true, to: `${matchPath}${path}` }
    : { as: 'div' }

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
    </LinkItem>
  )
}

export default HeaderMenu
