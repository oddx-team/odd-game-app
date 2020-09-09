import React, { useContext } from 'react'
import { useHistory, NavLink, useRouteMatch } from 'react-router-dom'

import { Icon } from 'shared/components/Icon'
import { useGameActions } from 'contexts/GameContext'
import { useModalActions } from 'contexts/ModalContext'
import { SocketContext } from 'contexts/SocketContext'
import {
  StyledMenu,
  ButtonHamburger,
  MenuContent,
  LinkItem,
  LinkText
} from './styled'
import Api from 'services'

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
        {renderLinkItem(match, 'Profile', 'story')}
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
