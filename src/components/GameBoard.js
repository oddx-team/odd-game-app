import React from 'react';
import OddCard from './oddx/OddCard.js';

import GameBoardScore from './GameBoardScore';
import 'stylesheets/GameBoard.scss';

const GameBoard = () => {
  return (
    <div className="game-board">
      <OddCard black />
      <GameBoardScore />
    </div>
  );
};

export default GameBoard;
