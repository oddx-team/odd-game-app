import React from 'react';
import CssModules from 'react-css-modules';
import OddTextInput from './oddx/OddTextInput';
import IconChat from 'cdn/assets/icon-chat.png';
import styles from 'stylesheets/GlobalChat.module.scss';

const GlobalChat = () => {
  const onMessageSubmit = text => {
    // handle new message here
  };

  return (
    <div styleName="global-chat">
      <div styleName="chat-tab">
        <img src={IconChat} />
        <span>Chat Box</span>
      </div>
      <div styleName="chat-container">
        <div styleName="content" />
        <div styleName="input">
          <OddTextInput placeholder="Type a message" onSubmit={onMessageSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GlobalChat, styles);
