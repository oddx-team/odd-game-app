import styled from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'

export const Wrapper = styled.div``
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: ${sizes.sizeBarWidth}rem;

  ${Wrapper} {
    transition: all 0.3s ease-in-out;
    background: #F1F2F5;
    padding-left: 1.6rem;
    overflow-y: auto;
    height: 100%;
  }
`
