import React from 'react';
import OddCard from './oddx/OddCard.js';

import PlaygroundWidgets from './PlaygroundWidgets';
import PlaygroundCollection from './PlaygroundCollection';
import 'stylesheets/Playground.scss';

const Playground = () => {
  const oddCards = Array(4)
    .fill(null)
    .map((_, i) => ({
      text: 'Donald Trump has nominated __ for his VP',
      color: 'white',
    }));

  return (
    <div className="playground">
      <div className="message">Select a card to play!</div>
      <div className="container">
        <div className="card-black">
          <div className="title">*Black card:</div>
          <OddCard black />
          <button className="btn-select block gray">Confirm</button>
        </div>

        <div className="card-white">
          <div className="title">The white cards played this round:</div>
          <div className="cards">
            {oddCards.map((_, i) => (
              <div key={i}>
                <OddCard white medium={oddCards.length <= 4} small={oddCards.length > 4} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <PlaygroundWidgets />
      <PlaygroundCollection />
    </div>
  );
};

export default Playground;
