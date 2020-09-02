import React, { useState, useEffect } from 'react'
import { useModalActions } from 'shared/contexts/ModalContext'
import { CardRoom } from 'shared/components/CardRoom'
import { Sidebar } from '../Sidebar'
import {
  StyledGameRooms,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

import Api from 'shared/services'
import { useGameActions } from 'shared/contexts/GameContext'

export const PageGameRooms = () => {
  const { openModal } = useModalActions()
  const { setBanner, setGlobalLoading, quitCurrentRoom } = useGameActions()
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
      <Sidebar />

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
            : <div>Loading rooms...</div>}
        </RoomContainer>
      </Container>
    </StyledGameRooms>
  )
}
