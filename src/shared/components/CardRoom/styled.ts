import styled from 'styled-components/macro'
import { mixin } from 'shared/utils/styles'

export const Title = styled.div`
  color: #000;
  font-size: 0.23rem;
  font-weight: bold;
  margin-bottom: 0.08rem;
`

export const CardCont = styled.div`
  padding: 0.1rem 0 0 0.2rem;
  color: #000;
  font-size: 0.19rem;
  font-weight: normal;
`

export const StyledCardRoom = styled.div`
  ${mixin.size(2.8, 2)}
  margin: 0.22rem 0.5rem 0 0;
  color: #000;
  font-size: 0.2rem;
  text-align: left;
  background: #fff;
  ${mixin.boxShadow}

  button {
    ${mixin.size(1, 0.36)}
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    font-size: 0.17rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  button + button {
    margin-left: 0.1rem;
  }
`