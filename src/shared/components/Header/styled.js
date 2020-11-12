import styled, { css } from 'styled-components/macro'
import { imageCDN } from 'mixins'
import { sizes, font, mixin } from 'shared/utils/styles'
import { Icon } from '../Icon'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${sizes.bannerHeight}rem;
  background: #FFFFFF;

  ${props => !props.show && css`
    background: #FAFBFD;
    display: none;
  `}
`

export const Arrow = styled.div`
  ${props => props.sidebar
    ? imageCDN('icon-arrow-left.png', 0.38, 0.38)
    : imageCDN('icon-arrow-right.png', 0.38, 0.38)}
  transition: background-image 0.3s;
  margin-right: 0.05rem;
`

export const Logo = styled.div`
  ${imageCDN('game-logo.png', 0.33, 0.33)}
  margin-top: 0.02rem;
  margin-right: 0.07rem;
  display: inline-block;
`

export const MainText = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.3rem;
  font-weight: bold;
  display: inline-block;
`

export const Text = styled.div`
  margin-top: 0.02rem;
  margin-left: -0.07rem;
  text-transform: uppercase;
  padding: 0.07rem 0;
  font-family: 'Oxamium-Bold', sans-serif;
  font-weight: 900;
  color: #000;
  ${font.size(0.25)}
`

export const NavBar = styled.div`
  color: #424242;
  position: absolute;
  top: 0.05rem;
  margin-left: 0.3rem;
  cursor: pointer;
  display: flex;
`

export const ProfileContainer = styled.div`
  position: absolute;
  right: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .info {
    margin-top: 0.09rem;
    width: 1.4rem;
    text-align: left;
    .name {
      color: #000;
      font-weight: bold;
      font-size: 0.17rem;
      margin-left: 0.08rem;
      text-align: left;
    }
  
    .points {
      color: #424242;
      font-size: 0.14rem;
      margin-left: 0.08rem;
    }
  }
`

export const IconUser = styled.div`
  ${mixin.size(0.4, 0.4)}
  position: relative;
  left: 0.05rem;
  top: 0.07rem;
  border-radius: 50%;
  background: #0377BD;
  padding-top: 0.07rem;
  color: #fff;
`

export const IconBell = styled(Icon)`
  ${mixin.size(0.4, 0.4)}
  position: relative;
  top: 0.07rem;
  left: -0.03rem;
  padding-top: 0.07rem;
  border: 0.01rem solid #8f8f8f;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #f8f9fb;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.09rem;
    right: 0.07rem;
    ${mixin.size(0.08, 0.08)}
    background: red;
    border-radius: 50%;
    border: 0.02rem solid #fff;
  }
`
