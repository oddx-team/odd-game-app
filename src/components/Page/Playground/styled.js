import styled from 'styled-components';

export const PlaygroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
  padding: 0.1rem 0 0 0.2rem;
  color: #000;
  font-size: 0.23rem;
  font-weight: bold;
  text-align: left;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BlackCardContainer = styled.div`
  padding: 0.1rem 0 0 0.2rem;
  text-align: left;
`;

export const WhiteCardContainer = styled(BlackCardContainer)``;

export const LeftTitle = styled.div`
  color: #000;
  font-size: 0.2rem;
  font-style: italic;
`;

export const RightTitle = styled(LeftTitle)`
  position: absolute;
  top: 0.48rem;
`;

export const ButtonConfirm = styled.button`
  width: 2.52rem;
  color: #fff;
  font-size: 0.21rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CardsList = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 3.07rem;
  display: flex;
  padding-left: 0.1rem;
  padding-top: 0.05rem;
  margin-top: 0.2rem;
  height: 3.55rem;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
