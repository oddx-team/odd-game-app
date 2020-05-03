import React from 'react';
import OddTextInput from './oddx/OddTextInput';
import IconChat from 'cdn/assets/icon-chat.png';
import 'stylesheets/GlobalChat.scss';

const GlobalChat = () => {
  const onMessageSubmit = text => {
    // handle new message here
  };

  return (
    <div className="global-chat">
      <div className="chat-tab">
        <img src={IconChat} />
        <span>Chat Box</span>
      </div>
      <div className="chat-container">
        <div className="content" />
        <div className="input">
          <OddTextInput placeholder="Type a message" onSubmit={onMessageSubmit} />
        </div>
      </div>
    </div>
  );
};

export default GlobalChat;
