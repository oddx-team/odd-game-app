import React from 'react'
import { usePlayContext, usePlayActionsContext } from 'contexts/PlayContext'
import { Card } from 'components/Card'
import { CollectionWrapper, CollectionHeader, CollectionContent } from './styled'

export const PlaygroundCollection = ({ dealCard, selectDealCard }) => {
  const { collectionCardIds } = usePlayContext()
  const { getCardById } = usePlayActionsContext()

  const collectionCards = collectionCardIds?.map((cardId) => ({
    ...cardId,
    ...getCardById(cardId)
  }))

  return (
    <CollectionWrapper>
      <CollectionHeader>Player Collection</CollectionHeader>
      <CollectionContent>
        {collectionCards && collectionCards.map((card, i) => (
          <div key={i}>
            <Card
              {...card}
              size='small'
              color={dealCard === card.Id ? 'blue' : 'white'}
              onClick={() => {
                selectDealCard(card.Id)
              }}
            />
          </div>
        ))}
      </CollectionContent>
    </CollectionWrapper>
  )
}
