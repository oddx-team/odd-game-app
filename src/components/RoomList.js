import React, { useState, useContext, useEffect } from 'react';
import CssModules from 'react-css-modules';
import RoomListTab from './RoomListTab';
import CardRoom from './CardRoom';
import GlobalChat from './GlobalChat';
import styles from 'stylesheets/RoomList.module.scss';
import { GameContext } from 'contexts/GameContext';

import Api from 'services';

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
    <div styleName="room-list">
      <div styleName="room-list-inner">
        <RoomListTab switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />

        <div styleName="container">
          <div styleName="title">Game rooms</div>
          <div styleName="subtitle">Select any room:</div>
          <button styleName="btn-toggle" className="block accent">
            <span>Create</span>
          </button>

          <div styleName="rooms">
            {rooms.map((room, i) => (
              <div key={i}>
                <CardRoom {...room} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="room-list-chat">
        <GlobalChat />
      </div>
    </div>
  );
};

export default CssModules(RoomList, styles);
