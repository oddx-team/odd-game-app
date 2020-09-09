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

// FOR REVEAL EFFECT
export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
`

export const FaceFront = styled.div`
  padding: 0.05rem;
  position: relative;
  text-align: left;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  backface-visibility: hidden;
  ${mixin.boxShadow}
  ${props => cardSizes[props.size]}
  ${props => cardColors[props.color]}


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
    opacity: ${props => props.closed ? 0 : 1}
  }
`

export const FaceBack = styled.div`
  ${mixin.boxShadow}
  ${props => cardSizes[props.size]}
  margin-bottom: 0.2rem;
  backface-visibility: hidden;
  position: absolute;
  right: 0rem;
  transform: rotateY(180deg);
  background: #fff;
  pointer-events: none;
`

export const StyledCard = styled.div`
  position: relative;
  ${CardInner} {
    ${props => props.closed
        ? css`transform: translateZ(0rem) rotateY(180deg);`
        : ''}
  }
`

export const FakeCard = styled.div`
  ${props => cardSizes[props.size]}
  opacity: ${props => props.isFake ? (props.showFake ? 0.45 : 0) : 1};
  transition: opacity 0s;
  border: 0.03rem dashed #616161;
  position: relative;

  &::before {
    content: '';
    ${mixin.alignCenter}
    ${imageCDN('icon-plus-big.png', 1, 1)}
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
  small: css`${mixin.size(1.5, 1.3)} 
    padding: 0.01rem;
    &:hover {
      transform: scale(1.1);
    }`
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
