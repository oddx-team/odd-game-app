import React from 'react';
import { useHistory } from 'react-router-dom';
import BgLeft from 'cdn/assets/bg-extra-left.svg';
import BgRight from 'cdn/assets/bg-extra-right.svg';
import 'stylesheets/panels/PanelStart.scss';

const PanelStart = () => {
  const history = useHistory();

  const startGame = () => {
    history.push('/rooms');
  };

  return (
    <div className="panel-start">
      <div className="logo" />
      <div className="extra">
        <img alt={'BgLeft'} src={BgLeft} className="left" />
        <img alt={'BgRight'} src={BgRight} className="right" />
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
