import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { SocketContext } from 'contexts/SocketContext'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
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
      toast.success('login_success')

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
          <Div1 />
          <Div1 />
          <Div1 />
        </div>}

    </LandingWrapper>
  )
}
