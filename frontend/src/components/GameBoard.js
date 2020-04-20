import React from 'react';
import GameBoardNav from './GameBoardNav';
import CardRoom from './CardRoom';

import './GameBoard.scss';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <GameBoardNav />

      <div className='game-content'>
        <div className='container'>
          <div className='title'>Game rooms</div>
          <div className='subtitle'>Select any room:</div>
        </div>

        <div className='rooms'>
          <CardRoom />
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
