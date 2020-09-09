import React, { Component, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import { StyledCard, FakeCard, CardInner, FaceFront, FaceBack, Title, Brand, Logo, LogoText, Picker } from './styled'

const propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'blue']),
  size: PropTypes.string,
  text: PropTypes.string,
  gaps: PropTypes.number,
  isFake: PropTypes.bool,
  showFake: PropTypes.bool,
  language: PropTypes.string,
  closed: PropTypes.bool,
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
  closed: false,
  onClick: () => {}
}

export class Card extends Component {
  render () {
    const { text, isFake, onClick, closed, gaps } = this.props

    return (
      <StyledCard closed={closed} onClick={() => onClick && onClick()}>
        {isFake && <FakeCard {...this.props} />}
        {!isFake &&
          <Fragment key='real'>
            <CardInner>
              <FaceBack {...this.props} />
              <FaceFront {...this.props}>
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
              </FaceFront>
            </CardInner>
          </Fragment>}
      </StyledCard>
    )
  }
}

Card.propTypes = propTypes
Card.defaultTypes = defaultTypes
