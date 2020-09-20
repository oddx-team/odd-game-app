import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { StyledToggle, Input, Slider } from './styled'

const propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  value: undefined,
  onChange: () => {}
}

const Toggle = forwardRef(({ value, onChange, ...toggleProps }, ref) => {
  const handleChange = event => {
    onChange(event.target.value, event)
  }

  return (
    <StyledToggle>
      <Input
        type='checkbox'
        checked={value}
        onChange={handleChange}
        ref={ref}
        {...toggleProps}
      />
      <Slider />
    </StyledToggle>
  )
})

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps

export default Toggle
