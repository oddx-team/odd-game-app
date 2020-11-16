import React from 'react'
import { LandingWrapper } from './styled'
import Div1 from './sections/Div1'
import Div2 from './sections/Div2'
import Div3 from './sections/Div3'
import Div4 from './sections/Div4'
import Div5 from './sections/Div5'

const Landing = () => {
  return (
    <LandingWrapper>
      <div>
        <Div1 /> {/* Animation */}
        <Div2 /> {/* Introduction */}
        <Div3 /> {/* Gameplay */}
        <Div4 /> {/* Opensource */}
        <Div5 /> {/* Footer */}
      </div>
    </LandingWrapper>
  )
}

export const PageLanding = React.memo(Landing)
