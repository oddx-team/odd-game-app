import { css } from 'styled-components'

export const sizeWH = (width, height) => {
  return `
    width: ${width};
    height: ${height};
  `
}

export const textMixin = (
  color = null,
  size = null,
  weight = null,
  transform = null
) => {
  return css`
    color: ${color};
    font-size: ${size}rem;
    font-weight: ${weight};
    text-transform: ${transform};
  `
}

export const imageCDN = (path, width, height, mode = 'contain', pos = 'center') => {
  const cdn = './assets'
  return `
    width: ${width}rem;
    height: ${height}rem;
    background: url(${require(`${cdn}/${path}`)}) ${pos} / ${mode} no-repeat;
  `
}

export const alignCenter = () => {
  return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  `
}

export const flexCenter = direction => {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${direction};
  `
}

export const position = ({ pos, top = null, right = null, bottom = null, left = null, zIndex = null }) => {
  return `
    position: ${pos};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    z-index: ${zIndex};
  `
}
