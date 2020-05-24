import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from 'contexts/GameContext';
import RoomTabs from './RoomTabs';
import RoomCard from './RoomCard';
import GlobalChat from './GlobalChat';
import Api from 'services';
import { PageRoomWrapper, OuterWrapper, Container, Title, Subtitle, ButtonCreate, RoomContainer } from './styled';

const PageRooms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rooms, setRooms] = useState([]);
  const { state, dispatch } = useContext(GameContext);
  const { enRooms, vnRooms } = state;

  useEffect(() => setCurrentRooms(), [activeTab]);
  useEffect(() => {
    setFullBanner();
    fetchRoomList();
  }, []);

  const setFullBanner = () => {
    dispatch({
      type: 'SET_FULL_BANNER',
      fullBanner: true,
    });
  };

  const setCurrentRooms = () => {
    activeTab === 0 ? setRooms(enRooms) : setRooms(vnRooms);
  };

  const fetchRoomList = async () => {
    const [eRooms, vRooms] = await Promise.all([Api.getEnglishRooms(), Api.getVietnameseRooms()]);
    setRooms(eRooms);
    dispatch({
      type: 'UPDATE_ROOM_LIST',
      payload: {
        enRooms: eRooms,
        vnRooms: vRooms,
      },
    });
  };

  return (
    <PageRoomWrapper>
      <GlobalChat />

      <OuterWrapper>
        <RoomTabs switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />
        <Container>
          <Title>Game rooms</Title>
          <Subtitle>Select any room:</Subtitle>
          <ButtonCreate className="block accent">
            <i />
            <span>Create</span>
          </ButtonCreate>

          <RoomContainer>
            {rooms.map((room, i) => (
              <div key={i}>
                <RoomCard {...room} />
              </div>
            ))}
          </RoomContainer>
        </Container>
      </OuterWrapper>
    </PageRoomWrapper>
  );
};

export default PageRooms;
