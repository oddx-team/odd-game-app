import React from 'react'
import { uniqueId } from 'lodash'
import { useField } from 'formik'
import { Input } from 'shared/components/Input'
import { Toggle } from 'shared/components/Toggle'
import { StyledField, FieldError, FieldLabel } from './styled'

const withField = Child => ({ label, vertical, ...props }) => {
  const [field, meta] = useField(props)
  const { error, touched } = meta
  const fieldId = uniqueId('form-field-')

  // { name, value } = field

  return (
    <StyledField vertical={vertical}>
      {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
      <Child
        {...field}
        id={fieldId}
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

export default {
  Input: withField(Input),
  Toggle: withField(Toggle)
}
