import { css } from 'styled-components'
import Color from 'color'

export const color: Record<string, string> = {
  primary: '#0277BD', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  // card color
  black: '#212121',
  white: '#fff',
  blue: '#0088cc',

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLighter: '#757575',
  textLink: '#0052cc',
  textMenu: '#656565',
  textMenuSidebar: '#C7C6C5',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLighter: '#BDBDBD',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',
  backgroundWhite: '#FFFFFF',
  backgroundSidebarMenu: '#E6F7FF',
  backgroundMenuDark: '#212120',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderDark: '#E0E0E0',
  borderInputFocus: '#4c9aff'
}

export const font = {
  regular: 'font-weight: normal;',
  medium: 'font-weight: 500;',
  bold: 'font-weight: 600;',
  black: 'font-weight: 900;',
  size: (size: number) => `font-size: ${size}rem;`
}

export const sizes = {
  sizeBarWidth: 0.8,
  sizeBarWidthOpen: 2.65,
  bannerHeight: 0.5
}

export const mixin = {
  darken: (colorValue: string, amount: number) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue: string, amount: number) =>
    Color(colorValue)
      .lighten(amount)
      .string(),
  rgba: (colorValue: string, opacity: number) =>
    Color(colorValue)
      .alpha(opacity)
      .string(),
  getImage: (path: string, width: number, height: number) => {
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
    flex-direction: row;
  `,
  clickable: css`
      cursor: pointer;
      user-select: none;
    `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  backgroundImage: (imageURL: string) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  `,
  size: (width: number, height: number) => css`
    width: ${width}rem;
    height: ${height}rem;
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  alignCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  boxShadow: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  `,
  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `
}
