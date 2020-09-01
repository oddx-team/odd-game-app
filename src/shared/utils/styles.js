import { css } from 'styled-components'
import Color from 'color'

export const color = {
  primary: '#0277BD', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLink: '#0052cc',
  textMenu: '#656565',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff'
}

export const font = {
  regular: 'font-weight: normal;',
  medium: 'font-weight: 300;',
  bold: 'font-weight: 600;',
  black: 'font-weight: 900;',
  size: size => `font-size: ${size}rem;`
}

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .lighten(amount)
      .string(),
  rgba: (colorValue, opacity) =>
    Color(colorValue)
      .alpha(opacity)
      .string(),
  getImage: (path, width, height) => {
    const cdn = '../../assets'
    return `
      width: ${width}rem;
      height: ${height}rem;
      background: url(${require(`${cdn}/${path}`)}) center / contain no-repeat;
    `
  },
  flexCenter: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  `,
  clickable: css`
      cursor: pointer;
      user-select: none;
    `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `
}
