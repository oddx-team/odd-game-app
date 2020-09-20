import styled from 'styled-components/macro'

import { mixin } from 'shared/utils/styles'

export const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 0.46rem;
  height: 0.245rem;
`

export const Slider = styled.span`
  ${mixin.cover}
  cursor: pointer;
  background-color: #BFBFBF;
  -webkit-transition: 0.4s;
  transition: .3s;
  border-radius: 0.34rem;

  &:before {
    ${mixin.size(0.16, 0.17)}
    position: absolute;
    content: "";
    left: 0.04rem;
    bottom: 0.04rem;
    background-color: white;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 50%;
  }
`

export const Input = styled.input`
  display: none;
  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 0.01rem #2196F3;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(0.21rem);
    -ms-transform: translateX(0.21rem);
    transform: translateX(0.21rem);
  }
`
