import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PanelStart from './components/panels/PanelStart';
import PageNotFound from 'components/PageNotFound';
import GameBanner from 'components/GameBanner';
import RoomList from 'components/RoomList.js';
import Playground from 'components/Playground.js';

import GameContextProvider from './contexts/GameContext.js';
import 'App.scss';

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <div id="app">
          <div className="header-bg" />
          <div className="main">
            <GameBanner />
            <Switch>
              <Route exact path="/" component={PanelStart} />
              <Route exact path="/rooms" component={RoomList} />
              <Route exact path="/play" component={Playground} />

              {/* Default case: page not found */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
