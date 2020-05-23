import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';

import IconBell from 'cdn/assets/icon-bell.png';
import IconSearch2 from 'cdn/assets/icon-search.png';
import IconMenu from 'cdn/assets/icon-hamburger.png';
import OddLogo from 'cdn/assets/logo.png';
import {
  GameBannerWrapper,
  MainLogo,
  ProfileContainer,
  IconWrapper,
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
        <ButtonMenu alt={'icon'} src={IconMenu} />

        <StyledSearchBar>
          <IconSearch alt={'icon'} src={IconSearch2} />
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
        <IconWrapper alt={'bell'} src={IconBell} tabindex="0" />
        <IconUser alt={'Avatar'} src={`https://www.tinygraphs.com/spaceinvaders/${Date.now()}?size=100`} />
      </ProfileContainer>
    </GameBannerWrapper>
  );
};

BannerExtra.propTypes = {
  fullBanner: PropTypes.func.isRequired,
};

export default GameBanner;
