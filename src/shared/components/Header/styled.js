import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 0.6rem;
  background: #2D2D2D;
`

export const MainLogo = styled.div`
  color: #fff;
  font-size: 0.33rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  position: absolute;
  top: 0.1rem;
  left: 1rem;
  cursor: pointer;

  img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.05rem;
  }
`

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0.04rem;
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
      color: #fff;
      font-size: 0.17rem;
      margin-left: 0.08rem;
      text-align: left;
    }
  
    .points {
      color: #D9DEE0;
      font-size: 0.14rem;
      margin-left: 0.08rem;
    }
  }
`

export const IconUser = styled.img`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  position: relative;
  left: 0.01rem;
  top: 0.05rem;
  border-radius: 50%;
  border: 0.02rem solid #fff;
`

export const IconBell = styled.div`
  position: relative;
  top: 0.05rem;
  margin-right: 0.07rem;
  transition: background-color 0.4s;
  border-radius: 50%;
  background: #212121;
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.05rem;

  i {
    ${imageCDN('icon-bell.png', '0.3rem', '0.3rem')};
    display: inline-block;
  }
`

export const IconSearch = styled.div`
  ${imageCDN('icon-search.png', '0.27rem', '0.27rem')};
  position: absolute;
  top: 0.05rem;
  left: 0.05rem;
  width: 0.27rem;
  height: 0.27rem;
`

export const StyledCircleLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1rem;
  height: 1rem;
  margin-top: 0.1rem;
  background: #fff;
  border-radius: 50%;
  box-shadow: 2px 7px 8px 0px #ddd;
  z-index: 2;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
  }
`

export const Wrapper = styled.div`
  &.hidden {
    visibility: hidden;
  }
`

export const StyledSearchBar = styled.div`
  width: 2.5rem;
  height: 0.38rem;
  position: absolute;
  top: 0.1rem;
  left: 4.05rem;
  color: #000;
  font-size: 0.2rem;
  display: flex;
  flex-direction: row;
  background: #bdbdbd;
  border-radius: 0.03rem;
  transition: width 0.3s;
  &:hover {
    background: #fafafa;
    width: 4.48rem;
  }
`

export const StyledInput = styled.input`
  position: absolute;
  top: 0.05rem;
  left: 0.05rem;
  width: 89%;
  margin-left: 0.2rem;
`
