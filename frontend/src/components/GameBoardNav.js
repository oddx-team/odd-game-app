import React, { useState } from 'react';
import classNames from 'classnames';
import IconNew from '../cdn/assets/icon-pokenew.png';
import IconVN from '../cdn/assets/icon-vn.png';
import IconGlobal from '../cdn/assets/icon-global.png';
import './GameBoardNav.scss';

const GameBoardNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='game-board-nav'>
      <div
        className={classNames('tab-new', { active: activeIndex === 0 })}
        onClick={(e) => setActiveIndex(0)}
      >
        <img src={IconNew} />
        <span>New</span>
      </div>
      <div
        className={classNames('tab-vn', { active: activeIndex === 1 })}
        onClick={(e) => setActiveIndex(1)}
      >
        <img src={IconVN} />
        <span>VN games</span>
      </div>
      <div
        className={classNames('tab-global', { active: activeIndex === 2 })}
        onClick={(e) => setActiveIndex(2)}
      >
        <img src={IconGlobal} />
        <span>Global games</span>
      </div>
    </div>
  );
};

export default GameBoardNav;
