import React from 'react';
import './App.scss';
import PanelLogin from './components/panels/PanelLogin';

function App() {
  return (
    <div id='app'>
      <div className='main'>
        <PanelLogin />
      </div>
    </div>
  );
}

export default App;
