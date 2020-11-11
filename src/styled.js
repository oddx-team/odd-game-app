import styled from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'

export const Wrapper = styled.div``
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: ${props => props.loggedIn ? sizes.sizeBarWidth - 0.05 : 0}rem; 

  ${Wrapper} {
    background: #F8F9FB;
    padding-left: ${props => props.loggedIn ? 1.6 : 0}rem; 
    overflow-y: auto;
    height: 100%;
  }
`
