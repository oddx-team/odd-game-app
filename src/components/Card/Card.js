import React from 'react'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import classNames from 'classnames'
import './styled.scss'

export const Card = ({ color, size, text, closed, onClick }) => {
  const cardClasses = classNames('block odd-card', color, size, closed)

  return (
    <div className={cardClasses} onClick={() => onClick && onClick()}>
      <div className='card-inner'>
        <div className='card-title'>{text}</div>
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
  )
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  gaps: PropTypes.number,
  language: PropTypes.string,
  closed: PropTypes.string,
  onClick: PropTypes.func
}
