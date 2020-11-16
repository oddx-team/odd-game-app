import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, NavLink, useRouteMatch } from 'react-router-dom'
import { Icon } from 'shared/components/Icon'
import {
  StyledMenu,
  MenuContent,
  LinkItem,
  LinkText
} from './styled'
import { logoutGame } from 'features/gameSlice'
import toast from 'shared/utils/toast'

export const HeaderMenu = ({ open }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()

  const logout = async () => {
    try {
      dispatch(logoutGame())
      history.push('/')
    } catch (err) {
      toast.error(err.response?.data?.msg || 'error-message')
    }
  }

  return (
    <StyledMenu open={open}>
      <MenuContent>
        {renderLinkItem(match, 'Profile', 'face-cool')}
        <LinkItem onClick={logout}>
          <Icon type='outside' />
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
