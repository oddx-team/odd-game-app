import styled from 'styled-components'

import { Button } from 'shared/components/Button'
import { imageCDN } from 'mixins'

export const HamburgerButton = styled(Button)`
  ${imageCDN('icon-hamburger.png', '0.27rem', '0.27rem')};
  position: absolute;
  top: 0.19rem;
  right: 0.15rem;
  cursor: pointer;
  transition: background-image 0.25s ease-out;
`

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0.07rem;
  text-align: left;

  &:hover ${HamburgerButton} {
    ${imageCDN('icon-close.png', '0.27rem', '0.27rem')}; 
  }
`
