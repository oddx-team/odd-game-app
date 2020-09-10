import styled from 'styled-components'

import { color, font, mixin } from 'shared/utils/styles'
import { Icon } from 'shared/components/Icon'

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  right: 0.3rem;
  top: 0.5rem;
`

export const Title = styled.div`
  padding-right: 0.22rem;
  ${font.size(0.19)}
  ${font.medium}
`

export const Message = styled.div`
  padding: 0.08rem 0.1rem 0 0;
  white-space: pre-wrap;
  ${font.size(0.18)}
  ${font.medium}
`

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 0.1rem;
  width: 3rem;
  padding: 0.15rem 0.2rem;
  border-radius: 0.03rem;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clearfix}
  ${mixin.hardwareAccelerate}

  &.odd-toast-enter,
  &.odd-toast-exit.odd-toast-exit-active {
    opacity: 0;
    right: -0.1rem;
  }

  &.odd-toast-exit,
  &.odd-toast-enter.odd-toast-enter-active {
    opacity: 1;
    right: 0;
  }

  ${Title} {
    ${props => props.type === 'success'
      ? font.medium
      : font.bold}
    ${props => props.type === 'success'
      ? font.size(0.19)
      : font.size(0.21)}
  }
`

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 0.13rem;
  right: 0.14rem;
  font-size: 0.22rem;
  cursor: pointer;
  color: #fff;
`
