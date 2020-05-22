import React, { createContext, useReducer } from 'react';
import { gameReducer } from '../reducers/gameReducer';
import PropTypes from 'prop-types';

export const GameContext = createContext();

const initialState = {
  globalChat: [],
  enRooms: [],
  vnRooms: [],
  cards: [],
  online: false,
  fullBanner: true,
  error: null,
};

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </GameContext.Provider>
  );
};

GameContextProvider.propTypes = {
  children: PropTypes.object,
};

export default GameContextProvider;
