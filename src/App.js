import React from 'react'
import styled from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from 'shared/components/Header'
import { Loading } from 'shared/components/Loading'
import { Popups } from 'shared/components/Popups'
import { Sidebar } from 'pages/Sidebar'
import { PageLanding } from 'pages/Landing'
import { PageGameRooms } from 'pages/GameRooms'
import { PageNotFound } from 'pages/NotFound'
import { PagePlayground } from 'pages/Playground'
import { PageViewCards } from 'pages/ViewCards'

import GameContextProvider, { useGameState } from 'contexts/GameContext.js'
import ModalContextProvider from 'contexts/ModalContext.js'
import PlayContextProvider from 'contexts/PlayContext.js'
import SocketContextProvider from 'contexts/SocketContext.js'
import 'App.scss'

const PrivateRoute = ({ component: Component, ...options }) => {
  const { isLoggedIn } = useGameState()

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
                  <Sidebar />
                  <MainContent>
                    <Header />
                    <Switch>
                      <Route exact path='/' component={PageLanding} />
                      <PrivateRoute exact path='/rooms' component={PageGameRooms} />
                      <PrivateRoute exact path='/rooms/:slug' component={PagePlayground} />
                      <PrivateRoute exact path='/view-cards' component={PageViewCards} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </MainContent>
                  <Loading />
                  <Popups />
                </div>
              </div>
            </BrowserRouter>
          </PlayContextProvider>
        </ModalContextProvider>
      </GameContextProvider>
    </SocketContextProvider>
  )
}

const MainContent = ({ children }) => {
  const { fullSidebar } = useGameState()

  return (
    <Container openSidebar={fullSidebar}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 
    ${props => props.openSidebar
    ? sizes.sizeBarWidthOpen - 0.05
    : sizes.sizeBarWidth - 0.05}rem;
  transition: padding-left 0.35s;

  position: relative;
`

export default App
