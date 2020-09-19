import styled from 'styled-components/macro'
import { font, mixin } from 'shared/utils/styles'
import { Button } from 'shared/components/Button'
import { Form } from 'formik'

export const FormCont = styled(Form)`
  ${mixin.flexCenter} 
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: flex-start;
`

export const FormElement = styled.div`
  height: 100%;
  top: 0;
  background: #f1f2f5;
  padding-bottom: 0.5rem;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
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

export const ActionButton = styled(Button)`
  margin-top: 0.3rem;
`
