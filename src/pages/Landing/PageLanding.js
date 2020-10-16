import React, { useEffect, useState } from 'react'
import { useGameState } from 'contexts/GameContext'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'
import Div3 from './sections/Div3'
import Div4 from './sections/Div4'
import Div5 from './sections/Div5'

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
          <Div1 scrollY={scrollY} /> {/* Animation */}
          <Div2 />                   {/* Introduction */}
          <Div3 />                   {/* Gameplay */}
          <Div4 />                   {/* Opensource */}
          <Div5 />                   {/* Footer */}
        </div>
      )}
    </LandingWrapper>
  )
}
