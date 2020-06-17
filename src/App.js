import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from 'components/Header'
import { Loading } from 'components/Loading'
import { Popups } from 'components/Popups'
import PageLanding from 'pages/Landing'
import PageNotFound from 'pages/NotFound'
import PageRooms from 'pages/Rooms'
import PagePlayground from 'pages/Playground'

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
                <PrivateRoute exact path='/rooms' component={PageRooms} />
                <PrivateRoute exact path='/play' component={PagePlayground} />
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
