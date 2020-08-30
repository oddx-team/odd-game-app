import styled from 'styled-components'

export const StyledIcon = styled.i`
  display: inline-block;
  font-size: ${props => `${props.size}rem`};
  ${props =>
    props.left || props.top ? `transform: translate(${props.left}rem, ${props.top}rem);` : ''}
  &:before {
    content: "${props => props.code}";
<<<<<<< HEAD
    font-family: "odd-font" !important;
=======
>>>>>>> UPD: Add button & icon to library
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
