import React, { useState } from 'react';
import CssModules from 'react-css-modules';
import RoomListNav from './RoomListNav';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';
import styles from 'stylesheets/RoomList.module.scss';

const RoomList = () => {
  const [rooms] = useState(new Array(10).fill(null));

  const handleJoin = id => history => {
    history.push('/play');
  };

  const handleSpectator = id => history => {
    history.push('/play');
  };

  return (
    <div styleName="room-list">
      <div styleName="room-list-inner">
        <RoomListNav />
        <div styleName="container">
          <div styleName="title">Game rooms</div>
          <div styleName="subtitle">Select any room:</div>
          <div styleName="rooms">
            {rooms.map((_, i) => <CardRoom key={i} onJoin={handleJoin(i)} onSpectate={handleSpectator(i)} />)}
          </div>
        </div>
      </div>

      <div className="room-list-chat">
        <GlobalChat />
      </div>
    </div>
  );
};

export default CssModules(RoomList, styles);
