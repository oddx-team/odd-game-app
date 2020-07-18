import React from 'react'
import PropTypes from 'prop-types'
import IconLogo from 'assets/logo.png'
import classNames from 'classnames'
import './styled.scss'

export const Card = ({ color, size, text, onClick }) => {
  const cardClasses = classNames('block odd-card', color, size)

  return (
    <div className={cardClasses} onClick={() => onClick && onClick()}>
      <div className='card-title'>{text}</div>
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
  )
}

Card.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}
