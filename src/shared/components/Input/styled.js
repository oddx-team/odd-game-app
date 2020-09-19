import styled, { css } from 'styled-components'

import { color, font } from 'shared/utils/styles'
import { Icon } from 'shared/components/Icon'

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 0.32rem;
  width: 100%;
`

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 0.07rem;
  border-radius: 0.03rem;
  border: 0.01rem solid ${color.borderLightest};
  color: ${color.textDarkest};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(0.2)}
  ${props => props.hasIcon && 'padding-left: 0.32rem;'}
  &:hover {
    background: ${color.backgroundLightest};
  }
  &:focus {
    background: #fff;
    border: 0.01rem solid ${color.borderInputFocus};
    box-shadow: 0 0 0 0.01rem ${color.borderInputFocus};
  }
  ${props =>
    props.invalid &&
    css`
      &,
      &:focus {
        border: 0.01rem solid ${color.danger};
        box-shadow: none;
      }
    `}
`

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0.08rem;
  left: 0.08rem;
  pointer-events: none;
  color: ${color.textMedium};
`
