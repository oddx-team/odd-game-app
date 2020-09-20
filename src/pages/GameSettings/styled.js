import styled from 'styled-components/macro'
import { font, mixin } from 'shared/utils/styles'
import { Button } from 'shared/components/Button'
import { Form } from 'formik'

export const FormCont = styled(Form)`
  ${mixin.flexCenter} 
  width: 100%;
  margin: 0.3rem auto;
  margin-left: -0.7rem;
  justify-content: flex-start;
`

export const FormElement = styled.div`
  ${mixin.boxShadow}
  width: 5rem;
  height: 100%;
  top: 0;
  padding: 0.15rem 0.3rem 0.4rem 0.3rem;
  position: relative;
  text-align: left;
  display: flex;
  background: #fff;
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

export const ActionButton = styled(Button)`
  margin-top: 0.3rem;
`
