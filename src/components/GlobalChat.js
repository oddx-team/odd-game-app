import React from 'react';
import OddTextInput from './oddx/OddTextInput';
import 'stylesheets/GlobalChat.scss';

const GlobalChat = () => {
  const onMessageSubmit = text => {
    // handle new message here
  };

  return (
    <div className="global-chat">
      <div className="chat-tab">
        <span>Chat room</span>
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
