import React, { useState, useEffect } from 'react'
import { usePlay, useFetch } from 'hooks'
import { PlaygroundWidgets } from './widgets'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'components/Card'
import { Loading } from 'components/Loading'
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

import Api from 'services'

export const PagePlayground = () => {
  const [allCards, loading] = useFetch(Api.getAllCards)
  const [blackCard, setBlackCard] = useState({})
  const [playedCards, setPlayedCards] = useState([])
  const { blackCardId, playedCardIds } = usePlay()

  const getCardById = (id) => {
    return allCards.find((card) => card.id === id)
  }

  useEffect(() => {
    if (allCards !== null && blackCardId != null && playedCardIds != null) {
      const blackCard = getCardById(blackCardId)
      const playedCards = playedCardIds.map(card => ({
        ...card,
        ...getCardById(card.id)
      }))

      setBlackCard(blackCard)
      setPlayedCards(playedCards)
    }
  }, [allCards, blackCardId, playedCardIds])

  return (
    <PlaygroundWrapper>
      {loading
        ? (<Loading />)
        : (
          <div>
            <Header>Select a card to play!</Header>
            <Container>
              <BlackCardContainer>
                <LeftTitle>*Black card:</LeftTitle>
                <Card color='black' text={blackCard.text} />
                <ButtonConfirm className='block dark-blue'>Confirm</ButtonConfirm>
              </BlackCardContainer>

              <WhiteCardContainer>
                <RightTitle>The white cards played this round:</RightTitle>
                <CardsList>
                  {playedCards.map((card, i) => (
                    <div key={i}>
                      <Card
                        {...card}
                        size={playedCards.length <= 4 ? 'medium' : 'small'}
                      />
                    </div>
                  ))}
                </CardsList>
              </WhiteCardContainer>
            </Container>

            <PlaygroundWidgets />
            <PlaygroundCollection allCards={allCards} />
          </div>
        )}

    </PlaygroundWrapper>
  )
}
