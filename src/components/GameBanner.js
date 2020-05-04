import React from 'react';
import { useHistory } from 'react-router-dom';
import IconFriends from 'cdn/assets/icon-friends.png';
import IconBell from 'cdn/assets/icon-bell.png';
import 'stylesheets/GameBanner.scss';

const GameBanner = () => {
  const history = useHistory();
  return (
    <div className="game-banner">
      <div className="game-logo" onClick={() => history.push('/')}>
        Oddx
      </div>
      <div className="btn-menu" />
      <div className="search fixed wrapper block">
        <div className="icon-search" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="profile">
        <div className="block wrapper btn-friends">
          <img alt={'IconFriends'} src={IconFriends} />
        </div>
        <div className="block wrapper btn-noti">
          <img alt={IconBell} src={IconBell} />
        </div>
        <div className="block round user">
          <img alt={'Avatar'} src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
