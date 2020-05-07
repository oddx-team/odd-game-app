import styled from 'styled-components';

export const StyledMessage = styled.div`
  position: relative;
  text-align: left;
  font-size: 0.19rem;
  padding: 0.1rem;
  margin-bottom: -0.2rem;

  &.small {
    font-size: 0.17rem;

    img {
      width: 0.35rem;
      height: 0.35rem;
    }
  }
`;

export const Status = styled.div`
  position: absolute;
  top: 0.33rem;
  left: 0.33rem;
  width: 0.2rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0.027rem;
    left: 0.03rem;
    width: 0.15rem;
    height: 0.15rem;
    background: #f4511e;
    border-radius: 50%;
  }

  &.online {
    &::before {
      background: #1dba7b;
    }
  }
`;

export const Name = styled.div`
  font-weight: bold;
  position: absolute;
  top: 0.1rem;
  left: 0.6rem;
`;

export const Message = styled.div`
  position: relative;
  top: -0.2rem;
  left: 0.5rem;
  width: 2.7rem;
  word-wrap: break-word;
`;

export const Time = styled.div`
  position: absolute;
  right: 0.15rem;
  top: 0.12rem;
  font-size: 0.16rem;
  color: #212121;
`;

export const Avatar = styled.img`
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
`;
