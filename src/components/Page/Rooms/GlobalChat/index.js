import React, { useEffect, useState, useRef, useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled';
import PropTypes from 'prop-types';
import OddTextInput from 'components/oddx/OddTextInput';
import OddChatMessage from 'components/oddx/OddChatMessage';
import Api from 'services';

const GlobalChat = () => {
  const [ws, setWs] = useState(null);
  const { state, dispatch } = useContext(GameContext);
  const { globalChat } = state;
  const lastRef = useRef(null);

  useEffect(() => scrollToBottom(), [globalChat]);
  useEffect(() => {
    fetchGlobalChats();
    configWebsocket();
  }, []);

  const fetchGlobalChats = async () => {
    const messages = await Api.getChats();
    dispatch({
      type: 'UPDATE_GLOBAL_CHAT',
      messages,
    });
  };

  const configWebsocket = () => {
    if (window['WebSocket']) {
      const CHAT_WS_URI = '/api/v1/chat/ws';
      const wsProtocol = window.location.protocol !== 'https:' ? 'ws://' : 'wss://';
      const conn = new WebSocket(wsProtocol + document.location.host + CHAT_WS_URI);
      setWs(conn);

      conn.onclose = () => setWs(null);
      conn.onmessage = e => {
        const newMessage = JSON.parse(e.data);
        dispatch({
          type: 'UPDATE_GLOBAL_CHAT',
          messages: [newMessage],
        });
      };
    }
  };

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView();
  };

  const submitMessage = text => {
    if (ws && ws.readyState === 1) {
      ws.send(text);
    }
  };

  return (
    <GlobalChatWrapper>
      <ChatTab title="Chat Box" />

      <StyledContainer>
        <ChatContent>
          {globalChat.map((message, i) => (
            <div key={i}>
              <OddChatMessage {...message} />
            </div>
          ))}
          <div ref={lastRef} />
        </ChatContent>

        <OddTextInput placeholder="Type a message" onSubmit={submitMessage} />
      </StyledContainer>
    </GlobalChatWrapper>
  );
};

const ChatTab = ({ title }) => {
  return (
    <StyledTab>
      <i />
      <span>{title}</span>
    </StyledTab>
  );
};

ChatTab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default GlobalChat;
