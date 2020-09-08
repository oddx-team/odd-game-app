import styled, { css } from 'styled-components'
import { color, font, mixin } from 'shared/utils/styles'
import { textMixin } from 'mixins'

export const StyledCard = styled.div`
  padding: 0.15rem;
  position: relative;
  text-align: left;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  ${mixin.boxShadow}
  ${props => cardSizes[props.size]}
  ${props => cardVariants[props.variant]}
`

const colored = css`
  color: #fff;
  background: ${props => color[props.variant]};
  &:not(:disabled) {
    &:hover {
      background: ${props => mixin.lighten(color[props.variant], 0.15)};
    }
    &:active {
      background: ${props => mixin.darken(color[props.variant], 0.1)};
    }
  }
`

export const Title = styled.div`
  ${props => titleSizes[props.size]}
  margin-top: 0.03rem;
  padding: 0.05rem 0.13rem;
`

export const MainBrand = styled.div`
  ${mixin.flexCenter}
  position: absolute;
  bottom: 0.12rem;
  left: 0.2rem;
`

export const Logo = styled.img`
  ${props => logoSizes[props.size]}
`

export const LogoText = styled.span`
  ${props => logoTextSizes[props.size]}
  color: ${props => props.variant === 'white' ? color.black : color.white}
  font-family: 'Orbitron', sans-serif;
`

export const Picker = styled.div`
  ${mixin.flexCenter}
  position: absolute;
  bottom: 0.12rem;
  left: 1.53rem;

  div:first-child {
    ${textMixin(color.white, 0.2, 'bold', 'uppercase')}
    margin-right: 0.06rem;
  }

  div:last-child {
    ${textMixin(color.black, 0.19)}
    ${mixin.size(0.24, 0.24)}
    background: #fff;
    border-radius: 50%;
    padding-top: 0.02rem;
  }
`

// EXTRA STYLING
const titleSizes = {
  big: css`${font.size(0.22)}`,
  medium: css`${font.size(0.2)}`,
  small: css`${font.size(0.15)}`
}

const logoSizes = {
  big: css`${mixin.size(0.25, 0.25)}`,
  medium: css`${mixin.size(0.22, 0.22)}`,
  small: css`${mixin.size(0.18, 0.18)}`
}

const logoTextSizes = {
  big: css`${font.size(0.21)}`,
  medium: css`${font.size(0.18)}`,
  small: css`${font.size(0.15)}`
}

const cardSizes = {
  big: css`${mixin.size(2.4, 2.1)}`,
  medium: css`${mixin.size(2, 1.7)}`,
  small: css`
    ${mixin.size(1.5, 1.3)}
    padding: 0.1rem;
    `
}

const cardVariants = {
  black: colored,
  blue: colored,
  white: css`
    background: ${color.white};
    color: #000;
  `
}
