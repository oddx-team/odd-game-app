import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GameBoard from './components/GameBoard.js';
import PanelYourAccount from './components/panels/PanelYourAccount';
import PageNotFound from './components/PageNotFound';
import GameBanner from './components/GameBanner';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <GameBanner />

        <div className='main'>
          <Switch>
            <Route exact path='/' component={PanelYourAccount} />
            <Route exact path='/game' component={GameBoard} />
            {/* Default case: page not found */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
