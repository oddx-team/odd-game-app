import React from 'react'

import { StyledIcon } from './styled'
import { IconType, fontIconCodes } from 'shared/utils/constants'

type IconProps = {
  type: IconType;
  className?: string;
  size: number;
  left?: number;
  top?: number;
  color: string;
}

const defaultProps: IconProps = {
  className: '',
  size: 0.25,
  left: 0,
  top: -0.01,
  type: 'code',
  color: 'primary'
}

const Icon: React.FC<IconProps> = ({ type, ...iconProps }) =>
  <StyledIcon {...iconProps} code={fontIconCodes[type]} />

Icon.defaultProps = defaultProps

export default Icon
