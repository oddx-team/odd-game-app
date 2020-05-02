import React, { useState } from 'react';
import RoomListNav from './RoomListNav';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';

import 'stylesheets/RoomList.scss';

const RoomList = () => {
  const [rooms] = useState(new Array(10).fill(null));

  const handleJoin = id => history => {
    history.push(`/play/${id}`);
  };

  const handleSpectator = id => history => {
    history.push(`/play/${id}?spectator=true`);
  };

  return (
    <div className="room-list">
      <div className="content-and-nav-wrapper">
        <RoomListNav />

        <div className="content">
          <div className="container">
            <div className="title">Game rooms</div>
            <div className="subtitle">Select any room:</div>
          </div>

          <div className="rooms">
            {rooms.map((_, i) => (
              // {/* temporary --- later room should has id and set to key */}
              <CardRoom key={i} onJoin={handleJoin(i)} onSpectate={handleSpectator(i)} />
            ))}
          </div>
        </div>
      </div>

      <GlobalChat />
    </div>
  );
};

export default RoomList;
