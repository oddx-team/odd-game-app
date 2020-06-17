import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledInput } from './styled'

export const TextInput = props => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (props.onSubmit) {
      props.onSubmit(value)
      setValue('')
    }
  }

  return (
    <StyledInput className={classNames({ small: props.small })}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          style={{ fontSize: '100%', width: '100%' }}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
        <input type='submit' value='Submit' style={{ display: 'none' }} disabled={props.disabled} />
      </form>
    </StyledInput>
  )
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool
}
