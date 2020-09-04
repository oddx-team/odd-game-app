import styled from 'styled-components'
import { color, sizes, mixin, font } from 'shared/utils/styles'
import bgSidebar from '../../assets/bg-sidebar.jpg'

export const GameSidebar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => (props.open ? sizes.sizeBarWidthOpen : sizes.sizeBarWidth)}rem;
  border-right: 1px solid ${color.borderLightest};
  transition: width 0.35s;
  ${mixin.scrollableY}
  ${mixin.boxShadowMedium}
  ${mixin.customScrollbar()}
  ${mixin.backgroundImage(bgSidebar)}

  &::before {
    ${mixin.cover}
    content: '';
    background: rgba(0, 0, 0, 0.75);
  }

  &:hover {
    width: 2.6rem;
  }
`

export const Divider = styled.div`
  padding-top: 0.05rem;
  border-top: 0.01rem solid ${color.borderDark};
  margin: 0.05rem 0.15rem 0;
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
    margin-right: 0.18rem;
    font-size: 0.35rem;
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
  ${font.size(0.18)}
  margin-top: 0.07rem;
  width: 2rem;
  position: absolute;
  left: 0.7rem;
  text-align: left;
`

export const Header = styled(LinkItem)`
  ${LinkText} {
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    ${font.size(0.19)}
  }
`

export const OddLogo = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.18rem;
`
