import React from 'react'
import PropTypes from 'prop-types'
// import { Formik, Field as FormikField } from 'formik'
import { Formik } from 'formik'
import { is, generateErrors } from 'shared/utils/validation'

const propTypes = {
  validate: PropTypes.func,
  validations: PropTypes.object,
  validateOnBlur: PropTypes.bool
}

const defaultProps = {
  validate: undefined,
  validations: undefined,
  validateOnBlur: false
}

const Form = ({ validations, ...otherProps }) => (
  <Formik
    {...otherProps}
    validate={values => {
      if (validations) {
        return generateErrors(values, validations)
      }
      return {}
    }}
  />
)

Form.is = is
Form.propTypes = propTypes
Form.defaultProps = defaultProps

export default Form
