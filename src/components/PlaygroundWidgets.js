import React from 'react';
import CssModules from 'react-css-modules';
import OddChatMessage from 'components/oddx/OddChatMessage';
import OddTextInput from 'components/oddx/OddTextInput';
import styles from 'stylesheets/PlaygroundChat.module.scss';

const PlaygroundWidgets = () => {
  return (
    <div styleName="playground-chat">
      <div styleName="header">Chat room</div>
      <div styleName="container">
        <div styleName="content">
          <OddChatMessage user="admin" message="Hello world!" time={Date.now()} small />
          <OddChatMessage user="mocmeo" message="Hello world!" time={Date.now()} small />
          <OddChatMessage user="bigdaddy" message="Hello world!" time={Date.now()} small />
          <OddChatMessage user="mocmeo" message="Hello world!" time={Date.now()} small />
        </div>

        <div styleName="input">
          <OddTextInput placeholder="Type a message" />
        </div>
      </div>
    </div>
  );
};

export default CssModules(PlaygroundWidgets, styles);
