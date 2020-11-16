import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { fetchUser } from './features/gameSlice'
import './styles/global.scss'

store.dispatch(fetchUser())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), () => {
    document.getElementsByClassName('pre-overlay')[0].remove()
  })
