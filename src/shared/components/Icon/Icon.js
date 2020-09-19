import React from 'react'
import PropTypes from 'prop-types'

import { StyledIcon } from './styled'

const fontIconCodes = {
  music: '\\e801',
  search: '\\e802',
  heart1: '\\E804',
  heart2: '\\E805',
  star1: '\\E806',
  star2: '\\E807',
  tick: '\\E811',
  'face-smile': '\\E800',
  'face-wink': '\\E803',
  'face-wink1': '\\E813',
  'face-sad': '\\E808',
  'face-sleep': '\\E809',
  'face-like': '\\E80A',
  'face-evil': '\\E80B',
  'face-wow': '\\E80C',
  'face-grin': '\\E80D',
  'face-coffee': '\\E80E',
  'face-cool': '\\E80F',
  'face-confused': '\\E810',
  'face-smiley': '\\E814',
  'face-angry': '\\E815',
  'face-angel': '\\E816',
  'face-cry': '\\E817',
  'face-gun': '\\E818',
  'face-content': '\\E819',
  'face-laugh': '\\E81A',
  home: '\\E81B',
  link: '\\E81C',
  popup: '\\F08E',
  locked: '\\E81D',
  unlocked: '\\F13E',
  unlocked1: '\\E81E',
  tag: '\\E81F',
  story: '\\E820',
  code: '\\F121',
  game: '\\F11B',
  bell: '\\E822',
  bell1: '\\F0F3',
  chat: '\\F0E6',
  setting: '\\E821',
  setting1: '\\E823',
  setting2: '\\F1DE',
  inside: '\\E824',
  outside: '\\E825',
  'sound-on': '\\E826',
  'sound-off': '\\E827',
  'voice-on': '\\F130',
  'voice-off': '\\F131',
  zoom: '\\E828',
  logout: '\\E829',
  umbrella: '\\E82A',
  speaker: '\\E82B',
  odd: '\\F1A5',
  github: '\\F09B',
  github1: '\\F300',
  github2: '\\E832',
  menu: '\\E82C',
  menu1: '\\F009',
  feedback: '\\F1D8',
  feedback1: '\\F1D9',
  timer: '\\E82D',
  plus: '\\E82E',
  loading: '\\E82F',
  play: '\\F144',
  play1: '\\E830',
  profile: '\\E831'
}

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
}

const defaultProps = {
  className: undefined,
  size: 0.25,
  left: 0,
  top: -0.01
}

const Icon = ({ type, ...iconProps }) => (
  <StyledIcon {...iconProps} code={fontIconCodes[type]} />
)

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
