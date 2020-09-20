import styled, { css } from 'styled-components/macro'
import { color, font } from 'shared/utils/styles'

export const StyledField = styled.div`
  margin-top: 0.2rem;

  ${props => props.horizontal &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`

export const FieldLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  color: ${color.black};
  ${font.medium}
  ${font.size(0.19)}
`

export const FieldError = styled.div`
  margin-top: 0.06rem;
  line-height: 1;
  color: ${color.danger};
  ${font.medium}
  ${font.size(0.17)}
`
