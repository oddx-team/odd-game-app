import React, { useState } from 'react';
import OddCard from './oddx/OddCard.js';

import './GameBoard.scss';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <OddCard className='black' />
      <OddCard className='white' />
      <OddCard className='white medium' />
      <OddCard className='black medium' />
    </div>
  );
};

export default GameBoard;
