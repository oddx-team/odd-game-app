import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';
import ExtraLeft from 'cdn/assets/bg-extra-left.svg';
import ExtraRight from 'cdn/assets/bg-extra-right.svg';
import WorldLogo from 'cdn/assets/world.svg';

import {
  PanelStartWrapper,
  Logo,
  LeftOverlay,
  RightOverlay,
  Container,
  StyledNamePanel,
  TextInput,
  ButtonStart,
  Title,
} from 'stylesheets/panels/PanelStart.style';

const PanelStart = () => {
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
    <PanelStartWrapper>
      <Logo alt={'logo'} src={WorldLogo} />
      <LeftOverlay alt={'overlay'} src={ExtraLeft} />
      <RightOverlay alt={'overlay'} src={ExtraRight} />

      <Container>
        <Title>Play now</Title>

        <StyledNamePanel className="wrapper block">
          <TextInput type="text" placeholder="Enter your name" onKeyDown={e => e.key === 'Enter' && startGame()} />
        </StyledNamePanel>

        <ButtonStart className="block blue" onClick={() => startGame()}>
          Start
        </ButtonStart>
      </Container>
    </PanelStartWrapper>
  );
};

export default PanelStart;
