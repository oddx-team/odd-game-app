import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';

import OddLogo from 'assets/logo.png';
import {
  GameBannerWrapper,
  MainLogo,
  ProfileContainer,
  IconBell,
  IconUser,
  ButtonMenu,
  IconSearch,
  StyledInput,
  StyledSearchBar,
  StyledCircleLogo,
  Wrapper,
} from 'stylesheets/GameBanner.style';

const BannerExtra = ({ fullBanner }) => {
  return (
    <div>
      <Wrapper className={classNames({ hidden: !fullBanner })}>
        <ButtonMenu />

        <StyledSearchBar>
          <IconSearch />
          <StyledInput type="text" placeholder="Search" />
        </StyledSearchBar>
      </Wrapper>

      <Wrapper className={classNames({ hidden: fullBanner })}>
        <StyledCircleLogo>
          <img alt={'logo'} src={OddLogo} />
        </StyledCircleLogo>
      </Wrapper>
    </div>
  );
};

const GameBanner = () => {
  const history = useHistory();
  const { state } = useContext(GameContext);
  const { fullBanner } = state;

  return (
    <GameBannerWrapper>
      <MainLogo onClick={() => history.push('/')}>
        <img alt={'logo'} src={OddLogo} />
        <span>Oddx</span>
      </MainLogo>
      <BannerExtra fullBanner={fullBanner} />

      <ProfileContainer>
        <IconBell>
          <i />
        </IconBell>
        <IconUser alt={'Avatar'} src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
      </ProfileContainer>
    </GameBannerWrapper>
  );
};

BannerExtra.propTypes = {
  fullBanner: PropTypes.bool.isRequired,
};

export default GameBanner;
