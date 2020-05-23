import React from 'react';
import OddCard from './oddx/OddCard.js';

import PlaygroundWidgets from './PlaygroundWidgets';
import PlaygroundCollection from './PlaygroundCollection';
import {
  PlaygroundWrapper,
  Header,
  Container,
  BlackCardContainer,
  WhiteCardContainer,
  LeftTitle,
  RightTitle,
  ButtonConfirm,
  CardsList,
} from 'stylesheets/Playground.style';

const Playground = () => {
  const oddCards = Array(5)
    .fill(null)
    .map((_, i) => ({
      text: 'Donald Trump has nominated __ for his VP',
      color: 'white',
    }));

  const getCardSize = () => {
    return oddCards.length <= 4 ? 'medium' : 'small';
  };

  return (
    <PlaygroundWrapper>
      <Header>Select a card to play!</Header>
      <Container>
        <BlackCardContainer>
          <LeftTitle>*Black card:</LeftTitle>
          <OddCard color="black" text="Donald Trump has nominated __ for his VP" />
          <ButtonConfirm className="block dark-blue">Confirm</ButtonConfirm>
        </BlackCardContainer>

        <WhiteCardContainer>
          <RightTitle>The white cards played this round:</RightTitle>
          <CardsList>
            {oddCards.map((card, i) => (
              <div key={i}>
                <OddCard {...card} size={getCardSize()} />
              </div>
            ))}
          </CardsList>
        </WhiteCardContainer>
      </Container>

      <PlaygroundWidgets />
      <PlaygroundCollection />
    </PlaygroundWrapper>
  );
};

export default Playground;
