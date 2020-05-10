import React from 'react';
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
      {/* <div className="card-picker">
        <div>Pick</div>
        <div>2</div>
      </div> */}
    </div>
  );
};

export default OddCard;
