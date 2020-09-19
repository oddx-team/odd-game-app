import styled from 'styled-components'
import { font, mixin } from 'shared/utils/styles'

export const FormCont = styled.div`
  ${mixin.flexCenter} 
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const FormElement = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  background: #f1f2f5;
  padding-bottom: 0.5rem;
  position: relative;
  text-align: left;
`

export const Title = styled.div`
  ${font.size(0.25)}
  color: #000;
  font-weight: bold;
  text-align: left;
  margin-top: 0.1rem;
  position: relative;
`

export const Subtitle = styled.div`
  ${font.size(0.18)}
  color: #000;
  font-weight: normal;
  text-align: left;
`

export const FormHeading = styled.h1`
  position: relative;
  padding: 0.06rem 0 0.15rem;
  ${font.size(0.2)}
  ${font.medium}
`
