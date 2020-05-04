import React, { useEffect, useState, useRef } from 'react';
import CssModules from 'react-css-modules';
import OddTextInput from './oddx/OddTextInput';
import OddChatMessage from './oddx/OddChatMessage';
import IconChat from 'cdn/assets/icon-chat.png';
import styles from 'stylesheets/GlobalChat.module.scss';

import Service from 'services';

const GlobalChat = () => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    getChats().then(chats => setMessages(chats));

    if (window['WebSocket']) {
      const CHAT_WS_URI = '/api/v1/chat/ws';
      const wsProtocol = window.location.protocol !== 'https:' ? 'ws://' : 'wss://';
      const conn = new WebSocket(wsProtocol + document.location.host + CHAT_WS_URI);
      setWs(conn);

      conn.onclose = () => {
        setWs(null);
      };
      conn.onmessage = e => {
        const newMessages = JSON.parse(e.data);
        setMessages(oldMessages => [...oldMessages, newMessages]);
      };
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

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
        <div styleName="content">
          {messages && messages.length > 0 && messages.map((message, i) => <OddChatMessage {...message} key={i} />)}
          <div ref={messagesEndRef} />
        </div>
        <div styleName="input">
          <OddTextInput placeholder="Type a message" onSubmit={onMessageSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GlobalChat, styles);
