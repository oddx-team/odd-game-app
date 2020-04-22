import React, { useState } from 'react';
import OddCard from './oddx/OddCard.js';

import 'stylesheets/GameBoard.scss';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <OddCard black />
      <OddCard white />
      <OddCard white medium />
      <OddCard black medium />
    </div>
  );
};

export default GameBoard;
