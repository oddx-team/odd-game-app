import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'
import { sizes } from 'shared/utils/styles'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${sizes.bannerHeight}rem;
  background: #FFFFFF;
`

export const MainLogo = styled.div`
  color: #424242;
  font-size: 0.3rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  position: absolute;
  top: 0.05rem;
  left: ${sizes.sizeBarWidth + 0.3}rem;
  cursor: pointer;

  img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.05rem;
    position: relative;
    top: 0.03rem;
  }
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
