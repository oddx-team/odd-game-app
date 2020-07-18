import React, { useState, useEffect } from 'react'
import { useModalActionsContext } from 'contexts/ModalContext'
import { CardRoom } from 'components/CardRoom'
import { Loading } from 'components/Loading'
import { TabList } from './tab-list'
import { GlobalChat } from './global-chat'
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
  const { setBanner } = useGameActionsContext()

  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(true)
  const [allRooms, setAllRooms] = useState({ eRooms: [], vRooms: [] })

  const currentRoomList = activeTab === 0
    ? allRooms.eRooms
    : allRooms.vRooms

  // fetch data
  useEffect(() => {
    (async () => {
      setBanner(true)
      setLoading(true)
      const [eRooms, vRooms] = await Promise.all([Api.getGlobalRooms(), Api.getVnRooms()])
      setAllRooms({ eRooms, vRooms })
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
              <Title>Game rooms</Title>
              <Subtitle>Select any room:</Subtitle>
              <ButtonCreate className='block accent' onClick={() => openModal('create')}>
                <i />
                <span>Create</span>
              </ButtonCreate>

              <RoomContainer>
                {currentRoomList && currentRoomList.length > 0
                  ? currentRoomList.map((room, i) => (
                    <div key={i}>
                      <CardRoom {...room} />
                    </div>))
                  : <div style={{ marginTop: '10px' }}>No rooms available at the moment.</div>}
              </RoomContainer>
            </Container>
          </OuterWrapper>
        )}
    </PageRoomWrapper>
  )
}
