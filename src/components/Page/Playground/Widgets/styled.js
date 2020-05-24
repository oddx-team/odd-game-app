import styled from 'styled-components';

export const WidgetWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 11rem;
  width: 3.7rem;
  height: 1.83rem;
  background: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Tab = styled.div`
  width: 50%;
  height: 0.3rem;
  color: #000;
  font-size: 0.19rem;
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
  height: 2.2rem;
`;
