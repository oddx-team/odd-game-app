import React, { useState, useEffect } from 'react'
import { useModalActions } from 'contexts/ModalContext'
import { CardRoom } from 'shared/components/CardRoom'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import {
  StyledGameRooms,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

import Api from 'services'
import { useGameActions } from 'contexts/GameContext'

export const PageGameRooms = () => {
  const { openModal } = useModalActions()
  const { setBanner, setGlobalLoading, quitCurrentRoom } = useGameActions()
  const [allRooms, setAllRooms] = useState({ eRooms: [], vRooms: [] })

  const currentRoomList = allRooms.eRooms

  useEffect(() => {
    (async () => {
      quitCurrentRoom()
      setBanner(true)
      setGlobalLoading(true)
      const [eRooms, vRooms] = await Promise.all([Api.getGlobalRooms(), Api.getVnRooms()])
      setAllRooms({ eRooms, vRooms })
      setGlobalLoading(false)
    })()
  }, [setBanner, setGlobalLoading, quitCurrentRoom])

  return (
    <StyledGameRooms>
      <Container>
        <Breadcrumbs items={['Oddx', 'Game rooms', 'Global server']} />
        <Title>Game rooms</Title>
        <Subtitle>Select any room:</Subtitle>
        <ButtonCreate
          variant='primary'
          icon='plus'
          iconSize={0.29}
          onClick={() => openModal('create')}
        >Create
        </ButtonCreate>

        <RoomContainer>
          {currentRoomList && currentRoomList.length
            ? currentRoomList.map((room, i) => (
              <div key={i}>
                <CardRoom {...room} />
              </div>))
            : <div>Loading rooms...</div>}
        </RoomContainer>
      </Container>
    </StyledGameRooms>
  )
}
