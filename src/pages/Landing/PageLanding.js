import React, { useEffect, useState } from 'react'
import { useGameState } from 'contexts/GameContext'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'

export const PageLanding = ({ history }) => {
  const { isLoggedIn } = useGameState()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/rooms')
    }
  }, [isLoggedIn, history])

  const handleScroll = (e) => {
    const { scrollTop } = e.target
    setScrollY(scrollTop)
  }

  return (
    <LandingWrapper onScroll={handleScroll}>
      {isLoggedIn && <Loading />}
      {!isLoggedIn && (
        <div>
          <Div1 scrollY={scrollY} />
          <Div2 />
        </div>
      )}
    </LandingWrapper>
  )
}
