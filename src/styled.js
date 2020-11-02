import styled from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'

export const Wrapper = styled.div``
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 
    ${props => props.fullSidebar
    ? sizes.sizeBarWidthOpen - 0.05
    : sizes.sizeBarWidth - 0.05}rem;
  padding-left: ${props => !props.showSidebar && 0}rem;
  transition: padding-left 0.35s;


  ${Wrapper} {
    transition: all 0.3s ease-in-out;
    background: #F1F2F5;
    padding-left: ${props => !props.showSidebar ? 0 : props.fullSidebar ? 0.9 : 1.6}rem;
    overflow-y: auto;
    height: 100%;
  }
`
