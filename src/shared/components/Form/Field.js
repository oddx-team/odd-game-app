import React from 'react'
import { uniqueId } from 'lodash'
import { useField } from 'formik'
import { Input } from 'shared/components/Input'
import { Toggle } from 'shared/components/Toggle'
import { StyledField, FieldError, FieldLabel } from './styled'

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const { name } = field
  const { error, touched } = meta
  const fieldId = uniqueId('form-field-')

  return (
    <StyledField>
      {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
      <Input
        id={fieldId}
        name={name}
        invalid={!!error && touched}
        onChange={(_, e) => {
          field.onChange(e)
          field.onBlur(e)
        }}
      />
      {touched && error && <FieldError>{error}</FieldError>}
    </StyledField>
  )
}

const ToggleField = ({ label, ...props }) => {
  const [field] = useField(props)
  const { name } = field
  const fieldId = uniqueId('form-field-')

  return (
    <StyledField horizontal>
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <Toggle
        id={fieldId}
        name={name}
        onChange={(_, e) => {
          field.onChange(e)
          field.onBlur(e)
        }}
      />
    </StyledField>
  )
}

export default {
  Input: InputField,
  Toggle: ToggleField
}
