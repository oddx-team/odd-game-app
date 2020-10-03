import React from 'react'

import { StyledInput, InputElement, StyledIcon } from './styled'
import { IconType } from 'shared/utils/constants';

type InputProps = {
  value: string | number;
  icon: IconType;
  invalid: boolean;
  onChange: (val: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: InputProps = {
  value: '',
  icon: 'code',
  invalid: false,
  onChange: () => { }
}

const Input: React.FC<InputProps> = ({ icon, onChange, ...inputProps }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e)
  }

  return (
    <StyledInput>
      {icon && <StyledIcon type={icon} size={0.25} />}
      <InputElement {...inputProps} onChange={handleChange} hasIcon={!!icon} />
    </StyledInput>
  )
}

Input.defaultProps = defaultProps

export default Input
