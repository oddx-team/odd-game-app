import React from 'react';

import { Icon } from 'shared/components/Icon';
import { IconType, Variants } from 'shared/utils/constants';
import { color } from 'shared/utils/styles';
import { StyledButton, Text } from './styled';

type ButtonProps = {
  className: string;
  children?: React.ReactNode;
  variant: Variants;
  icon: IconType;
  iconSize: number;
  disabled: boolean;
  isWorking: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const defaultProps: ButtonProps = {
  className: '',
  children: null,
  variant: 'primary',
  icon: 'code',
  iconSize: 0.23,
  disabled: false,
  isWorking: false,
  onClick: () => { }
}

const Button: React.FC<ButtonProps> = (
  { children, variant, icon, iconSize, disabled, isWorking, onClick, ...buttonProps }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !isWorking) {
      onClick(e)
    }
  }

  return (
    <StyledButton
      {...buttonProps}
      onClick={handleClick}
      disabled={disabled || isWorking}
      variant={variant}
      iconOnly={!children}
    >
      {icon && (
        <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
      )}
      {children && <Text withPadding={!!icon || isWorking}>{children}</Text>}
    </StyledButton>
  )
}

const getIconColor = (variant: string) =>
  ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff'

Button.defaultProps = defaultProps

export default Button
