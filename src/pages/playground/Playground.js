import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks/fetch'
import { usePlayActionsContext, usePlayContext } from 'contexts/PlayContext'
import { useGameActionsContext } from 'contexts/GameContext'
import { useModalActionsContext } from 'contexts/ModalContext'
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

import Api from 'services'
import utils from 'utils'

export const PagePlayground = (props) => {
  const [allCards, loading] = useFetch(Api.getAllCards)

  const [dealCard, setDealCard] = useState(null)
  const { roomId } = useParams()
  const { setError } = useModalActionsContext()
  const { setGlobalLoading } = useGameActionsContext()
  const { blackCardId, playedCardIds } = usePlayContext()
  const {
    setAllCards, getCardById,
    setPlaygroundData, confirmDealCard
  } = usePlayActionsContext()

  // Get necessary data
  const blackCard = getCardById(blackCardId)
  const playedCards = playedCardIds?.map(card => ({
    ...card,
    ...getCardById(card.id)
  }))

  useEffect(() => setGlobalLoading(loading), [loading, setGlobalLoading])
  useEffect(() => { if (allCards) setAllCards(allCards) }, [allCards, setAllCards])
  useEffect(() => {
    // join room
    (async () => {
      const data = await Api.joinRoom(utils.snakifyKeys({ operation: 'join_room', roomId }))
      const {
        mode,
        collectionCards: collectionCardIds,
        playedCards: playedCardIds,
        blackCard: blackCardId
      } = data
      setPlaygroundData(mode, collectionCardIds, playedCardIds, blackCardId)
    })()
  }, [setPlaygroundData, roomId])

  const confirmSelection = () => {
    if (!dealCard) {
      setError("You haven't selected any cards!!!")
    } else {
      confirmDealCard(dealCard)
      setDealCard(null)
    }
  }

  return (
    <PlaygroundWrapper>
      <div>
        <Header>Select a card to play!</Header>
        <Container>
          {blackCard &&
            <BlackCardContainer>
              <LeftTitle>*Black card:</LeftTitle>
              <Card
                color='black'
                size='large'
                text={blackCard.text} onClick={() => {}}
              />
              <ButtonConfirm className='block dark-blue' onClick={() => confirmSelection()}>
                  Confirm
              </ButtonConfirm>
            </BlackCardContainer>}

          <WhiteCardContainer>
            <RightTitle>The white cards played this round:</RightTitle>
            <CardsList>
              {playedCards && playedCards.map((card, i) => (
                <div key={i}>
                  <Card
                    {...card}
                    onClick={() => {}}
                    size={playedCards.length <= 4 ? 'medium' : 'small'}
                  />
                </div>
              ))}
            </CardsList>
          </WhiteCardContainer>
        </Container>

        <PlaygroundWidgets />
        <PlaygroundCollection
          dealCard={dealCard}
          selectDealCard={cardId => setDealCard(cardId)}
        />
      </div>
    </PlaygroundWrapper>
  )
}
