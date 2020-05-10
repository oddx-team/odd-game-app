import React from 'react';
import CssModules from 'react-css-modules';
import OddCard from './oddx/OddCard.js';
import styles from 'stylesheets/PlaygroundCollection.module.scss';

const PlaygroundCollection = () => {
  const oddCards = Array(15)
    .fill(null)
    .map((_, i) => ({
      text: 'Donald Trump has nominated __ for his VP',
      color: 'white',
    }));

  return (
    <div styleName="playground-collection">
      <div styleName="header">player Collection</div>
      <div styleName="container">
        {oddCards.map((card, i) => (
          <div key={i}>
            <OddCard color={card.color} size="small" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssModules(PlaygroundCollection, styles);
