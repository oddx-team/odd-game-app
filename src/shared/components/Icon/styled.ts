import styled from 'styled-components'

type IconProps = {
  size?: number;
  left?: number;
  top?: number;
  code: string;
}

export const StyledIcon = styled.i<IconProps>`
  display: inline-block;
  font-size: ${props => `${props.size}rem`};
  ${props =>
    props.left || props.top ? `transform: translate(${props.left}rem, ${props.top}rem);` : ''}
  &:before {
    content: "${props => props.code}";
    font-family: "Oddx" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
