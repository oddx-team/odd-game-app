import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks/fetch'
import { usePlayActionsContext, usePlayContext } from 'contexts/PlayContext'
import { useGameActionsContext } from 'contexts/GameContext'
import { useModalActionsContext } from 'contexts/ModalContext'
import { PlaygroundWidgets } from './widgets'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'components/Card'
import { SocketContext } from 'contexts/SocketContext'

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
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const [allCards, loading] = useFetch(Api.getAllCards)
  const [dealCard, setDealCard] = useState(null)
  const [cardState, setCardState] = useState('closed')

  const { blackCardId, playedCardIds } = usePlayContext()
  const { setError } = useModalActionsContext()
  const { setGlobalLoading } = useGameActionsContext()
  const {
    setAllCards, getCardById,
    setPlaygroundData, confirmDealCard
  } = usePlayActionsContext()

  // Card data to display
  const blackCard = getCardById(blackCardId)
  const playedCards = playedCardIds?.map(card => ({
    ...card,
    ...getCardById(card.Id)
  }))

  useEffect(() => setGlobalLoading(loading), [loading, setGlobalLoading])
  useEffect(() => { if (allCards) setAllCards(allCards) }, [allCards, setAllCards])
  useEffect(() => {
    // join room
    (() => {
      window.socket = socket
      window.socket.emit('join-room', { operation: 'join', slug })
      window.socket.on(`session-${slug}`, (data) => {
        const {
          mode,
          roomInfo,
          collectionCards: collectionCardIds,
          playedCards: playedCardIds,
          blackCard: blackCardId
        } = data

        if (roomInfo.slug === slug) {
          setPlaygroundData(mode, collectionCardIds, playedCardIds, blackCardId)
        }
      })
    })()

    // return () => {
    //   window.socket.disconnect()
    //   window.socket.close()
    // }
  }, [setPlaygroundData, slug, socket])

  const confirmSelection = () => {
    if (!dealCard) {
      setError("You haven't selected any cards!!!")
    } else {
      confirmDealCard(dealCard)
      setDealCard(null)
    }
  }

  const revealCards = () => {
    if (cardState === 'closed') {
      setCardState('reveal')
    } else {
      setCardState('closed')
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
              <ButtonConfirm className='block dark-green' onClick={() => revealCards()}>
                  Toggle
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
                    closed={cardState}
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
