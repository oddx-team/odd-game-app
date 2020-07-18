import React, { useState, useEffect } from 'react'
import { Card } from 'components/Card'
import { Loading } from 'components/Loading'
import { TabList } from './tab-list'
import { GlobalChat } from '../global-chat'
import {
  PageRoomWrapper,
  OuterWrapper,
  Container,
  CardContainer
} from './styled'

import Api from 'services'
import { useGameActionsContext } from 'contexts/GameContext'

export const PageViewCards = () => {
  const { setBanner } = useGameActionsContext()

  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(false)
  const [allCards, setAllCards] = useState({ eRooms: [], vRooms: [] })
  const currentCardList = allCards || []

  // fetch data
  useEffect(() => {
    (async () => {
      setBanner(true)
      setLoading(true)
      const cardData = await Api.getAllCards()
      setAllCards(cardData)
      setLoading(false)
    })()
  }, [setBanner])

  return (
    <PageRoomWrapper>
      <GlobalChat />

      {loading
        ? (<Loading />)
        : (
          <OuterWrapper>
            <TabList switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />
            <Container>
              <CardContainer>
                {currentCardList && currentCardList.length > 0
                  ? currentCardList.map((card, i) => (
                    <div key={i}>
                      <Card {...card} onClick={() => {}} />
                    </div>))
                  : <div style={{ marginTop: '10px' }}>No cards available.</div>}
              </CardContainer>
            </Container>
          </OuterWrapper>
        )}
    </PageRoomWrapper>
  )
}
