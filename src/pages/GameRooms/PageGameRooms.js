import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardRoom } from 'shared/components/CardRoom'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { BaseLayout } from 'pages/BaseLayout'
import {
  StyledGameRooms,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

import { selectGlobalRooms, fetchRooms, exitRoom } from 'features/roomsSlice'
import { headerTitleUpdated } from 'features/gameSlice'

export const PageGameRooms = () => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.rooms.status)
  const roomsList = useSelector(selectGlobalRooms)

  useEffect(() => {
    dispatch(headerTitleUpdated('Game Rooms'))
    dispatch(exitRoom())
    if (status === 'idle') {
      dispatch(fetchRooms('en'))
    }
  }, [dispatch, status])

  return (
    <BaseLayout>
      <StyledGameRooms>
        <Container>
          <Breadcrumbs items={['Oddx', 'Game rooms', 'Global server']} />
          <Title>Game rooms</Title>
          <Subtitle>Select any room:</Subtitle>
          <ButtonCreate
            variant='primary'
            icon='plus'
            iconSize={0.29}
          >Create
          </ButtonCreate>

          <RoomContainer>
            {roomsList && roomsList.length
              ? roomsList.map((room, i) => (
                <div key={i}>
                  <CardRoom {...room} />
                </div>))
              : <div>Loading rooms...</div>}
          </RoomContainer>
        </Container>
      </StyledGameRooms>
    </BaseLayout>
  )
}
