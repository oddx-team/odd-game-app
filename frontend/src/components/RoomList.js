import React, { useState } from 'react';
import RoomListNav from './RoomListNav';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';

import './RoomList.scss';

const RoomList = () => {
  const [rooms, setRooms] = useState(new Array(10).fill(null));

  return (
    <div className='room-list'>
      <RoomListNav />
      <GlobalChat />

      <div className='content'>
        <div className='container'>
          <div className='title'>Game rooms</div>
          <div className='subtitle'>Select any room:</div>
        </div>

        <div className='rooms'>
          {rooms.map((_, i) => (
            <CardRoom />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
