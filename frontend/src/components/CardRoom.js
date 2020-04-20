import React from 'react';
import './CardRoom.scss';

const CardRoom = (props) => {
  return (
    <div className='card wrapper block'>
      <div className='content'>
        <div className='title'>Name room</div>
        <div className='host'>
          <strong>Host: </strong>
          <span>Admin</span>
        </div>
        <div className='room'>
          <strong>Room: </strong>
          <span>8/10</span>
        </div>
        <div className='spectator'>
          <strong>Spectators: </strong>
          <span>15</span>
        </div>
        <div className='spectator'>
          <strong>Status: </strong>
          <span>In Progress</span>
        </div>
      </div>

      <button className='block accent btn-join'>Join</button>
      <button className='block blue btn-spectate'>Spectate</button>
    </div>
  );
};

export default CardRoom;
