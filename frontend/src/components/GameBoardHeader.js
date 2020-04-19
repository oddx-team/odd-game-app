import React from 'react';
import './GameBoardHeader.scss';

const GameBoardHeader = () => {
  return (
    <div className='game-board-header'>
      <div className='game-logo'>Oddx</div>
      <div className='btn-menu' />
      <div className='search fixed wrapper block'>
        <div className='icon-search' />
        <input type='text' placeholder='Search' />
      </div>
      <div className='user' />
    </div>
  );
};

export default GameBoardHeader;
