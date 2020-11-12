import styled from 'styled-components/macro'
import { sizes, mixin } from 'shared/utils/styles'

export const GameSidebar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${sizes.sizeBarWidth};
  transition: width 0.35s, opacity 0.2s;
  background: #fff;
  ${mixin.scrollableY}
  ${mixin.customScrollbar()}
  padding-top: 0.6rem;
`

export const OddLogo = styled.img`
  position: fixed;
  top: 0.1rem;
  left: 0.08rem;
  width: 0.7rem;
  height: 0.35rem;
`

export const LinkItem = styled.a`
  position: relative;
  display: flex;
  padding: 0.1rem 0rem 0rem 0.25rem;
  text-decoration: none;
  color: #585859;
  ${mixin.clickable}
  ${mixin.size(0.53, 0.53)}
  margin-bottom: 0.03rem;
  
  i {
    position: relative;
    top: -0.03rem;  
    margin-right: 0.18rem;
    color: #585859;
  }

  &.selected,
  &:hover {
    background: #EFF7FD;
    margin-left: 0.13rem;
    padding: 0.1rem 0rem 0rem 0.12rem;
    border-radius: 0.07rem;
    i {
      color: #4EAAEB;
    }
  }
`

export const ButtonCreate = styled.a`
  ${mixin.size(0.53, 0.53)}
  position: relative;
  display: flex;
  background: #0377BD;
  margin-left: 0.13rem;
  padding: 0.09rem 0rem 0rem 0.16rem;
  border-radius: 0.07rem;
  cursor: pointer;

  i {
    position: relative;
    top: -0.03rem;  
    margin-right: 0.18rem;
    color: #fff;
  }
`

export const Footer = styled(LinkItem)`
  position: absolute;
  bottom: 0.2rem;
`

export const IconImage = styled.img`
  width: 0.3rem;
  height: 0.3rem;
`
