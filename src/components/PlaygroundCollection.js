import React from 'react';
import CssModules from 'react-css-modules';
import OddCard from './oddx/OddCard.js';
import styles from 'stylesheets/PlaygroundCollection.module.scss';

const PlaygroundCollection = () => {
  return (
    <div styleName="playground-collection">
      <div styleName="header">player Collection</div>
      <div styleName="container">
        <OddCard black small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
        <OddCard white small />
      </div>
    </div>
  );
};

export default CssModules(PlaygroundCollection, styles);
