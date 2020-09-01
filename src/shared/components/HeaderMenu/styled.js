import styled from 'styled-components'

import { Button } from 'shared/components/Button'
import { mixin, font, color } from 'shared/utils/styles'
import { imageCDN } from 'mixins'

export const ButtonHamburger = styled(Button)`
  ${imageCDN('icon-hamburger.png', 0.27, 0.27)};
  position: absolute;
  top: 0.19rem;
  right: 0.15rem;
  cursor: pointer;
  transition: background-image 0.25s ease-out;
`

export const MenuContent = styled.div`
  position: relative;
  top: 0.6rem;
  width: 2.2rem;
  height: auto;
  display: none;
  z-index: 2;
  box-shadow: 0 0.02rem 0.02rem 0 rgba(160, 159, 159, 0.2), 
              0 0.03rem 0.08rem 0 rgba(174, 172, 172, 0.19);
  background: #fff;
`

export const LinkItem = styled.div`
  color: ${color.textMenu};
  position: relative;
  display: flex;
  padding: 0.12rem 0 0.12rem 0.15rem;
  text-decoration: none;
  ${mixin.clickable}
  i {
    position: absolute;
    right: 0.1rem;
  }
  &:hover {
    background: ${color.backgroundLighter};
    cursor: pointer;
  }
`

export const LinkText = styled.div`
  ${font.size(0.18)}
`

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0.07rem;
  text-align: left;
  &:hover {
    ${ButtonHamburger} {
      ${imageCDN('icon-close.png', 0.27, 0.27)};
    }
    ${MenuContent} {
      display: block;
    }
  }
`
