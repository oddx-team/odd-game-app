import React, { useState, useEffect } from 'react'
import { usePlay, useGame } from 'hooks'
import { PlaygroundWidgets } from './widgets'
import { PlaygroundCollection } from './PlaygroundCollection'
import { Card } from 'components/Card'
import { Loading } from 'components/Loading'
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

export const PagePlayground = () => {
  const HookGame = useGame()
  const HookPlay = usePlay()
  const [loading, setLoading] = useState(false)
  const [blackCard, setBlackCard] = useState({})
  const [playedCards, setPlayedCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await Promise.all([
        HookGame.fetchAllCards(),
        HookPlay.joinRoom()
      ])
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const blackCard = HookGame.getCard(HookPlay.blackCard)
    const playedCards = HookPlay.playedCards.map(card => ({
      ...card,
      ...HookGame.getCard(card.id)
    }))

    setBlackCard(blackCard)
    setPlayedCards(playedCards)
  }, [HookPlay.blackCard, HookPlay.playedCards])

  return (
    <PlaygroundWrapper>
      {loading
        ? (<Loading />)
        : (
          <div>
            <Header>Select a card to play!</Header>
            <Container>
              <BlackCardContainer>
                <LeftTitle>*Black card:</LeftTitle>
                <Card color='black' text={blackCard.text} />
                <ButtonConfirm className='block dark-blue'>Confirm</ButtonConfirm>
              </BlackCardContainer>

              <WhiteCardContainer>
                <RightTitle>The white cards played this round:</RightTitle>
                <CardsList>
                  {playedCards.map((card, i) => (
                    <div key={i}>
                      <Card
                        {...card}
                        size={playedCards.length <= 4 ? 'medium' : 'small'}
                      />
                    </div>
                  ))}
                </CardsList>
              </WhiteCardContainer>
            </Container>

            <PlaygroundWidgets />
            <PlaygroundCollection />
          </div>
        )}

    </PlaygroundWrapper>
  )
}
