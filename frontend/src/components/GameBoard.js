import React from 'react';
import GameBoardHeader from './GameBoardHeader';
import CardRoom from './CardRoom';

import './GameBoard.scss';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <GameBoardHeader />

      <div className='card-rooms'>
        <CardRoom />
      </div>
    </div>
  );
};

export default GameBoard;
