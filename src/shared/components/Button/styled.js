import styled, { css } from 'styled-components'
import { color, font, mixin } from 'shared/utils/styles'

export const StyledButton = styled.button`
  ${mixin.flexCenter}
<<<<<<< HEAD
  line-height: 1.6;
  padding: 0 ${props => (props.iconOnly ? 0.1 : 0.05)}rem;
=======
  line-height: 1;
  padding: 0 ${props => (props.iconOnly ? 0.02 : 0.04)}rem;
>>>>>>> UPD: Add button & icon to library
  white-space: nowrap;
  border-radius: 0.03rem;
  transition: all 0.1s;
  appearance: none; 
  ${mixin.clickable}
<<<<<<< HEAD
  ${font.size(0.23)}
=======
  ${font.size(0.2)}
>>>>>>> UPD: Add button & icon to library
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
    background: #fff;
    ${secondaryAndEmptyShared};
  `
}

export const Text = styled.div`
<<<<<<< HEAD
  padding-left: ${props => (props.withPadding ? 0.02 : 0)}rem;
=======
  padding-left: ${props => (props.withPadding ? 7 : 0)}px;
>>>>>>> UPD: Add button & icon to library
`
