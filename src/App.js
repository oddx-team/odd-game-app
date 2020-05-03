import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PanelStart from './components/panels/PanelStart';
import PageNotFound from 'components/PageNotFound';
import GameBanner from 'components/GameBanner';
import RoomList from 'components/RoomList.js';
import GameBoard from 'components/GameBoard.js';
import 'App.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div className="header-bg" />
        <div className="main">
          <GameBanner />
          <Switch>
            <Route exact path="/" component={PanelStart} />
            <Route exact path="/rooms" component={RoomList} />
            <Route exact path="/play" component={GameBoard} />
            {/* Default case: page not found */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
