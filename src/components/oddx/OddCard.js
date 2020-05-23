import React from 'react';
import PropTypes from 'prop-types';
import IconLogo from 'cdn/assets/logo.png';
import classNames from 'classnames';
import 'stylesheets/oddx/OddCard.scss';

const OddCard = ({ color, size, text }) => {
  const cardClasses = classNames('block odd-card', color, size);

  return (
    <div className={cardClasses}>
      <div className="card-title">{text}</div>
      <div className="card-logo">
        <img alt={'IconLogo'} src={IconLogo} />
        <span>Oddx</span>
      </div>

      {color === 'black' && (
        <div className="card-picker">
          <div>Pick</div>
          <div>2</div>
        </div>
      )}
    </div>
  );
};

OddCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

export default OddCard;
