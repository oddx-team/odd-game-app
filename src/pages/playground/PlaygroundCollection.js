import React, { useState, useEffect } from 'react'
import { useGame, usePlay } from 'hooks'
import { Card } from 'components/Card'
import styled from 'styled-components/macro'

export const PlaygroundCollection = () => {
  const HookPlay = usePlay()
  const HookGame = useGame()
  const [selectedCard, setSelectedCard] = useState(null)
  const [collectionCards, setCollectionCards] = useState([])

  useEffect(() => {
    const collectionCards = HookPlay.collectionCards.map(id => ({
      ...HookGame.getCard(id)
    }))

    setCollectionCards(collectionCards)
  }, [HookPlay.collectionCards])

  return (
    <CollectionWrapper>
      <Header>Player Collection</Header>
      <Content>
        {collectionCards.map((card, i) => (
          <div key={i}>
            <Card
              {...card}
              size='small'
              color={selectedCard === i ? 'blue' : 'white'}
              onClick={() => setSelectedCard(i)}
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
