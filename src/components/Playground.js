import React from 'react';
import OddCard from './oddx/OddCard.js';

import PlaygroundScore from './PlaygroundScore';
import PlaygroundWidgets from './PlaygroundWidgets';
import PlaygroundCollection from './PlaygroundCollection';
import 'stylesheets/Playground.scss';

const Playground = () => {
  return (
    <div className="playground">
      <OddCard black />
      <PlaygroundScore />
      <PlaygroundWidgets />
      <PlaygroundCollection />
    </div>
  );
};

export default Playground;
