import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { GameContext } from 'contexts/GameContext'

import OddLogo from 'assets/logo.png'
import {
  HeaderWrapper,
  MainLogo,
  ProfileContainer,
  IconBell,
  IconUser,
  ButtonMenu,
  IconSearch,
  StyledInput,
  StyledSearchBar,
  StyledCircleLogo,
  Wrapper
} from './styled'
import Api from 'services'

const HeaderExtra = ({ fullBanner }) => {
  return (
    <div>
      <Wrapper className={classNames({ hidden: !fullBanner })}>
        <ButtonMenu />

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

const Header = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(GameContext)
  const { fullBanner } = state

  useEffect(
    () => {
      Api.getMe()
        .then(data => {
          const { username } = data
          dispatch({
            type: 'UPDATE_LOGIN',
            isLoggedIn: true,
            username
          })
        })
        .catch(() => {
          dispatch({
            type: 'UPDATE_LOGIN',
            isLoggedIn: false,
            username: null
          })
        })
    },
    [dispatch]
  )

  return (
    <HeaderWrapper>
      <MainLogo onClick={() => history.push(state.isLoggedIn ? '/rooms' : '/')}>
        <img alt='logo' src={OddLogo} />
        <span>Oddx</span>
      </MainLogo>
      <HeaderExtra fullBanner={fullBanner} />

      <ProfileContainer>
        <IconBell>
          <i />
        </IconBell>

        <IconUser alt='Avatar' src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
        <div className='info'>
          <div className='name'>winner</div>
          <div className='points'>Points: 10.000</div>
        </div>
      </ProfileContainer>
    </HeaderWrapper>
  )
}

HeaderExtra.propTypes = {
  fullBanner: PropTypes.bool.isRequired
}

export default Header
