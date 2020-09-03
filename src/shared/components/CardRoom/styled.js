import styled from 'styled-components/macro'
import { mixin } from 'shared/utils/styles'

export const Title = styled.div`
  color: #000;
  font-size: 0.3rem;
  font-weight: bold;
  margin-bottom: 0.08rem;
`

export const CardRoomInner = styled.div`
  padding: 0.1rem 0 0 0.2rem;
  color: #000;
  font-size: 0.19rem;
  font-weight: normal;
`

export const StyledCardRoom = styled.div`
  width: 2.8rem;
  height: 2.4rem;
  margin: 0.22rem 0.5rem 0 0;
  color: #000;
  font-size: 0.2rem;
  text-align: left;
  background: #fff;
  ${mixin.boxShadowMedium}

  button {
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    width: 1.15rem;
    height: 0.36rem;
    font-size: 0.18rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  button + button {
    margin-left: 0.1rem;
  }
`

export const StyledButton = styled.button`
  color: #fff;
  font-size: 0.17rem;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 1.94rem;
  height: 0.4rem;
`
