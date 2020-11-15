import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'shared/components/Card'
import { Icon } from 'shared/components/Icon'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { BaseLayout } from 'pages/BaseLayout'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { headerTitleUpdated } from 'features/gameSlice'
import { selectAllCards } from 'features/cardsSlice'

import {
  PlaygroundWrapper,
  Container,
  BlackCardContainer,
  WhiteCardContainer,
  ButtonConfirm,
  ButtonInvite,
  DropzoneTitle,
  DropzoneOddx,
  DropHereText,
  ImgCard,
  ImgSpaceship,
  CardsList,
  Text
} from './styled'

export const PagePlayground = () => {
  const dispatch = useDispatch()
  const allCards = useSelector(selectAllCards)

  const { slug } = useParams()
  const [dealCard, setDealCard] = useState(null)
  const [showFake, setShowFake] = useState(false)

  const playedCards = []
  const blackCard = {
    id: 10,
    text: 'Dolores Umbridge made it her mission at Hogwarts to crack down on ________.',
    color: 'black'
  }

  // -------- JOIN ROOM ------------
  useEffect(() => {
    dispatch(headerTitleUpdated('Playground'))
  }, [dispatch])

  // -------- DRAGGING FUNCTIONS ---------
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

  return (
    <BaseLayout>
      <PlaygroundWrapper>
        <div>
          <Breadcrumbs items={['Playground', slug]} />
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
                <DropzoneTitle>The white cards played this round:</DropzoneTitle>
                <ButtonInvite>
                  <Icon type='plus' size={0.23} top={0.01} />
                  <Text>Invite</Text>
                </ButtonInvite>

                {(!showFake || allCards.length > 0) &&
                  <DropzoneOddx>
                    <ImgCard />
                    <ImgSpaceship />
                    <DropHereText>Drop your cards here</DropHereText>
                  </DropzoneOddx>}

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
    </BaseLayout>
  )
}
