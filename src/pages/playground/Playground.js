import React from 'react'
// import { usePlay, useGame } from 'hooks'
import { PlaygroundWidgets } from './widgets'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'components/Card'
import {
  PlaygroundWrapper,
  Header,
  Container,
  BlackCardContainer,
  WhiteCardContainer,
  LeftTitle,
  RightTitle,
  ButtonConfirm,
  CardsList
} from './styled'

export const PagePlayground = () => {
  // const HookGame = useGame()
  // const HookPlay = usePlay()

  // const getCard = (idx) => {
  //   const { }
  // }

  const oddCards = Array(5)
    .fill(null)
    .map((_, i) => ({
      text: 'Donald Trump has nominated __ for his VP',
      color: 'white'
    }))

  const getCardSize = () => {
    return oddCards.length <= 4 ? 'medium' : 'small'
  }

  return (
    <PlaygroundWrapper>
      <Header>Select a card to play!</Header>
      <Container>
        <BlackCardContainer>
          <LeftTitle>*Black card:</LeftTitle>
          <Card color='black' text='Donald Trump has nominated __ for his VP' />
          <ButtonConfirm className='block dark-blue'>Confirm</ButtonConfirm>
        </BlackCardContainer>

        <WhiteCardContainer>
          <RightTitle>The white cards played this round:</RightTitle>
          <CardsList>
            {oddCards.map((card, i) => (
              <div key={i}>
                <Card {...card} size={getCardSize()} />
              </div>
            ))}
          </CardsList>
        </WhiteCardContainer>
      </Container>

      <PlaygroundWidgets />
      <PlaygroundCollection />
    </PlaygroundWrapper>
  )
}
