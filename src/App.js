import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from 'components/Header'
import { Loading } from 'components/Loading'
import { Popups } from 'components/Popups'
import { PageLanding } from './pages/landing'
import { PageGameRooms } from './pages/game-rooms'
import { PageNotFound } from './pages/not-found'
import { PagePlayground } from './pages/playground'

import GameContextProvider, { GameContext } from 'contexts/GameContext.js'
import ModalContextProvider from 'contexts/ModalContext.js'
import 'App.scss'

const PrivateRoute = ({ component: Component, ...options }) => {
  const { state } = useContext(GameContext)

  switch (state.isLoggedIn) {
    case true:
      return <Component {...options} />
    case false:
      return <Redirect to='/' />
    default:
      return <Loading />
  }
}

const App = () => {
  return (
    <GameContextProvider>
      <ModalContextProvider>
        <BrowserRouter>
          <div id='app'>
            <div className='header-bg' />
            <div className='main'>
              <Header />
              <Popups />
              <Switch>
                <Route exact path='/' component={PageLanding} />
                <PrivateRoute exact path='/rooms' component={PageGameRooms} />
                <PrivateRoute exact path='/rooms/:roomId' component={PagePlayground} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </ModalContextProvider>
    </GameContextProvider>
  )
}

export default App
