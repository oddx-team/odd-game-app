import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global.scss'

ReactDOM.render(<App />, document.getElementById('root'), () => {
  document.getElementsByClassName('pre-overlay')[0].remove()
})
