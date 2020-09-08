import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import { StyledCard, Title, Brand, Logo, LogoText, Picker } from './styled'
import './styled.scss'

const propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  text: PropTypes.string,
  gaps: PropTypes.number,
  isFake: PropTypes.bool,
  showFake: PropTypes.bool,
  language: PropTypes.string,
  closed: PropTypes.string,
  onClick: PropTypes.func
}

const defaultTypes = {
  text: undefined,
  color: undefined,
  size: 'large',
  gaps: 0,
  isFake: false,
  showFake: false,
  language: 'en',
  closed: 'closed',
  onClick: () => {}
}

export class Card extends Component {
  render () {
    const { color, size, text, onClick } = this.props
    const showPicker = color === 'black' && size === 'large'

    return (
      <StyledCard onClick={() => onClick && onClick()} {...this.props}>
        <Title>{ReactHtmlParser(text)}</Title>
        <Brand>
          <Logo src={IconLogo} alt='IconLogo' />
          <LogoText>Oddx</LogoText>
        </Brand>

        {showPicker && (
          <Picker>
            <div>Pick</div>
            <div>2</div>
          </Picker>
        )}
      </StyledCard>
    )
  }
}

Card.propTypes = propTypes
Card.defaultTypes = defaultTypes
