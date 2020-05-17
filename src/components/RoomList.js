import React, { useState, useContext, useEffect } from 'react';
import CssModules from 'react-css-modules';
import RoomListNav from './RoomListNav';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';
import styles from 'stylesheets/RoomList.module.scss';
import { GameContext } from 'contexts/GameContext';

const RoomList = () => {
  const [rooms] = useState(new Array(10).fill(null));
  const { dispatch } = useContext(GameContext);

  const handleJoin = id => history => {
    history.push('/play');
  };

  const handleSpectator = id => history => {
    history.push('/play');
  };

  const updateOnlineStatus = () => {
    dispatch({
      type: 'UPDATE_ONLINE_STATUS',
    });
  };

  useEffect(
    () => {
      dispatch({
        type: 'SET_FULL_BANNER',
        fullBanner: true,
      });
    },
    [dispatch],
  );

  return (
    <div styleName="room-list">
      <div styleName="room-list-inner">
        <RoomListNav />
        <div styleName="container">
          <div styleName="title">Game rooms</div>
          <div styleName="subtitle">Select any room:</div>
          <button styleName="btn-toggle" className="block accent" onClick={updateOnlineStatus}>
            <span>Toggle</span>
          </button>

          <div styleName="rooms">
            {rooms.map((_, i) => (
              <div key={i}>
                <CardRoom onJoin={handleJoin(i)} onSpectate={handleSpectator(i)} />
              </div>
            ))}
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
