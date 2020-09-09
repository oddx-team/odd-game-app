import React, { Component, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import { StyledCard, FakeCard, Title, Brand, Logo, LogoText, Picker } from './styled'

const propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'blue']),
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
    const { text, isFake, onClick, gaps } = this.props

    return (
      <StyledCard onClick={() => onClick && onClick()} {...this.props}>
        {isFake && <FakeCard />}
        {!isFake &&
          <Fragment key='real'>
            <Title>{ReactHtmlParser(text)}</Title>
            <Brand>
              <Logo src={IconLogo} alt='IconLogo' />
              <LogoText>Oddx</LogoText>
            </Brand>

            {gaps && (
              <Picker>
                <div>Pick</div>
                <div>{gaps}</div>
              </Picker>
            )}
          </Fragment>}
      </StyledCard>
    )
  }
}

Card.propTypes = propTypes
Card.defaultTypes = defaultTypes
