import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PanelYourAccount from './components/panels/PanelYourAccount';
import PageNotFound from './components/PageNotFound';
import GameBanner from './components/GameBanner';
import RoomList from './components/RoomList.js';
import GameBoard from './components/GameBoard.js';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <GameBanner />

        <div className='main'>
          <Switch>
            <Route exact path='/' component={PanelYourAccount} />
            <Route exact path='/rooms' component={RoomList} />
            <Route exact path='/play' component={GameBoard} />
            {/* Default case: page not found */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
