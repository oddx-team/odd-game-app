import styled, { css } from 'styled-components'
import { color, font, mixin } from 'shared/utils/styles'

export const StyledButton = styled.button`
  ${mixin.flexCenter}
  line-height: 1.6;
  padding: 
  ${props => (props.iconOnly ? 0.03 : 0)}rem 
  ${props => (props.iconOnly ? 0.12 : 0.07)}rem;
  white-space: nowrap;
  border-radius: 0.03rem;
  transition: all 0.1s;
  appearance: none; 
  ${mixin.clickable}
  ${font.size(0.23)}
  ${props => buttonVariants[props.variant]}
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

const colored = css`
  color: #fff;
  background: ${props => color[props.variant]};
  ${font.medium}
  &:not(:disabled) {
    &:hover {
      background: ${props => mixin.lighten(color[props.variant], 0.15)};
    }
    &:active {
      background: ${props => mixin.darken(color[props.variant], 0.1)};
    }
  }
`

const secondaryAndEmptyShared = css`
  color: ${color.textDark};
  ${font.regular}
  &:not(:disabled) {
    &:hover {
      background: ${color.backgroundLight};
    }
    &:active {
      color: ${color.primary};
      background: ${color.backgroundLightPrimary};
    }
  }
`

const buttonVariants = {
  primary: colored,
  success: colored,
  danger: colored,
  secondary: css`
    background: ${color.secondary};
    ${secondaryAndEmptyShared};
  `,
  empty: css`
    background: transparent;
    /* ${secondaryAndEmptyShared}; */
  `
}

export const Text = styled.div`
  padding-left: ${props => (props.withPadding ? 0.02 : 0)}rem;
`
