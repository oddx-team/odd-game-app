import styled from 'styled-components'

import { color, font } from 'shared/utils/styles'

export const Container = styled.div`
  text-align: left;
  color: ${color.textLighter};
  ${font.size(0.18)};
`

export const Divider = styled.span`
  position: relative;
  top: 2px;
  margin: 0 10px;
  ${font.size(0.25)};
`
