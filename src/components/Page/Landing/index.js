import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GameContext } from 'contexts/GameContext'

import {
  LandingWrapper,
  Logo,
  LeftOverlay,
  RightOverlay,
  Container,
  StyledNamePanel,
  TextInput,
  ButtonStart,
  Title
} from './styled'
import Api from 'services'

const PageLanding = () => {
  const [username, setusername] = useState('')
  const history = useHistory()
  const { state, dispatch } = useContext(GameContext)

  const startGame = async () => {
    if (!username) return

    try {
      await Api.registerUsername(username)
      dispatch({
        type: 'UPDATE_LOGIN',
        isLoggedIn: true,
        username
      })
      history.push('/rooms')
    } catch (err) {
      // Insert error: username is picked
    }
  }

  useEffect(
    () => {
      dispatch({
        type: 'SET_FULL_BANNER',
        fullBanner: false
      })
    },
    [dispatch]
  )

  useEffect(
    () => {
      if (state.isLoggedIn) {
        history.push('/rooms')
      }
    },
    [state.isLoggedIn]
  )

  return (
    <LandingWrapper>
      <Logo />
      <LeftOverlay />
      <RightOverlay />

      <Container>
        <Title>Play now</Title>
        <StyledNamePanel className='wrapper block'>
          <TextInput
            type='text'
            placeholder='Enter your name'
            value={username}
            onChange={e => setusername(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && startGame()}
          />
        </StyledNamePanel>
        <ButtonStart className='block blue' onClick={() => startGame()}>
          <span>Start</span>
        </ButtonStart>
      </Container>
    </LandingWrapper>
  )
}

export default PageLanding
