import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useModalActionsContext } from 'contexts/ModalContext'
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
import { useGameContext, useGameActionsContext } from 'contexts/GameContext'

export const PageLanding = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const { setError } = useModalActionsContext()
  const { login, setBanner } = useGameActionsContext()
  const { isLoggedIn } = useGameContext()
  const { spawnNewSocket } = useContext(SocketContext)

  useEffect(() => {
    setBanner(false)
    if (isLoggedIn) {
      history.push('/rooms')
    }
  }, [history, isLoggedIn, setBanner])

  const startGame = async () => {
    if (!username || username.length < 3) {
      setError('Username must be from three characters!')
      return
    }

    try {
      await Api.registerUsername(username)
      login(username)
      spawnNewSocket()
      history.push('/rooms')
    } catch (err) {
      setError('username is picked already!')
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
