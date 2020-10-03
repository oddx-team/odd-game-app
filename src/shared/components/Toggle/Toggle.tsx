import React from 'react'

import { StyledToggle, Input, Slider } from './styled'

type ToggleProps = {
  value: boolean;
  onChange: (val: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: ToggleProps = {
  value: false,
  onChange: () => { }
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange, ...toggleProps }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e)
  }

  return (
    <StyledToggle>
      <Input
        type='checkbox'
        checked={value}
        onChange={handleChange}
        {...toggleProps}
      />
      < Slider />
    </StyledToggle>
  )
}

Toggle.defaultProps = defaultProps

export default Toggle
