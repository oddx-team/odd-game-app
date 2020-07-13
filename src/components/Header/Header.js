import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'

import OddLogo from 'assets/logo.png'
import { HeaderMenu } from '../HeaderMenu'
import {
  HeaderWrapper,
  MainLogo,
  ProfileContainer,
  IconBell,
  IconUser,
  IconSearch,
  StyledInput,
  StyledSearchBar,
  StyledCircleLogo,
  Wrapper
} from './styled'

import Api from 'services'
import { useGameContext, useGameActionsContext } from 'contexts/GameContext'

const HeaderExtra = ({ fullBanner }) => {
  return (
    <div>
      <Wrapper className={classNames({ hidden: !fullBanner })}>
        <StyledSearchBar>
          <IconSearch />
          <StyledInput type='text' placeholder='Search' />
        </StyledSearchBar>
      </Wrapper>

      <Wrapper className={classNames({ hidden: fullBanner })}>
        <StyledCircleLogo>
          <img alt='logo' src={OddLogo} />
        </StyledCircleLogo>
      </Wrapper>
    </div>
  )
}

HeaderExtra.propTypes = {
  fullBanner: PropTypes.bool.isRequired
}

export const Header = () => {
  const { isLoggedIn, fullBanner, username, points } = useGameContext()
  const { login, logoutGame } = useGameActionsContext()
  const history = useHistory()

  useEffect(() => {
    console.log('refetch')
    Api.getMe().then(data => {
      login(data.username)
    }).catch(() => {
      logoutGame()
    })
  }, [login, logoutGame])

  return (
    <HeaderWrapper>
      <MainLogo onClick={() => history.push(isLoggedIn ? '/rooms' : '/')}>
        <img alt='logo' src={OddLogo} />
        <span>Oddx</span>
      </MainLogo>
      <HeaderExtra fullBanner={fullBanner} />

      {isLoggedIn &&
        <div>
          <ProfileContainer>
            <IconBell><i /></IconBell>
            <IconUser alt='Avatar' src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />

            <div className='info'>
              <div className='name'>{username}</div>
              <div className='points'>Points: {points}</div>
            </div>
          </ProfileContainer>
          <HeaderMenu />
        </div>}
    </HeaderWrapper>
  )
}
