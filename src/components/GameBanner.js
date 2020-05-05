import React from 'react';
import { useHistory } from 'react-router-dom';
import IconFriends from 'cdn/assets/icon-friends.png';
import IconBell from 'cdn/assets/icon-bell.png';
import CssModules from 'react-css-modules';
import styles from 'stylesheets/GameBanner.module.scss';

const GameBanner = () => {
  const history = useHistory();
  return (
    <div styleName="game-banner">
      <div styleName="game-logo" onClick={() => history.push('/')}>
        Oddx
      </div>
      <div styleName="btn-menu" />
      <div styleName="search" className="fixed wrapper block">
        <div styleName="icon-search" />
        <input type="text" placeholder="Search" />
      </div>

      <div styleName="profile">
        <div className="block wrapper">
          <img alt={'IconFriends'} src={IconFriends} />
        </div>
        <div className="block wrapper">
          <img alt={IconBell} src={IconBell} />
        </div>
        <div styleName="user" className="block round">
          <img alt={'Avatar'} src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GameBanner, styles);
