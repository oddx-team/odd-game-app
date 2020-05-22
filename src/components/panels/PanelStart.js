import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'contexts/GameContext';
import 'stylesheets/panels/PanelStart.scss';

const PanelStart = () => {
  const history = useHistory();
  const { dispatch } = useContext(GameContext);

  const startGame = () => {
    history.push('/rooms');
  };

  useEffect(() => {
    dispatch({
      type: 'SET_FULL_BANNER',
      fullBanner: false,
    });
  }, []);

  return (
    <div className="panel-start">
      <div className="logo" />
      <div className="extra">
        <div className="left" />
        <div className="right" />
      </div>

      <div className="panel-start-inner">
        <div className="title">Play now</div>
        <div className="name wrapper block">
          <input type="text" placeholder="Enter your name" onKeyDown={e => e.key === 'Enter' && startGame()} />
        </div>
        <button className="btn-start block blue" onClick={() => startGame()}>
          Start
        </button>
      </div>
    </div>
  );
};

export default PanelStart;
