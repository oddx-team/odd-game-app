import React, { useEffect, useState, useRef, useContext } from 'react';
import { GameContext } from 'contexts/GameContext';
import CssModules from 'react-css-modules';
import OddTextInput from './oddx/OddTextInput';
import OddChatMessage from './oddx/OddChatMessage';
import IconChat from 'cdn/assets/icon-chat.png';
import styles from 'stylesheets/GlobalChat.module.scss';

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
    <div styleName="global-chat">
      <div styleName="chat-tab">
        <img alt={'IconChat'} src={IconChat} />
        <span>Chat Box</span>
      </div>

      <div styleName="chat-container">
        <div styleName="content">
          {globalChat.map((message, i) => (
            <div key={i}>
              <OddChatMessage {...message} />
            </div>
          ))}
          <div ref={lastRef} />
        </div>
        <div styleName="input">
          <OddTextInput placeholder="Type a message" onSubmit={submitMessage} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GlobalChat, styles);
