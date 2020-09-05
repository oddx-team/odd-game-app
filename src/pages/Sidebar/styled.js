import styled from 'styled-components/macro'
import { color, sizes, mixin, font } from 'shared/utils/styles'
import bgSidebar from '../../assets/bg-sidebar.jpg'
import arrowDown from '../../assets/icon-arrow-down-small.png'

export const Divider = styled.div`
  padding-top: 0.05rem;
  border-top: 0.01rem solid ${color.borderDark};
  margin: 0.05rem 0.15rem 0;
`

export const LinkItem = styled.a`
  position: relative;
  display: flex;
  padding: 0.12rem 0rem 0.12rem 0.25rem;
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
    height: 92%;
    width: 2.45rem;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 0.07rem;
  }

  &:hover,
  &.children {
    color: #fff;
    &::before {
      ${mixin.cover}
      opacity: 0.28;
    }
  }

  &.children::after {
    content: '';
    position: absolute;
    top: 0.22rem;
    right: 0.2rem;
    width: 0.15rem;
    height: 0.15rem;
    ${mixin.backgroundImage(arrowDown)}
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

// Sub-items
export const Section = styled.div``

export const Character = styled.div`
  text-transform: uppercase;
  position: relative;
  top: 0.05rem;
  left: 0.12rem;
  ${font.size(0.2)}
`

export const LinkSubItem = styled(LinkItem)`
  margin-top: -0.1rem;
  margin-bottom: 0.03rem;
  &:hover::before {
    opacity: 0.15;
  }
  &::before {
    margin-top: 0.08rem;
    height: 0.45rem;
  }
  ${LinkText} {
    text-transform: none;
    font-weight: normal;
    ${font.size(0.17)}
  }
`

export const OddLogo = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  margin-right: 0.18rem;
`

export const GameSidebar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => (props.open ? sizes.sizeBarWidthOpen : sizes.sizeBarWidth)}rem;
  width: ${props => !props.show && 0}rem;
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
    ${LinkItem}::before {
      width: 2.45rem;
    }
    ${LinkItem}::after {
      opacity: 1;
    }
  }

  ${LinkItem} {
    &::before {
      width: ${props => (props.open ? 2.45 : 0.63)}rem; 
    }
    &::after {
      transition: opacity 0.4s;
      opacity: ${props => props.open ? 1 : 0};
    }
  }
`
