import React from 'react';
import CssModules from 'react-css-modules';
import OddChatMessage from 'components/oddx/OddChatMessage';
import styles from 'stylesheets/PlaygroundCollection.module.scss';

const PlaygroundCollection = () => {
  return (
    <div styleName="playground-collection">
      <div styleName="header">player's Collection</div>
      <div styleName="container">
        <div styleName="content">
          <OddChatMessage user="admin" message="Hello world!" time={Date.now()} />
        </div>
      </div>
    </div>
  );
};

export default CssModules(PlaygroundCollection, styles);
