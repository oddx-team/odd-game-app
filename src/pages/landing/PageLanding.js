import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useModal } from 'hooks'

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
import { useGameContext, useGameActionsContext } from 'contexts/GameContext'

export const PageLanding = () => {
  const { isLoggedIn } = useGameContext()
  const { login, setBanner } = useGameActionsContext()

  const [username, setUsername] = useState('')
  const HookModal = useModal()
  const history = useHistory()

  useEffect(() => {
    setBanner(false)
    if (isLoggedIn) {
      history.push('/rooms')
    }
  }, [history, isLoggedIn])

  const startGame = async () => {
    if (!username || username.length < 3) {
      HookModal.setError('Username must be from three characters!')
      return
    }

    try {
      await Api.registerUsername(username)
      login(username)
      history.push('/rooms')
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
