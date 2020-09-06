import React from 'react'
import { Card } from 'shared/components/Card'
import { usePlayState, usePlayActions } from 'contexts/PlayContext'
import { CollectionWrapper, CollectionHeader, CollectionContent, CardWrapper } from './styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export const PlaygroundCollection = ({ dealCard, selectDealCard }) => {
  const { collectionCardIds } = usePlayState()
  const { getCardById } = usePlayActions()

  const collectionCards = collectionCardIds?.map((cardId) => ({
    ...cardId,
    ...getCardById(cardId)
  }))

  function getStyle (style, snapshot) {
    if (!snapshot.isDropAnimating) {
      return style
    }
    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: '0.01s'
    }
  }

  return (
    <CollectionWrapper>
      <CollectionHeader>Player Collection</CollectionHeader>
      <Droppable droppableId='card-collection' direction='horizontal' isDropDisabled>
        {(provided, snapshot) => (
          <CollectionContent
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {collectionCards && collectionCards.map((card, i) => (
              <div key={card.Id}>
                <Draggable draggableId={card.Id} index={i}>
                  {(cardProvided, cardSnapshot) => (
                    <CardWrapper
                      ref={cardProvided.innerRef}
                      {...cardProvided.draggableProps}
                      {...cardProvided.dragHandleProps}
                      isDragging={cardSnapshot.isDragging}
                      style={getStyle(cardProvided.draggableProps.style, cardSnapshot)}
                    >
                      <Card
                        {...card}
                        size='small'
                        color={dealCard === card.Id ? 'blue' : 'white'}
                        onClick={() => {
                          selectDealCard(card.Id)
                        }}
                      />
                    </CardWrapper>
                  )}
                </Draggable>
              </div>
            ))}
            {provided.placeholder}
          </CollectionContent>
        )}
      </Droppable>
    </CollectionWrapper>
  )
}
