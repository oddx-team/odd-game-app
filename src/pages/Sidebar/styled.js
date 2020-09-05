import styled from 'styled-components/macro'
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
    width: ${sizes.sizeBarWidthOpen}rem;
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
  padding: 0.12rem 0rem 0.12rem 0.28rem;
  text-decoration: none;
  color: ${color.textMenuSidebar};
  ${mixin.clickable}
  
  i {
    position: relative;
    top: -0.03rem;  
    margin-right: 0.18rem;
    font-size: 0.35rem;
  }

  &::before {
    ${mixin.cover} 
    content: '';
    background: #fff;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    height: 94%;
    width: 2.45rem;
    opacity: 0;
    transition: opacity 0.4s;
    border-radius: 0.07rem;
  }

  &:hover {
    color: #fff;
    &::before {
      ${mixin.cover}
      opacity: 0.2;
    }
  }

  &.active {
    color: ${color.primary};
    background: red;
    i {
      color: ${color.primary};
    }
  }
`

export const LinkText = styled.div`
  ${font.size(0.16)}
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 0.07rem;
  width: 2.6rem;
  position: absolute;
  left: 0.82rem;
  text-align: left;
`

export const Header = styled(LinkItem)`
  pointer-events: none;
  ${LinkText} {
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    ${font.size(0.19)}
  }
`

export const Footer = styled(LinkItem)`
  position: absolute;
  bottom: 0.2rem;
`

export const OddLogo = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.18rem;
`
