import React from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from 'shared/components/Icon'
import {
  GameSidebar,
  Footer,
  LinkItem,
  ButtonCreate,
  OddLogo,
  IconImage
} from './styled'

import Logo from 'assets/oddx-logo.png'
import IconCards from 'assets/icon-cards.png'
import IconContribute from 'assets/icon-contribute.png'

const Sidebar = () => {
  const history = useHistory()

  return (
    <GameSidebar>
      <OddLogo alt='logo' src={Logo} />

      <ButtonCreate>
        <Icon type='plus' size={0.4} />
      </ButtonCreate>
      <LinkItem className='selected'>
        <Icon type='home' size={0.35} />
      </LinkItem>
      <LinkItem>
        <IconImage src={IconCards} />
      </LinkItem>
      <LinkItem>
        <IconImage src={IconContribute} />
      </LinkItem>

      <Footer onClick={() => history.push('/settings')}>
        <Icon type='setting' size={0.42} left={-0.03} />
      </Footer>
    </GameSidebar>
  )
}

export default Sidebar
