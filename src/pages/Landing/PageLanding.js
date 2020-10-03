import React, { useEffect } from 'react'
import { useGameState } from 'contexts/GameContext'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'

export const PageLanding = ({ history }) => {
  const { isLoggedIn } = useGameState()

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/rooms')
    }
  }, [isLoggedIn, history])

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
