import React from 'react'
import { Card } from 'shared/components/Card'
import { usePlayState, usePlayActions } from 'contexts/PlayContext'
import { CollectionWrapper, CollectionHeader, CollectionContent } from './styled'

export const PlaygroundCollection = ({ dealCard, selectDealCard }) => {
  const { collectionCardIds } = usePlayState()
  const { getCardById } = usePlayActions()

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
