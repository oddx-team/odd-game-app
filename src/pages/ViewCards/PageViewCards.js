import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCards, fetchCards } from 'features/cardsSlice'
import { headerTitleUpdated } from 'features/gameSlice'
import { Card } from 'shared/components/Card'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { BaseLayout } from 'pages/BaseLayout'
import { PageRoomWrapper, Container, CardContainer } from './styled'

export const PageViewCards = () => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.cards.status)
  const allCards = useSelector(selectAllCards)

  useEffect(() => {
    dispatch(headerTitleUpdated('View cards'))
    if (status === 'idle') {
      dispatch(fetchCards())
    }
  }, [dispatch, status])

  return (
    <BaseLayout>
      <PageRoomWrapper>
        <Container>
          <Breadcrumbs items={['Oddx', 'View cards', 'EN']} />
          <CardContainer>
            {allCards && allCards.length ? (
              allCards.slice(0, 4).map((card, i) => (
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
    </BaseLayout>
  )
}
