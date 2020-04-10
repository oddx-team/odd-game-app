import React from 'react';
import './CardRoom.scss';

const CardRoom = (props) => {
  return (
    <div className='card-room'>
      <div className='title'>Name room</div>
      <div className='player'>
        <strong>Player:</strong>
        <span>KingName123</span>
      </div>
      <div className='room'>
        <strong>Room:</strong>
        <span>8/10</span>
      </div>
      <div className='spectator'>
        <strong>Spectator:</strong>
        <span>15</span>
      </div>
      <div className='spectator'>
        <strong>Goal:</strong>
        <span>8</span>
      </div>

      <button className='btn-join'></button>
      <button className='btn-spectate'></button>
    </div>
  );
};

export default CardRoom;
