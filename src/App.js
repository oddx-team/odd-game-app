import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from 'shared/components/Header'
import { Loading } from 'shared/components/Loading'
import { Toast } from 'shared/components/Toast'
import { Sidebar } from 'pages/Sidebar'
import { PageLanding } from 'pages/Landing'
import { PageGameRooms } from 'pages/GameRooms'
import { PageNotFound } from 'pages/NotFound'
import { PagePlayground } from 'pages/Playground'
import { PageViewCards } from 'pages/ViewCards'
import { PageGameSettings } from 'pages/GameSettings'
import { PageRotation } from 'pages/Rotation'

import { selectAuth } from 'features/gameSlice'
import 'styles/global.scss'
import 'App.scss'

const PrivateRoute = ({ component: Component, ...options }) => {
  const isLoggedIn = useSelector(selectAuth)

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
    <BrowserRouter>
      <div id='app'>
        <PageRotation />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={PageLanding} />
            <div className='layout'>
              <Header />
              <Sidebar />
              <div className='layout-content'>
                <PrivateRoute exact path='/rooms' component={PageGameRooms} />
                <PrivateRoute exact path='/rooms/:slug' component={PagePlayground} />
                <PrivateRoute exact path='/view-cards' component={PageViewCards} />
                <PrivateRoute exact path='/settings' component={PageGameSettings} />
              </div>
            </div>
            <Route component={PageNotFound} />
          </Switch>
          <Loading />
          <Toast />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
