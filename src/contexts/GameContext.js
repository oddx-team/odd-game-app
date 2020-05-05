import React, { createContext, useReducer } from 'react';
import { gameReducer } from '../reducers/gameReducer';

export const GameContext = createContext();

const initialState = {
  globalChat: [],
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

export default GameContextProvider;
