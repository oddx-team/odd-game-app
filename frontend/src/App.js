import React from 'react';
import './App.scss';
import PanelYourAccount from './components/panels/PanelYourAccount';

function App() {
  return (
    <div id='app'>
      <div className='main'>
        <PanelYourAccount />
      </div>
    </div>
  );
}

export default App;
