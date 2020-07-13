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
  const [eRooms, setERooms] = useState([])
  const [vRooms, setVRooms] = useState([])
  const rooms = activeTab === 0 ? eRooms : vRooms

  useEffect(() => {
    setBanner(true)

    const fetchData = async () => {
      setLoading(true)
      const [eRooms, vRooms] = await Promise.all([Api.getGlobalRooms(), Api.getVnRooms()])

      setERooms(eRooms)
      setVRooms(vRooms)
      setLoading(false)
    }
    fetchData()
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
              <ButtonCreate
                className='block accent'
                onClick={() => openModal('create')}
              >
                <i />
                <span>Create</span>
              </ButtonCreate>

              <RoomContainer>
                {rooms.map((room, i) => (
                  <div key={i}>
                    <CardRoom {...room} />
                  </div>
                ))}
                {rooms.length === 0 && <h4 style={{ marginTop: '10px' }}>No room available at the moment.</h4>}
              </RoomContainer>
            </Container>
          </OuterWrapper>
        )}
    </PageRoomWrapper>
  )
}
