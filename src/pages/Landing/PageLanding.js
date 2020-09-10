import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import { Loading } from 'shared/components/Loading'
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
import toast from 'shared/utils/toast'

export const PageLanding = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const { login, setBanner } = useGameActions()
  const { isLoggedIn } = useGameState()
  const { spawnNewSocket } = useContext(SocketContext)

  useEffect(() => {
    setBanner(false)
    if (isLoggedIn) {
      history.push('/rooms')
    }
  }, [history, isLoggedIn, setBanner])

  const startGame = async () => {
    if (!username || username.length < 3) {
      toast.error('username_len_short')
      return
    }

    try {
      await Api.registerUsername(username)
      login(username)
      spawnNewSocket()
      toast.success('login_successful')

      history.push('/rooms')
    } catch (err) {
      toast.error('username_picked')
    }
  }

  return (
    <LandingWrapper>
      {isLoggedIn && <Loading />}
      {!isLoggedIn &&
        <div>
          <Logo />
          <LeftOverlay />
          <RightOverlay />

          <Container>
            <Title>Play now</Title>
            <StyledNamePanel>
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
