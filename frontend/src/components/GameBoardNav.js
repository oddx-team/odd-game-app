import React from 'react';
import './GameBoardNav.scss';

const GameBoardNav = () => {
  return (
    <div className='game-board-nav'>
      <div className='tab-new active'>New</div>
      <div className='tab-vn'>VN games</div>
      <div className='tab-global'>Global games</div>
    </div>
  );
};

export default GameBoardNav;
