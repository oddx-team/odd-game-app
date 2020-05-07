import React from 'react';
import {
  StyledScoreboard,
  ScoreContainer,
  StyledPlayer,
  Avatar,
  Name,
  Host,
  Points,
} from 'stylesheets/panels/PanelScoreboard.style';

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

const PanelScoreboard = () => {
  return (
    <StyledScoreboard>
      <ScoreContainer>
        <Player name="admin" points="10" />
        <Player name="admin" points="10" host />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
        <Player name="admin" points="10" />
      </ScoreContainer>
    </StyledScoreboard>
  );
};

export default PanelScoreboard;
