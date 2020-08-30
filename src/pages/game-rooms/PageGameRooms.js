import React, { useState, useEffect } from 'react'
import { useModalActionsContext } from 'contexts/ModalContext'
import { CardRoom } from 'shared/components/CardRoom'
import { TabList } from './tab-list'
import { GlobalChat } from '../global-chat'
import {
  PageRoomWrapper,
  OuterWrapper,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

import Api from 'services'
import { useGameActionsContext } from 'contexts/GameContext'

export const PageGameRooms = () => {
  const { openModal } = useModalActionsContext()
  const { setBanner, setGlobalLoading, quitCurrentRoom } = useGameActionsContext()

  const [activeTab, setActiveTab] = useState(0)
  const [allRooms, setAllRooms] = useState({ eRooms: [], vRooms: [] })

  const currentRoomList = activeTab === 0
    ? allRooms.eRooms
    : allRooms.vRooms

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
    <PageRoomWrapper>
      <GlobalChat />

      <OuterWrapper>
        <TabList switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />
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
      </OuterWrapper>
    </PageRoomWrapper>
  )
}
