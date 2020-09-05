import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import classNames from 'classnames'
import './styled.scss'

export const Card = ({ color, size, text, closed, onClick }) => {
  const cardClasses = classNames('odd-card', color, size, closed)

  return (
    <div className={cardClasses} onClick={() => onClick && onClick()}>
      <div className='card-inner'>
        <div className='card back' />
        <div className='card front'>
          <div className='card-title'>{ReactHtmlParser(text)}</div>
          <div className='card-question' />
          <div className='card-logo'>
            <img alt='IconLogo' src={IconLogo} />
            <span>Oddx</span>
          </div>

          {color === 'black' && size === 'large' && (
            <div className='card-picker'>
              <div>Pick</div>
              <div>2</div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  text: PropTypes.string,
  gaps: PropTypes.number,
  language: PropTypes.string,
  closed: PropTypes.string,
  onClick: PropTypes.func
}
