import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';

import {
  LandingWrapper,
  Logo,
  LeftOverlay,
  RightOverlay,
  Container,
  StyledNamePanel,
  TextInput,
  ButtonStart,
  Title,
} from './styled';

const PageLanding = () => {
  const history = useHistory();
  const { dispatch } = useContext(GameContext);

  const startGame = () => {
    history.push('/rooms');
  };

  useEffect(
    () => {
      dispatch({
        type: 'SET_FULL_BANNER',
        fullBanner: false,
      });
    },
    [dispatch],
  );

  return (
    <LandingWrapper>
      <Logo />
      <LeftOverlay />
      <RightOverlay />

      <Container>
        <Title>Play now</Title>
        <StyledNamePanel className="wrapper block">
          <TextInput type="text" placeholder="Enter your name" onKeyDown={e => e.key === 'Enter' && startGame()} />
        </StyledNamePanel>
        <ButtonStart className="block blue" onClick={() => startGame()}>
          <span>Start</span>
        </ButtonStart>
      </Container>
    </LandingWrapper>
  );
};

export default PageLanding;
