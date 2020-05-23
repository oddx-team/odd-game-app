import React from 'react';
import OddCard from './oddx/OddCard.js';
import { CollectionWrapper, Header, Content } from 'stylesheets/PlaygroundCollection.style';

const PlaygroundCollection = () => {
  const oddCards = Array(15)
    .fill(null)
    .map((_, i) => ({
      text: 'Donald Trump has nominated __ for his VP',
      color: 'white',
    }));

  return (
    <CollectionWrapper>
      <Header>Player Collection</Header>
      <Content>
        {oddCards.map((card, i) => (
          <div key={i}>
            <OddCard {...card} size="small" />
          </div>
        ))}
      </Content>
    </CollectionWrapper>
  );
};

export default PlaygroundCollection;
