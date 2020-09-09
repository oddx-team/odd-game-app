import React, { useEffect } from 'react'
import { useFetch } from 'hooks/fetch'
import { useGameActions } from 'contexts/GameContext'
import { Card } from 'shared/components/Card'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { PageRoomWrapper, Container, CardContainer } from './styled'

import Api from 'services'

export const PageViewCards = () => {
  const [allCards, loading] = useFetch(Api.getAllCards)
  const { setBanner, setGlobalLoading } = useGameActions()

  useEffect(() => setGlobalLoading(loading), [loading, setGlobalLoading])
  useEffect(() => setBanner(true), [setBanner])

  return (
    <PageRoomWrapper>
      <Container>
        <Breadcrumbs items={['Oddx', 'View cards', 'EN']} />
        <CardContainer>
          {allCards && allCards.length ? (
            allCards.slice(0, 15).map((card, i) => (
              <div key={i}>
                <Card {...card} size='large' />
              </div>
            ))
          ) : (
            <div>Loading cards...</div>
          )}
        </CardContainer>
      </Container>
    </PageRoomWrapper>
  )
}
