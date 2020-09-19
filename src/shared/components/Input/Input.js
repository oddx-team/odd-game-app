import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { StyledInput, InputElement, StyledIcon } from './styled'

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  invalid: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  value: undefined,
  icon: undefined,
  invalid: false,
  onChange: () => {}
}

const Input = forwardRef(({ icon, onChange, ...inputProps }, ref) => {
  const handleChange = event => {
    onChange(event.target.value, event)
  }

  return (
    <StyledInput>
      {icon && <StyledIcon type={icon} size={0.25} />}
      <InputElement {...inputProps} onChange={handleChange} hasIcon={!!icon} ref={ref} />
    </StyledInput>
  )
})

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
