export const is = {
  required: () => value => isNilOrEmptyString(value) && 'This field is required',

  minLength: min => value => !!value && value.length < min && `Must be at least ${min} characters`,

  maxLength: max => value => !!value && value.length > max && `Must be at most ${max} characters`,

  notEmptyArray: () => value =>
    Array.isArray(value) && value.length === 0 && 'Please add at least one item'
}

const isNilOrEmptyString = value => value === undefined || value === null || value === ''

export const generateErrors = (fieldValues, fieldValidators) => {
  const errors = {}

  // console.log(fieldValues, fieldValidators)

  Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
    [validators].flat().forEach(validator => {
      console.log(fieldName, fieldValues[fieldName])

      const errorMessage = validator(fieldValues[fieldName], fieldValues)
      if (errorMessage && !errors[fieldName]) {
        errors[fieldName] = errorMessage
      }
    })
  })
  return errors
}
