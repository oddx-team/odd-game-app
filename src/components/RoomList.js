import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from 'contexts/GameContext';
import RoomListTab from './RoomListTab';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';
import IconPlay from 'cdn/assets/icon-play.png';
import Api from 'services';
import {
  RoomListWrapper,
  OuterWrapper,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer,
} from 'stylesheets/RoomList.style';

const RoomList = () => {
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
    <RoomListWrapper>
      <OuterWrapper>
        <RoomListTab switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />

        <Container>
          <Title>
            <div>Game rooms</div>
            <img alt={'icon'} src={IconPlay} />
          </Title>
          <Subtitle>Select any room:</Subtitle>
          <ButtonCreate className="block accent">Create</ButtonCreate>

          <RoomContainer>
            {rooms.map((room, i) => (
              <div key={i}>
                <CardRoom {...room} />
              </div>
            ))}
          </RoomContainer>
        </Container>
      </OuterWrapper>

      <GlobalChat />
    </RoomListWrapper>
  );
};

export default RoomList;
