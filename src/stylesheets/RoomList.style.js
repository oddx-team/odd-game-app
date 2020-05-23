import styled from 'styled-components';

export const RoomListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto;
  align-items: stretch;
`;

export const OuterWrapper = styled.div`
  width: 75.5%;
`;

export const Container = styled.div`
  width: 100%;
  height: 92%;
  overflow-y: scroll;
  top: 0;
  border: 0.013rem solid #ddd;
  background: #fff;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
`;

export const Title = styled.div`
  color: #000;
  font-size: 0.25rem;
  font-weight: bold;
  text-align: left;
  margin-top: 0.1rem;
  position: relative;

  img {
    width: 0.38rem;
    height: 0.38rem;
    position: absolute;
    left: 1.6rem;
    top: 0rem;
    cursor: pointer;
  }
`;

export const Subtitle = styled.div`
  color: #000;
  font-size: 0.18rem;
  font-weight: normal;
  text-align: left;
`;

export const ButtonCreate = styled.button`
  position: absolute;
  top: 0.1rem;
  left: 8.46rem;
  color: #fff;
  font-size: 0.22rem;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;

  img {
    weight: 0.23rem;
    height: 0.23rem;
    margin-left: -0.1rem;
    margin-right: 0.02rem;
  }
  span {
    position: relative;
    top: 0.01rem;
  }
`;

export const RoomContainer = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;
