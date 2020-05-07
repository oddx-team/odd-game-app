import styled from 'styled-components';

export const PlaygroundWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 11rem;
  width: 3.7rem;
  height: 2.4rem;
  background: #fff;
`;

export const PlaygroundHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Tab = styled.div`
  width: 50%;
  height: 0.4rem;
  color: #000;
  font-size: 0.23rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #ececec;
  padding-top: 0.07rem;
  font-family: 'Shentox', sans-serif;
  cursor: pointer;

  &.active {
    background: #efca0d;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;
`;
