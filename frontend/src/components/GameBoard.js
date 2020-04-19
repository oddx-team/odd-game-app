import React from 'react';
import GameBoardHeader from './GameBoardHeader';
import GameBoardNav from './GameBoardNav';
import CardRoom from './CardRoom';

import './GameBoard.scss';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <GameBoardHeader />
      <GameBoardNav />

      <div className='card-rooms'>
        <div className='section-title'>Game rooms:</div>
        <CardRoom />
      </div>
    </div>
  );
};

export default GameBoard;
