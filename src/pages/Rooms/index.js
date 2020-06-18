import React, { useState, useEffect } from 'react'
import { useGame } from 'hooks'
import RoomTabs from './RoomTabs'
import RoomCard from './RoomCard'
import GlobalChat from './GlobalChat'
import Api from 'services'
import {
  PageRoomWrapper,
  OuterWrapper,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

const PageRooms = () => {
  const HookGame = useGame()
  const [activeTab, setActiveTab] = useState(0)
  const rooms = activeTab === 0 ? HookGame.enRooms : HookGame.vnRooms

  useEffect(() => {
    HookGame.setBanner(true)
    fetchRoomList()
  }, [])

  const fetchRoomList = async () => {
    const [eRooms, vRooms] = await Promise.all([Api.getEnglishRooms(), Api.getVietnameseRooms()])
    HookGame.updateRooms({ enRooms: eRooms, vnRooms: vRooms })
  }

  return (
    <PageRoomWrapper>
      <GlobalChat />

      <OuterWrapper>
        <RoomTabs switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />
        <Container>
          <Title>Game rooms</Title>
          <Subtitle>Select any room:</Subtitle>
          <ButtonCreate className='block accent'>
            <i />
            <span>Create</span>
          </ButtonCreate>

          <RoomContainer>
            {rooms.map((room, i) => (
              <div key={i}>
                <RoomCard {...room} />
              </div>
            ))}
            {rooms.length === 0 && <h4 style={{ marginTop: '10px' }}>No room available at the moment.</h4>}
          </RoomContainer>
        </Container>
      </OuterWrapper>
    </PageRoomWrapper>
  )
}

export default PageRooms
