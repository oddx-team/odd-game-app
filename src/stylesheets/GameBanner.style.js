import styled from 'styled-components';

export const GameBannerWrapper = styled.div`
  width: 100%;
  height: 0.8rem;
  background: #2d2d2d;
  &.full {
    height: 0.7rem;
  }
`;

export const MainLogo = styled.div`
  color: #fff;
  font-size: 0.4rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  position: absolute;
  top: 0.12rem;
  left: 1.2rem;
  cursor: pointer;
  img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.05rem;
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0.05rem;
  right: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const IconWrapper = styled.div`
  width: 0.45rem;
  height: 0.4rem;
  img {
    width: 0.27rem;
    height: 0.27rem;
    position: absolute;
    top: 0.02rem;
    left: 0.05rem;
  }
`;

export const IconUser = styled.img`
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  position: relative;
  left: 0.01rem;
  top: 0rem;
  border-radius: 50%;
`;

export const IconSearch = styled.img`
  position: absolute;
  top: 0.05rem;
  left: 0.05rem;
  width: 0.27rem;
  height: 0.27rem;
`;

export const StyledCircleLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
  background: #fff;
  border-radius: 50%;
  box-shadow: 2px 7px 8px 0px #ddd;
  z-index: 2;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.6rem;
    height: 0.6rem;
  }
`;

export const ButtonMenu = styled.img`
  position: absolute;
  top: 0.13rem;
  left: 3.6rem;
  cursor: pointer;
  background: transparent;
  width: 0.32rem;
  height: 0.32rem;
`;

export const Wrapper = styled.div`
  &.hidden {
    visibility: hidden;
  }
`;

export const StyledSearchBar = styled.div`
  width: 2.5rem;
  height: 0.38rem;
  position: absolute;
  top: 0.1rem;
  left: 4.05rem;
  color: #000;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 0.05rem;
  background: #bdbdbd;
  border-radius: 0.03rem;
  transition: width 0.3s;
  &:hover {
    background: #fafafa;
    width: 4.48rem;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0.05rem;
  left: 0.05rem;
  width: 89%;
  margin-left: 0.2rem;
`;
