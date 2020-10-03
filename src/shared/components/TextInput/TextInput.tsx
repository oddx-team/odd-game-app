import React, { FormEvent, useState } from 'react'
import classNames from 'classnames'
import { StyledInput } from './styled'

type TextInputProps = {
  placeholder: string;
  disabled: boolean;
  small: Boolean;
  onSubmit: (val: string) => void;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <input
          type='submit'
          value='Submit'
          style={{ display: 'none' }}
          disabled={props.disabled}
        />
      </form>
    </StyledInput>
  )
}

