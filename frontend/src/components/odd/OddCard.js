import React from 'react';
import styled from 'styled-components';
import IconLogo from 'cdn/assets/logo.png';
import { sizeWH, textMixin, flexCenter, position } from 'mixins';

const BlackCard = styled.div`
  ${sizeWH('3rem', '3rem')}
  background: #212121;
  border-radius: 0.05rem;
  padding: 0.2rem;
  margin: 0.3rem;
  position: relative;

  & > #title {
    ${textMixin({
      color: '#fff',
      size: '0.25rem',
      align: 'left',
    })}
  }

  #logo {
    ${flexCenter('row')}
    ${position({
      pos: 'absolute',
      bottom: '0.2rem',
      left: '0.2rem',
    })}

    img {
      ${sizeWH('0.3rem', '0.3rem')}
    }
    span {
      ${textMixin({ color: '#fff', size: '0.2rem' })}
      ${position({
        pos: 'relative',
        left: '0.07rem',
      })}
    }
  }

  #picker {
    ${flexCenter('row')}
    ${position({ pos: 'absolute', bottom: '0.23rem', left: '2rem' })}

    & > div:first-child {
      ${textMixin({ color: '#fff', size: '0.23rem', weight: 'bold', transform: 'uppercase' })}
      margin-right: 0.06rem;
    }

    & > div:last-child {
      ${textMixin({ color: '#212121', size: '0.2rem' })}
      ${sizeWH('0.27rem', '0.27rem')}
      background: #fff;
      border-radius: 50%;
      padding-top: 0.02rem;
    }
  }
`;

const OddCard = (props) => {
  return (
    <BlackCard>
      <div id='title'>Donald Trump has nominated ___ for his VP!</div>
      <div id='logo'>
        <img src={IconLogo} />
        <span>Oddx Game</span>
      </div>
      <div id='picker'>
        <div>Pick</div>
        <div>2</div>
      </div>
    </BlackCard>
  );
};

export default OddCard;
