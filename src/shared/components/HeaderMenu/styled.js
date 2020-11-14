import styled, { css } from 'styled-components/macro'
import { mixin, font, color, sizes } from 'shared/utils/styles'

export const MenuContent = styled.div`
  ${mixin.boxShadow}
  position: relative;
  top: ${sizes.bannerHeight}rem;
  width: 2.2rem;
  height: auto;
  display: none;
  z-index: 2;
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
  right: 0.1rem;
  text-align: left;
  &:hover {
    ${MenuContent} {
      display: block;
    }
  }

  ${MenuContent} {
    ${props => props.open && css`display: block;`}
  }
`
