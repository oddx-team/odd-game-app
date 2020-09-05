import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'
import { sizes, mixin, font } from 'shared/utils/styles'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${sizes.bannerHeight}rem;
  background: #FFFFFF;
  ${mixin.boxShadowMedium}
`

export const Arrow = styled.div`
  ${props => props.sidebar
    ? imageCDN('icon-arrow-left.png', 0.38, 0.38)
    : imageCDN('icon-arrow-right.png', 0.38, 0.38)}
  transition: background-image 0.3s;
  margin-right: 0.05rem;
`

export const Logo = styled.div`
  ${imageCDN('event-logo.png', 0.33, 0.33)}
  margin-top: 0.02rem;
  margin-right: 0.07rem;
`

export const MainText = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.3rem;
  font-weight: bold;
`

export const Text = styled.div`
  margin-top: 0.05rem;
  margin-left: 0.34rem;
  text-transform: uppercase;
  padding: 0.07rem 0;
  ${font.size(0.19)}

  // border-bottom: 0.04rem solid #0477BD;

  &:hover {
    font-weight: bold;
  }
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
  right: 0.4rem;
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

export const IconUser = styled.img`
  width: 0.37rem;
  height: 0.37rem;
  border-radius: 50%;
  position: relative;
  left: 0.01rem;
  top: 0.02rem;
  border-radius: 50%;
  border: 0.02rem solid #E0E0E0;
`

export const IconBell = styled.div`
  position: relative;
  top: 0.05rem;
  margin-right: 0.07rem;
  transition: background-color 0.4s;
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.05rem;

  i {
    ${imageCDN('icon-bell1.png', 0.23, 0.23)};
    display: inline-block;

    &::before {
      content: '5';
      font-size: 0.15rem;
      padding-top: 0.02rem;
      color: #fff;
      position: absolute;
      top: -0.02rem;
      left: -0.02rem;
      width: 0.2rem;
      height: 0.2rem;
      background: red;
      border-radius: 100%;
    }
  }
`
