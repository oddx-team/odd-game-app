import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import PageLanding from './components/Page/Landing'
import PageNotFound from 'components/Page/NotFound'
import PageRooms from 'components/Page/Rooms'
import PagePlayground from 'components/Page/Playground'

import GameContextProvider from 'contexts/GameContext.js'
import 'App.scss'

const App = () => {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <div id='app'>
          <div className='header-bg' />
          <div className='main'>
            <Header />
            <Switch>
              <Route exact path='/' component={PageLanding} />
              <Route exact path='/rooms' component={PageRooms} />
              <Route exact path='/play' component={PagePlayground} />

              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GameContextProvider>
  )
}

export default App
