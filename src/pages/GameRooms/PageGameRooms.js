import React, { useState, useEffect } from 'react'
import { useModalActionsContext } from 'shared/contexts/ModalContext'
import { CardRoom } from 'shared/components/CardRoom'
import {
  StyledGameRooms,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

import Api from 'shared/services'
import { useGameActionsContext } from 'shared/contexts/GameContext'

export const PageGameRooms = () => {
  const { openModal } = useModalActionsContext()
  const { setBanner, setGlobalLoading, quitCurrentRoom } = useGameActionsContext()
  const [allRooms, setAllRooms] = useState({ eRooms: [], vRooms: [] })

  const currentRoomList = allRooms.eRooms

  // fetch data
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
        <Title>Game rooms</Title>
        <Subtitle>Select any room:</Subtitle>
        <ButtonCreate className='block accent' onClick={() => openModal('create')}>
          <i />
          <span>Create</span>
        </ButtonCreate>

        <RoomContainer>
          {currentRoomList && currentRoomList.length
            ? currentRoomList.map((room, i) => (
              <div key={i}>
                <CardRoom {...room} />
              </div>))
            : <div>Loading rooms....</div>}
        </RoomContainer>
      </Container>
    </StyledGameRooms>
  )
}
