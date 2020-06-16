import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'components/Header'
import PageLanding from './components/Page/Landing'
import PageNotFound from 'components/Page/NotFound'
import PageRooms from 'components/Page/Rooms'
import PagePlayground from 'components/Page/Playground'

import GameContextProvider, { GameContext } from 'contexts/GameContext.js'
import ModalContextProvider from 'contexts/ModalContext.js'
import 'App.scss'

const PrivateRoute = ({ component: Component, ...options }) => {
  const { state } = useContext(GameContext)

  if (state.isLoggedIn) {
    return <Component {...options} />
  } else {
    return <Redirect to='/' />
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
              <Switch>
                {/* <Redirect from='/' to='/home' /> */}
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
