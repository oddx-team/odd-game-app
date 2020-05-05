import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';
import CssModules from 'react-css-modules';
import styled from 'styled-components';
import classNames from 'classnames';

import IconFriends from 'cdn/assets/icon-friends.png';
import IconBell from 'cdn/assets/icon-bell.png';
import styles from 'stylesheets/GameBanner.module.scss';
import { imageCDN } from 'mixins';

const StyledCircleLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
  background: #fff;
  border-radius: 50%;
  box-shadow: inset 0 0 25px 25px #fff;
  box-shadow: 2px 7px 8px 0px #ddd;
  z-index: 2;
`;

const GameBanner = () => {
  const history = useHistory();
  const { state } = useContext(GameContext);
  const { fullBanner } = state;

  const SearchBar = fullBanner && (
    <div>
      <div styleName="btn-menu" />
      <div styleName="search" className="fixed wrapper block">
        <div styleName="icon-search" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );

  const CircleLogo = !fullBanner && (
    <StyledCircleLogo>
      <div styleName="logo" />
    </StyledCircleLogo>
  );

  return (
    <div styleName={classNames('game-banner', { full: fullBanner })}>
      <div styleName="game-logo" onClick={() => history.push('/')}>
        Oddx
      </div>
      {SearchBar}
      {CircleLogo}

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

export default CssModules(GameBanner, styles, { allowMultiple: true });
