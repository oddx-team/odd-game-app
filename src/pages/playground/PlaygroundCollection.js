import React from 'react'
import { usePlayContext, usePlayActionsContext } from 'contexts/PlayContext'
import { Card } from 'components/Card'
import styled from 'styled-components/macro'

export const PlaygroundCollection = ({ dealCard, selectDealCard }) => {
  const { collectionCardIds } = usePlayContext()
  const { getCardById } = usePlayActionsContext()

  const collectionCards = collectionCardIds?.map((cardId) => ({
    ...cardId,
    ...getCardById(cardId)
  }))

  return (
    <CollectionWrapper>
      <Header>Player Collection</Header>
      <Content>
        {collectionCards && collectionCards.map((card, i) => (
          <div key={i}>
            <Card
              {...card}
              size='small'
              color={dealCard === card.id ? 'blue' : 'white'}
              onClick={() => {
                selectDealCard(card.id)
              }}
            />
          </div>
        ))}
      </Content>
    </CollectionWrapper>
  )
}

export const CollectionWrapper = styled.div`
  width: 10.9rem;
  height: 1.85rem;
  background: #fff;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
`

export const Header = styled.div`
  color: #fff;
  font-size: 0.19rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #0277bd;
  height: 0.3rem;
  padding-top: 0.07rem;
  font-family: 'Shentox', sans-serif;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  justify-content: flex-start;
  overflow-y: auto;
  height: 1.55rem;
`
