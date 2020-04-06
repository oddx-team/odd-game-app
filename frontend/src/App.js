import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import PanelYourAccount from './components/panels/PanelYourAccount';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <div className='main'>
          <Switch>
            <Route exact path='/' component={PanelYourAccount} />
            {/* Default case: page not found */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
