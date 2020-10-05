import React from 'react'
import styled from 'styled-components/macro'
import { sizes } from 'shared/utils/styles'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from 'shared/components/Header'
import { Loading } from 'shared/components/Loading'
import { Toast } from 'shared/components/Toast'
import { Popups } from 'shared/components/Popups'
import { Sidebar } from 'pages/Sidebar'
import { PageLanding } from 'pages/Landing'
import { PageGameRooms } from 'pages/GameRooms'
import { PageNotFound } from 'pages/NotFound'
import { PagePlayground } from 'pages/Playground'
import { PageViewCards } from 'pages/ViewCards'
import { PageGameSettings } from 'pages/GameSettings'

import GameContextProvider, { useGameState } from 'contexts/GameContext.js'
import ModalContextProvider from 'contexts/ModalContext.js'
import PlayContextProvider from 'contexts/PlayContext.js'
import SocketContextProvider from 'contexts/SocketContext.js'
import 'styles/global.scss'
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
                    <Switch>
                      <Route exact path='/' component={PageLanding} />
                      <PrivateRoute exact path='/rooms' component={PageGameRooms} />
                      <PrivateRoute exact path='/rooms/:slug' component={PagePlayground} />
                      <PrivateRoute exact path='/view-cards' component={PageViewCards} />
                      <PrivateRoute exact path='/settings' component={PageGameSettings} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </MainContent>
                  <Loading />
                  <Toast />
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
  const { fullSidebar, isLoggedIn } = useGameState()

  return (
    <Container openSidebar={fullSidebar} showSidebar={isLoggedIn}>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 
    ${props => props.openSidebar
    ? sizes.sizeBarWidthOpen - 0.05
    : sizes.sizeBarWidth - 0.05}rem;
  padding-left: ${props => !props.showSidebar && 0}rem;
  transition: padding-left 0.35s;

  ${Wrapper} {
    transition: all 0.3s;
    background: #F1F2F5;
    padding-left: ${props => !props.showSidebar ? 0 : props.openSidebar ? 0.9 : 1.6}rem;
    overflow-y: auto;
    height: 100%;
  }
`

export default App
