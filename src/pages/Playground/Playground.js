import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'shared/components/Card'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { headerTitleUpdated } from 'features/gameSlice'
import { selectAllCards } from 'features/cardsSlice'

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

export const PagePlayground = () => {
  const dispatch = useDispatch()
  const allCards = useSelector(selectAllCards)

  console.log(allCards)

  const { slug } = useParams()
  const [dealCard, setDealCard] = useState(null)
  const [showFake, setShowFake] = useState(false)

  const playedCards = []
  const blackCard = null

  const onDragUpdate = (update) => {
    setShowFake(true)
  }

  const onDragEnd = (result) => {
    setShowFake(false)
    const { source, destination } = result
    if (!destination) return
    if (source.droppableId === destination.droppableId) return

    const movedCard = result.draggableId
    console.log(movedCard)
    // confirmDealCard(movedCard)
  }

  useEffect(() => {
    // join room
    dispatch(headerTitleUpdated('Playground'))
  }, [dispatch])

  return (
    <PlaygroundWrapper>
      <div>
        <Breadcrumbs items={['Oddx', 'Playground', slug]} />
        <Header>Select a card to play!</Header>
        <Container>
          <BlackCardContainer>
            {blackCard
              ? <Card color='black' size='large' {...blackCard} onClick={() => {}} />
              : <Card color='black' size='large' text='Loading..' />}

            <ButtonConfirm
              variant='primary'
              icon='plus'
              iconSize={0.29}
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
                                closed={false}
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
