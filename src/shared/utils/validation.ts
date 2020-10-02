

export const is = {
  required: () => (value: string) => isNilOrEmptyString(value) && 'This field is required',

  minLength: (min: number) => (value: string) => !!value && value.length < min && `Must be at least ${min} characters`,

  maxLength: (max: number) => (value: string) => !!value && value.length > max && `Must be at most ${max} characters`,

  notEmptyArray: () => (value: string[]) =>
    Array.isArray(value) && value.length === 0 && 'Please add at least one item'
}

const isNilOrEmptyString = (value: string) => value === undefined || value === null || value === ''


type Validator = (value: string | string[]) => string;
type FieldValues = Record<string, string | boolean>;
type FieldValidators = Record<string, Validator | Validator[]>
type Errors = Record<string, string>;

export const generateErrors = (fieldValues: FieldValues, fieldValidators: FieldValidators) => {
  const errors: Errors = {}

  Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
    [validators].flat().forEach(validator => {
      if (typeof fieldValues[fieldName] === 'string') {
        const errorMessage = validator(fieldValues[fieldName] as string | string[])
        if (errorMessage && !errors[fieldName]) {
          errors[fieldName] = errorMessage
        }
      }
    })
  })

  return errors
}
