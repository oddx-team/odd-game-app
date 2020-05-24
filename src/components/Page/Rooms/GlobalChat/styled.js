import styled from 'styled-components';
import { imageCDN } from 'mixins';

export const GlobalChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-left: 0.1rem;
  height: 100%;
`;

export const StyledTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #000;
  font-size: 0.21rem;
  font-weight: bold;
  border-left: 0.013rem solid #ddd;
  border-right: 0.013rem solid #ddd;
  background: #fff;
  width: 1.5rem;
  height: 0.53rem;
  position: absolute;
  top: 0;
  right: 2rem;
  z-index: 1;

  i {
    ${imageCDN('icon-chat.png', '0.3rem', '0.3rem')};
    display: inline-block;
    margin-right: 0.05rem;
  }
`;

export const StyledContainer = styled.div`
  width: 3.5rem;
  height: 92%;
  position: absolute;
  top: 0.5rem;
  right: 0;
  border-left: 0.013rem solid #ddd;
  border-bottom: 0.013rem solid #ddd;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
`;

export const ChatContent = styled.div`
  border-top: 0.013rem solid #ddd;
  flex: 1;
  overflow-y: auto;
`;
