import styled from 'styled-components'

import { color, sizes, mixin, font } from 'shared/utils/styles'

export const GameSidebar = styled.div`
  position: fixed;
  z-index: 1;
  top: ${sizes.bannerHeight}rem;
  left: 0;
  height: 100vh;
  width: ${sizes.sizeBarWidth}rem;
  background: ${color.backgroundMenuDark};
  border-right: 1px solid ${color.borderLightest};
  ${mixin.scrollableY}
  ${mixin.boxShadowMedium}
  ${mixin.customScrollbar()}
`

export const Divider = styled.div`
  margin-top: 0.05rem;
  padding-top: 0.05rem;
  border-top: 0.01rem solid ${color.borderLight};
`

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 0.12rem 0rem 0.12rem 0.2rem;
  text-decoration: none;
  color: ${color.textMenuSidebar};
  ${mixin.clickable}
  
  i {
    position: relative;
    top: -0.03rem;
    margin-right: 0.1rem;
    font-size: 0.23rem;
  }
  &:hover {
    cursor: pointer;
    color: #0477BD;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0.04rem;
      height: 100%;
      background: #0477BD;
    }
  }

  &.active {
    color: ${color.primary};
    background: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`

export const LinkText = styled.div`
  ${font.size(0.17)}
`
