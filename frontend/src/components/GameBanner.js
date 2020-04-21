import React from 'react';
import IconFriends from 'cdn/assets/icon-friends.png';
import IconBell from 'cdn/assets/icon-bell.png';
import Avatar from 'cdn/assets/avatar.png';

import './GameBanner.scss';

const GameBanner = () => {
  return (
    <div className='game-banner'>
      <div className='game-logo'>Oddx</div>
      <div className='btn-menu' />
      <div className='search fixed wrapper block'>
        <div className='icon-search' />
        <input type='text' placeholder='Search' />
      </div>

      <div className='profile'>
        <div className='block wrapper btn-friends'>
          <img src={IconFriends} />
        </div>
        <div className='block wrapper btn-noti'>
          <img src={IconBell} />
        </div>
        <div className='block round user'>
          <img src={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
