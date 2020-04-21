import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PanelYourAccount from './components/panels/PanelYourAccount';
import PageNotFound from './components/PageNotFound';
import GameBanner from './components/GameBanner';
import './App.scss';
import RoomList from './components/RoomList.js';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <GameBanner />

        <div className='main'>
          <Switch>
            <Route exact path='/' component={PanelYourAccount} />
            <Route exact path='/game' component={RoomList} />
            {/* Default case: page not found */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
