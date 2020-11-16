import React from 'react'
import { Card } from 'shared/components/Card'
import {
  CollectionWrapper,
  CollectionTitle,
  CollectionContent,
  CardWrapper,
  TopBar,
  LeftBar,
  CountDown,
  CardsImage
} from './styled'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import IconCards from 'assets/icon-cards.png'

export const PlaygroundCollection = ({ dealCard, selectDealCard }) => {
  const collectionCards = [
    {
      id: '1',
      text: 'Magical bondage.',
      color: 'white',
      language: 'en'
    },
    {
      id: '2',
      text: 'Getting a blowjob from the monster book of monsters.',
      color: 'white',
      language: 'en'
    },
    {
      id: '3',
      text: 'Using the Quibber as toilet paper.',
      color: 'white',
      language: 'en'
    },
    {
      id: '4',
      text: 'Hardcore BDSM in the Room of Requirement.',
      color: 'white',
      language: 'en'
    },
    {
      id: '5',
      text: 'Teaching wizards how to code.',
      color: 'white',
      language: 'en'
    },
    {
      id: '6',
      text: 'Ahihi',
      color: 'white',
      language: 'en'
    },
    {
      id: '7',
      text: 'Ahihi',
      color: 'white',
      language: 'en'
    }
  ]

  const getStyle = (style, snapshot) => {
    if (!snapshot.isDropAnimating) return style
    return {
      ...style,
      transitionDuration: '0.0001s'
    }
  }

  return (
    <CollectionWrapper>
      <TopBar />
      <LeftBar />
      <CountDown>Time: 06</CountDown>
      <CardsImage src={IconCards} />
      <CollectionTitle>Collection</CollectionTitle>

      <Droppable droppableId='card-collection' direction='horizontal'>
        {(provided, snapshot) => (
          <CollectionContent
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {collectionCards && collectionCards.map((card, i) => (
              <div key={card.id}>
                <Draggable draggableId={card.id} index={i}>
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
                        color={dealCard === card.id ? 'blue' : 'white'}
                        onClick={() => {
                          selectDealCard(card.id)
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
