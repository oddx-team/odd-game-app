import React from 'react';
import styled from 'styled-components';
import { sizeWH, textMixin } from 'mixins';

const BlackCard = styled.div`
  ${sizeWH('3rem', '3rem')}
  background: #212121;
  border-radius: 0.05rem;
  padding: 0.2rem;
  margin: 0.3rem;

  & > #title {
    ${textMixin({
      color: '#fff',
      weight: '0.2rem',
      align: 'left',
    })}
  }
`;

const OddCard = (props) => {
  return (
    <BlackCard>
      <div id='title'>Donald Trump has nominated ___ for his VP!</div>
      <div id='extra'>
        <div id='logo'>{/* <img src={}/> */}</div>
      </div>
    </BlackCard>
  );
};

export default OddCard;
