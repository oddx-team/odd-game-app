import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useModal, useGame } from 'hooks'

import { Loading } from 'components/Loading'
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

export const PageLanding = () => {
  const [username, setUsername] = useState('')
  const HookModal = useModal()
  const HookGame = useGame()
  const History = useHistory()
  const { isLoggedIn } = HookGame

  useEffect(() => {
    HookGame.setBanner(false)
    if (isLoggedIn) {
      History.push('/rooms')
    }
  }, [isLoggedIn])

  const startGame = async () => {
    if (!username || username.length < 3) {
      HookModal.setError('Username must be from three characters!')
      return
    }

    try {
      await Api.registerUsername(username)
      HookGame.login(username)
      History.push('/rooms')
    } catch (err) {
      HookModal.setError('username is picked already!')
    }
  }

  return (
    <LandingWrapper>
      {isLoggedIn === null && <Loading />}
      {isLoggedIn === false &&
        <div>
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
                onChange={e => setUsername(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && startGame()}
              />
            </StyledNamePanel>
            <ButtonStart className='block blue' onClick={() => startGame()}>
              <span>Start</span>
            </ButtonStart>
          </Container>
        </div>}

    </LandingWrapper>
  )
}
