import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks/fetch'
import { usePlayActions, usePlayState } from 'contexts/PlayContext'
import { useGameActions, useGameState } from 'contexts/GameContext'
import { useModalActions } from 'contexts/ModalContext'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'shared/components/Card'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { SocketContext } from 'contexts/SocketContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import {
  PlaygroundWrapper,
  Header,
  Container,
  BlackCardContainer,
  WhiteCardContainer,
  RightTitle,
  ButtonConfirm,
  CardsList
} from './styled'

import Api from 'services'

export const PagePlayground = () => {
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const { fullSidebar } = useGameState()
  const [allCards, loading] = useFetch(Api.getAllCards)
  const [dealCard, setDealCard] = useState(null)
  const [cardClosed, setCardClosed] = useState(true)
  const [showFake, setShowFake] = useState(false)

  const { blackCardId, playedCardIds } = usePlayState()
  const { setError } = useModalActions()
  const { setGlobalLoading, setSidebar } = useGameActions()
  const {
    setAllCards, getCardById,
    setPlaygroundData, confirmDealCard
  } = usePlayActions()

  // Card data to display
  const blackCard = getCardById(blackCardId)
  const playedCards = playedCardIds?.map(card => ({
    ...card,
    ...getCardById(card.Id)
  }))

  const confirmSelection = () => {
    if (!dealCard) {
      setError("You haven't selected any cards!!!")
    } else {
      confirmDealCard(dealCard)
      setDealCard(null)
    }
  }

  const onDragUpdate = (update) => {
    setShowFake(true)
  }

  const onDragEnd = (result) => {
    setShowFake(false)
    const { source, destination } = result
    if (!destination) return
    if (source.droppableId === destination.droppableId) return

    const movedCard = result.draggableId
    confirmDealCard(movedCard)
  }

  useEffect(() => {
    setCardClosed(true)
    setSidebar(false)
  }, [setSidebar])

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
  }, [setPlaygroundData, slug, socket])

  return (
    <PlaygroundWrapper openSidebar={fullSidebar}>
      <div>
        <Breadcrumbs items={['Oddx', 'Playground', slug]} />
        <Header>Select a card to play!</Header>
        <Container>
          <BlackCardContainer>
            {blackCard
              ? <Card color='black' size='large' {...blackCard} onClick={() => {}} />
              : <Card color='black' size='large' text='Loading...' />}

            <ButtonConfirm
              variant='primary'
              icon='plus'
              iconSize={0.29}
              onClick={confirmSelection}
            >Confirm
            </ButtonConfirm>
          </BlackCardContainer>

          <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <WhiteCardContainer>
              <RightTitle>The white cards played this round:</RightTitle>
              <Droppable droppableId='card-play' direction='horizontal'>
                {(provided, snapshot) => (
                  <CardsList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {playedCards && playedCards.map((card, i) => (
                      <div key={card.Id}>
                        <Draggable
                          draggableId={card.Id}
                          index={i}
                          isDragDisabled
                        >
                          {(cardProvided) => (
                            <div
                              ref={cardProvided.innerRef}
                              {...cardProvided.draggableProps}
                              {...cardProvided.dragHandleProps}
                              style={{}}
                            >
                              <Card
                                {...card}
                                color='white'
                                onClick={() => {}}
                                size={playedCards.length <= 3 ? 'medium' : 'small'}
                                closed={cardClosed}
                              />
                            </div>
                          )}
                        </Draggable>
                      </div>
                    ))}
                    <Card
                      isFake
                      showFake={showFake}
                      color='white'
                      onClick={() => {}}
                      size={playedCards.length <= 3 ? 'medium' : 'small'}
                    />
                    <span style={{ display: 'none' }}>
                      {provided.placeholder}
                    </span>
                  </CardsList>
                )}
              </Droppable>
            </WhiteCardContainer>

            <PlaygroundCollection
              dealCard={dealCard}
              selectDealCard={cardId => setDealCard(cardId)}
            />
          </DragDropContext>
        </Container>
      </div>
    </PlaygroundWrapper>
  )
}
