import React from 'react';
import CssModules from 'react-css-modules';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconScore from 'cdn/assets/icon-scoreboard.png';
import styles from 'stylesheets/PlaygroundScore.module.scss';

const Player = ({ name, points, host }) => {
  return (
    <StyledPlayer>
      <Avatar src={`https://www.tinygraphs.com/spaceinvaders/guest?size=60`} />
      <Name>{name}</Name>
      <Points>{points} Awesome Pts</Points>

      {host && <Host>Host</Host>}
    </StyledPlayer>
  );
};

const PlaygroundScore = () => {
  return (
    <div styleName="leaderboard">
      <div styleName="header">
        <img alt={'IconScore'} src={IconScore} />
        <span>Scoreboard</span>
      </div>

      <ScoreContainer>
        <Player name="admin" points="10" />
        <Player name="admin" points="10" host />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
      </ScoreContainer>
    </div>
  );
};

const ScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0.15rem;
  padding-top: 0.2rem;
  overflow-y: auto;
`;

const StyledPlayer = styled.div`
  width: 100%;
  position: relative;
  text-align: left;
  font-size: 0.19rem;
  margin-bottom: 0.15rem;
`;

const Avatar = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
`;

const Name = styled.strong`
  position: absolute;
  top: 0.05rem;
  margin-left: 0.05rem;
`;

const Host = styled.div`
  position: absolute;
  top: 0.05rem;
  right: -0.1rem;
  margin-left: 0.05rem;
  font-size: 0.17rem;
`;

const Points = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.4rem;
  font-size: 0.17rem;
`;

Player.propTypes = {
  name: PropTypes.string,
  points: PropTypes.string,
  host: PropTypes.bool,
};

export default CssModules(PlaygroundScore, styles);
