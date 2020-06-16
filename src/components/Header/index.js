import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { GameContext } from 'contexts/GameContext'
import { ModalContext } from 'contexts/ModalContext'

import OddLogo from 'assets/logo.png'
import HeaderMenu from '../HeaderMenu'
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
  const { modalState, modalDispatch } = useContext(ModalContext)
  const { fullBanner } = state
  const { openMenu } = modalState

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

  const toggleMenu = () => {
    modalDispatch({
      type: 'UPDATE_OPEN_MENU',
      openMenu: !openMenu
    })
  }

  return (
    <HeaderWrapper>
      <MainLogo onClick={() => history.push(state.isLoggedIn ? '/rooms' : '/')}>
        <img alt='logo' src={OddLogo} />
        <span>Oddx</span>
      </MainLogo>
      <HeaderExtra fullBanner={fullBanner} />

      {state.isLoggedIn &&
        <div>
          <ProfileContainer>
            <IconBell>
              <i />
            </IconBell>

            <IconUser alt='Avatar' src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
            <div className='info'>
              <div className='name'>{state.username}</div>
              <div className='points'>Points: {state.points}</div>
            </div>
          </ProfileContainer>
          <ButtonMenu onClick={() => toggleMenu()} />
        </div>}
      <HeaderMenu />
    </HeaderWrapper>
  )
}

HeaderExtra.propTypes = {
  fullBanner: PropTypes.bool.isRequired
}

export default Header
