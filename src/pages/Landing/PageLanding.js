import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loading } from 'shared/components/Loading'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'
import Div3 from './sections/Div3'
import Div4 from './sections/Div4'
import Div5 from './sections/Div5'

const Landing = ({ history }) => {
  const isLoggedIn = useSelector(state => state.game.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/rooms/lala')
    }
  }, [isLoggedIn, history])

  return (
    <LandingWrapper>
      {isLoggedIn && <Loading />}
      {!isLoggedIn && (
        <div>
          <Div1 /> {/* Animation */}
          <Div2 />                   {/* Introduction */}
          <Div3 />                   {/* Gameplay */}
          <Div4 />                   {/* Opensource */}
          <Div5 />                   {/* Footer */}
        </div>
      )}
    </LandingWrapper>
  )
}

export const PageLanding = React.memo(Landing)
