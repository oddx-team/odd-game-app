import React from 'react';
import styled from 'styled-components';
import { sizeWH, textMixin } from '../mixins';

const BlackCard = styled.div`
  ${sizeWH('3rem', '3rem')}
  background: #212121;
  border-radius: 0.05rem;
  padding: 0.2rem;
  margin: 0.3rem;

  & > div {
    ${textMixin({
      color: '#fff',
      weight: '0.2rem',
      align: 'left',
    })}
  }
`;

const Card = (props) => {
  return (
    <BlackCard>
      <div>Donald Trump has nominated ___ for his VP!</div>
    </BlackCard>
  );
};

export default Card;
