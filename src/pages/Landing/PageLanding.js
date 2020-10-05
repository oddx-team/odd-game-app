import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGameState, useGameActions } from 'contexts/GameContext'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'

export const PageLanding = () => {
  const history = useHistory()
  const { setBanner } = useGameActions()
  const { isLoggedIn } = useGameState()

  useEffect(
    () => {
      setBanner(false)
      if (isLoggedIn) {
        history.push('/rooms')
      }
    },
    [history, isLoggedIn, setBanner]
  )

  return (
    <LandingWrapper>
      {isLoggedIn && <Loading />}
      {!isLoggedIn && (
        <div>
          <Div1 />
          <Div2 />
          <Div2 />
          <Div2 />
        </div>
      )}
    </LandingWrapper>
  )
}
