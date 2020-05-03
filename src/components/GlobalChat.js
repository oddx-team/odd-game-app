import React from 'react';
import CssModules from 'react-css-modules';
import OddTextInput from './oddx/OddTextInput';
import OddChatMessage from './oddx/OddChatMessage';
import IconChat from 'cdn/assets/icon-chat.png';
import styles from 'stylesheets/GlobalChat.module.scss';

const GlobalChat = () => {
  const onMessageSubmit = text => {
    // handle new message here
  };

  const messages = [
    {
      name: 'petabyte',
      message: 'hello!',
      time: '1:29AM',
      online: false,
    },
    {
      name: 'mocmeo',
      message: 'nice to meet u! ',
      time: '1:30AM',
      online: true,
    },
    {
      name: 'mocmeo',
      message: 'Test test test testtttt testtt! Hahahah hahaa',
      time: '1:30AM',
      online: true,
    },
  ];

  return (
    <div styleName="global-chat">
      <div styleName="chat-tab">
        <img src={IconChat} />
        <span>Chat Box</span>
      </div>
      <div styleName="chat-container">
        <div styleName="content">{messages.map((message, i) => <OddChatMessage {...message} key={i} />)}</div>
        <div styleName="input">
          <OddTextInput placeholder="Type a message" onSubmit={onMessageSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(GlobalChat, styles);
