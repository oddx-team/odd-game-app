import React, { useState } from 'react';
import OddCard from './odd/OddCard.js';

const GameBoard = () => {
  return (
    <div className='game-board'>
      <OddCard />
    </div>
  );
};

export default GameBoard;
