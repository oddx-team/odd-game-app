import styled, { css } from 'styled-components/macro'
import { color, font, mixin } from 'shared/utils/styles'
import { textMixin, imageCDN } from 'mixins'

export const Logo = styled.img``

export const LogoText = styled.span`
  font-family: 'Orbitron', sans-serif;
  position: relative;
  left: 0.05rem;
`

export const Title = styled.div`
  margin-top: 0.03rem;
  padding: 0.05rem 0.13rem;
`

export const Brand = styled.div`
  ${mixin.flexCenter}
  position: absolute;
  bottom: 0.12rem;
  left: 0.2rem;
`

export const StyledCard = styled.div`
  padding: 0.05rem;
  position: relative;
  text-align: left;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  ${mixin.boxShadow}
  ${props => cardSizes[props.size]}
  ${props => cardColors[props.color]}
  opacity: ${props => props.isFake ? (props.showFake ? 0.45 : 0) : 1};

  ${Title} {
    ${props => titleSizes[props.size]}
  }
  ${Logo} {
    ${props => logoSizes[props.size]}
  }
  ${LogoText} {
    ${props => logoTextSizes[props.size]}
    color: ${props => props.color === 'white' ? color.black : color.white}
  }
  ${Brand} {
    margin-left: ${props => props.size === 'small' ? -0.1 : 0}rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const FakeCard = styled.div`
  ${mixin.cover}
  transition: opacity 0s;
  border: 0.03rem dashed #616161;

  &::before {
    content: '';
    ${mixin.alignCenter}
    ${imageCDN('icon-plus-big.png', 1, 1)}
  }
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
    text-align: center;
  }
`

// EXTRA STYLING = SIZES + COLOR
const titleSizes = {
  large: css`${font.size(0.22)}`,
  medium: css`${font.size(0.2)}`,
  small: css`${font.size(0.15)}`
}

const logoSizes = {
  large: css`${mixin.size(0.25, 0.25)}`,
  medium: css`${mixin.size(0.22, 0.22)}`,
  small: css`${mixin.size(0.18, 0.18)}`
}

const logoTextSizes = {
  large: css`${font.size(0.21)}`,
  medium: css`${font.size(0.18)}`,
  small: css`${font.size(0.15)}`
}

const cardSizes = {
  large: css`${mixin.size(2.4, 2.1)}`,
  medium: css`${mixin.size(2, 1.7)}`,
  small: css`${mixin.size(1.5, 1.3)} padding: 0.01rem;`
}

const colored = css`
  color: #fff;
  background: ${props => color[props.color]};
  &:not(:disabled) {
    &:hover {
      background: ${props => mixin.lighten(color[props.color], 0.15)};
    }
    &:active {
      background: ${props => mixin.darken(color[props.color], 0.1)};
    }
  }
`

const cardColors = {
  black: colored,
  blue: colored,
  white: css`
    background: ${color.white};
    color: #000;
  `
}
