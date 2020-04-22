import React from 'react';
import OddTextInput from './oddx/OddTextInput';
import 'stylesheets/GlobalChat.scss';

const GlobalChat = () => {
  const onMessageSubmit = (text) => {
    //handle new message here
  };

  return (
    <div className='global-chat'>
      <div className='global-chat--banner'>
        <span>Chat room</span>
      </div>
      <div className='global-chat--content'></div>
      <div className='global-chat--input'>
        <OddTextInput placeholder='Type here' onSubmit={onMessageSubmit} />
      </div>
    </div>
  );
};

export default GlobalChat;
