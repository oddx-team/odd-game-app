import React, { useState, useEffect } from 'react'
import { useGame, useModal } from 'hooks'
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

export const PageGameRooms = () => {
  const HookGame = useGame()
  const HookModal = useModal()
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(true)
  const rooms = activeTab === 0 ? HookGame.eRooms : HookGame.vRooms

  useEffect(() => {
    HookGame.clearRoom()
    HookGame.setBanner(true)

    const fetchData = async () => {
      setLoading(true)
      await HookGame.fetchAllRooms()
      setLoading(false)
    }
    fetchData()
  }, [])

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
              <ButtonCreate className='block accent' onClick={() => HookModal.openModal('create')}>
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
