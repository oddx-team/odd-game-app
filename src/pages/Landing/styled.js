import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'

export const LandingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fafbfd;
  position: relative;
  &::before {
    content: '';
    width: 8.5rem;
    height: 100%;
    position: absolute;
    left: 0;
    clip-path: polygon(0 0, 100% 0, 68% 100%, 0% 100%);
    background: #fff;
  }
`

export const Logo = styled.div`
  ${imageCDN('world.svg', 4, 4)};
  position: absolute;
  top: 1rem;
  left: 2rem;
`

export const LeftOverlay = styled.div`
  ${imageCDN('bg-extra-left.svg', 2.6, 4)};
  position: absolute;
  left: 0.1rem;
  z-index: 0;
`

export const RightOverlay = styled.div`
  ${imageCDN('bg-extra-right.svg', 3, 4)};
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`

export const Container = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 2.2rem;
  color: #000;
  font-size: 0.35rem;
  font-weight: bold;
`

export const StyledNamePanel = styled.div`
  padding-bottom: 0.1rem;
  position: relative;
  top: 0.1rem;
  left: 0rem;
`

export const TextInput = styled.input`
  font-size: 0.2rem;
  color: #000;
  width: 3.5rem;
  height: 0.45rem;
  padding-right: 0.1rem;
`

export const ButtonStart = styled.button`
  width: 3.5rem;
  height: 0.5rem;
  color: #fff;
  font-size: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.2rem;
`

export const Title = styled.div``
