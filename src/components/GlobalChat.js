import React, { useEffect, useState } from 'react';
import CssModules from 'react-css-modules';
import OddTextInput from './oddx/OddTextInput';
import OddChatMessage from './oddx/OddChatMessage';
import IconChat from 'cdn/assets/icon-chat.png';
import styles from 'stylesheets/GlobalChat.module.scss';

import Service from 'services';

const GlobalChat = () => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChats().then(chats => setMessages(chats));

    if (window['WebSocket']) {
      const CHAT_WS_URI = '/api/v1/chat/ws';
      const wsProtocol = window.location.protocol !== 'https:' ? 'ws://' : 'wss://';
      const conn = new WebSocket(wsProtocol + document.location.host + CHAT_WS_URI);
      setWs(conn);

      conn.onclose = () => {
        // Connection closed
      };
      conn.onmessage = e => {
        const newMessages = JSON.parse(e.data);
        setMessages(oldMessages => [...oldMessages, newMessages].reverse());
      };
    }
  }, []);

  const getChats = async () => {
    return await Service.getChats();
  };

  const onMessageSubmit = text => {
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
        <div styleName="content">{messages.map((message, i) => <OddChatMessage {...message} key={i} />)}</div>
        <div styleName="input">
          <OddTextInput placeholder="Type a message" onSubmit={onMessageSubmit} disabled={!ws || ws.readyState !== 1} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GlobalChat, styles);
