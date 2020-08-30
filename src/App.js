import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from 'shared/components/Header'
import { Loading } from 'shared/components/Loading'
import { Popups } from 'shared/components/Popups'
import { PageLanding } from 'pages/landing'
import { PageGameRooms } from 'pages/game-rooms'
import { PageNotFound } from 'pages/not-found'
import { PagePlayground } from 'pages/playground'
import { PageViewCards } from 'pages/view-cards'

import GameContextProvider, { useGameContext } from 'shared/contexts/GameContext.js'
import ModalContextProvider from 'shared/contexts/ModalContext.js'
import PlayContextProvider from 'shared/contexts/PlayContext.js'
import SocketContextProvider from 'shared/contexts/SocketContext.js'
import 'App.scss'

const PrivateRoute = ({ component: Component, ...options }) => {
  const { isLoggedIn } = useGameContext()

  switch (isLoggedIn) {
    case true:
      return <Route {...options} component={Component} />
    case false:
      return <Redirect to='/' />
    default:
      return <Loading />
  }
}

const App = () => {
  return (
    <SocketContextProvider>
      <GameContextProvider>
        <ModalContextProvider>
          <PlayContextProvider>
            <BrowserRouter>
              <div id='app'>
                <div className='header-bg' />
                <div className='main'>
                  <Header />
                  <Loading />
                  <Popups />
                  <Switch>
                    <Route exact path='/' component={PageLanding} />
                    <PrivateRoute exact path='/rooms' component={PageGameRooms} />
                    <PrivateRoute exact path='/rooms/:slug' component={PagePlayground} />
                    <PrivateRoute exact path='/view-cards' component={PageViewCards} />
                    <Route component={PageNotFound} />
                  </Switch>
                </div>
              </div>
            </BrowserRouter>
          </PlayContextProvider>
        </ModalContextProvider>
      </GameContextProvider>
    </SocketContextProvider>
  )
}

export default App
