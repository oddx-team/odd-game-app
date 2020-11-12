import styled, { css } from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'

export const Wrapper = styled.div``
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${props => props.loggedIn && css`
    padding-left: ${sizes.sizeBarWidth - 0.05}rem;
  `}

  ${Wrapper} {
    background: #F8F9FB;
    overflow-y: auto;
    height: 100%;
    ${props => props.loggedIn && css`
      padding-left: 1.6rem;
      border-top-right-radius: 0.2rem;
      border-top-left-radius: 0.2rem;
      margin-right: 0.2rem;
    `}
  }
`
