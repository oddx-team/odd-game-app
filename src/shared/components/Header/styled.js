import styled from 'styled-components/macro'
import { sizes, font, mixin } from 'shared/utils/styles'
import { Icon } from '../Icon'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${sizes.bannerHeight}rem;
  background: #FFFFFF;
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
  display: flex;
`

export const ProfileContainer = styled.div`
  position: absolute;
  right: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
