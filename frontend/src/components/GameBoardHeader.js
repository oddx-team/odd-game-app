import React from 'react';
import './GameBoardHeader.scss';

const GameBoardHeader = () => {
  return (
    <div className='game-board-header'>
      <div className='game-logo' />
      <div className='search' />
      <div className='user' />
    </div>
  );
};

export default GameBoardHeader;
