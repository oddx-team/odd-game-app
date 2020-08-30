import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'shared/components/Icon'
import { color } from 'shared/utils/styles'
import { StyledButton, Text } from './styled'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'secondary', 'empty']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func
}

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: 'secondary',
  icon: undefined,
  iconSize: 0.2,
  disabled: false,
  isWorking: false,
  onClick: () => {}
}

const Button = forwardRef((
  { children, variant, icon, iconSize, disabled, isWorking, onClick, ...buttonProps }, ref) => {
  const handleClick = () => {
    if (!disabled && !isWorking) {
      onClick()
    }
  }

  return (
    <StyledButton
      {...buttonProps}
      onClick={handleClick}
      variant={variant}
      disabled={disabled || isWorking}
      isWorking={isWorking}
      iconOnly={!children}
      ref={ref}
    >
      {icon && (
        <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
      )}
      {children && <Text withPadding={isWorking || icon}>{children}</Text>}
    </StyledButton>
  )
})

const getIconColor = variant =>
  ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff'

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
